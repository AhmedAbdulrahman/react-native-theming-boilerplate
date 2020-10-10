import * as React from 'react'
import ProductGridSection from 'containers/ProductGridSection'
import { data } from './data'

const Home = () => {
  return <ProductGridSection products={data} />
}

export default React.memo(Home)
