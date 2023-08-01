import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
	const slug = req.nextUrl.searchParams.get('slug');

	if (!slug) {
		const allViews = await prisma.post.aggregate({
			_sum: {
				views: true,
			},
		});

		return NextResponse.json({
			views: allViews._sum.views ?? 0,
		});
	}

	const post = await prisma.post.findUnique({
		where: { slug },
	});

	if (!post) {
		return NextResponse.json(
			{ error: 'Post not found' },
			{ status: 404 }
		);
	}

	return NextResponse.json({
		views: post.views,
	});
}

export async function POST(req: NextRequest) {
	const slug = req.nextUrl.searchParams.get('slug');

	if (!slug) {
		return NextResponse.json(
			{ error: 'Slug is required' },
			{ status: 400 },
		);
	}

	const newOrUpdatedView = await prisma.post.upsert({
		where: { slug },
		create: { slug },
		update: {
			views: {
				increment: 1,
			},
		},
	});

	return NextResponse.json({
		views: newOrUpdatedView.views,
	});
}
