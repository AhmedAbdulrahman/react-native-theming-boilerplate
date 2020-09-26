import faker from 'faker'

export const data = [...Array(10).keys()].map((i) => {
  return {
    key: `section-${i}`,
    title: faker.commerce.productName(1),
    // This is required for sections SectionList
    data: [i],
    type: i % 3 === 0 ? 'hero' : 'normal',
    horizontal: i % 3 === 0 ? 'hero' : 'normal',
    // this is data for renderItem FlatList
    sectionContent: [...Array(10).keys()].map((j) => {
      return {
        key: `section-${i}-row-${j}`,
        title: faker.commerce.productName().substring(0, 15),
        uri: `https://source.unsplash.com/random/${800 + j}x${800 + j + i}?${
          i % 3 === 0 ? 'resturants' : 'food'
        }`,
        address: `${faker.address.county()}, ${faker.address.country()}`.substring(0, 15),
        ratings: '4.5',
        prep: '25min',
        delivery: 'Free Delivery',
        types: ['Chinese', 'American', 'Deshi food'],
        type: i % 3 === 0 ? 'resturant' : 'meal',
      }
    }),
  }
})

export const featuredItems = [...Array(2).keys()].map((i) => {
  return {
    key: `section-${i}`,
    title: faker.commerce.productName(1),
    // This is required for sections SectionList
    data: [i],
    type: 'normal',
    horizontal: i % 3 === 0,
    // this is data for renderItem FlatList
    sectionContent: [...Array(10).keys()].map((j) => {
      return {
        key: `section-${i}-row-${j}`,
        title: faker.commerce.productName().substring(0, 15),
        description: 'Shortbread, chocolate turtle cookies, and red velvet.',
        uri: `https://source.unsplash.com/random/${400 + j}x${400 + j + i}?food`,
        images: [...Array(4).keys()].map(
          (k) => `https://source.unsplash.com/random/${400 + j}x${400 + j + k}?food`,
        ),
        types: ['Chinese', 'American', 'Deshi food'],
        ratings: '4.5',
        prep: '25min',
        delivery: 'Free Delivery',
      }
    }),
  }
})
