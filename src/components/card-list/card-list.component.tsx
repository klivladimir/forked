import React from "react";
import { User } from '../../App';
import { Card } from '../card/card.component';

import './card-list.component.scss';

export function CardList({ list }: {list: ReadonlyArray<User>}) {
  return (
    <div className="list-container">
      {list
        ? list.map((user) => {
            return (
             <Card key={user.id} user={user}></Card>
            );
          })
        : null}
    </div>
  );
}
