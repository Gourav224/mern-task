// app/news/[id]/NewsDetailClient.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";
import { NewsArticle } from "@/types";

export default function NewsDetailClient({
	article,
}: {
	article: NewsArticle;
}) {
	const formatDate = (dateString: string | number) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-2xl mx-auto">
				<div className="relative w-full h-[300px] md:h-[400px] mb-6">
					<Image
						src={article.image || "/placeholder-image.jpg"}
						alt={article.title}
						fill
						className="object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
						placeholder="blur"
						blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMCEcGxsbKDgnJy5CRDpLOTxCRkxFRldqZWlqeYR6e3+Ax+Dx/v/v8vv/8P/9/v9//f/+/f/bAEMBFRcXHhoeNBwcNL9JRzxBv7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v//AABEIAAUACgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlgAH/9k="
					/>
				</div>

				<h1 className="text-2xl md:text-3xl font-bold mb-4">
					{article.title}
				</h1>

				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
					<div className="flex items-center space-x-2 text-muted-foreground">
						<User className="h-4 w-4" />
						<span className="text-sm">
							{article.author || "Anonymous"}
						</span>
						<span className="mx-2 text-xs">•</span>
						<div className="flex items-center space-x-1">
							<Calendar className="h-4 w-4" />
							<span className="text-sm">
								{formatDate(article.publishedAt || Date.now())}
							</span>
						</div>
					</div>
				</div>

				<p className="text-base md:text-lg mb-6 leading-relaxed">
					{article.description}
				</p>

				<div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
					<Link href="/" className="w-full sm:w-auto">
						<Button variant="outline" className="w-full sm:w-auto">
							<ArrowLeft className="mr-2 h-4 w-4" /> Back to News
						</Button>
					</Link>
					<a
						href={article.url}
						target="_blank"
						rel="noopener noreferrer"
						className="w-full sm:w-auto"
					>
						<Button className="w-full sm:w-auto">
							Read Full Article{" "}
							<ExternalLink className="ml-2 h-4 w-4" />
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
}
