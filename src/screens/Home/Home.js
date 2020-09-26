import * as React from 'react'
import ProductGridSection from 'containers/ProductGridSection'
import Flex from 'components/Flex'
import { data } from './data'

const Home = () => {
  return (
    <Flex>
      <ProductGridSection products={data} />
    </Flex>
  )
}

export default React.memo(Home)
