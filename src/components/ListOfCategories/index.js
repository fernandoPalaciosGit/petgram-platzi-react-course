import React from 'react'
import { List, Item } from './styles'
import db from '@Api/db.json'
import { Category } from '../Category'
import { useScrollVisible } from '@Hooks/useScrollVisible'

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
  const [showCategories] = useScrollVisible(210)

  return (
    <>
      <PartialList categories={db.categories} />
      {showCategories && <PartialList categories={db.categories} fixed />}
    </>
  )
}
