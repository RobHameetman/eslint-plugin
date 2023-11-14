import React, { FC } from 'react';

export interface TestComponentProps {
	text?: string;
}

export const TestComponent: FC<TestComponentProps> = ({ text = 'Test' }) => {
	return <div>{text}</div>;
};
