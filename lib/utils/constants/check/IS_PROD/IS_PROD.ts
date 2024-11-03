const { NODE_ENV = 'production' } = process.env;

export const IS_PROD = NODE_ENV === 'production';
