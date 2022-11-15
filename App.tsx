import * as React from 'react';
import { Home } from './routes/home.route';
import { Routes, Route } from 'react-router-dom';
import { Cats } from './components/cats/cats.component';
import { SignIn } from './components/signin/signIn.component';

export interface User {
  name: string;
  id: number;
  create: Date;
  image: string;
}

interface AppState {
  users: User[];
  nameSearch: string;
}

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<Cats/>}></Route>
        <Route path="cats" element={<Cats/>}></Route>
        <Route path="signin" element={<SignIn/>}></Route>
      </Route>
      <Route path="*" element={<Home/>}></Route>
    </Routes>
  );
};
