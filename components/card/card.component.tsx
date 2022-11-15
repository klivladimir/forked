import React = require('react');
import { User } from '../../App';

import './card.component.scss';


export const Card = ({ user }: {user: User}) => {
  return (
    <div className="list-item">
      <h3>{user.name}</h3>
      <img src={user.image} />
    </div>
  );
};
