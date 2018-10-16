import statusTpl from '../views/status.html'

const render = () => {
  $('.content').html(statusTpl)
}

export default {
  render
}