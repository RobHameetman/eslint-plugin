import fs from 'fs';
import { promisify } from 'util';
import { Linter } from 'eslint';

type Task<T = Record<string, unknown>> = () => Promise<T>;
type Tasks<T = Record<string, unknown>> = ReadonlyArray<Task<T>>;

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const eslint = new Linter({
	cwd: process.cwd(),
	configType: 'flat',
});

async function* files(dir: string): AsyncGenerator<string> {
	const contents = await readdir(dir, { withFileTypes: true });

	for (const item of contents) {
		const fullPath = `${dir}/${item.name}`;

		if (item.isDirectory()) {
			yield* files(fullPath);
		} else {
			yield fullPath;
		}
	}
};

const limit = (max: number) =>
	async <T>(tasks: Tasks<T>) => {
		const queue = new Set<Promise<T>>();
		const results = new Set<T>();

		tasks.forEach(async (task) => {
			const promise = task();

			queue.add(promise);

			promise
				.then((result) => {
					results.add(result);
					queue.delete(promise);
				})
				.catch(() =>
					queue.delete(promise)
				);

			if (queue.size >= max) {
				await Promise.race(queue);
			}
		});

		await Promise.all(queue);

		return Array.from(results);
	};

const execute = limit(10);

export const lint = async (path: string, config: Linter.FlatConfigArray) => {
	let tasks: Tasks = [];

	for await (const file of files(path)) {
		tasks = [...tasks, async () => ({
			[file]: eslint.verify(await readFile(file, 'utf-8'), config, { filename: file }),
		})];
	}

	const results = await execute(tasks);

	return results.reduce((acc, cur) => ({ ...acc, ...cur }), {});
};

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
