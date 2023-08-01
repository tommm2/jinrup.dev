import { RiGithubFill, RiMailLine, RiLinkedinBoxLine } from 'react-icons/ri';

const Footer = () => {
	return (
		<footer className='layout mt-10'>
			<div className='flex flex-col items-center justify-between gap-4 border-t border-base-300/60 py-8 text-base-950/60 dark:border-base-800 dark:text-base-200/60 sm:flex-row'>
				<div className='text-sm'>
					© 2023 Tom Jin. All rights reserved.
				</div>
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
			</div>
		</footer>
	);
};

export default Footer;
