import db from '@Api/db.json'
import { PhotoCard } from '../PhotoCard'
import React from 'react'

export const ListOfPhotoCards = () => {
  return db.photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)
}
