const list = () => {
  return $.ajax({
    url: '/shouye/rexxar/api/v2/recommend_feed?alt=json&next_date=2018-10-16&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1',
    success: (result) => {
     
       return result  
    }
   
  })
}



export default {
  list
}