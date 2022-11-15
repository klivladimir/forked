import React from "react";

export const SearchInput = ({onChangeHandler}: {onChangeHandler: (event: any) => void}) => {
  return (
    <input type="search" onChange={onChangeHandler}/>
  )
}
