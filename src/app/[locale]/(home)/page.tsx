import Hero from './hero';
import Posts from './posts';
import Projects from './projects';

const HomePage = () => {
	return (
		<div className='space-y-16'>
			<Hero />
			<Projects />
			<Posts />
		</div>
	);
};

export default HomePage;
