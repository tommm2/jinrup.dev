import Image from 'next/image';
import { ImageProps } from 'next/image';

interface CustomImageProps extends ImageProps {}

const CustomImage = (props: CustomImageProps) => {
	return (
		<Image
			{...props}
			className='rounded-lg'
			alt={props.alt}
			priority
		/>
	);
};

export default CustomImage;
