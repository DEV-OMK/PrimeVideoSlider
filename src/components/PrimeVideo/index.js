import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')
  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')

  return (
    <div className="prime-video-bg-container">
      <div className="prime-video-responsive-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          className="prime-video-image"
          alt="prime video"
        />
        <div className="prime-video-category-container">
          <h1 className="category-title">Action Movies</h1>
          <MoviesSlider sliderList={actionMovies} />
          <h1 className="category-title">Comedy Movies</h1>
          <MoviesSlider sliderList={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
