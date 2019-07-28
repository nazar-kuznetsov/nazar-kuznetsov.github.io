import {PROJECT_SINGLE_FETCH_REQUEST} from './constants';

// export const sendNotification = (body: IRejectNotification) => ({
//     type: PROJECT_FETCH_SUCCESS,
//     payload: {...body}
// });

export const getProjectSingle = (id, callback) => ({
    type: PROJECT_SINGLE_FETCH_REQUEST,
    payload: {id, callback}
});

