import React, {useState} from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-route-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import ProjectPage from './components/ProjectPage';
import HomePage from './components/HomePage';
import Nav from './components/Nav';


function App() {
    const [currentPage, handlePageChange] = useState('Home')


    const renderPage = () => {
        switch (currentPage) {
            case 'AboutMe':
                return <AboutMe/>;

            case 'ProjectPage':
                return <ProjectPage/>;

            default:

                return <HomePage currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
    }

    return (
        <div>
            <header className="navigation">
                <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            </header>
            <div> {renderPage(currentPage)}</div>

        </div>
    );
}

export default App;