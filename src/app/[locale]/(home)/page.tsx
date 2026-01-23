import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import GradientText from '@/components/ui/gradient-text';
import { siteConfig } from '@/config/site';

import GitHubStats from './_components/github-stats';
import LocationCard from './_components/location-card';
import SocialCard from './_components/social-card';
import TimeCard from './_components/time-card';

const HomePage = () => {
	const t = useTranslations('homePage');

	return (
		<>
			<div className='flex flex-col gap-6 md:max-w-2xl'>
				<div className='space-y-2'>
					<h1 className='animate-fade-in text-2xl font-bold'>
						Hi, I&apos;m{' '}
						<GradientText
							as='span'
							className='from-foreground to-foreground/60'
						>
							Tom Jin
						</GradientText>
					</h1>
					<p className='animate-fade-in animation-delay-1 text-muted-foreground'>
						{t('description')}
					</p>
				</div>
			</div>

			{/* Bento grid */}
			<div className='animate-fade-in mt-8 animation-delay-3 grid grid-cols-2 gap-4 auto-rows-[100px] md:grid-cols-3 md:grid-rows-4 md:h-[400px]'>
				<div className='relative col-span-1 row-span-3 overflow-hidden rounded-xl border border-border bg-muted md:col-span-1 md:row-span-4'>
					<Image
						className='size-full object-cover'
						src='/avatar.jpg'
						alt='Tom Jin'
						width={400}
						height={800}
						priority
					/>
					<div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
				</div>

				<div className='col-span-1 row-span-2 md:col-span-1 md:col-start-2 md:row-span-3'>
					<GitHubStats />
				</div>

				<div className='col-span-1 row-span-1 md:col-span-1 md:col-start-3 md:row-span-1'>
					<TimeCard />
				</div>

				<div className='col-span-2 row-span-1 grid grid-cols-2 gap-4 md:col-span-1 md:col-start-2 md:row-start-4'>
					<SocialCard
						href={siteConfig.links.github}
						icon={<Github />}
						label='GitHub'
						className='h-full bg-card hover:border-foreground/20'
						iconClassName='size-6'
					/>
					<SocialCard
						href={siteConfig.links.linkedin}
						icon={<Linkedin />}
						label='LinkedIn'
						className='h-full border-transparent bg-[#0A66C2] text-white hover:opacity-90'
						iconClassName='size-6 text-white'
					/>
				</div>

				<div className='col-span-2 row-span-2 md:col-span-1 md:col-start-3 md:row-start-2 md:row-span-3'>
					<LocationCard />
				</div>
			</div>
		</>
	);
};

export default HomePage;