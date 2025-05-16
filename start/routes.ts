/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import CategoriesController from "#controllers/categories_controller";
router.on('/').renderInertia('home')




router.get('categories', [CategoriesController,'index'])
router.post('categories',[CategoriesController,'create'])
router.get('categories/create', [CategoriesController,'create_view'])

