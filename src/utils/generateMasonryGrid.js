export default function generateMasonryGrid(data, columns) {
  return data.reduce((collection, child, childIndex) => {
    const itemIndex = childIndex % columns
    if (collection[itemIndex]) {
      collection[itemIndex].push(child)
    } else {
      collection[itemIndex] = []
      collection[itemIndex].push(child)
    }
    return collection
  }, [])
}
