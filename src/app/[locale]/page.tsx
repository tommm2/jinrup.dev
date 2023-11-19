import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import {
	RiArrowRightLine,
	RiAtLine,
	RiGithubFill,
	RiLinkedinBoxFill,
} from 'react-icons/ri';

import GradientText from '@/components/gradient-text';
import Link from '@/components/link';
import PostCard from '@/components/post-card';
import { siteConfig } from '@/config/site';

function HomePage() {
	const locale = useLocale();
	const t = useTranslations('homePage');
	const recentPosts = allPosts
		.filter((post) => post.language === locale)
		.sort((a, b) =>
			compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
		)
		.splice(0, 2);

	return (
		<>
			<div className='space-y-8'>
				<div className='flex items-center gap-4'>
					<Image
						className='animate-in rounded-full'
						src='/images/avatar.jpg'
						alt='avatar'
						width={85}
						height={85}
						priority
					/>
					<div
						className='animate-in'
						style={{ '--index': 1 } as React.CSSProperties}
					>
						<GradientText className='text-3xl font-bold tracking-tight'>
							Tom Jin
						</GradientText>
						<p className='text-base-300/80'>{t('subTitle')}</p>
					</div>
				</div>
				<div
					className='flex animate-in flex-wrap items-center gap-4'
					style={{ '--index': 2 } as React.CSSProperties}
				>
					<p>{t('description')}</p>
					<Link
						className='inline-flex items-center gap-2 rounded-md bg-base-800 px-2 py-1.5 text-sm font-medium duration-300 hover:opacity-70'
						aria-label='GitHub'
						title='GitHub'
						href={siteConfig.links.github}
					>
						<RiGithubFill className='h-6 w-6' />
						<span className='hidden sm:inline'>Github</span>
					</Link>
					<Link
						className='inline-flex items-center gap-2 rounded-md bg-primary-700/80 px-2 py-1.5 text-sm font-medium duration-300 hover:opacity-70'
						aria-label='Linkedin'
						title='Linkedin'
						href={siteConfig.links.linkedin}
					>
						<RiLinkedinBoxFill className='h-6 w-6' />
						<span className='hidden sm:inline'>Linkedin</span>
					</Link>
					<Link
						className='inline-flex items-center gap-2 rounded-md bg-rose-500/80 px-2 py-1.5 text-sm font-medium duration-300 hover:opacity-70'
						aria-label='Email'
						title='Email'
						href={`mailto:mail@${siteConfig.email}`}
					>
						<RiAtLine className='h-6 w-6' />
						<span className='hidden sm:inline'>Email</span>
					</Link>
				</div>
			</div>
			<div
				className='mt-16 animate-in'
				style={{ '--index': 3 } as React.CSSProperties}
			>
				<div className='flex items-center justify-between'>
					<GradientText className='text-xl font-bold'>
						Latest Posts
					</GradientText>
					<Link
						className='flex items-center gap-2 text-sm transition-opacity hover:opacity-70'
						href='/blog'
					>
						See More
						<RiArrowRightLine />
					</Link>
				</div>
				<div className='mt-6 flex flex-col gap-4'>
					{recentPosts.map((post) => (
						<PostCard
							key={post.slug}
							post={post}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default HomePage;
