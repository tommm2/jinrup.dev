import { SVGProps } from 'react';

type LogoProps = SVGProps<SVGSVGElement>;

function Logo(props: LogoProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 48 48'
			fill='currentCOlor'
			{...props}
		>
			<path
				d='M0 0H48L42.1182 5.37931H6.61707L0 0Z'
				fill='white'
			/>
			<path
				d='M7.5668 7.65519H22.9609V12.8276H1.76611L7.5668 7.65519Z'
				fill='white'
			/>
			<path
				d='M40.4901 7.65519H25.2469V12.8276H46.2339L40.4901 7.65519Z'
				fill='white'
			/>
			<path
				d='M16.7275 12.4138H22.9613V48H16.7275V12.4138Z'
				fill='white'
			/>
			<path
				d='M25.2466 12.4138H31.4803V48H25.2466V12.4138Z'
				fill='white'
			/>
		</svg>
	);
}

export default Logo;
