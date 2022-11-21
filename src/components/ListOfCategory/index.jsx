import React, { useState, useEffect } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles.sc";

export const ListOfCategories = () => {

  const [showFixed, setShowFixed] = newShowFixed;

  cons[categories, setCategories] = useState([]);

  useEffect(function () {
    fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, []);

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY < 200
      showFixed !== newShowFixed
    }
  })

  const renderList = (fixed) => {
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category}><Category {...category} /></Item>)
      }
    </List>
  }

  return (
    <>
      {renderList()}
      {renderList(true)}
    </>
  )
}
