import { Skeleton } from "@/components/ui/skeleton";

export default function NewsDetailLoading() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-2xl mx-auto">
				<Skeleton className="w-full h-[300px] md:h-[400px] mb-4 rounded-lg" />
				<Skeleton className="w-3/4 h-10 md:h-12 mb-4" />
				<Skeleton className="w-full h-36 md:h-48 mb-4" />
				<div className="flex justify-between">
					<Skeleton className="w-1/3 h-10" />
					<Skeleton className="w-1/3 h-10" />
				</div>
			</div>
		</div>
	);
}
