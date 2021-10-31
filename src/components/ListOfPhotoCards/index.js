import db from '@Api/db.json'
import React from 'react'
import { PhotoCard } from '@Components/PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <div className='ListOfPhotoCards'>
      {db.photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)}
    </div>
  )
}
