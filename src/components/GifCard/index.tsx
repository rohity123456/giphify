// components/GifCard.tsx

import { Gif } from '@/types/giphy';
import Image from 'next/image';

export default function GifCard({ gif }: { gif: Gif }) {
  const { url, width, height } = gif.images.fixed_height;

  return (
    <Image
      src={url}
      alt={gif.title}
      width={parseInt(width)}
      height={parseInt(height)}
      className='h-auto w-full rounded-lg'
      unoptimized
    />
  );
}
