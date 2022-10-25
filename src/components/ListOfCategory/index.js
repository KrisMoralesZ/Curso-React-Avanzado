import React, { useState, useEffect } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

export const ListOfCategories = () => {

  cons[categories, setCategories] = useState([]);

  useEffect(function () {
    fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  return (
    <List>
      {
        categories.map(category => <Item key={category}><Category {...category} /></Item>)
      }
    </List>
  )
}
