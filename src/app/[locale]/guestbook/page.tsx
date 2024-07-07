import { signIn, signOut , auth } from '@/lib/auth';

const GuestbookPage = async () => {
	const session = await auth();

	if (!session?.user) {
		return (
			<form
				action={async () => {
					'use server';
					await signIn('github');
				}}
			>
				<button type='submit'>Signin with GitHub</button>
			</form>
		);
	}

	return (
		<form
			action={async () => {
				'use server';
				await signOut();
			}}
		>
			<button type='submit'>Signout with GitHub</button>
		</form>
	);
};

export default GuestbookPage;
