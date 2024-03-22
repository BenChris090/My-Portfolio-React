import { Link, NavLink } from "react-router-dom";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa"
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
    let ICE_LOGO =  require('./ICE_LOGO.png');
    const [mNav, setmNav] = useState("none")
    const { theme, toggleTheme } = useTheme();

    const toggleNav = () => {
        if (mNav === "none"){
            setmNav("block")
        }else{
            setmNav("none")
        };
    }

    const setNav = () => {
        toggleNav()
        document.getElementById("mNav").style.display = mNav
    }
    
    return ( 
        <nav className="flex p-2 px-6 bg-black items-center justify-between space-x-auto max-w-full">
            {/* mobile nav starts here */}
            <div id="mNav" className="h-screen w-screen space-y-auto text-center items-center justify-center hidden z-10 fixed left-0 top-0 bg-black overflow-x-hidden overflow-y-auto ease-in duration-500">
                <div className="p-4 m-2 h-3/4">
                    <FaTimes className="text-2xl text-cyan-500 ml-auto mb-8" onClick={setNav}/>
                    <NavLink to="/" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: '#2F4F4F'})}  className="mt-5 text-center space-y-2 block hover:text-cyan-500 ease-in duration-500 text-xl">HOME</NavLink>
                    <NavLink to="/about" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: '#2F4F4F'})}  className="mt-10 text-center space-y-2 block hover:text-cyan-500 ease-in duration-500 text-xl">ABOUT <span>ME</span></NavLink>
                    <NavLink to="https://github.com/BenChris090?tab=repositories" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: '#2F4F4F',})}  className="mt-10 text-center space-y-2 block hover:text-cyan-500 ease-in duration-500 text-xl">OTHER <span>PROJECTS</span></NavLink>
                    <NavLink to="/contact" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: '#2F4F4F'})}  className="mt-10 text-center space-y-2 block hover:text-cyan-500 ease-in duration-500 text-xl">CONTACT <span>ME</span></NavLink>
                </div>
            </div>
            <Link to="/" className="flex items-center"><img src={ ICE_LOGO } className="h-12 mr-3 sm:h-16 lg:h-16" alt="Logo" /><span className="self-center text-3xl font-semibold whitespace-nowrap text-cyan-500 lg:text-4xl">ICE_BERG</span></Link>
            <div className="bars space-x-4 flex items-center ml-36">
            {
                theme === "dark"
                ? <FaSun className="text-2xl flex text-cyan-500 my-2 lg:hidden" onClick={toggleTheme}></FaSun>
                : <FaMoon className="text-2xl flex text-cyan-500 my-2 lg:hidden" onClick={toggleTheme}></FaMoon>
            }
                <FaBars className="text-2xl flex text-cyan-500 my-2 lg:hidden" onClick={setNav}/>
            </div>
            {/* mobile nav ends here */}
            <div className="links hidden items-center text-center lg:flex lg:py-auto lg:space-x-14">
                <NavLink to="/" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: '#A9A9A9'})} className="text-xl text-gray-200 "><b>HOME</b></NavLink>
                <NavLink to="/about" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: '#A9A9A9'})} className="flex text-gray-200 text-xl hover:text-cyan-500 ease-in duration-500"><b>ABOUT ME</b></NavLink>
                <NavLink to="https://github.com/BenChris090?tab=repositories" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: '#A9A9A9'})} className="flex text-gray-200 text-xl hover:text-cyan-500 ease-in duration-500"><b>OTHER PROJECTS</b></NavLink>
                <NavLink to="/contact" style={({ isActive }) => (isActive ? {color: '#06b6d4'} : {color: '#A9A9A9'})} className=" text-gray-200 text-xl hover:text-cyan-500 ease-in duration-500"><b>CONTACT ME</b></NavLink>
                <FaSun style={(theme === "dark" ? {display: 'flex'} : {display: 'none'})} className="text-2xl flex text-cyan-500 my-2" onClick={toggleTheme}></FaSun>
                <FaMoon style={(theme === "dark" ? {display: 'none'} : {display: 'flex'})} className="text-2xl flex text-cyan-500 my-2" onClick={toggleTheme}></FaMoon>
                <Link to="mailto:benedictchrstn@gmail.com" className="text-gray-300 border-2 border-gray-400 rounded-3xl px-4 hover:text-cyan-500 hover:border-cyan-500 ease-in duration-500 text-xl">HIRE ME</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;