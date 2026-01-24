const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='layout text-sm text-muted-foreground py-12'>
			© {currentYear} Tom Jin. All rights reserved.
		</footer>
	);
};

export default Footer;
