import {
	RiGithubFill,
	RiLinkedinBoxFill,
} from 'react-icons/ri';

import Link from '@/components/link';
import { siteConfig } from '@/config/site';

function Footer() {
	return (
		<footer className='px-8'>
			<div className='flex flex-col items-center gap-4 py-16'>
				<div className='text-sm'>
					© 2023 Tom Jin. All rights reserved.
				</div>
				<div className='flex items-center gap-2'>
					<Link
						className='transition-colors duration-300 hover:text-base-300/60'
						href={siteConfig.links.github}
						aria-label='github'
					>
						<RiGithubFill className='h-7 w-7' />
					</Link>
					<Link
						className='transition-colors duration-300 hover:text-base-300/60'
						href={siteConfig.links.linkedin}
						aria-label='linkedin'
					>
						<RiLinkedinBoxFill className='h-7 w-7' />
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
