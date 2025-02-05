import type { PageServerLoad } from './$types';

export const load = (({ cookies }) => {
	console.log(cookies);

	return {
		braveKey: 'brave!'
	};
}) satisfies PageServerLoad;