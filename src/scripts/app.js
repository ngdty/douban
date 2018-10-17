import Router from './utils/router'
import homeController from './controllers/home'

import shouyeController from './controllers/shouye'
import movieController from './controllers/movie'
import bookController from './controllers/book'
import statusController from './controllers/status'
import groupController from './controllers/group'



homeController.render()

const router = new Router()
router.init()
// router.route('#position', positionController.render)
router.route('#shouye', shouyeController.render)
router.route('#movie', movieController.render)
router.route('#book', bookController.render)
router.route('#status', statusController.render)
router.route('#group', groupController.render)