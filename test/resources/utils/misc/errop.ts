export const $errop = () => (message = 'errop') => { throw new Error(message); };
export const errop = $errop();
export type errop = ReturnType<typeof $errop>;
