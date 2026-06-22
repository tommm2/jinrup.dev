'use client';

import { useTheme } from 'next-themes';
import { MapPin } from 'lucide-react';
import type { COBEOptions } from 'cobe';

import { Globe } from '@/components/ui/globe';

const baseGlobeConfig: COBEOptions = {
	width: 800,
	height: 800,
	onRender: () => {},
	devicePixelRatio: 2,
	phi: 0,
	theta: 0.3,
	dark: 1.15,
	diffuse: 1.25,
	mapSamples: 16000,
	mapBrightness: 6,
	baseColor: [0.06, 0.09, 0.1],
	markerColor: [0.2, 1.0, 0.85],
	glowColor: [0.1, 0.7, 0.6],
	markers: [{ location: [23.6978, 120.9605], size: 0.1 }],
};

const lightGlobeConfig: COBEOptions = {
	...baseGlobeConfig,
	dark: 0,
	diffuse: 0.6,
	mapBrightness: 3,
	baseColor: [0.78, 0.74, 0.66],
	markerColor: [0.1, 0.7, 0.6],
	glowColor: [0.95, 0.92, 0.85],
};

const LocationCard = () => {
	const { resolvedTheme } = useTheme();
	const config =
		resolvedTheme === 'light' ? lightGlobeConfig : baseGlobeConfig;

	return (
		<div className='relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-4 md:p-6'>
			<div className='z-10 flex items-center gap-2 text-muted-foreground'>
				<MapPin className='size-4' />
				<span className='text-sm font-medium'>Taiwan</span>
			</div>

			<div className='absolute inset-0 top-10 flex items-end justify-center overflow-hidden rounded-b-xl'>
				<Globe
					className='top-24 md:top-28'
					config={config}
				/>
				<div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]' />
			</div>
		</div>
	);
};

export default LocationCard;
