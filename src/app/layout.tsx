import '@/styles/app.css';

type RootLayout = {
	children: React.ReactNode;
};

function RootLayout({ children }: RootLayout) {
	return children;
}

export default RootLayout;
