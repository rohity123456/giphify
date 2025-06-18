'use client';

import { useEffect, useState } from 'react';
import { Gif } from '@/types/giphy';

export function useSearchGifs(query: string, limit: number = 12) {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchMore = async () => {
    if (!query || loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${
          process.env.NEXT_PUBLIC_GIPHY_API_KEY
        }&q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`
      );

      const data = await res.json();
      if (data?.meta?.status !== 200) {
        setHasMore(false);
      }
      if (Array.isArray(data.data)) {
        setGifs((prev) => [...prev, ...data.data]);
        setOffset((prev) => prev + limit);
        if (data.pagination.total_count < offset + limit) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching search gifs:', error);
      setError('Error fetching search gifs');
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setGifs([]);
    setOffset(0);

    if (query) {
      setError(null);
      setHasMore(true);
      fetchMore();
    }
  }, [query]);

  return { gifs, loading, fetchMore, error };
}
