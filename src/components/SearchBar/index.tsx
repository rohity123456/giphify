'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();
  const { query } = useParams() as { query: string };
  const [input, setInput] = useState(query || '');

  const handleSearch = (term: string) => {
    if (term.trim()) {
      router.push(`/search/${encodeURIComponent(term.trim())}`);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <div className='mb-6 w-full flex items-center justify-center'>
      <div className='w-[350px] max-w-[80%] relative bg-foreground flex border rounded-md p-2 pr-[70px] justify-center'>
        <input
          type='text'
          value={input}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(input);
            }
          }}
          placeholder='Search for GIFs...'
          className='w-full px-4 py-3 bg-foreground text-background shadow focus:outline-none border-none outline-none'
        />
        <div className='bg-[linear-gradient(45deg,rgb(230,70,182)_0%,rgb(255,102,102)_100%)] absolute right-0 top-0 w-[70px] h-full flex items-center justify-center rounded-r-md'>
          <Search
            className='w-10 h-10 cursor-pointer hover:text-muted'
            onClick={() => handleSearch(input)}
          />
        </div>
      </div>
    </div>
  );
}
