import fs from 'fs';
import { promisify } from 'util';
import { Linter } from 'eslint';

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const eslint = new Linter({
	cwd: process.cwd(),
	configType: 'flat',
});

export const lint = async (path: string, config: Linter.FlatConfigArray): Promise<Record<string, unknown>> => {
	const files = await readdir(path);

	const result = await files.reduce(async (results, file) => ({
		...(await results),
		[file]: await (
			fs.statSync(`${path}/${file}`).isDirectory()
				? lint(`${path}/${file}`, config)
				: readFile(`${path}/${file}`, { encoding: 'utf-8' })
					.then((content) => eslint.verify(content, config, { filename: file }))),
	}), Promise.resolve({}));

	await Promise.all(Object.values(result));

	return result;
}

export const lintFixtureFile = async (config: Linter.FlatConfigArray) => {
	try {
		const fixturePath = process.env.PACKAGE_JSON
			? `${process.cwd()}/test/resources/fixtures/${process.env.PACKAGE_JSON.split('/').at(-2)}`
			: `${process.cwd()}/test/resources/fixtures/all`;

		const results = await lint(fixturePath, config);

		return { result: results, config, error: null };
	} catch (error) {
		return { result: null, config, error: error as Error };
	}
};
