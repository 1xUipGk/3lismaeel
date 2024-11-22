export interface BlogPost {
  id: string;
  title: string;
  content: string;
  published: string;
  imageUrl: string;
  readingTime: string;
  isUpdated?: boolean;
  category?: string;
  views?: number;
  createdAt?: string;
} 