"use client";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { NewsArticle } from "@/types";
import { fetchNews } from "@/services/api";
import { NewsCard } from "@/components/NewsCard";

export default function Home() {
	const [news, setNews] = useState<NewsArticle[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadNews = async () => {
			try {
				const articles = await fetchNews();
				setNews(articles);
				setError(null);
			} catch (error) {
				console.error("Failed to load news", error);
				setError("Failed to load news. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		loadNews();
	}, []);

	if (loading) {
		return (
			<div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				{[...Array(10)].map((_, index) => (
					<Skeleton
						key={index}
						className="w-full h-[350px] rounded-lg"
					/>
				))}
			</div>
		);
	}

	if (error) {
		return (
			<div className="container mx-auto px-4 py-8 text-center">
				<p className="text-red-500 text-xl">{error}</p>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6 text-center sm:text-left">
				Latest News
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
				{news.length > 0 ? (
					news.map((article) => (
						<NewsCard key={article.id} article={article} />
					))
				) : (
					<div className="col-span-full text-center text-gray-500">
						No articles found
					</div>
				)}
			</div>
		</div>
	);
}

// components/NewsCard.tsx
