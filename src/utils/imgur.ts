export interface ImgurResponse {
  data: {
    link: string;
  };
}

export const uploadToImgur = async (file: File): Promise<ImgurResponse> => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      Authorization: `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image to Imgur');
  }

  const data = await response.json();
  return data;
}; 