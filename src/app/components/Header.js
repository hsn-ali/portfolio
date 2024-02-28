
import menu from './../../asset/info/menu.svg'
export const Header = () => {
    return (
        <div className="flex justify-between p-2 px-5 header">
            <div></div>
            {/*<div style={{color: "white"}}><h3>logo <img src="" alt=""/></h3></div>*/}
            <div style={{color: "white"}} onClick={() => {alert('Under Development')}} className="cursor-pointer"><img src={menu} alt="menu"/></div>
    </div>)
}