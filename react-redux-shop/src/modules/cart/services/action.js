import {BLOG_FETCH_REQUEST} from './constants';

// export const sendNotification = (body: IRejectNotification) => ({
//     type: PROJECT_FETCH_SUCCESS,
//     payload: {...body}
// });

export const BlogFetchData = () => ({
  type: BLOG_FETCH_REQUEST
});
