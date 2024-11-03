import { hasDependency } from '@/utils/functions/misc/hasDependency';

export const USING_SERVICE_WORKER = [
	'workbox-webpack-plugin',
	'serviceworker-webpack-plugin',
	'service-worker-mock',
].some(hasDependency);
