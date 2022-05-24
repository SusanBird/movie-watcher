import React from 'react';
import { logout } from './services/supabase-utils';

export default function SearchPage() {
  return (
    <div>
      <header>
        <a href="./search">Search</a>
        <a href="./watch-list">Watch List</a>
        <a href="./" onClick={logout}>
          Logout
        </a>
      </header>
    </div>
  );
}
