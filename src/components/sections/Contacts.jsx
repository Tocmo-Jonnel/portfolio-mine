import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contacts = () => {
  return (
    <section id="contacts" 
            className="min-h-screen flex items-center justify-center ralative">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center z-10 x-4">

                <h1 className="text-5xl md:text-7xl font-bold mb-6 
                                bg-gradient-to-r from-blue-500 to-cyan-400 
                                bg-clip-text text-transparent leading-right">
                                    Contact Me
                </h1>
                
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm always open to discussing projects, collaborations, or just connecting. Feel free to reach out through any of the platforms below!
                </p>

                <div className="flex justify-center space-x-6 text-3xl">

                    <a href="https://www.linkedin.com/in/jonnel-tocmo-752a13319/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/Tocmo-Jonnel" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white">
                        <FaGithub />
                    </a>

                    <a href="mailto:your.jonneltocmo137@gmail.com" className="hover:text-red-600">
                        <MdEmail />
                    </a>

                    <a href="https://www.facebook.com/nneltocs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <FaFacebook />
                    </a>
                </div>
            </div>
    </RevealOnScroll>
    </section>
  );
}
