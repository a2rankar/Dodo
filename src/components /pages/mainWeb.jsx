import './mainWeb.css'
import logo from "../assets/logo.png"
import cap from "../assets/cap.webp"
import curtka from "../assets/curtka.jpeg"
import jacket from '../assets/jacket.webp'
import socks from '../assets/socks.jpg'
import dodoBanner from '../assets/dodoBanner.jpg'
import { Link } from 'react-router-dom'


function MainWeb() {
    return (
      <div className='container'>
        <div className='header'>
          <div className='logo'>
            <div className='images'>
                <img src={logo} alt="logotip" class="logomed"/>
                <img src={dodoBanner} alt="logo" class='logomed'/>
            </div>
            <Link to="/">
              <h1>DoDo!</h1>
            </Link>
          </div>
        </div>
        <div className='main'>
            <div className='container-main'>
                <div className='cards'>
                    <div className='card'>
                        <img src={cap} alt="logotip"/>
                        <p>description of this title, and about<br/> 10-30 words will be use, bla bla lbavdsvsdvsdvsdvsvsdvsdvdvsdvsdv <br/> at getConfigForFile (file:///Users/Shared/allProjects/)
    at async \</p>
                        <button>
                            <h3>Buy!</h3>
                        </button>
                        <button id="basket">
                            <h3>throw to busket</h3>
                        </button>
                    </div>
                    <div className='card'>
                        <img src={curtka} alt="logotip" />
                        <p>description of this title, and about<br/> 10-30 words will be use, bla bla...lbavdsvsdvsdvsdvsvsdvsdvdvsdvsdv <br/> at getConfigForFile (file:///Users/Shared/allProjects/)
    at async \</p>
                        <button>
                            <h3>Buy!</h3>
                        </button>
                        <button id="basket">
                            <h3>throw to busket</h3>
                        </button>
                    </div>
                    <div className='card'>
                        <img src={jacket} alt="logotip" />
                        <p>description of this title, and about<br/> 10-30 words will be use, bla bla...lbavdsvsdvsdvsdvsvsdvsdvdvsdvsdv <br/> at getConfigForFile (file:///Users/Shared/allProjects/)
    at async \</p>
                        <button>
                            <h3>Buy!</h3>
                        </button>
                        <button id="basket">
                            <h3>throw to busket</h3>
                        </button>
                    </div>
                    <div className='card'>
                        <img src={socks} alt="logotip" />
                        <p>description of this title, and about<br/> 10-30 words will be use, bla bla...lbavdsvsdvsdvsdvsvsdvsdvdvsdvsdv <br/> at getConfigForFile (file:///Users/Shared/allProjects/)
    at async \</p>
                        <button>
                            <h3>Buy!</h3>
                        </button>
                        <button id="basket">
                            <h3>throw to busket</h3>
                        </button>
                    </div>
                    <div className='card'>
                        <img src={socks} alt="logotip" />
                        <p>description of this title, and about<br/> 10-30 words will be use, bla bla...lbavdsvsdvsdvsdvsvsdvsdvdvsdvsdv <br/> at getConfigForFile (file:///Users/Shared/allProjects/)
    at async \</p>
                        <button>
                            <h3>Buy!</h3>
                        </button>
                        <button id="basket">
                            <h3>throw to busket</h3>
                        </button>
                    </div>
                    <div className='card'>
                        <img src={socks} alt="logotip" />
                        <p>description of this title, and about<br/> 10-30 words will be use, bla bla...lbavdsvsdvsdvsdvsvsdvsdvdvsdvsdv <br/> at getConfigForFile (file:///Users/Shared/allProjects/)
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
  