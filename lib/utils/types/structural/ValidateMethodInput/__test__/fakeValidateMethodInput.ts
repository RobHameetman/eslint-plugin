// import { fakeListenerTypeList } from '@type/misc/ListenerTypeList/__test__/fakeListenerTypeList';
// import { fakeValidationTask } from '@type/misc/ValidationTask/__test__/fakeValidationTask';
import { fakeListenerTypeList } from '../../../misc/ListenerTypeList/__test__/fakeListenerTypeList';
import { fakeValidationTask } from '../../../misc/ValidationTask/__test__/fakeValidationTask';

export const fakeValidateMethodInput = ({ ...overrideProps } = {}) => ({
	check: fakeListenerTypeList(),
	task: fakeValidationTask(),
	...overrideProps,
});
