import '../App.css';
import Button from './Button';
import Greet from './Greet';
import Hello from './Hello';


const Home = () => {
    return (
        <div className="Home">
            <header className="App-header">
                <img src="https://lh3.googleusercontent.com/proxy/f9CvzrrCEindvToju594mUmpguzzRvdgXTkno1Vl_KWEtp9zDtJptXV5t8-UoIROOsbaUnK68jFt_DLWjJfvAhOclE30cljoF0vdzP0YnP6_b0zQN7Bscq4" className="App-logo" alt="logo" />
                <p>
                <p>{Hello()}</p>
                    <Greet></Greet>
                    
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p>With great <b><i>POWER</i></b> comes great <b><i>ELECTRICITY BILL.</i></b>
                            </p>
                        </blockquote>
                        <blockquote class="blockquote">
                            - Super Idol Vhong "AgentX44" 热爱105°C
                        </blockquote>
                    </figure>
                    
                </p>
                <Button />
                <a
                    className="App-link"
                    href="https://youtu.be/aCgP8BFjrw4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Coming this January 2022.
                </a>
            </header>
        </div>
    );
}

export default Home;