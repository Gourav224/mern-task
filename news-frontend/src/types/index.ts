export interface NewsArticle {
	id: number;
	title: string;
	description: string;
	url: string;
	image: string;
	author?: string;
	publishedAt?: string;
}
