import '@/styles/app.css';

type Props = {
	children: React.ReactNode;
};

function RootLayout({ children }: Props) {
	return children;
}

export default RootLayout;
