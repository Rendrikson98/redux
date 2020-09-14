import React, {Component} from 'react';
import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar/index';
import Video from './components/Video/index';

import store from './store/index';

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Video />
                    <Sidebar />
                </Provider>
            </div>
        )
    }
}

export default App;
