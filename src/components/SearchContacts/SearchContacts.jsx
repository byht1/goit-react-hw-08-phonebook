import React, { useState } from 'react';
import { Input } from './SearchContacts.styled';
import { useSearchParams } from 'react-router-dom';

export const SearchContacts = () => {
  const [filter, setFilter] = useState('');
  const [, setSearchParams] = useSearchParams();

  const change = e => {
    const value = e.target.value;
    setFilter(value);

    const nextParams = value !== '' ? { search: value } : {};
    setSearchParams(nextParams);
  };
  return (
    <div>
      <label>
        <Input
          onChange={e => change(e)}
          type="text"
          name="search"
          value={filter}
          placeholder={'Find contacts by name'}
        />
      </label>
    </div>
  );
};
