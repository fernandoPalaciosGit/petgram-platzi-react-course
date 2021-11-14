import PropTypes from 'prop-types'
import IsNumber from 'lodash/isNumber'

const likesPropType = (propValue, key) => {
  const value = propValue[key]
  if (!value || !IsNumber(value) || value <= 0) return new Error('likes property should be positive number')
}

export const PhotoCardPropTypes = {
  id: PropTypes.string.isRequired,
  scr: PropTypes.string,
  children: PropTypes.node
}

export const PhotoCardWithLikesPropTypes = {
  liked: PropTypes.bool.isRequired,
  likes: likesPropType,
  ...PhotoCardPropTypes
}
