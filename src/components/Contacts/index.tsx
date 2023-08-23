import { RiGithubFill, RiLinkedinBoxLine, RiMailLine } from 'react-icons/ri';

const Contacts = () => {
	return (
		<div className='flex gap-4'>
			<a
				className='flex items-center space-x-1 transition-colors duration-200 hover:text-base-950 dark:hover:text-base-200'
				href='mailto:tom875694231@gmail.com'
				aria-label='mail'
			>
				<RiMailLine />
			</a>
			<a
				className='flex items-center space-x-1 transition-colors duration-200 hover:text-base-950 dark:hover:text-base-200'
				href='https://github.com/tommm2'
				target='_blank'
				rel='noopener noreferrer'
				aria-label='github'
			>
				<RiGithubFill />
			</a>
			<a
				className='flex items-center transition-colors duration-200 hover:text-base-950 dark:hover:text-base-200'
				href='https://www.linkedin.com/in/tomrup'
				target='_blank'
				rel='noopener noreferrer'
				aria-label='linkedin'
			>
				<RiLinkedinBoxLine />
			</a>
		</div>
	);
};

export default Contacts;
