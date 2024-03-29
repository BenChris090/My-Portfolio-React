import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaTerminal, FaTwitter } from "react-icons/fa";
import Navbar from "./Navbar";

const Contact = () => {
    return ( 
        <div className="contact min-h-screen bg-black">
            <Navbar/>
            <div className="body lg:flex p-4 mt-7 lg:justify-around lg:mx-auto lg:px-auto lg:max-w-6xl lg:mt-10">
                <div className="space-y-4 w-full pt-7 lg:overflow-y-auto lg:w-1/2 lg:py-2">
                    <h1 className="flex space-x-2 text-white text-3xl lg:text-6xl"><span><FaTerminal className="text-cyan-500"/></span><b  id="txtHead" class="ease-in duration-500" >Contact_Me</b></h1>
                    <p className="text-white text-lg text-justify ease-in duration-500">Want me on a project? Don't hesitate to reach out using the form below. reach me on 
                        any of my social media accounts or just send an e-mail
                    </p>
                    <p class="flex space-x-2 text-lg lg:text-xl">
                        <Link to="https://twitter.com/Benedic98349748"><FaTwitter className="text-2xl text-white hover:text-cyan-500 ease-in duration-500"/></Link>
                        <Link to="https://github.com/BenChris090"><FaGithub className="text-2xl text-white ml-4 lg:ml-20 hover:text-cyan-500 ease-in duration-500"/></Link>
                        <Link to="https://linkedin.com/in/niklaus-omewu-63a7b7247"><FaLinkedin className="text-2xl text-white ml-4 lg:ml-20 hover:text-cyan-500 ease-in duration-500"/></Link>
                        <Link to="https://instagram.com/ice_berg0101"><FaInstagram className="text-2xl text-white ml-4 lg:ml-20 hover:text-cyan-500 ease-in duration-500"/></Link>
                    </p>
                    <div class="py-2 mt-5 lg:hidden">
                        <form action="https://formspree.io/f/xgeglqnz" method="POST">
                        <input
                            class="w-full text-white p-2 border-2 border-cyan-500 bg-gray-700 rounded-lg ease-in duration-500 mt-4"
                            type="text" name="name" placeholder="Your Name" required /> <br />
                        <input
                            class="w-full text-white p-2 border-2 border-cyan-500 bg-gray-700 rounded-lg ease-in duration-500 mt-4"
                            type="email" name="email" placeholder="Your Email" required /> <br />
                        <textarea
                            class="w-full text-white p-2 placeholder:-translate-y-0 border-2 border-cyan-500 bg-gray-700 rounded-lg ease-in duration-500 mt-4"
                            name="message" rows="10" cols="5" placeholder="Your Message" required></textarea> <br />
                        <button type="submit"
                            class="w-full p-2 text-lg border-2 border-cyan-800 bg-cyan-500 rounded-lg ease-in duration-500 mt-4">Send
                            message</button>
                        </form>
                    </div>
                </div>
                <div class="p-2 hidden lg:block lg:w-1/3">
                    <form action="https://formspree.io/f/xgeglqnz" method="POST">
                        <input
                            class="w-full text-white p-2 border-2 border-cyan-500 bg-gray-700 rounded-lg ease-in duration-500 mt-4"
                            type="text" name="name" placeholder="Name" required /> <br />
                        <input
                            class="w-full text-white p-2 border-2 border-cyan-500 bg-gray-700 rounded-lg ease-in duration-500 mt-4"
                            type="email" name="_replyto" placeholder="Email" required /> <br />
                        <textarea
                            class="w-full text-white p-2 placeholder:-translate-y-0 border-2 border-cyan-500 bg-gray-700 rounded-lg ease-in duration-500 mt-4"
                            name="message" rows="10" cols="5" placeholder="Your message" required></textarea> <br />
                        <button type="submit"
                            class="w-full p-2 text-lg border-2 border-cyan-800 bg-cyan-500 rounded-lg ease-in duration-500 mt-4">Send
                            message</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;