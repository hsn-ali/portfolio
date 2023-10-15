import {Header} from "./Header";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Intro from "./Intro";

const Layout = () => {
    return (
        <div>
            <div className="head">
                <Header/>
            </div>
            <section className="mb-5 md:mb-20 position-relative">
                <Intro/>
            </section>
            <div>
                <Project/>
            </div>
            <div><Skill/></div>
            <div><About/></div>
            <div><About/></div>


        </div>
    )
}

export default Layout