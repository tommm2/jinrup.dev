import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export const GET = async (req: NextRequest) => {
	const slug = req.nextUrl.searchParams.get('slug');

	if (!slug) {
		const allViews = await prisma.post.aggregate({
			_sum: {
				views: true,
			},
		});

		const data = allViews._sum.views ?? 0;

		return NextResponse.json(data);
	} else {
		const post = await prisma.post.findUnique({
			where: { slug },
		});

		if (!post) {
			return NextResponse.json(
				{ error: 'Post not found' },
				{ status: 404 }
			);
		}

		const data = post.views;

		return NextResponse.json(data);
	}
};

export const POST = async (req: NextRequest) => {
	const slug = req.nextUrl.searchParams.get('slug');

	if (!slug) {
		return NextResponse.json(
			{ error: 'Slug must be required' },
			{ status: 400 },
		);
	}

	const post = await prisma.post.upsert({
		where: { slug },
		create: { slug },
		update: { views: { increment: 1 } },
	});

	const data = post.views;

	return NextResponse.json(data);
};
