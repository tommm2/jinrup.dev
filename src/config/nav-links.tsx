import { FolderGit2, History, PenLine } from 'lucide-react';

const navLinks = [
	{
		title: 'blog',
		href: '/blog',
		icon: <PenLine className='size-4' />,
	},
	{
		title: 'projects',
		href: '/projects',
		icon: <FolderGit2 className='size-4' />,
	},
	{
		title: 'timeline',
		href: '/timeline',
		icon: <History className='size-4' />,
	},
];

export default navLinks;
