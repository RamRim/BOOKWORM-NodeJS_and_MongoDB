const router = require('express').Router()
const bookController = require('../controllers/book.controller')
const multer = require('multer')


router.get('/', bookController.getMybooksPage)
router.get('/delete/:id', bookController.deleteBookController)

router.get('/update/:id', bookController.getMybookUpdatePage)


router.post('/update', multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, 'assets/upload')
        },
        filename: function(req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
}).single('image'), bookController.postUpdateBookContoller)




module.exports = router