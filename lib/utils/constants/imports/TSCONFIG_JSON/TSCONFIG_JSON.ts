const { TSCONFIG_JSON: TSCONFIG = `${process.cwd()}/tsconfig.json` } = process.env;

type TSConfigJson = typeof import('@/../tsconfig.json');

interface ImportedTSConfigJson {
	readonly default: TSConfigJson | null;
}

let importedModule: ImportedTSConfigJson = { default: null };

try {
	importedModule = await import(TSCONFIG);
} catch (error) {
	console.error(error);
}

export const TSCONFIG_JSON = importedModule.default;
