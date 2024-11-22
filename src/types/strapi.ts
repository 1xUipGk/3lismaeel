export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: 'draft' | 'published';
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  featuredImage: {
    data: {
      id: number;
      attributes: {
        url: string;
        width: number;
        height: number;
        formats: {
          thumbnail: {
            url: string;
          };
        };
      };
    } | null;
  };
  category: {
    data: {
      id: number;
      attributes: {
        name: string;
        slug: string;
      };
    } | null;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface Category {
  name: string;
  slug: string;
  description: string | null;
}

export interface Tag {
  name: string;
  slug: string;
} 