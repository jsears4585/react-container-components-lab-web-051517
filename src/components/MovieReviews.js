import React from 'react'

// Code MovieReviews Here
const review = ({display_title}) => {
  return (
    <div className="review">
      <ul>
        <li>{display_title}</li>
      </ul>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(review)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
