export function groupBy<T>(
	list: T[],
	getKey: (item: T) => any
) {
	return list.reduce<Record<string, T[]>>((prev, curr) => {
		const groupKey = getKey(curr);
		const group = prev[groupKey] || [];

		group.push(curr);

		return { ...prev, [groupKey]: group };
	}, {});
}
