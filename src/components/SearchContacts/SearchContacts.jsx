import React, { useState } from 'react';
import { Input } from './SearchContacts.styled';

export const SearchContacts = () => {
  const [filter, setFilter] = useState('');
  return (
    <div>
      <label>
        <Input
          onChange={e => setFilter(e.target.value)}
          type="text"
          value={filter}
          placeholder={'Find contacts by name'}
        />
      </label>
    </div>
  );
};
