import React from "react";
import { ajax } from 'rxjs/ajax';
import { concatAll, map, filter, toArray } from 'rxjs';
import { CardList } from '../card-list/card-list.component';
import '../../style.scss';
import { SearchInput } from '../search-input/search-input.component';
import {User} from "../../App";

export const Cats = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  const [nameSearch, setNameSearch] = React.useState('');

  const searchUserHandler = (event: any) => {
    setNameSearch(event.target.value.toLocaleLowerCase());
  };
  React.useEffect(() => {

    ajax
      .getJSON('https://jsonplaceholder.typicode.com/users')
      .pipe(
          // @ts-ignore
      concatAll(),
      filter((user) =>
        user.name.toLocaleLowerCase().includes(nameSearch.toLocaleLowerCase())
      ),
      map((user) => ({
        ...user,
        image: `https://robohash.org/${user.id}?set=set4`,
      })),
      toArray()
      ).subscribe((res: User[]) => setUsers(res));
  }, [nameSearch]);

  return (
    <div>
      <SearchInput onChangeHandler={searchUserHandler} />
      <CardList list={users} />
    </div>
  );
};
