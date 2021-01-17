import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { initialState } from './components/reducer';
import {StateProvider} from "./components/StateProvider";
import reducer from "./components/reducer";

const root = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>,
 root
 );

