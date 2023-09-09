import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

interface FetchResponse extends Response {
    msg: string
}

function App() {
    const [backendData, setBackendData] = useState<FetchResponse>()

    useEffect(() => {
        fetch("/api").then(response => response.json()).then(data => setBackendData(data))
    }, []);

    console.log(backendData)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {(typeof backendData?.msg === 'undefined') ? (
                        'loading...'
                    ) : (
                        backendData.msg
                    )}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
