import { useEffect } from 'react';
import '../App.css';

const PageNotFound = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.pathname = "/myfirstreact/"
            console.log("Redirecting to home page...");
        }, 5000);
    })

    return (
        <div>
        <header className="App-header">
            <h3>Uh Oh! Someone stole this page!</h3>
            <p>Try clicking one of the options above</p>
        </header>
        </div>
    )
    
}

export default PageNotFound;