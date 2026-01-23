import Link from '@/components/ui/link';
import { cn } from '@/utils/cn';

type SocialCardProps = {
	href: string;
	icon: React.ReactNode;
	label: string;
	className?: string;
	iconClassName?: string;
};

const SocialCard = ({ href, icon, label, className }: SocialCardProps) => {
	return (
		<Link
			href={href}
			className={cn(
				'flex items-center justify-center rounded-xl border border-border p-2 transition-colors hover:bg-accent',
				className,
			)}
			aria-label={label}
		>
			{icon}
		</Link>
	);
};

export default SocialCard;
