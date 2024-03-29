import {
	RiGithubFill,
	RiLinkedinBoxFill,
	RiRssFill,
} from 'react-icons/ri';

import Link from '@/components/link';
import { siteConfig } from '@/config/site';

function Footer() {
	return (
		<footer className='layout'>
			<div className='flex flex-col items-center justify-between gap-4 py-16 sm:flex-row'>
				<div className='text-sm text-base-300/80'>
					© 2023 Tom Jin. All rights reserved.
				</div>
				<div className='flex items-center gap-2'>
					<Link
						className='transition-colors duration-300 hover:text-base-300/60'
						href={siteConfig.links.github}
						aria-label='github'
					>
						<RiGithubFill className='size-6' />
					</Link>
					<Link
						className='transition-colors duration-300 hover:text-base-300/60'
						href={siteConfig.links.linkedin}
						aria-label='linkedin'
					>
						<RiLinkedinBoxFill className='size-6' />
					</Link>
					<Link
						className='transition-colors duration-300 hover:text-base-300/60'
						href='/feed.xml'
						aria-label='RSS feed'
						target='_blank'
						rel='noopener noreferrer'
					>
						<RiRssFill className='size-6' />
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
