const { PACKAGE_JSON: PKG = `${process.cwd()}/package.json` } = process.env;

type PackageJson = typeof import('@/../package.json');

interface ImportedPackageJson {
	readonly default: PackageJson | null;
}

let importedModule: ImportedPackageJson = { default: null };

try {
	importedModule = await import(PKG);
} catch (error) {
	console.error(error);
}

export const PACKAGE_JSON = importedModule.default;
