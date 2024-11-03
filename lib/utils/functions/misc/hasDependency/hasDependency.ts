import { PACKAGE_JSON } from '@/utils/constants/imports/PACKAGE_JSON';

/**
 * Returns true if the given name is included as a dev dependency in the
 * project's package.json file.
 *
 * @param name - The name of the dev dependency to check for.
 *
 * @returns A boolean which is true if the given name is included as a dev
 * dependency.
 */
export const hasDependency = (name: string) =>
	Object.keys(PACKAGE_JSON?.dependencies ?? {}).includes(name) ||
	Object.keys(PACKAGE_JSON?.devDependencies ?? {}).includes(name) ||
	Object.keys(PACKAGE_JSON?.optionalDependencies ?? {}).includes(name) ||
	Object.keys(PACKAGE_JSON?.peerDependencies ?? {}).includes(name);
