import React from 'react'
import { List, Item } from './styles'
import { Category } from '../Category'
import { useScrollVisible } from '@Hooks/useScrollVisible'
import { useApiResource, API_RESOURCES } from '@Hooks/useApiResource'

const PartialList = React.memo(({ categories = [], fixed = false }) => {
  return (
    <List fixed={fixed}>
      {categories.map((category) =>
        <Item key={category.id}>
          <Category {...category} path={`/pet-category/${category.id}`} />
        </Item>
      )}
    </List>
  )
})

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
  const [{ loading, error, data }] = useApiResource(API_RESOURCES.CATEGORIES, [])

  if (loading) return <div>...loading categories</div>
  if (error) return <div>Error categories: ${error}</div>

  return <MultipleList categories={data} showHeaderList={showHeaderList} />
}
