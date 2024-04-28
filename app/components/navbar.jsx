import Image from "next/image";
import logo from './logo.png'
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="main-nav">
            <Image
                src={logo}
				alt="Tech Ascend Logo"
				width={52.75}
				quality={100}	// setting quality of image to 100%
            />
			<ul>
				<li><Link href='/'>Home</Link></li>
				<li><button 
					type="button" id="community" 
					aria-expanded='true' aria-haspopup='true'
				>
					Community
				</button></li>
				<li>Programs</li>
				<li>Career Readiness</li>
				<li>About Us</li>
				<li>Contact Us</li>
				<li>Get Started</li>
				<li>Login</li>
			</ul>

			<div className="absolute" role="menu"></div>
        </nav>
    )
}