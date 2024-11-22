export async function convertToBlob(imageUrl: string): Promise<string> {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error converting image to blob:', error);
    return imageUrl; // في حالة الفشل، نعيد الرابط الأصلي
  }
}

export function cleanupBlobUrl(url: string) {
  if (url.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  }
} 