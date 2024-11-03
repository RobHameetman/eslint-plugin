/* @ts-expect-error - Ambient module declaration cannot specify relative module name. */
declare module '/test/package.json' {
	export const name: string;
	export const version: string;
}
