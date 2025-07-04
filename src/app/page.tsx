'use client';

import { useEffect } from 'react';
import { useTrendingGifs } from '@/hooks/useTrendingGifs';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import GifGrid from '@/components/GifGrid';
import { Loader } from 'lucide-react';
import SearchBar from '@/components/SearchBar';

export default function HomePage() {
  const { gifs, loading, fetchMore } = useTrendingGifs();
  const loadMoreRef = useInfiniteScroll(fetchMore);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='px-4 py-6 max-w-7xl mx-auto flex flex-col items-center'>
      <SearchBar />
      <h1 className='text-2xl font-semibold mb-4 text-primary'>
        Trending GIFs
      </h1>

      {gifs.length === 0 && !loading && (
        <p className='text-muted text-center'>No GIFs found.</p>
      )}

      <GifGrid gifs={gifs} />

      <div
        ref={loadMoreRef}
        className='h-10 mt-6 flex justify-center items-center'
      >
        {loading && <Loader className='animate-spin' />}
      </div>
    </main>
  );
}
