import React from 'react'
import { List, Item } from './styles'
import db from '../../../api/db.json'
import { Category } from '../Category'

export const ListOfCategories = () => {
  return (
    <List>{db.categories.map((category) =>
      <Item key={category.id}>
        <Category {...category} />
      </Item>
    )}
    </List>
  )
}
