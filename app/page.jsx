import Image from "next/image";
import image1 from "./components/card-img1.webp"
import image2 from "./components/card-img2.webp"
import image3 from "./components/card-img3.webp"
import image4 from "./components/card-img4.webp"

export default function Home() {
  return (
    <main>
      <section id="top-section">
        <div>
          <h1>Nurturing Tech Potential: The TechAscend Experience</h1>
          <p className="text-xl">TechAscend empowers tech enthusiasts and professionals to excel in the rapidly evolving tech landscape. Our expert-led talks, hands-on workshops, and networking events are designed to foster innovation, skill development, and community engagement. Join us to transform your potential into success and be part of a community that values growth and achievement in the tech realm.</p>
          <button className="primary-btn">Learn more</button>
        </div>
        <div>
          <iframe src="https://www.youtube.com/embed/tUP5S4YdEJo?si=DX9J7pDqedA4QDeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      <section>
        <div id="banner1">
          <p>Unlock Tech Riches in 2024</p>
          <p>location: Bolo89, Douala(Akwa North), CMR</p>
          <p>Sat Feb 03 2024 14:00:00 GMT+0100</p>
          <button>RSVP</button>
        </div>
        <h1 className="text-primary text-center mt-16">Our Core Values</h1>
        <div id="banner2">
          <div>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-yellow-300 mx-auto" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M464.8 80c-26.9-.4-48.8 21.2-48.8 48h-8V96.8c0-26.3-20.9-48.3-47.2-48.8-26.9-.4-48.8 21.2-48.8 48v32h-8V80.8c0-26.3-20.9-48.3-47.2-48.8-26.9-.4-48.8 21.2-48.8 48v48h-8V96.8c0-26.3-20.9-48.3-47.2-48.8-26.9-.4-48.8 21.2-48.8 48v136l-8-7.1v-48.1c0-26.3-20.9-48.3-47.2-48.8C21.9 127.6 0 149.2 0 176v66.4c0 27.4 11.7 53.5 32.2 71.8l111.7 99.3c10.2 9.1 16.1 22.2 16.1 35.9v6.7c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24v-2.9c0-12.8 2.6-25.5 7.5-37.3l49-116.3c5-11.8 7.5-24.5 7.5-37.3V128.8c0-26.3-20.9-48.4-47.2-48.8z"></path></svg>
            <h4>Empowerment</h4>
            <small className="text-center text-gray-300">Inspiring confidence and providing the tools to enable personal and professional growth.</small>
          </div>
          <div>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-yellow-300 mx-auto" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path></svg>
            <h4>Innovation</h4>
            <small>Fostering creativity and striving for technological breakthroughs.</small>
          </div>
          <div>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-yellow-300 mx-auto" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
            <h4>Community</h4>
            <small>Building a supportive network of passionate individuals.</small>
          </div>
          <div>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-yellow-300 mx-auto" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"></path></svg>
            <h4>Excellence</h4>
            <small>Pursuing excellence in everything we do, setting high standards.</small>
          </div>
        </div>
        <h1 className="text-primary text-center mt-10">Our Services</h1>
        <div className="card-grid">
          <div className="card shadow-lg">
            <Image
              src={image1}
              alt="Ascend Talks"
              className="card-img"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Ascend Talks</h3>
              <p class="text-gray-600 text-sm">Gain insights from industry experts and stay ahead in the tech world.</p>
              <a href="#" class="text-primary hover:text-blue-500 font-bold transition-colors mt-4 inline-flex items-center">See More →</a>
            </div>
          </div>
          <div className="card shadow-lg">
            <Image
              src={image2}
              alt="Skill Workshops"
              className="card-img"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Skill Workshops</h3>
              <p class="text-gray-600 text-sm">Hands-on workshops to enhance your skills and knowledge.</p>
              <a href="#" class="text-primary hover:text-blue-500 font-bold transition-colors mt-4 inline-flex items-center">See More →</a>
            </div>
          </div>
          <div className="card shadow-lg">
            <Image
              src={image3}
              alt="Networking Events"
              className="card-img"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Networking Events</h3>
              <p class="text-gray-600 text-sm">Connect with fellow developers and expand your professional network.</p>
              <a href="#" class="text-primary hover:text-blue-500 font-bold transition-colors mt-4 inline-flex items-center">See More →</a>
            </div>
          </div>
          <div className="card shadow-lg">
            <Image
              src={image4}
              alt="Mentorship Program"
              className="card-img"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Mentorship Program</h3>
              <p class="text-gray-600 text-sm">Get guidance from experienced mentors in the tech industry.</p>
              <a href="#" class="text-primary hover:text-blue-500 font-bold transition-colors mt-4 inline-flex items-center">See More →</a>
            </div>
          </div>
        </div>
      </section>
      <section className="px-64 py-8">
        <h1 className="text-center font-black text-primary">Join the TechAscend Community</h1>
        <div className="card p-6 my-6">
          <p className="text-xl">TechAscend strives to ascend to new heights as a leading technology company by leveraging innovation, fostering a sense of community, empowering individuals, and upholding a commitment to excellence. Our objective is to pioneer groundbreaking solutions, create a collaborative and inclusive community, empower individuals to reach their full potential, and consistently deliver excellence in all aspects of our business. Through these core values, we aim to make a positive impact on the tech industry and contribute to the advancement of society as a whole</p>
        </div>
        <button className="bg-yellow-400 text-white px-8 py-4 rounded-full block mx-auto">Join The Community</button>
      </section>
    </main>
  );
}
