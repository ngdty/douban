import Router from './utils/router'
import homeController from './controllers/home'
import positionController from './controllers/position'
import searchController from './controllers/search'
import profileController from './controllers/profile'
// 三生三世十里桃花222222

homeController.render()

const router = new Router()
router.init()
router.route('#position', positionController.render)
router.route('#search', searchController.render)
router.route('#profile', profileController.render)