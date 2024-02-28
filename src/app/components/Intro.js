
import svg from './../../asset/projects/itsm.svg'
import img from './../../asset/info/Frame 1.png'
import linkedn from './../../asset/info/linkdn.svg'
import github from './../../asset/info/github.svg'
import medium from './../../asset/info/medium.svg'
import gmail from './../../asset/info/gmail.svg'
import {Link} from "react-router-dom";
const Intro = () => {

    const sendEmail = () => {
        window.location.href="mailto:itzhazzan@gmail.com?body=Hi Hassan!";
    }
    return (
        <div className='grid sm:grid-cols-2'>
            <div className='flex flex-col justify-center items-center'>
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col align-top text-white">
                        <div className="p-2">
                            <h1 className="custom-h1">HI THERE 👋🏻, I'M</h1>
                        </div>
                        <div className="typewriter p-2">
                            <div className="typewriter-text name-animation">Hassan.</div>
                        </div>
                    </div>
                    <div className="p-2">
                        <h1 className="custom-h1">Full Stack Developer 🧑🏻‍💻 </h1>
                    </div>
                    <div className="p-2">
                        <h1 className="custom-h1 summary">I develop web apps using Java as backend <br/>and Angular and
                            ReactJs on frontend 🧑🏻‍💻 </h1>
                    </div>
                    <Link to="https://cdn.jsdelivr.net/gh/hsn-ali/portfolio@main/Umair%20CV-converted.pdf" target="_blank">
                        <button className="btn-lg custom-btn">Resume</button>
                    </Link>
                    <div className="flex gap-6 mt-3 pl-2">
                        <Link to="https://www.linkedin.com/in/hassanali4/" target="_blank">
                            <img src={linkedn} alt="linkedn" className="cursor-pointer"/>
                        </Link>
                        <Link to="https://github.com/hsn-ali" target="_blank">
                            <img src={github} alt="github" className="cursor-pointer"/>
                        </Link>
                        <Link to="https://medium.com/@itzhazzan" target="_blank">
                            <img src={medium} alt="medium" className="cursor-pointer"/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/hassanali4/" target="_blank">
                            <img src={gmail} alt="medium" onClick={sendEmail} className="cursor-pointer"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={img} height={650} width={650} alt="img"/>
            </div>
        </div>
    );
}

export default Intro