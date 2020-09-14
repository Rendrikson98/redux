import { combineReducers } from 'redux';

import course from './course';

export default combineReducers({
    course,
});

//Quando utiliza o combineReducers os redurcers são separados como objetos
// {
// couse: {modules: [], activeLesson: {} ...}
// user: {name: ''} se tiver um redurce de user
// }