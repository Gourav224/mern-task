import { NewsArticle } from "@/types";
import axios from "axios";

const NEWS_API_BASE_URL = "http://localhost:5000/api/news";

export const fetchNews = async (): Promise<NewsArticle[]> => {
	try {
		const response = await axios.get(NEWS_API_BASE_URL);
		return response.data;
	} catch (error) {
		console.error("Error fetching news:", error);
		return [];
	}
};

export const fetchNewsById = async (
	id: number,
): Promise<NewsArticle | null> => {
	try {
		const response = await axios.get(`${NEWS_API_BASE_URL}/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching news with id ${id}:`, error);
		return null;
	}
};
