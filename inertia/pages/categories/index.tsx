import Category from "#models/category";
import HeaderComponent from "~/components/HeaderComponent";

function Categories({categories}:{categories:Category[]}) {
  return (
    <div>
      <HeaderComponent/>
      <div className="mt-10 px-20">
        <>
          <span className="block text-3xl font-light">Categories</span>
          <div className="mt-10">
            {
              categories.map(category => (
                <div key={category.id} className={'flex items-center space-x-3 p-5 border border-zinc-200 mb-2'}>
                  <input type="checkbox" className={''}/>
                  <span  className="block text-xs">{category.name}</span>
                </div>
              ))
            }
          </div>
        </>
      </div>
    </div>
  )
}

export default Categories
