import faker from 'faker'

export const data = Array.from({ length: 1 }, (_, i) => {
  return {
    key: `section-${i}`,
    title: faker.commerce.productName(1),
    // This is required for sections SectionList
    data: [i],
    type: i % 3 === 0 ? 'hero' : 'normal',
    horizontal: i % 3 === 0 ? 'hero' : 'normal',
    // this is data for renderItem FlatList
    sectionList: Array.from({ length: 100 }, (_, i) => {
      return {
        key: `section-${i}`,
        // This is required for sections SectionList
        title: faker.commerce.productName().substring(0, 15),
        uri: `https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80`,
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

export const featuredItems = [...Array(10).keys()].map((i) => {
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
        uri: `https://images.unsplash.com/photo-1600828785325-5888eefed73c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80`,
        images: [...Array(4).keys()].map(
          (k) =>
            `https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80`,
        ),
        types: ['Chinese', 'American'],
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
