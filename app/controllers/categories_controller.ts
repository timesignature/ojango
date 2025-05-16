 import type { HttpContext } from '@adonisjs/core/http'
 import Category from "#models/category";
 import vine from "@vinejs/vine";

export default class CategoriesController {

  async index({inertia}:HttpContext){
    const categories = await Category.all()

     return inertia.render('categories/index',{
       categories:categories
     })
  }


  async create_view({inertia}:HttpContext){
    console.log('something seem to be going on')
    return inertia.render('categories/create')
  }


  async create({request, response}:HttpContext){
    console.log('post is sent')
    const body = await vine.compile(vine.object({
      name: vine.string().unique({table:'categories', column:'name'})
    })).validate(request.all())

    await Category.create(body)
    return response.redirect('/categories')
  }


}
