/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  categories: [
    {
      name: 'electronics',
      displayName: 'Elecronics',
      description: 'Awesome Electronics'
    },
    {
      name: 'food',
      displayName: 'Food',
      description: 'Food? is that even a thing?'
    },
    {
      name: 'clothing',
      displayName: 'Clothing',
      description:
        'Things might you will never need but you gonna but it anyway'
    }
  ],

  activeProduct: 'electronics'
};

// Reducer

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVATED':
      return {
        categories: state.categories,
        activeProduct: payload
      };

    default:
      return state;
  }
};
