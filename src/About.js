import { FaTerminal } from "react-icons/fa";
import Navbar from "./Navbar";

const About = () => {
    let ICE_LOGO =  require('./ICE_LOGO.png');

    return ( 
        <div className="about min-h-screen h-full bg-black">
            <Navbar/>
            <div className="flex p-4 mt-7 max-w-screen-md lg:justify-around lg:mx-auto lg:px-auto lg:max-w-6xl lg:mt-10">
                <div className="space-y-4 w-full pt-7 lg:overflow-y-auto lg:w-2/3 lg:py-2">
                    <h1 className="flex space-x-2 text-white text-3xl lg:text-6xl"><span><FaTerminal className="text-cyan-500"/></span><b>About_Me</b></h1>
                    <p className="text-white text-lg text-justify">Hello World, my name is Onyeka Benedict Omewu, I am a very dedicated and improvement prone Full-stack web developer with 6+ years of experience with Back-end and 5+ years of experience with Front-end,
                        i'm also a Tech fanatic who is always curious and ready to learn and solve any bugs in this amazing ecosystem. I enjoy bouncing ideas off my friends and colleagues even those who aren't in the tech ecosystem,
                        because it helps assimilate different perspectives into my project.
                    </p>
                    <p className="text-white text-lg text-justify">As a dedicated web developer, I specialize in transforming complex challenges into seamless digital experiences. 
                    My mission is to empower organizations and individuals by crafting effective websites that streamline stressful tasks, making them effortlessly manageable. 
                    With a steadfast commitment to innovation and user-centric design, I ensure that every project not only meets but exceeds expectations, 
                    delivering digital simplicity in an increasingly complex world. Check out some of my work in the <span className="text-cyan-500"><b>projects</b></span> page
                    </p>
                    <p className="text-white text-lg text-justify">I am open and ready to take on job opportunities including internships where i can add value as well as further improve on my current skills and even possibly acquire more skills. 
                        If you know of any openings that match my skills and experience don't hesitate to <span className="text-cyan-500"><b>contact</b></span> me.
                    </p>
                    <p className="text-cyan-500 text-lg lg:text-xl"><a href="https://github.com/BenChris090">View My Github <span><i id="txtBod3" className="fab fa-github fa-x text-black hover:text-cyan-500 ease-in duration-500"></i></span></a></p>
                    <p className="text-cyan-500 text-lg lg:text-xl">My Skills:</p>
                    <div id="txtBod4" className="space-y-6 py-4  px-2">
                        <p className="text-white text-sm justify-between space-x-6"><span className="bg-gray-600 p-2 rounded-lg">Python</span><span className="bg-gray-600 p-2 rounded-lg">Django</span><span className="bg-gray-600 p-2 rounded-lg">Javascript</span></p>
                        <p className="text-white text-sm justify-between space-x-4"><span className="bg-gray-600 p-2 rounded-lg">React</span><span className="bg-gray-600 p-2 rounded-lg">JSON</span><span className="bg-gray-600 p-2 rounded-lg">Tailwind</span><span className="bg-gray-600 p-2 rounded-lg">Git</span></p>
                        <p className="text-white text-sm justify-between space-x-6"><span className="bg-gray-600 p-2 rounded-lg">Github</span><span className="bg-gray-600 p-2 rounded-lg">HTML5</span><span className="bg-gray-600 p-2 rounded-lg">CSS3</span></p>
                    </div>
                    <div className="p-2 lg:hidden">
                        <img src={ICE_LOGO} alt="Logo"/>
                    </div>
                </div>
                <div className="p-2 hidden lg:block lg:w-1/3 lg:h-96">
                    <img src={ICE_LOGO} alt="Logo"/>
                </div>
            </div>
        </div>
     );
}
 
export default About;