import NextImage from 'next/image';
import { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends NextImageProps {}

const Image = (props: ImageProps) => {
	return (
		<NextImage
			{...props}
			className='rounded-lg'
			alt={props.alt}
			priority
		/>
	);
};

export default Image;
