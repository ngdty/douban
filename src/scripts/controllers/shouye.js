import shouyeTpl from '../views/shouye.html'
import shouyeModel from '../models/shouye'

var datasource = []
const render = async () => {
  $('.content').html(shouyeTpl)
  let list = datasource = (await shouyeModel.list()).recommend_feeds
  await renderList(list)
   scroll()
  console.log(list)
}

const renderList = async(list) =>{
  let template = Handlebars.compile(shouyeTpl)
  let html =template({ list })
  $(".content").html(html)
   //console.log(html)
}

export default {
  render
}
