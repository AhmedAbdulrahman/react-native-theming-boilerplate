import * as React from 'react'
import Flex from 'components/Flex'
import ProductGridSection from 'containers/ProductGridSection'
import { data } from 'screens/Home/data'

const ProductGridScreen = () => {
  return (
    <Flex>
      <ProductGridSection products={data} />
    </Flex>
  )
}

export default React.memo(ProductGridScreen)
