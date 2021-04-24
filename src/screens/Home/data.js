import faker from 'faker'

export const data = Array.from({ length: 10 }, (_, i) => {
  return {
    key: `section-${i}`,
    title: faker.commerce.productName(1),
    // This is required for sections SectionList
    data: [i],
    type: i % 3 === 0 ? 'hero' : 'normal',
    horizontal: i % 3 === 0 ? 'hero' : 'normal',
    // this is data for renderItem FlatList
    sectionContent: Array.from({ length: 10 }, (idx, j) => {
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

export const filterOptionDefaults = [
  {
    heading: 'Categories',
    name: 'categories',
    options: [
      { id: 0, key: 'soups', label: 'Soups' },
      { id: 1, key: 'breakfast', label: 'Breakfast' },
      { id: 2, key: 'dinner', label: 'Dinner' },
      { id: 3, key: 'burgers', label: 'Burgers' },
      { id: 4, key: 'brunch', label: 'Brunch' },
      { id: 5, key: 'chinese', label: 'Chinese' },
      { id: 6, key: 'pizza', label: 'Pizza' },
      { id: 7, key: 'salads', label: 'Salads' },
    ],
  },
  {
    heading: 'Dietary',
    name: 'dietary',
    options: [
      { id: 0, key: 'any', label: 'Any' },
      { id: 1, key: 'vegetarian', label: 'Vegetarian' },
      { id: 2, key: 'vegan', label: 'Vegan' },
      { id: 3, key: 'gluten-free', label: 'Gluten-Free' },
    ],
  },
  {
    heading: 'Price Range',
    name: 'price',
    options: [
      { id: 0, key: '$', label: '$' },
      { id: 1, key: '$$', label: '$$' },
      { id: 2, key: '$$$', label: '$$$' },
      { id: 3, key: '$$$$', label: '$$$$' },
    ],
  },
]
