import about from "../../asset/about/about.jpeg"
const About = () => {
    return (
        <div className="container fix-height">
            <div className="row">
                <h1>About Section</h1>
                <div className="col-4">
                    <div className="d-flex flex-column align-items-start text-white">
                        <div className="p-2">
                            <span>Know</span>
                        </div>
                        <div className="p-2">
                            <span className="name-animation">About Me</span>
                        </div>
                        <div className="p-2 div-text">
                            <span>A Little Something 🧑🏻‍💻 </span>
                        </div>
                        <div className="p-2 div-text">
                            <span style={{'lineHeight': '1.9rem', 'fontSize': '14px'}}>Hello, My name is Hassan Ali and I enjoy creating things on internet.
                            I'm Full Stack Developer having very strong foundation on Frontend Side and focuses
                            on crafting clean and user-friendly experience</span>
                        </div>
                        <div className="p-2 div-text">
                            <span style={{'lineHeight': '1.9rem', 'fontSize': '14px'}}>I'm passionate about translating ideas into reality through collaboration
                                and continuous learning. I stay updated with the latest trends, actively engage in projects,
                                and value mentorship for meaningful impact in various settings.</span>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <img src={about} alt="" style={{height: "300px", borderRadius: '50px'}}/>
                </div>
            </div>
        </div>
    );
}

export default About