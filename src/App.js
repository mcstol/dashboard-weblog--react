import React from 'react';
import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/sidebar';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                 <Sidebar/>
            </div>
        )
    }
}