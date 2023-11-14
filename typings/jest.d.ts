declare namespace jest {
	interface Matchers<R, T = {}> {
		toFindViolations(min?: number): T;
		toHaveOverride(name: string): T;
		toHaveOverrides(amount?: number): T;
	}
}
