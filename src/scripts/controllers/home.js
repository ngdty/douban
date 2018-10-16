import homeTpl from '../views/home.html'


const render = () => {
  document.querySelector('#root').innerHTML = homeTpl
  changeTab()
}

const changeTab = () => {
  $('.top-nav li').on('tap', function () {   
                
    let hashs = ['#movie', '#book', '#status','#group']
    location.hash = hashs[$(this).index()]
    //  $(this).addClass('active').siblings().removeClass('active')
  //   console.log(hashs);
  // console.log($(this).index())
  })
}

export default {
  render
}