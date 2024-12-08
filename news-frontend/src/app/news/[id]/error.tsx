"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="container mx-auto px-4 py-8 text-center">
			<div className="max-w-md mx-auto bg-red-50 p-6 rounded-lg">
				<AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-500" />
				<h2 className="text-xl font-bold text-red-700 mb-4">
					Something went wrong!
				</h2>
				<p className="text-red-600 mb-6">
					{error.message ||
						"An unexpected error occurred while loading the article."}
				</p>
				<div className="flex justify-center space-x-4">
					<Button onClick={() => reset()} variant="destructive">
						Try Again
					</Button>
					<Button
						variant="outline"
						onClick={() => (window.location.href = "/")}
					>
						Back to Home
					</Button>
				</div>
			</div>
		</div>
	);
}
