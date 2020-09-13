import faker from 'faker'

export const data = [...Array(10).keys()].map((i) => {
  return {
    key: `section-${i}`,
    title: faker.commerce.productName(1),
    // This is required for sections SectionList
    data: [i],
    type: i % 3 === 0 ? 'Hero' : 'Normal',
    // this is data for renderItem FlatList
    sectionContent: [...Array(10).keys()].map((j) => {
      return {
        key: `section-${i}-row-${j}`,
        title: faker.commerce.productName().substring(0, 15),
        uri: `https://source.unsplash.com/random/${400 + j}x${400 + j + i}?${
          i % 3 === 0 ? 'resturants' : 'food'
        }`,
        address: `${faker.address.county()}, ${faker.address.country()}`.substring(0, 15),
        ratings: '4.5',
        prep: '25min',
        delivery: 'Free Delivery',
        types: ['Chinese', 'American', 'Deshi food'],
      }
    }),
  }
})
