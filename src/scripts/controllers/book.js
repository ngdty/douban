import bookTpl from '../views/book.html'

const render = () => {
  $('.content').html(bookTpl)
}

export default {
  render
}