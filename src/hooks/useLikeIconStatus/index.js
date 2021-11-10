import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useEffect, useState, useContext } from 'react'
import { LocalStorageContext } from '@Providers/LocalStorage'

export const useLikeIconStatus = (itemKey, initValue) => {
  const { getStorage, setStorage } = useContext(LocalStorageContext)
  const [liked, setLiked] = useState(getStorage(itemKey, initValue))
  const LikesIcon = liked ? MdFavorite : MdFavoriteBorder
  const setLikesIcon = () => setLiked(!liked)

  useEffect(() => setStorage(itemKey, liked), [liked])

  return [LikesIcon, setLikesIcon, liked]
}
