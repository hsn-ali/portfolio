
import svg from './../../asset/projects/itsm.svg'
import img from './../../asset/info/Frame 1.png'
import {Link} from "react-router-dom";
const Intro = () => {
    return (
        <div className="container fix-height">
            <div className="row d-flex align-items-center">
                <div className="col-4">
                    <div className="d-flex flex-column align-items-start text-white">
                        <div className="p-2">
                            <h1 className="custom-h1">HI THERE 👋🏻, I'M</h1>
                        </div>
                        <div className="typewriter p-2">
                        <div className="typewriter-text name-animation">Hassan.</div>
                    </div>
                        <div className="p-2">
                            <h1 className="custom-h1">Full Stack Developer 🧑🏻‍💻 </h1>
                        </div>
                        <div className="p-2">
                            <h1 className="custom-h1 summary">I develop web apps using Java as backend and Angular and React on frontend 🧑🏻‍💻 </h1>
                        </div>
                        <Link to="https://github.com/hsn-ali/portfolio/blob/main/Umair%20CV-converted.pdf">
                            <button className="btn-lg custom-btn">Resume</button>
                        </Link>
                    </div>
                </div>
                <div className="col flex justify-end">
                    <img src={img} height="450"/>
                </div>
            </div>
        </div>
    );
}

export default Intro