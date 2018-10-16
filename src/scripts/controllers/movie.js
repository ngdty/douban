import movieTpl from '../views/movie.html'

const render = () => {
  $('.content').html(movieTpl)
}

export default {
  render
}