import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaAt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Home = () => {


    return ( 
        <div className="home h-screen bg-black">
            <Navbar/>
            <div className="p-4 mt-16 items-center space-y-2 lg:justify-around lg:mx-auto lg:max-w-xl lg:mt-8">
                <h1 class="top-3 text-cyan-500 text-4xl lg:text-6xl"><span><p id="txtMob" class="text-sm text-black ease-in duration-500 lg:text-2xl">Hello, I Am</p></span><b>ONYEKA<br/><span id="txt2" className="text-white text-3xl hover:text-cyan-500 ease-in duration-500 lg:text-5xl">BENEDICT OMEWU</span></b><br/><span id="txtJob" className="inline-block text-white text-xl mt-2 ease-in duration-500 lg:text-4xl lg:mt-5">I am a Fullstack Web Developer <br/>and Tech fanatic.</span></h1>
                <p id="txt1" class="text-white text-justify ease-in duration-500 lg:text-xl lg:pt-4 lg:max-w-sm">Designing intuitive websites that turn complex tasks into digital ease, 
                I ensure stress-free solutions for groups and individuals alike.</p>
                <ul className="flex lg:pt-2">
                    <FaAt className="text-2xl text-white hover:text-cyan-500 ease-in duration-500"/>
                    <Link to="https://twitter.com/Benedic98349748"><FaTwitter className="text-2xl text-white ml-4 lg:ml-20 hover:text-cyan-500 ease-in duration-500"/></Link>
                    <Link to="https://github.com/BenChris090"><FaGithub className="text-2xl text-white ml-4 lg:ml-20 hover:text-cyan-500 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com/in/niklaus-omewu-63a7b7247"><FaLinkedin className="text-2xl text-white ml-4 lg:ml-20 hover:text-cyan-500 ease-in duration-500"/></Link>
                </ul>
            </div>
        </div>
     );
}
 
export default Home;