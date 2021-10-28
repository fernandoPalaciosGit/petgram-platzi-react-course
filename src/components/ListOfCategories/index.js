import React from 'react'
import { List, Item } from './styles'
import db from '../../../api/db.json'
import { Category } from '../Category'

const PartialList = ({ categories = [], fixed = false }) => {
  return (
    <List fixed={fixed}>
      {categories.map((category) =>
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      )}
    </List>
  )
}

export const ListOfCategories = () => {
  return (
    <>
      <PartialList categories={db.categories} />
      <PartialList categories={db.categories} fixed />
    </>
  )
}
