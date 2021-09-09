import React, {useEffect } from 'react';
import axios from 'axios';
import Login from './login';

function App(){

    useEffect(() => {
        axios.get('/api/hello').then(response => console.log(response.data))
    }, [])


    return(
        <div style = {{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <h2><Login /></h2>
        </div> 
    );
}

export default App
