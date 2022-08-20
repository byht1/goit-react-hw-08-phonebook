import { Input } from './SearchContacts.styled';
import { useSearchContacts } from './../../hook/useSearchContacts';

export const SearchContacts = () => {
  const { filter, change } = useSearchContacts();
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
