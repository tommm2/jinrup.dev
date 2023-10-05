import { RiFolder2Line, RiQuillPenLine, RiUser3Line } from 'react-icons/ri';

const navLinks = [
	{
		title: 'blog',
		href: '/blog',
		icon: <RiQuillPenLine />,
	},
	{
		title: 'projects',
		href: '/projects',
		icon: <RiFolder2Line />,
	},
	{
		title: 'about',
		href: '/about',
		icon: <RiUser3Line />,
	},
];

export default navLinks;
