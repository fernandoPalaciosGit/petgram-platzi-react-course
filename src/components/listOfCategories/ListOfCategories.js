import { Category } from '../category'
import React from 'react'
import { List, Item } from './styles'

const testList = [...Array(5).keys()]

export const ListOfCategories = () => {
  return (
    <List>{testList.map((index) => <Item key={index}><Category /></Item>)}</List>
  )
}
