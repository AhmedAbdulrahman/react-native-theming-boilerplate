import React from 'react'
const usePromiseAll = (promises, cb) =>
  React.useEffect(() => {
    ;(async () => {
      await Promise.all(promises)
      cb()
    })()
  })
export default usePromiseAll
