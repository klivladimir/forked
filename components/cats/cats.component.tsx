import * as React from 'react';
import { ajax } from 'rxjs/ajax';
import { concatAll, map, filter, toArray } from 'rxjs';
import { CardList } from '../../components/card-list/card-list.component';
import '../../style.scss';
import { SearchInput } from '../search-input/search-input.component';

export const Cats = () => {
  const [users, setUsers] = React.useState([]);

  const [nameSearch, setNameSearch] = React.useState('');

  const searchUserHandler = (event) => {
    setNameSearch(event.target.value.toLocaleLowerCase());
  };
  React.useEffect(() => {
    ajax
      .getJSON('https://jsonplaceholder.typicode.com/users')
      .pipe(
      concatAll(),
      filter((user) =>
        user.name.toLocaleLowerCase().includes(nameSearch.toLocaleLowerCase())
      ),
      map((user) => ({
        ...user,
        image: `https://robohash.org/${user.id}?set=set4`,
      })),
      toArray()
      ).subscribe(setUsers);
  }, [nameSearch]);

  return (
    <div>
      <SearchInput onChangeHandler={searchUserHandler} />
      <CardList list={users} />
    </div>
  );
};
