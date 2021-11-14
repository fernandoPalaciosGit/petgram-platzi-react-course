import React from 'react'
import { Helmet } from 'react-helmet'

export const HeaderTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | Petgram 🐱 🐶 🐹 🐰 🐦 🐠</title>
      {description && <meta
        name='description'
        content={description}
                      />}
    </Helmet>
  )
}
