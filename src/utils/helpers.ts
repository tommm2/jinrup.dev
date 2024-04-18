export const groupBy = <T>(
	list: T[],
	getKey: (item: T) => any
): Record<string, T[]> => {
	return list.reduce<Record<string, T[]>>((prev, curr) => {
		const groupKey = getKey(curr);
		const group = prev[groupKey] || [];

		group.push(curr);

		return { ...prev, [groupKey]: group };
	}, {});
};

export const pick = <T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> => {
	const ret: any = {};

	keys.forEach(key => {
		ret[key] = obj[key];
	});

	return ret;
};
