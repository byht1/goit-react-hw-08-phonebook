import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSearchContacts = () => {
  const [filter, setFilter] = useState('');
  const [, setSearchParams] = useSearchParams();

  const change = e => {
    const value = e.target.value;
    setFilter(value);

    const nextParams = value !== '' ? { search: value } : {};
    setSearchParams(nextParams);
  };

  return { filter, change };
};
