export const Projects = () => {

    return (
        <section
            id="projects" className="min-h-screen flex items-center justify-center py-20">

                <div className="max-w-5xl mx-auto px-4">

                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r 
                        from-blue-500 to-cyan-400 bg-clip-text text-transparent 
                        text-center">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 
                            hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            <h3 className="text-xl font-bold mb-2">Barangay Information System (Capstone Project)</h3>
                            <p className="text-gray-100 mb-3">Led Full-Stack Development of a Scalable Community Management System</p>

                            <div className="flex flex-wrap gap-2">

                                {[
                                    "React", 
                                    "NodeJs", 
                                    "Laravel", 
                                    "BootStrap", 
                                    "AWS Lightsail", 
                                    "MySQL"
                                ].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1
                                        px-3 rounded-full text-sm
                                        hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                            </div>

                            <div className="flex justify-end items-center">
                                    <a href="#" className="text-blue-400 
                                        hover:text-blue-300 
                                        transition-colors my-4"> 
                                        View Project ➣ 
                                    </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 
                            hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            <h3 className="text-xl font-bold mb-2">PUP Connect</h3>
                            <p className="text-gray-100 mb-3">Build a Student-Centered Job Hunt Web Application for Students to Share Knowledge and Make Income</p>

                            <div className="flex flex-wrap gap-2 mb-7">

                                {[
                                    "Angular", 
                                    "NodeJs", 
                                    "Vanilla PHP", 
                                    "BootStrap", 
                                    "MySQL"
                                ].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1
                                        px-3 rounded-full text-sm
                                        hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                            </div>

                            <div className="flex justify-end items-center">
                                    <a href="#" className="text-blue-400 
                                        hover:text-blue-300 
                                        transition-colors my-4"> 
                                        View Project ➣ 
                                    </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 
                            hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            <h3 className="text-xl font-bold mb-2">eCommerce Platform</h3>
                            <p className="text-gray-100 mb-3">eCommerce Web Application that Focuses on Seller Side for Product Listings.</p>

                            <div className="flex flex-wrap gap-2">

                                {[
                                    "Angular", 
                                    "NodeJs", 
                                    "Vanilla PHP", 
                                    "BootStrap", 
                                    "MySQL"
                                ].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1
                                        px-3 rounded-full text-sm
                                        hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                            </div>

                            <div className="flex justify-end items-center">
                                    <a href="#" className="text-blue-400 
                                        hover:text-blue-300 
                                        transition-colors my-4"> 
                                        View Project ➣ 
                                    </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 
                            hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            <h3 className="text-xl font-bold mb-2">TOO EZ</h3>
                            <p className="text-gray-100 mb-3">Build Game Application Inspired on Trap Game Adventure 2. "The Easiest Game Ever"</p>

                            <div className="flex flex-wrap gap-2 mb-8">

                                {[
                                    "Itch.io",
                                    "LowCode",
                                    "Game",
                                    "Trap World"
                                ].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1
                                        px-3 rounded-full text-sm
                                        hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                            </div>

                            <div className="flex justify-end items-center">
                                    <a href="#" className="text-blue-400 
                                        hover:text-blue-300 
                                        transition-colors my-4"> 
                                        View Project ➣ 
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>

        </section>
    );
}