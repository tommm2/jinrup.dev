import { SVGProps } from 'react';

type LogoProps = SVGProps<SVGSVGElement>;

const Logo = (props: LogoProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 48 48'
			fill='currentColor'
			{...props}
		>
			<path d='M0 2C0 0.895432 1.07889 0 2.40977 0H45.5873C48.2297 0 48.9457 3.02004 46.5002 3.85091L26.6343 10.6006L3.25944 17.9103C1.68347 18.4031 0 17.4365 0 16.0387V2Z' />
			<path d='M15 20.4415C15 19.5807 15.5509 18.8164 16.3675 18.5442L30.3675 13.8775C31.6626 13.4458 33 14.4097 33 15.7749V46C33 47.1046 32.1046 48 31 48H17C15.8954 48 15 47.1046 15 46V20.4415Z' />
		</svg>
	);
};

export default Logo;
