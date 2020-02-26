
import { createStore } from 'redux';
import reducer from '../frontend/reducer';

const configureStore = () => (
    createStore(reducer)
);

export default configureStore;