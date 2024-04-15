import { RiGithubFill, RiLinkedinBoxFill, RiRssFill } from 'react-icons/ri';

import Link from '@/components/ui/link';
import { siteConfig } from '@/config/site';

const Footer = () => {
	return (
		<footer className='layout'>
			<div className='flex flex-col items-center justify-between gap-4 py-24 sm:flex-row'>
				<div className='text-sm text-foreground'>
					© 2024 Tom Jin. All rights reserved.
				</div>
				<div className='flex items-center gap-2'>
					<Link
						href={siteConfig.links.github}
						aria-label='github'
					>
						<RiGithubFill className='size-6' />
					</Link>
					<Link
						href={siteConfig.links.linkedin}
						aria-label='linkedin'
					>
						<RiLinkedinBoxFill className='size-6' />
					</Link>
					<Link
						href='/feed.xml'
						aria-label='RSS feed'
					>
						<RiRssFill className='size-6' />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
