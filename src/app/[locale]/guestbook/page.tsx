import { signIn, signOut , auth } from '@/lib/auth';
import Image from 'next/image';

const GuestbookPage = async () => {
	const session = await auth();

	if (!session?.user) {
		return (
			<>
				<form
					action={async () => {
						'use server';
						await signIn('github');
					}}
				>
					<button type='submit'>Signin with GitHub</button>
				</form>
			</>
		);
	}

	return (
		<>
			<h1>Welcome {session.user.name}</h1>
			<Image width={60} height={60} alt='avatar' src={session.user.image as string} />
			<form
				action={async () => {
					'use server';
					await signOut();
				}}
			>
				<button type='submit'>Signout with GitHub</button>
			</form>
			<input type="text" placeholder='leave you message' />
		</>
	);
};

export default GuestbookPage;
