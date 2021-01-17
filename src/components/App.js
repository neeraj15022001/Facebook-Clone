import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./css/App.css";
import Feed from "./Feed";
import Widgets from "./Widgets.js";
import Login from "./Login.js";
import {useStateValue} from "./StateProvider";

function App() {
    const [{user}, dispatch] = useStateValue();
    // const user = null

    return (
        // BEM naming convention
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                <>
                    <Header />
                    <div className="app__body">
                        <Sidebar />
                        <Feed />

                        <Widgets />
                    </div>
                </>
            )}
            
        </div>
    )
}
export default App;