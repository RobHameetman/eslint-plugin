const { NODE_ENV = 'production' } = process.env;

export const IS_DEV = NODE_ENV === 'development';
