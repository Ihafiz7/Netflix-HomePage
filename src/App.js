import React from "react";
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';
import Page4 from './pages/Page4.jsx';
import Page5 from './pages/Page5.jsx';
import Page6 from './pages/Page6.jsx';
import Page7 from './pages/Page7.jsx';

import './styles.css';


export default function App(){
    return(
        <div className="App">
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            <Page7 />
        </div>
    );
}