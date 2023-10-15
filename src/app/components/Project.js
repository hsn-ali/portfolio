import itsm from './../../asset/projects/itsm.svg'
import svg from './../../asset/projects/itsm.svg'
import e2e from './../../asset/projects/e2e.svg'
const Project = () => {
    return (
        <div className="py-lg-5 px-lg-5 fix-height">
            <div className="row">
                <h1 className="d-flex justify-content-center">Project</h1>
                <div className="col-12">
                    <div className="d-flex flex-column align-items-center text-white">
                        <div className="p-2">
                            <span>My Recent Projects</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                                <div className="card card-border mt-2">
                                    <div className="card-itsm">
                                        <img className="card-img-top" src={itsm} alt=""/></div>
                                        <div className="bg-itsm">
                                            <div className="card-title">ITSM</div>
                                            <div className="card-des text-center text-white">Intelligent Telecom Site Management System</div>
                                            <div className="card-info text-center text-white">Intelligent Telecom Site Management System (ITSM) refers to a specialized system
                                                or platform used in the telecommunications industry to efficiently manage and monitor telecom sites and
                                                related infrastructure. The aim of ITSM in this context is to enhance the operational efficiency,
                                                performance, and maintenance of telecom sites, which are critical for providing communication services.</div>
                                            <div className="card-info text-center text-white">Javascript | Angular > 8 | Typescript | Bootstrap | SASS | REDUX | NPM</div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                                <div className="card card-border-e2e mt-2">
                                    <div className="card-e2e">
                                        <img className="card-img-top" src={e2e} alt=""/></div>
                                    <div className="bg-e2e">
                                        <div className="card-title">I-ENGINE</div>
                                        <div className="card-des text-center">IEngine ~ End To End Solutions</div>
                                        <div className="card-info text-center">Essential modules include Inventory, Assets, Live Site Management, Auto Tickets System, and RAN.
                                            These handle tracking assets, managing telecom items, real-time site monitoring, automated issue handling, and optimizing the radio access network.</div>
                                        <div className="card-info text-center">Javascript | Angular > 14 | Typescript | Bootstrap | SASS | REDUX | NebularUI</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                                <div className="card card-border mt-2">
                                    <div className="card-header">
                                        <img className="card-img-top" src={svg} alt=""/></div>
                                    <div className="card-title">PORTFOLIO</div>
                                    <div className="card-des text-center">Portfolio For Showcase</div>
                                    <div className="card-info text-center">Intelligent Telecom Site Management System (ITSM) refers to a specialized system
                                        or platform used in the telecommunications industry to efficiently manage and monitor telecom sites and
                                        related infrastructure. The aim of ITSM in this context is to enhance the operational efficiency,
                                        performance, and maintenance of telecom sites, which are critical for providing communication services.</div>
                                    <div className="card-info text-center">Javascript | Angular > 8 | Typescript | Bootstrap | SASS | REDUX | NPM</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                                <div className="card card-border mt-2">
                                    <div className="card-header">
                                        <img className="card-img-top" src={svg} alt=""/></div>
                                    <div className="card-title">ITSM</div>
                                    <div className="card-des text-center">Intelligent Telecom Site Management System</div>
                                    <div className="card-info text-center">Intelligent Telecom Site Management System (ITSM) refers to a specialized system
                                        or platform used in the telecommunications industry to efficiently manage and monitor telecom sites and
                                        related infrastructure. The aim of ITSM in this context is to enhance the operational efficiency,
                                        performance, and maintenance of telecom sites, which are critical for providing communication services.</div>
                                    <div className="card-info text-center">Javascript | Angular > 8 | Typescript | Bootstrap | SASS | REDUX | NPM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project