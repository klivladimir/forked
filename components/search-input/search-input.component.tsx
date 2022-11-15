import React = require('react');

export const SearchInput = ({onChangeHandler}: {onChangeHandler: (event) => void}) => {
  return (
    <input type="search" onChange={onChangeHandler}/>
  )
}