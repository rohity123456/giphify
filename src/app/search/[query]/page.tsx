'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useSearchGifs } from '@/hooks/useSearchGifs';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import GifGrid from '@/components/GifGrid';
import { Loader } from 'lucide-react';
import SearchBar from '@/components/SearchBar';

export default function SearchPage() {
  const { query } = useParams() as { query: string };
  const { gifs, loading, fetchMore } = useSearchGifs(query);
  const loadMoreRef = useInfiniteScroll(() => {
    if (gifs.length > 0) {
      fetchMore();
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query]);

  return (
    <main className='px-4 py-6 max-w-7xl mx-auto flex flex-col items-center'>
      <SearchBar />
      <h1 className='text-2xl font-semibold mb-4 text-primary'>
        {`Results for "${decodeURIComponent(query)}"`}
      </h1>

      {gifs.length === 0 && !loading && (
        <p className='text-muted text-center'>No results found.</p>
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
