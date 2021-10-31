import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useEffect, useState } from 'react'

const getItemKey = (key) => `useLikeIconStatus-${key}`

export function getStateFromLocalStorage (key = '') {
  return JSON.parse(
    localStorage.getItem(getItemKey(key)) || JSON.stringify(false)
  )
}

export function setStateToLocalStorage (key = '', value) {
  localStorage.setItem(getItemKey(key), JSON.stringify(value))
}

export const useLikeIconStatus = (itemKey) => {
  const [liked, setLiked] = useState(getStateFromLocalStorage(itemKey))
  const LikesIcon = liked ? MdFavorite : MdFavoriteBorder
  const setLikesIcon = () => setLiked(!liked)

  useEffect(() => setStateToLocalStorage(itemKey, liked), [liked])

  return [LikesIcon, setLikesIcon]
}
