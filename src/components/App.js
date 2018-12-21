import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import { AddTodoFormConnected } from './AddTodoForm';
import { TodosConnected } from './Todos';

export const App = () => (
    <Provider store={ store }>
        <Fragment>
            <AddTodoFormConnected />
            <TodosConnected />
        </Fragment>
    </Provider>
);
