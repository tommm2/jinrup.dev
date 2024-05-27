import { useTranslations } from 'next-intl';

import { navLinks } from '@/config/nav-links';

import ActiveLink from './active-link';

const Nav = () => {
	const t = useTranslations('common');

	return (
		<nav>
			<ul className='hidden gap-1 md:flex'>
				{navLinks.map((item) => (
					<ActiveLink
						key={item.title}
						title={t(item.title)}
						href={item.href}
					/>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
