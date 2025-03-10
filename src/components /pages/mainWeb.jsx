import './mainWeb.css'
import logo from "../assets/logo.png"
import cap from "../assets/cap.jpg"
import { Link } from 'react-router-dom'


function MainWeb() {
    return (
      <div className='container'>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt="logotip" />
            <Link to="/">
              <h1>DoDo!</h1>
              <h1>hey!</h1>
            </Link>
          </div>
        </div>
        <div className='main'>
            <div className='container-main'>
                <div className='cards'>
                    <div className='card'>
                        <img src={cap} alt="logotip" width="240px" height="200px"/>
                        <p>description of this title, and about<br/> 10-30 words will be use, bla bla lbavdsvsdvsdvsdvsvsdvsdvdvsdvsdv <br/> at getConfigForFile (file:///Users/Shared/allProjects/)
    at async \</p>
                        <button>
                            <h3>Buy!</h3>
                        </button>
                        <button id="basket">
                            <h3>throw to busket</h3>
                        </button>
                    </div>
                   
                    
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainWeb;
  