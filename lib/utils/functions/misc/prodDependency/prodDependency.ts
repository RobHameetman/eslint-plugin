import { PACKAGE_JSON } from '@/utils/constants/imports/PACKAGE_JSON';

/**
 * Returns true if the given name is included as a dependency in the project's
 * package.json file.
 *
 * @deprecated - Replaced by hasDependency()
 *
 * @param name - The name of the dependency to check for.
 *
 * @returns A boolean which is true if the given name is included as a
 * dependency.
 */
export const prodDependency = (name: string) =>
	Object.keys(PACKAGE_JSON?.dependencies ?? {}).includes(name) ||
	Object.keys(PACKAGE_JSON?.peerDependencies ?? {}).includes(name) ||
	Object.keys(PACKAGE_JSON?.optionalDependencies ?? {}).includes(name) ||
	Object.keys(PACKAGE_JSON?.bundleDependencies ?? {}).includes(name);
