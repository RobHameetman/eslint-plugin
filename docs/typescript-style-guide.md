# TypeScript Style Guide

This is the canonical guide for how we write TypeScript. Follow it to produce
code that matches our conventions **whether or not any tooling is present to
enforce it** — the rules below are the standard, not a description of a linter.

Conventions marked **must** are non-negotiable. Conventions marked **prefer**
have narrow, justified exceptions noted inline.

---

## 1. Formatting

| Aspect | Rule |
| --- | --- |
| Indentation | **Tabs**, one tab per level (sized to 2 columns) |
| Quotes | Single quotes — `'value'` |
| Semicolons | Always terminate statements |
| Trailing commas | On every multi-line list, including the last function parameter |
| Arrow parens | Always — `(x) => x`, never `x => x` |
| Line length | Wrap at ~80 columns |
| Line endings | LF |
| End of file | One trailing newline |

> **Tabs, not spaces**, for code, JSON, TSX, CSS/SCSS, and GraphQL. (YAML and
> Markdown use spaces.) A tab is one logical indent the reader can size to taste.

### Braces, spacing, statements

- One True Brace Style; a single-line block body is fine
  (`if (x) { return; }`).
- **Always brace** control-flow bodies — every `if`/`else`/`for`/`while`, even
  one-liners.
- No space before the parens of a named or anonymous function; **one space**
  before the parens of an async arrow: `async (x) => …`.
- Use template literals for interpolation and composition — never build strings
  with `+`.

### Blank lines

Blank lines carry meaning; keep them consistent:

```ts
'use strict';

import { a } from 'a'; // imports grouped together, one blank line after the group
import { b } from 'b';

const x = 1; // a blank line follows a declaration block…
const y = 2; // …but consecutive declarations may sit together

const result = compute(x, y); // blank line around block-like statements

if (result) {
	doThing();
}

return result; // blank line before every return / break / continue
```

- Surround `interface` declarations and block statements with blank lines.
- Consecutive `type` aliases may sit together; an `interface` stands alone.
- No more than one consecutive blank line; none at the start of a file.

---

## 2. Naming

| Construct | Convention |
| --- | --- |
| Variables | `camelCase`, or `UPPER_CASE` for module-level constants |
| Parameters | `camelCase` |
| Functions & methods | `camelCase` |
| Types, classes, enums | `PascalCase` |
| Interfaces | `PascalCase`, **no `I` prefix** — write `User`, never `IUser` |
| Acronym constants | `UPPER_CASE` with underscores — `IS_DEV`, `API_BASE_URL` |

- A **leading underscore** marks a deliberately unused binding (see §5).
- Properties that **require quotes** (e.g. `'data-test-id'`, HTTP header keys)
  keep their literal form and are exempt from casing rules.
- Boolean-ish state reads naturally without redundant linking verbs where
  possible — prefer `open` over `isOpen`, `disabled` over `isDisabled` — though
  a transitive verb plus subject is fine when it's clearer (`displayCancelButton`).

---

## 3. Imports

### Ordering

Group imports in this order, **alphabetized within each group**, with **no
blank lines between groups**:

```
1. Node/runtime builtins
2. External packages
3. Internal modules (path-aliased, e.g. @/*)
4. Index imports
5. Sibling imports (./x)
6. Parent imports (../x)
7. Type-only imports
8. Object imports
9. Unresolved / asset imports
```

- Hoist framework and core utilities to the **top of the builtin group**:
  `react`, `react-dom`, `react-router`, `react-router-dom`, and `lodash`.
- Push stylesheet imports (`*.css`, `*.module.scss`) to the **very end**.

```ts
import { readFile } from 'node:fs/promises'; // builtin
import { z } from 'zod';                      // external
import { config } from '@/config';            // internal
import sibling from './sibling';              // sibling
import type { Opts } from './types';          // type-only
```

### Import hygiene

- **Imports come first** — before any other statement in the file.
- **Merge duplicate sources** into one statement, and inline type imports:
  prefer `import foo, { type Bar } from 'x'` over a separate `import type` line.
- Don't import a module's default as if it were a named export, and don't import
  from your own file.
- **Omit extensions** on code imports (`./user`, not `./user.ts`). **Include**
  them on asset imports — `.md`, `.mdx`, `.svg`, `.txt`.
- Avoid barrel files (re-export `index.ts`) — they defeat tree-shaking and
  invite circular dependencies. Import directly from the source module, using a
  path alias (`@/*`) where one is configured.

---

## 4. Exports

**Use named exports.** Default exports are reserved for the specific cases below.

```ts
// ✅ named
export const parseToken = (raw: string): Token => { /* … */ };

// ❌ default, outside the allowed cases
export default function parseToken() {}
```

- Never export an **anonymous** default (`export default {}` / `export default
  () => {}`).

Default exports **are** the convention in these cases:

| Case | Examples |
| --- | --- |
| Package/entry index | `index.ts` |
| Ambient type declarations | `*.d.ts` |
| Config files | `rollup.config.ts`, `webpack.config.js` |
| Shared module entry points | `shared/**` (excluding tests) |
| Micro-frontend remotes & lazy chunks | `*.remote.*`, `*.lazy.*`, `Lazy*.*`, `*Remote.*` |
| React components | `*.tsx` / `*.jsx` |

---

## 5. TypeScript semantics

Write for strict, type-aware code. Highlights and deliberate choices:

### Types and assertions

- **`Array<T>`**, not `T[]`. Likewise prefer `ReadonlyArray<T>` when mutation
  isn't needed.
- **Prefer `interface`** for object shapes. Reach for `type` only when you need
  a union, intersection, mapped, or conditional type an interface can't express.
- Use **`as`** for assertions, never the angle-bracket form (`<T>value`). Better
  still, narrow with a type guard rather than asserting.
- Use **`Record<K, V>`** instead of an index signature.
- **No non-null assertions** (`!`). Narrow with a guard instead.
- **Avoid `any`.** Prefer `unknown` and narrow. If you genuinely cannot type
  something, a `@ts-expect-error` with a reason beats `as any` — it's
  intentional and traceable.
- Prefer `as const`, `readonly`, optional chaining (`?.`), `.includes(...)`,
  and `String#startsWith`/`endsWith` over their manual equivalents.

> **`??` vs `||`:** choose by intent. Use `??` when you mean "null or
> undefined" and `||` when you mean "any falsy value." Don't mechanically prefer
> one over the other.

### Async and control flow

- A function that returns a `Promise` is declared `async`.
- `return await` inside a `try` block (for correct async stack traces).
- **Handle every union member** in a `switch` — model state with discriminated
  unions and exhaust them; don't lean on a `default` to absorb unknown cases.

### Unused bindings

Prefix intentionally unused bindings to signal intent:

```ts
arr.map((_value, index) => index);            // _value unused → leading underscore
try { risky(); } catch (ignoreParseError) {}  // caught-and-ignored → `ignore` prefix
```

### Logging

Avoid `console.log` / `console.debug` in committed code. `console.warn`,
`console.error`, and `console.info` are acceptable for genuine diagnostics.

---

## 6. JSX & React

Assume the modern JSX transform: **no `import React`** for JSX, and **no
`propTypes`** — type props with TypeScript. Components are `PascalCase` and live
in `.tsx` / `.jsx` files.

### Structure & punctuation

- Self-close empty elements — `<Foo />`, not `<Foo></Foo>`.
- Boolean props use shorthand — `<Foo disabled />`, not `<Foo disabled={true} />`.
- No braces around string literals or otherwise redundant expressions —
  `prop="x"`, not `prop={'x'}`.
- No stray spaces inside `{…}`, around `=`, or inside tag brackets.
- For multi-line elements, align the closing bracket with the opening line and
  wrap the element in parentheses.

### Props

- Up to **5 props on one line**; once the element wraps, **one prop per line**.
- Order props: `key` first, shorthand (valueless) props last. Otherwise keep a
  natural, meaningful order — **don't alphabetize**.
- Handler **functions** are prefixed `handle`; handler **props** are prefixed
  `on`:

  ```tsx
  const handleClick = () => {};
  return <Button onClick={handleClick} />;
  ```

- Guard against leaked renders — don't write `count && <List />` (a `0` leaks
  into the DOM); coerce to boolean or use a ternary.

### Test IDs

The canonical attribute is **`data-test-id`** (all lowercase, kebab-case). Never
use `data-testId`, `data-testID`, `data-test-Id`, or `data-test-ID`. Values use
underscore-delimited segments — `login_form`, `user_list_item`.

### Component naming

Within components, `PascalCase` is additionally allowed for variables and
members (component identifiers, styled components, etc.), alongside the
`camelCase` / `UPPER_CASE` rules of §2.

---

## 7. Writing tests

Test files (`*.spec.ts(x)` and files under `__test__/`) follow a **different**
standard: looser on structure, because mocks and stubs need freedom — but
**stricter on test discipline.**

### What relaxes in tests

- **Naming conventions don't apply.** Test doubles may mirror the symbols they
  replace — `Mock__optimizely_client`, `$_id_collection`, `test_list_of_ids`.
- **Empty functions, constructors, and interfaces are fine** — stubs and markers
  are expected: `const noop = () => {};`.
- **Bracket access is fine** for reaching internal/private members
  (`instance['privateField']`), as is prototype manipulation when faking host
  objects.
- Redundant fragments in render helpers are fine.

### Test-authoring discipline (additional rules)

Structure:

- Open every file with a top-level `describe`.
- Use **`it(...)`**, not `test(...)`.
- **Every `it` title begins with "should "** — `it('should reject an empty
  token', …)`.
- `describe` titles are lowercase (the top-level one is exempt).
- Setup goes inside hooks, not loose in the `describe` body.
- Use **`beforeEach` / `afterEach`** only — avoid `beforeAll` / `afterAll`, which
  imply shared mutable state across tests.
- Keep `describe` nesting shallow (≤ 5 levels); put hooks at the top of their
  block; no duplicate or identical titles.

Assertions:

- Every test contains at least one assertion; never assert conditionally or
  outside a test body.
- Reach for the **specific matcher**: `toBe`, `toContain`, `toHaveLength`,
  `resolves`/`rejects`, equality/comparison matchers, and `spyOn` over manual
  equivalents.

Safety nets — never commit:

- Focused tests (`it.only`, `describe.only`) or skipped/`x`-prefixed tests.
- Commented-out tests.
- Interpolation inside snapshots.

When using a DOM testing library, query through the `screen` object rather than
a render container, and key off `data-test-id`.

### End-to-end tests

End-to-end specs (e.g. `*.cy.ts` under `cypress/` or `e2e/`) are a separate
world with their own runner globals. Don't mix end-to-end and unit-test
assertions in the same file.

---

## Quick reference

```ts
// imports: builtin → external → internal → sibling → type; alphabetized; no gaps
import { readFile } from 'node:fs/promises';
import { z } from 'zod';
import { config } from '@/config';
import type { Token } from './types';

// named export, PascalCase interface (no `I` prefix), Array<T>, interface > type
export interface TokenSet {
	readonly tokens: Array<Token>;
}

// camelCase fn, single quotes, semicolons, template literals, braced bodies
export const formatToken = (token: Token): string => {
	if (!token.value) {
		throw new Error(`empty token: ${token.id}`);
	}

	return `${token.id}=${token.value}`;
};
```

```tsx
// .tsx: default export OK, self-closing, boolean shorthand, no-brace strings,
// handle*/on* handlers, data-test-id
const handleSubmit = () => {};

export default function LoginForm() {
	return <Form onSubmit={handleSubmit} disabled data-test-id="login_form" />;
}
```

```ts
// tests: free-form mock names, empty stubs OK; every title starts with "should "
describe('formatToken', () => {
	it('should throw on an empty value', () => {
		const Mock__token = { id: 'a', value: '' };

		expect(() => formatToken(Mock__token)).toThrow();
	});
});
```
