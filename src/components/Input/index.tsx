import { FC, InputHTMLAttributes } from 'react';
import { RiSearch2Line } from 'react-icons/ri';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({
	placeholder,
	onChange,
}: InputProps) => {
	return (
		<div className='relative mb-8'>
			<RiSearch2Line className='absolute left-2 top-2 text-base-500' />
			<input
				className='overlay w-full rounded-md p-2 pl-8 text-sm outline-none ring-primary-400/10 placeholder:text-base-500 focus:border-primary-400 focus:ring-4 sm:w-[18.75rem]'
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
