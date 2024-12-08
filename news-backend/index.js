import express from "express";
import cors from "cors";
import { newsArticles } from "./data.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// GET All News Articles
app.get("/api/news", (req, res) => {
	res.status(200).json(newsArticles);
});

// GET News Article by ID
app.get("/api/news/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const article = newsArticles.find((article) => article.id === id);

	if (article) {
		res.status(200).json(article);
	} else {
		res.status(404).json({ message: `Article with ID ${id} not found` });
	}
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
	console.log("Server started successfully"); 
});


