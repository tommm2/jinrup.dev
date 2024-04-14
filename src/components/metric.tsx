type MetricProps = {
	stat: number | undefined;
};

const Metric = ({ stat }: MetricProps) => {
	return (
		<span className='-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tracking-tight'>
			{stat?.toLocaleString()}
		</span>
	);
};

export default Metric;
