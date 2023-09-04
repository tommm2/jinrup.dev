import { RiFolder2Line, RiQuillPenLine, RiUser3Line } from 'react-icons/ri';

const navLinks = [
	{
		title: '部落格',
		href: '/blog',
		icon: <RiQuillPenLine />,
	},
	{
		title: '專案',
		href: '/projects',
		icon: <RiFolder2Line />,
	},
	{
		title: '關於',
		href: '/about',
		icon: <RiUser3Line />,
	},
];

export default navLinks;
