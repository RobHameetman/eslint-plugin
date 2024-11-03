import { PACKAGE_JSON } from '@/utils/constants/imports/PACKAGE_JSON';

/**
 * Returns true if the given name is included as a dev dependency in the
 * project's package.json file.
 *
 * @deprecated - Replaced by hasDependency()
 *
 * @param name - The name of the dev dependency to check for.
 *
 * @returns A boolean which is true if the given name is included as a dev
 * dependency.
 */
export const devDependency = (name: string) =>
	Object.keys(PACKAGE_JSON?.devDependencies ?? {}).includes(name);
