import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Loja = () => {

  const [category, setCategory] = useState("All");

  return (
    <div className='pt-16'>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Loja
