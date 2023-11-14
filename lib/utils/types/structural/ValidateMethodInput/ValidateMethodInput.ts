import { isObject } from '@rob.hameetman/type-guards';
import { ListenerTypeList, isListenerTypeList } from '@type/misc/ListenerTypeList';
import { ValidationTask, isValidationTask } from '@type/misc/ValidationTask';

/**
 * A destructured input object for the `validate()` method on the
 * `CustomESLintRule` class.
 */
export interface ValidateMethodInput<T = never, U extends ListenerTypeList = ListenerTypeList> {
	/**
	 * An array of listener types to be evaluated by the task() callback.
	 */
	readonly check: U;

	/**
	 * A callback triggered by ESLint for the provided listener types. This
	 * function is basically where all the magic happens in your custom rule.
	 */
	readonly task: ValidationTask<T, U>;
}

/**
 * Checks that an `unknown` value is a {@link ValidateMethodInput}.
 *
 * Requirements:
 *   - `value` must be an object
 *   - `value.check` is required and must be a valid `ListenerTypeList`
 *   - `value.task` is required and must be a valid `ValidationTask`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ValidateMethodInput}.
 */
export const isValidateMethodInput = (value: unknown): value is ValidateMethodInput =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.check
	 */
	'check' in value &&
	isListenerTypeList(value.check) &&
	/**
	 * value.task
	 */
	'task' in value &&
	isValidationTask(value.task);
