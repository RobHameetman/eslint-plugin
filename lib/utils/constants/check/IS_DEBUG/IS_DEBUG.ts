const { DEBUG = '' } = process.env;

export const IS_DEBUG =
	DEBUG.includes('eslint:code-path') ||
	DEBUG.includes('eslint:*') ||
	DEBUG === '*' ||
	DEBUG === 'true';
