export function extractFirstImage(content: string): string {
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : '/default-blog-image.jpg';
}

export function calculateReadingTime(content: string): string {
  const plainText = content.replace(/<[^>]+>/g, '');
  const wordCount = plainText.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 250);
  
  if (minutes < 1) return 'أقل من دقيقة';
  if (minutes === 1) return 'دقيقة واحدة';
  if (minutes === 2) return 'دقيقتان';
  if (minutes <= 10) return `${minutes} دقائق`;
  return `${minutes} دقيقة`;
}

export function processContent(content: string): string {
  return content.replace(
    /<img([^>]*)src="([^"]*)"([^>]*)>/g,
    (match, before, src, after) => `
      <div class="zmImg">
        <img${before}src="${src}"${after} 
          loading="lazy" 
          onclick="return false" 
          class="lazy loaded"
        />
      </div>
    `
  );
} 