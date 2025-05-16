

function HeaderComponent() {
  return (
    <div className={'border-b border-zinc-200'}>
      <div className="px-20 py-4 flex items-center justify-between">
        <span className="block text-3xl">Shop</span>
        <div className={'flex gap-3'}>
          <span className="block text-xs">Home</span>
          <span className="block text-xs">Products</span>
          <span className="block text-xs">Orders</span>
          <span className="block text-xs">Categories</span>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
