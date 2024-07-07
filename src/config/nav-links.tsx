import { RiGitRepositoryFill, RiQuillPenFill, RiUser3Fill, RiUser6Line } from 'react-icons/ri';

const navLinks = [
	{
		title: 'blog',
		href: '/blog',
		icon: <RiQuillPenFill />,
	},
	{
		title: 'projects',
		href: '/projects',
		icon: <RiGitRepositoryFill />,
	},
	{
		title: 'about',
		href: '/about',
		icon: <RiUser3Fill />,
	},
	{
		title: 'guestbook',
		href: '/guestbook',
		icon: <RiUser6Line />,
	},
];

export default navLinks;
