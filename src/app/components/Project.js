import itsm from './../../asset/projects/itsm.png'
import security from './../../asset/projects/security.png'
import portolio from './../../asset/projects/portfolio.png'
import iengine from './../../asset/projects/iengine.png'
import inspire from './../../asset/projects/inspire.png'
import link from './../../asset/projects/link.svg';
import rms from './../../asset/projects/rms.png';
import netflix from './../../asset/projects/netflix.png';
import {Link} from "react-router-dom";
const Project = () => {
    return (
        <div className="flex flex-col fix-height h-[920px]">
            <div className="flex justify-center text-white">
                <span className="name">Projects</span>
            </div>
            <div className="grid auto-cols-[30rem] grid-flow-col overflow-x-hidden gap-4 mx-4 slider">
                <div className="w-100 slide-track h-[575px] p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl" style={{background: '#2f2f2f'}}>
                    <div className="card-itsm rounded-xl">
                        <img className="rounded-xl" src={itsm} alt="" style={{width: '470px'}}/>
                    </div>
                    <div className="p-2 h-[235px]">
                        <h2 className="font-bold text-lg mb-2 text-center text-white">ITSM</h2>
                        <h4 className="font-bold text-lg mb-2 text-center text-white">Intelligent Telecom Site Management System</h4>
                        <p className="text-sm text-center text-white">Intelligent Telecom Site Management System (ITSM) refers to a specialized system
                            or platform used in the telecommunications industry to efficiently manage and monitor telecom sites and
                            related infrastructure. The aim of ITSM in this context is to enhance the operational efficiency,
                            performance, and maintenance of telecom sites, which are critical for providing communication services.</p>
                    </div>
                    <div className="card-info text-center text-white">Javascript | Angular > 8 | Typescript | Bootstrap | SASS | REDUX | NPM</div>
                </div>
                <div className="w-100 slide-track h-[575px] p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl text-white" style={{background: '#2f2f2f'}}>
                    <div className="card-itsm rounded-xl">
                        <img className="rounded-xl" src={inspire} alt="" style={{width: '470px'}}/>
                    </div>
                    <div className="p-2 h-[235px] text-center">
                        <h2 className="font-bold text-lg mb-2 ">Inspire SuperMart</h2>
                        <h4 className="font-bold text-lg mb-2 ">Online Grocery Shopping Platform</h4>
                        <p className="text-sm">"Inspire Super Mart" is a comprehensive site encompassing grocery items,
                            a sophisticated cart system, and intuitive filtering capabilities.
                            This project aims to revolutionize the online shopping experience for groceries,
                            offering convenience, efficiency, and an extensive selection of products.
                            With robust features such as seamless navigation, personalized cart management,
                            and dynamic filtering options, Inspire Super Mart sets a new standard for online grocery shopping platforms.</p>
                    </div>
                    <div className="card-info text-center text-white">Javascript | Angular > 8 | Typescript | Bootstrap | SASS | NPM</div>
                    <Link to="https://inspiresupermarket.com/#/" target="_blank"><img src={link} alt="link-icon" className='shadow-xl' style={{position: 'absolute',top: '2.3%',right: '3%'}}/></Link>
                </div>
                <div className="w-100 slide-track h-[575px] p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl text-white" style={{background: '#2f2f2f'}}>
                    <div className="card-itsm rounded-xl">
                        <img className="rounded-xl" src={iengine} alt="" style={{width: '470px'}}/>
                    </div>
                    <div className="p-2 h-[235px]">
                        <h2 className="font-bold text-lg mb-2 text-center">I-ENGINE</h2>
                        <h4 className="font-bold text-lg mb-2 text-center">IEngine ~ End To End Solutions</h4>
                        <p className="text-sm text-center">Essential modules include Inventory, Assets, Live Site Management, Auto Tickets System, and RAN.
                            These handle tracking assets, managing telecom items, real-time site monitoring, automated issue handling, and optimizing the radio access network.</p>
                    </div>
                    <div className="card-info text-center">Javascript | Angular > 14 | Typescript | Bootstrap | SASS | REDUX | NebularUI</div>
                </div>
                <div className="w-100 slide-track h-[575px] p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl text-white" style={{background: '#2f2f2f'}}>
                    <div className="card-itsm rounded-xl">
                        <img className="rounded-xl" src={netflix} alt="" style={{width: '470px'}}/>
                    </div>
                    <div className="p-2 h-[235px] text-center">
                        <h2 className="font-bold text-lg mb-2 ">NETFLIX-GPT</h2>
                        <h4 className="font-bold text-lg mb-2 ">Netflix Open AI Combo</h4>
                        <p className="text-sm">Intelligent Telecom Site Management System (ITSM) refers to
                            a specialized system
                            or platform used in the telecommunications industry to efficiently manage and monitor
                            telecom sites and
                            related infrastructure. The aim of ITSM in this context is to enhance the operational
                            efficiency,
                            performance, and maintenance of telecom sites, which are critical for providing
                            communication services.</p>
                    </div>
                    <div className="card-info text-center text-white">Javascript | Angular > 8 | Typescript | Bootstrap | SASS | REDUX | NPM</div>
                    <Link to="https://netflix-talk.web.app/" target="_blank"><img src={link} alt="link-icon" className='shadow-xl' style={{position: 'absolute',top: '2.3%',right: '3%'}}/></Link>
                </div>
                <div className="w-100 slide-track h-[575px] p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl text-white" style={{background: '#2f2f2f'}}>
                    <div className="card-itsm rounded-xl">
                        <img className="rounded-xl" src={rms} alt="" style={{width: '470px'}}/>
                    </div>
                    <div className="p-2 h-[235px] text-center">
                        <h2 className="font-bold text-lg mb-2 ">RMS</h2>
                        <h4 className="font-bold text-lg mb-2 ">Remote Monitoring System</h4>
                        <p className="text-sm">The RMS (Remote Monitoring System) is a cutting-edge solution that utilizes advanced algorithms to detect filling levels, theft, and consumption patterns in liquid storage tanks. With reduced noise and calibrated measurements for irregularly shaped tanks, the RMS achieves a remarkable 90% improvement in accuracy compared to traditional systems.</p>
                    </div>
                    <div className="card-info text-center text-white">Javascript | Angular > 8 | Typescript | Bootstrap | SASS | REDUX | NPM</div>
                </div>
                <div className="w-100 slide-track h-[575px] p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl text-white" style={{background: '#2f2f2f'}}>
                    <div className="card-itsm rounded-xl">
                        <img className="rounded-xl" src={portolio} alt="" style={{width: '470px'}}/>
                    </div>
                    <div className="p-2 h-[235px] text-center">
                        <h2 className="font-bold text-lg mb-2 ">PORTFOLIO</h2>
                        <h4 className="font-bold text-lg mb-2 ">Portfolio for show case</h4>
                        <p className="text-sm">portfolio offers a concise snapshot of my skills and experiences,
                            featuring a variety of projects across different domains. From web development to data analysis,
                            each project highlights my ability to deliver quality solutions and drive results.
                            It serves as a testament to my expertise and commitment to excellence in the field of technology.</p>
                    </div>
                    <div className="card-info text-center">Javascript | React.JS | Tailwind | SASS | NPM</div>
                    <Link to="https://hsn-ali.github.io/portfolio/" target="_blank"><img src={link} alt="link-icon" className='shadow-lg' style={{position: 'absolute',top: '3%',right: '4%'}}/></Link>
                </div>
            </div>
        </div>
    );
}

export default Project