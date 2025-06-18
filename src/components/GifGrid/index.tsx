import { Gif } from '@/types/giphy';
import GifCard from '@/components/GifCard';
import { chunkArray } from '@/utils';

interface GifGridProps {
  gifs: Gif[];
}

export default function GifGrid({ gifs = [] }: GifGridProps) {
  return (
    <div className='grid grid-cols-2 xs:grid-cols-1 md:grid-cols-4 gap-[5px]'>
      {chunkArray(gifs, 3).map((row, rowIndex) => (
        <div key={rowIndex} className=''>
          {row.map((gif) => (
            <GifCard key={gif.id} gif={gif} />
          ))}
        </div>
      ))}
    </div>
  );
}
