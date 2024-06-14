import { validate } from 'jsonschema';
import type { FromSchema as SchemaOf, JSONSchema } from 'json-schema-to-ts';
import { isArray } from '@rob.hameetman/type-guards';

/**
 * Infer the type of the options object from the type inferred from schema
 * passed in to the `CustomESLintRule` constructor. This is actually a mapped
 * tuple type of type `T` where each element is a `JSONSchema` object. Using a
 * mapped tuple type allows us to infer the type of each element in the tuple
 * in the order they are defined in the schema.
 *
 * @typeParam T - [Optional] A schema for a custom rule. This is inferred from
 * the schema passed in to the `CustomESLintRule` constructor.
 */
export type FromSchema<T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>> = {
  [I in keyof T]: T[I] extends JSONSchema ? SchemaOf<T[I]> : never;
};

/**
 * Checks that an `unknown` value is {@link FromSchema}.
 *
 * Requirements:
 *   - `value` must be a function which returns an object.
 *
 * @typeParam T - [Optional] A schema for a custom rule. This is inferred from
 * the schema passed in to the `CustomESLintRule` constructor.
 *
 * @param value - An `unknown` value.
 * @param schema - [Optional] A schema of type `T`. If provided,
 * `value` must return a `RuleListener` object when invoked with it.
 *
 * @returns The determination that `value` is or is not {@link FromSchema}.
 */
export const isFromSchema = <T extends Readonly<[...Array<unknown>]> = Readonly<[...Array<never>]>>(
	value: unknown,
	schema?: T,
): value is FromSchema<T> =>
	/**
	 * value
	 */
	isArray(value) &&
	value.every((v, i) => schema
		? validate(v, schema[i]).valid
		: true);
