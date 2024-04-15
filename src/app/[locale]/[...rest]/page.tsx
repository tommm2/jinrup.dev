import { notFound } from 'next/navigation';

// Catching unknown routes
const CatchAllPage = () => {
	notFound();
};

export default CatchAllPage;
