import React, { Component } from 'react'
import 'isomorphic-fetch'

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ee13466d5af1434cb7a692eec49ffbe8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
    }
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(data => this.setState({
        reviews: data.results
      }))
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
