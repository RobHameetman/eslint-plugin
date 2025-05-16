import { PACKAGE_JSON_PATH as PKG } from '@/utils/constants/imports/PACKAGE_JSON_PATH';

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
