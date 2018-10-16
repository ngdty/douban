import Router from './utils/router'
import homeController from './controllers/home'
// import positionController from './controllers/position'
import movieController from './controllers/movie'
import bookController from './controllers/book'
import statusController from './controllers/status'
import groupController from './controllers/group'
//222222

homeController.render()

const router = new Router()
router.init()
// router.route('#position', positionController.render)
router.route('#movie', movieController.render)
router.route('#book', bookController.render)
router.route('#status', statusController.render)
router.route('#group', groupController.render)