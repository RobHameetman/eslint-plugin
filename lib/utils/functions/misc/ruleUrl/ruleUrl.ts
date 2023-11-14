import { REPO_URL } from '@constants/REPO_URL';

const RULE_NAME_VALIDITY = /^([a-z](?![\d])|[\d](?![a-z]))+(-?([a-z](?![\d])|[\d](?![a-z])))*$|^$/;

/**
 * Returns the URL for the rule's documentation.
 *
 * @param name - The name of the custom rule.
 *
 * @returns The URL for the rule's README file or the repo url if no name is
 * provided.
 */
export const ruleUrl = (name: string) => {
	const nameIsEmpty = name === '';
	const nameIsCorrectlyFormatted = RULE_NAME_VALIDITY.test(name);
	const nameIsInvalid = nameIsEmpty || !nameIsCorrectlyFormatted;

	if (nameIsInvalid) {
		console.warn(
			nameIsEmpty
				? 'No name provided for ruleUrl()'
				: 'Name provided to ruleUrl() is not valid. Names must be kebab-case and may not contain any numbers.'
		);

		return REPO_URL;
	}

	return `${REPO_URL}/lib/rules/${name}`;
}
