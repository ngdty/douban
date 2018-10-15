import positionTpl from '../views/position.html'
import positionModel from '../models/position'

var datasource = []
var pageNo = 2

const render = async () => {
  $('main').html(positionTpl)
  let list = datasource = (await positionModel.list()).content.data.page.result
  await renderList(list)
  scroll()
}


const renderList = async (list) => {
  let template = Handlebars.compile(positionListTpl)
  let html = template({ list })
  $('#poslist').html(html)
}

export default {
  render
}