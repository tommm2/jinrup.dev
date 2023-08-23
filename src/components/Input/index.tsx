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
				className='w-full rounded-md border border-base-300/60 bg-base-100/40 p-2 pl-8 text-sm outline-none ring-primary-400/10 placeholder:text-base-500 focus:!border-primary-400 focus:ring-4 dark:border-base-600/40 dark:bg-base-900/40 sm:w-[18.75rem]'
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
