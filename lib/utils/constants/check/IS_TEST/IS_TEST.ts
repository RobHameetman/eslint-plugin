const { NODE_ENV = 'production' } = process.env;

export const IS_TEST = NODE_ENV === 'test';
