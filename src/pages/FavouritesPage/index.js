import React from 'react'
import { useFavouritesUser } from '@Hooks/useFavouritesUser'
import { PhotoCard } from '@Components/PhotoCard'
import { Text } from '@Components/styles_framework/Text'
import { FavouritesWrapper } from '@Pages/FavouritesPage/styles'
import { FavouritesProptypes } from '@Pages/FavouritesPage/proptypes'
import IsEmpty from 'lodash/isEmpty'

const ErrorFavourites = () => {
  return <Text modifiers={['subTitle', 'warning']}>Error on load favourites</Text>
}

const EmptyFavourites = () => {
  return <Text modifiers={['subTitle', 'info']}>You dont have Favourite Pets yet</Text>
}

const Favourites = ({ favs }) => {
  return favs.map((fav) => <PhotoCard key={fav.id} {...fav} />)
}

Favourites.propTypes = FavouritesProptypes

const FavouritesPage = () => {
  const { data, error, loading } = useFavouritesUser()

  if (loading) return <div>...Loading favourites</div>
  if (!IsEmpty(error)) return <ErrorFavourites />
  if (IsEmpty(data?.favs)) return <EmptyFavourites />

  return (
    <FavouritesWrapper>
      <Favourites favs={data.favs} />
    </FavouritesWrapper>
  )
}

export default FavouritesPage
