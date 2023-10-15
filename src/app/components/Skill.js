import js from '../../asset/skills/js.svg'
import ts from '../../asset/skills/typescript.svg'
import redux from '../../asset/skills/redux.svg'
import css from '../../asset/skills/css.svg'
import sass from '../../asset/skills/sass.svg'
import html from '../../asset/skills/html.svg'
import react from '../../asset/skills/react.svg'
import angular from '../../asset/skills/angular.svg'
const Skill = () => {
    return (
        <div className="container">
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
    );
}

export default Skill