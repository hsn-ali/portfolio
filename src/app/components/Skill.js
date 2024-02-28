import js from '../../asset/skills/js.svg'
import ts from '../../asset/skills/typescript.svg'
import redux from '../../asset/skills/redux.svg'
import css from '../../asset/skills/css.svg'
import sass from '../../asset/skills/sass.svg'
import html from '../../asset/skills/html.svg'
import react from '../../asset/skills/react.svg'
import angular from '../../asset/skills/angular.svg'
import figma from './../../asset/skills/figma.svg'
const Skill = () => {
    return (
        <div className="flex flex-col fix-height">
            <div className="flex justify-center text-white py-5">
                <span className="name">Skills</span>
            </div>
            <div className="grid sm:grid-cols-1 gap-4 mx-4 text-white text-center">
                <div className="p-2">
                    <span className="description">I try to take responsibility to craft interactive user experience using <br/> modern frontend architecture</span>
                </div>
                <div className="p-2 text-2xl py-10">
                    <h1>FRONTEND DEVELOPMENT</h1>
                </div>
                <div className="grid sm:grid-cols-9" style={{padding: '25px 0'}}>
                    <div className="flex justify-center tool" data-tip="TypeScript">
                        <img src={ts} alt="" style={{cursor: 'pointer'}}/>
                    </div>
                    <div className="flex justify-center tool" data-tip="Angular">
                        <img src={angular} alt="" style={{cursor: 'pointer'}}/>
                    </div>
                    <div className="flex justify-center tool" data-tip="JavaScript">
                        <img src={js} alt="" style={{cursor: 'pointer'}}/>
                    </div>
                    <div className="flex justify-center tool" data-tip="React.js">
                        <img src={react} alt="" style={{cursor: 'pointer'}}/>
                    </div>
                    <div className="flex justify-center tool" data-tip="Redux">
                        <img src={redux} alt="" style={{cursor: 'pointer'}}/>
                    </div>
                    <div className="flex justify-center tool" data-tip="HTML5">
                        <img src={html} alt="" style={{cursor: 'pointer'}}/>
                    </div>
                    <div className="flex justify-center tool" data-tip="CSS3">
                        <img src={css} alt="" style={{cursor: 'pointer'}}/>
                    </div>
                    <div className="flex justify-center tool" data-tip="SASS">
                        <img src={sass} alt="" style={{cursor: 'pointer'}}/>
                    </div>
                    <div className="flex justify-center tool" data-tip="Figma">
                        <img src={figma} alt="" style={{cursor: 'pointer'}}/>
                    </div>
                </div>
                <div className="p-2 text-2xl py-10">
                    <h1>BACKEND DEVELOPMENT</h1>
                </div>
                <div className="grid sm:grid-cols-8" style={{padding: '25px 0'}}>
                    <div className="flex justify-center">
                        <img src={js} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="JavaScript"/>
                    </div>
                    <div className="flex justify-center">
                        <img src={ts} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="TypeScript"/>
                    </div>
                    <div className="flex justify-center">
                        <img src={react} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="ReactJs"/>
                    </div>
                    <div className="flex justify-center">
                        <img src={redux} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="Redux"/>
                    </div>
                    <div className="flex justify-center">
                        <img src={html} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="HTML"/>
                    </div>
                    <div className="flex justify-center">
                        <img src={css} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="CSS"/>
                    </div>
                    <div className="flex justify-center">
                        <img src={sass} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="SASS"/>
                    </div>
                    <div className="flex justify-center">
                        <img src={angular} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="Angular"/>
                    </div>
                </div>
            </div>
        </div>
    );
        /*<div className="container">
            <div className="row">
                <h1>Skills</h1>
                <div className="col-12">
                    <div className="d-flex flex-column align-items-start text-white" style={{'rowGap': '20px'}}>
                        <div className="p-2">
                            <span className="name">My Skills</span>
                        </div>
                        <div className="p-2">
                            <span className="description">I try to take responsibility to craft interactive user experience using <br/> modern frontend architecture</span>
                        </div>
                        <div className="p-2">
                            <h1>FRONTEND DEVELOPMENT</h1>
                        </div>
                        <div className="row" style={{'columnGap': '25px', padding: '25px 0'}}>
                            <div className="col">
                                <img src={js} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="JavaScript"/>
                            </div>
                            <div className="col">
                                <img src={ts} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="TypeScript"/>
                            </div>
                            <div className="col">
                                <img src={react} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="ReactJs"/>
                            </div>
                            <div className="col">
                                <img src={redux} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="Redux"/>
                            </div>
                            <div className="col">
                                <img src={html} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="HTML"/>
                            </div>
                            <div className="col">
                                <img src={css} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="CSS"/>
                            </div>
                            <div className="col">
                                <img src={sass} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="SASS"/>
                            </div>
                            <div className="col">
                                <img src={angular} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="Angular"/>
                            </div>
                        </div>
                        <div className="p-2">
                            <h1>BACKEND DEVELOPMENT</h1>
                        </div>
                        <div className="row" style={{'columnGap': '25px', padding: '25px 0'}}>
                            <div className="col">
                                <img src={js} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="JavaScript"/>
                            </div>
                            <div className="col">
                                <img src={ts} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="TypeScript"/>
                            </div>
                            <div className="col">
                                <img src={react} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="ReactJs"/>
                            </div>
                            <div className="col">
                                <img src={redux} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="Redux"/>
                            </div>
                            <div className="col">
                                <img src={html} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="HTML"/>
                            </div>
                            <div className="col">
                                <img src={css} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="CSS"/>
                            </div>
                            <div className="col">
                                <img src={sass} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="SASS"/>
                            </div>
                            <div className="col">
                                <img src={angular} alt="" style={{cursor: 'pointer'}} data-toggle="tooltip" data-placement="top" title="Angular"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );*/
}

export default Skill