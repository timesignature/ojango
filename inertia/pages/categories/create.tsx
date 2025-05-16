import {useForm} from "@inertiajs/react";
import {Button} from "~/components/ui/button";
import {Input} from "~/components/ui/input";

function CreateCategories() {

  const {setData, data, processing, errors, post}=useForm({
    name:''
  })

  const submit=(e:any)=>{
    e.preventDefault()
    post('/categories',{
      preserveScroll:false
    })
  }



  return (
    <div className={'px-20'}>

      <div className={'mt-20 w-2/5'}>
        <span className="block text-3xl font-light">Create Categories</span>

        <form onSubmit={submit}>
          <div className="mt-5">
            <div>
              <span className="block text-sm mb-2">Category Name</span>
              <Input
                type="text"
                className={``}
                value={data.name}
                onChange={(val) => setData('name', val.target.value)}
              />



              {
                errors.name && (
                  <span className={'block text-xs text-red-600 mt-2'}>{errors?.name}</span>
                )
              }

              <div className="mt-5">
                <Button disabled={processing} >
                  {
                    processing ? '...Creating Category' : 'Create Category'
                  }
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>


    </div>
  )
}

export default CreateCategories
