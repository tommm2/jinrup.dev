import useSWR, { SWRConfiguration } from 'swr';

const API_URL = '/api/views';

const getPostViews = async (slug: string): Promise<number> => {
	const res = await fetch(API_URL + `?slug=${slug}`);

	if (!res.ok) {
		throw new Error('An error occurred while fetching the data.');
	}

	return res.json();
};

const updatePostViews = async (slug: string): Promise<number> => {
	const res = await fetch(API_URL + `?slug=${slug}`, { method: 'POST' });

	if (!res.ok) {
		throw new Error('An error occurred while posting the data.');
	}

	return res.json();
};

const usePostViews = (
	slug: string,
	config?: SWRConfiguration
) => {
	const {
		data: views,
		error,
		mutate,
	} = useSWR<number>([API_URL, slug], () => getPostViews(slug), {
		dedupingInterval: 60000,
		...config,
	});

	const increment = () => {
		mutate(updatePostViews(slug));
	};

	return {
		views,
		isLoading: !error && !views,
		isError: !!error,
		increment,
	};
};

export default usePostViews;
