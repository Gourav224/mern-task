
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NewsArticle } from "@/types";
import { Calendar, User } from "lucide-react";

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const formatDate = (dateString: string | number) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold line-clamp-2 min-h-[3rem]">
          {article.title}
        </CardTitle>
        <CardDescription className="flex items-center space-x-2 text-xs text-muted-foreground">
          <User className="h-4 w-4" />
          <span>{article.author || "Anonymous"}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
          <Image
            src={article.image || '/placeholder-image.jpg'}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMCEcGxsbKDgnJy5CRDpLOTxCRkxFRldqZWlqeYR6e3+Ax+Dx/v/v8vv/8P/9/v9//f/+/f/bAEMBFRcXHhoeNBwcNL9JRzxBv7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v//AABEIAAUACgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlgAH/9k="
          />
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3 flex-grow mb-4">
          {article.description}
        </p>
        <div className="mt-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(article.publishedAt || Date.now())}</span>
          </div>
          <Link href={`/news/${article.id}`} className="ml-auto">
            <Button variant="outline" size="sm">
              Read More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};