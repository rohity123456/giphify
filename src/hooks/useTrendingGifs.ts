'use client';

import { useEffect, useState } from 'react';
import { Gif } from '@/types/giphy';

export function useTrendingGifs(limit: number = 12) {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchMore = async () => {
    setLoading(true);
    try {
      if (!hasMore) return;
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&limit=${limit}&offset=${offset}`
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
      console.error('Error fetching trending gifs:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { gifs, loading, fetchMore };
}
