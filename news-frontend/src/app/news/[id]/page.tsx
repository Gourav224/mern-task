// app/news/[id]/page.tsx
import { Suspense } from "react";
import { fetchNewsById } from "@/services/api";
import { notFound } from "next/navigation";
import NewsDetailLoading from "./NewsDetailLoading";
import NewsDetailClient from "./NewsDetailClient";

export default async function NewsDetail({
	params,
}: {
	params: { id: string };
}) {
	try {
		const article = await fetchNewsById(Number(params.id));

		if (!article) {
			notFound();
		}

		return (
			<Suspense fallback={<NewsDetailLoading />}>
				<NewsDetailClient article={article} />
			</Suspense>
		);
	} catch (e) {
        console.error("Error fetching news detail:", e);
		notFound();
	}
}

export const generateMetadata = async ({
	params,
}: {
	params: { id: string };
}) => {
	const article = await fetchNewsById(Number(params.id));

	return {
		title: article?.title || "News Article",
		description: article?.description || "News article details",
		openGraph: {
			title: article?.title,
			description: article?.description,
			images: article?.image ? [{ url: article.image }] : [],
		},
	};
};
