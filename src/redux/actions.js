// export 
export const fetchPosts = () => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_POSTS_REQUEST' });
  
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data })
        )
        .catch((error) =>
          dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error })
        );
    };
  };