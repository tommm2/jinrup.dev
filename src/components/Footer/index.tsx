import { navLinks, socials } from '@/data';

import Heading from '../Heading';
import CustomLink from '../Mdx/CustomLink';

const Footer = () => {
	return (
		<footer className='layout'>
			<div className='border-t border-base-200 py-8 dark:border-base-800'>
				<div className='grid grid-cols-3 gap-8'>
					<div className='text-muted'>
						<Heading
							className='mb-6 opacity-90'
							as='h4'
						>
							導覽
						</Heading>
						<ul className='space-y-4'>
							{navLinks.map((item, index) => (
								<li key={index}>
									<CustomLink href={item.href}>{item.title}</CustomLink>
								</li>
							))}
						</ul>
					</div>
					<div>
						<Heading
							className='mb-6 opacity-90'
							as='h4'
						>
							社群
						</Heading>
						<ul className='text-muted space-y-4'>
							{socials.map((item, index) => (
								<li key={index}>
									<CustomLink
										className='uppercase'
										href={item.href}
										aria-label={item.title}
									>
										{item.title}
									</CustomLink>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='text-muted pt-8 text-sm'>
					© 2023 Tom Jin. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
