declare module 'gray-matter' {
  function matter(
    str: string | Buffer,
    options?: {
      excerpt?: boolean | string;
      excerpt_separator?: string;
      engines?: any;
      language?: string;
      delimiters?: string | [string, string];
    }
  ): {
    data: any;
    content: string;
    excerpt?: string;
    orig: Buffer | string;
    language: string;
    matter: string;
  };

  export = matter;
} 