import { USING_CYPRESS } from '@/utils/constants/deps/USING_CYPRESS';
import { USING_GRAPHQL } from '@/utils/constants/deps/USING_GRAPHQL';
import { USING_REACT } from '@/utils/constants/deps/USING_REACT';

export const IS_BROWSER = USING_CYPRESS || USING_GRAPHQL || USING_REACT;
