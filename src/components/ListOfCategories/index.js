import React from 'react'
import { List, Item } from './styles'
import { Category } from '../Category'
import { useScrollVisible } from '@Hooks/useScrollVisible'
import { useApiResource, API_RESOURCES } from '@Hooks/useApiResource'

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

const MultipleList = ({ categories, showHeaderList }) => {
  return (
    <>
      {showHeaderList && <PartialList categories={categories} fixed />}
      <PartialList categories={categories} />
    </>
  )
}

export const ListOfCategories = () => {
  const [showHeaderList] = useScrollVisible(210)
  const [response] = useApiResource(API_RESOURCES.CATEGORIES, [])

  return (
    <>
      {response.loading && <strong>Loading categories......</strong>}
      {response.error && <strong>Error: ${response.error}</strong>}
      {!response.loading && !response.error && <MultipleList categories={response.data} showHeaderList={showHeaderList} />}
    </>
  )
}
