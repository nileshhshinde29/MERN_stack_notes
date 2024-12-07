import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react'
function App() {

    const fetchData = () => {
        return new Promise((resolve, reject) => {
            fetch("https://todo-backend-rest.onrender.com/todoss")
                .then(res => res.json())
                .then(response => resolve(response))
                .catch(error => reject(error))
        })
    }

    useEffect(() => {
        fetchData()
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }, [])


    return (
        <div className="App">

        </div>
    );
}

export default App;


