import { Router } from 'express';

const router = Router();

import { getUsers, createUser, getOneUser, updateUser, deleteUser, getUserSql } from '../controllers/user.controller';

router.route('/users')
    .get(getUserSql)
    .post(createUser)
router.route('/users/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)
export default router;