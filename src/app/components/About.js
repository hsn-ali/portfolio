// import about from "../../asset/about/about.jpeg"
import about from "../../asset/info/Frame 2.png"
import {Link} from "react-router-dom";
const About = () => {
    return (
        <div className="flex flex-col fix-height">
            <div className="flex justify-center text-white">
                <span className="name">About</span>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center gap-4 h-[860px] mt-[-50px]">
                    <div className="flex flex-col items-center justify-center text-white">
                        <div className="text-center sm:text-left">
                        <div className="p-2 text-center">
                            <span>Know</span>
                        </div>
                        <div className="p-2 text-center">
                            <span className="text-white">About Me</span>
                        </div>
                        <div className="p-2 div-text text-center">
                            <span>A Little Something 🧑🏻‍💻 </span>
                        </div>
                        <div className="p-2 div-text pl-[70px]">
                            <span style={{'lineHeight': '1.9rem', 'fontSize': '14px'}}>Hello, My name is Hassan Ali and I enjoy creating things on internet. <br/>
                            I'm Full Stack Developer having very strong foundation on Frontend Side and focuses <br/>
                            on crafting clean and user-friendly experience</span>
                        </div>
                        <div className="p-2 div-text pl-[70px]">
                            <span style={{'lineHeight': '1.9rem', 'fontSize': '14px'}}>I'm passionate about translating ideas into reality through collaboration <br/>
                                and continuous learning. I stay updated with the latest trends, actively engage in projects, <br/>
                                and value mentorship for meaningful impact in various settings.</span>
                        </div>
                        </div>
                    </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={about} alt="" style={{height: "550px"}}/>
                </div>
            </div>
        </div>
    );
}

export default About