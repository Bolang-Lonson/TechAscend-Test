import Image from "next/image";
import Link from "next/link";
import logo from "./logo.png"

const Footer = () => {
    return (
        <footer className="md:py-10 bg-primary text-white">
            <div className="container mx-auto px-2 py-10">
                <div className="flex flex-row">
                    <div style={{flexBasis: "20%"}}>
                        <Image
                            src={logo}
                            alt="logo"
                            width={60} height={60}
                        />
                    </div>
                    <div className="flex flex-col" style={{flexBasis: "80%"}}>
                        <div className="grid grid-cols-5">
                            <div className="flex flex-col">
                                <h5 className="text-xl font-black mb-6">For Companies</h5>
                                <ul>
                                    <li className="mb-4">
                                        <Link href="#">Enterprise</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">How It Works</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Browse Talent</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Request a Quote</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <h5 className="text-xl font-black mb-6">For Talent</h5>
                                <ul>
                                    <li className="mb-4">
                                        <Link href="#">For Technologists</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">TechAscend Learning Community</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Find Jobs</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <h5 className="text-xl font-black mb-6">Our Services</h5>
                                <ul>
                                    <li className="mb-4">
                                        <Link href="#">Job Fairs</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Skill Workshops</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Networking Events</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Mentorship Programs</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Programs</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <h5 className="text-xl font-black mb-6">Why TechAscend</h5>
                                <ul>
                                    <li className="mb-4">
                                        <Link href="#">About Us</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Blog</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Resources</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Customer Stories</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Careers</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Contact HQ</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <h5 className="text-xl font-black mb-6">Login</h5>
                                <ul>
                                    <li className="mb-4">
                                        <Link href="#">Client Login</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Talent Login</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#">Student Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-16"></div>
                    </div>
                </div>
                <hr />
                <p className="text-white">&copy; 2024 TechAscend. All rights reserved.</p>
            </div>
        </footer>
    )
};

export default Footer