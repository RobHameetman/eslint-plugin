declare namespace jest {
	interface AsymmetricMatchers {
    toAvoidRemovedRules(): void;
    toFindViolations(min?: number): void;
    toHaveOverride(name: string): void;
    toHaveOverrides(amount?: number): void;
  }

	interface Matchers<R, T = {}> {
		toAvoidRemovedRules(): T;
		toFindViolations(min?: number): T;
		toHaveOverride(name: string): T;
		toHaveOverrides(amount?: number): T;
	}
}
