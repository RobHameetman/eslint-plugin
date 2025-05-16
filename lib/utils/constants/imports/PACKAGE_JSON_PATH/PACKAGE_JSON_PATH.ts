/**
 * Note: made this its own thing to make testing the recommended config easier.
 */
export const { PACKAGE_JSON: PACKAGE_JSON_PATH = `${process.cwd()}/package.json` } = process.env;
