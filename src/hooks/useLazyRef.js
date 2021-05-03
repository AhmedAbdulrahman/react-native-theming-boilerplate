import { useRef } from 'react'

const useLazyRef = (initializer) => {
  const ref = useRef()
  if (ref.current === undefined) {
    ref.current = initializer()
  }
  return ref.current
}

export default useLazyRef
