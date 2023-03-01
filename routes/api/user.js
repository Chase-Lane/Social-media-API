const router = require('express').Router();
const {
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  getUser,
} = require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);


module.exports = router;