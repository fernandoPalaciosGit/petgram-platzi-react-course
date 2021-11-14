import PropTypes from 'prop-types'
import { PhotoCardPropTypes } from '@Components/PhotoCard/propTypes'

export const FavouritesProptypes = {
  favs: PropTypes.arrayOf(PropTypes.shape(PhotoCardPropTypes))
}
