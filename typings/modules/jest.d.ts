declare namespace jest {
	interface AsymmetricMatchers {
    toAvoidRemovedRules(): void;
    toFindViolations(min?: number): void;
    toHaveConfig(config: string): void;
    toHavePlugin(plugin: string): void;
    toHaveRule(rule: string, value?: unknown): void;
  }

	interface Matchers<R, T = {}> {
		toAvoidRemovedRules(): T;
		toFindViolations(min?: number): T;
		toHaveConfig(config: string): T;
		toHavePlugin(plugin: string): T;
		toHaveRule(rule: string, value?: unknown): T;
	}
}
