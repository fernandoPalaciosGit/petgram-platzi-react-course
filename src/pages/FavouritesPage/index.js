import React from 'react'
import { useFavouritesUser } from '@Hooks/useFavouritesUser'
import { isEmpty } from 'lodash'
import { PhotoCard } from '@Components/PhotoCard'
import { Text } from '@Components/styles_framework/Text'
import { FavouritesWrapper } from '@Pages/FavouritesPage/styles'

const ErrorFavourites = () => {
  return <Text modifiers={['subTitle', 'warning']}>Error on load favourites</Text>
}

const EmptyFavourites = () => {
  return <Text modifiers={['subTitle', 'info']}>You dont have Favourite Pets yet</Text>
}

const FavouritesPage = () => {
  const { data, error, loading } = useFavouritesUser()

  if (loading) return <div>...Loading favourites</div>
  if (!isEmpty(error)) return <ErrorFavourites />
  if (isEmpty(data?.favs)) return <EmptyFavourites />

  return (
    <FavouritesWrapper>
      {data.favs.map((fav) => <PhotoCard key={fav.id} {...fav} />)}
    </FavouritesWrapper>
  )
}

export default FavouritesPage
