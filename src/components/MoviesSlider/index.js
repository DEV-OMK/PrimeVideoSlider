import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {sliderList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <Slider {...settings}>
        {sliderList.map(eachMovie => (
          <MovieItem key={eachMovie.id} movie={eachMovie} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
