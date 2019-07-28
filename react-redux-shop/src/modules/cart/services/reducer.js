const initialState = {
  wallpaper: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BLOG_FETCH_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'BLOG_FETCH_SUCCESS':
      return {
        ...state,
        wallpaper: action.data,
        loading: false
      };
    case 'BLOG_FETCH_ERROR':
      return {
        ...state,
        loading: false
      };
    default: return state;
  }
};
