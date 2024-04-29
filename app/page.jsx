import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h1 className="">Nurturing Tech Potential: The TechAscend Experience</h1>
          <p>TechAscend empowers tech enthusiasts and professionals to excel in the rapidly evolving tech landscape. Our expert-led talks, hands-on workshops, and networking events are designed to foster innovation, skill development, and community engagement. Join us to transform your potential into success and be part of a community that values growth and achievement in the tech realm.</p>
          <button className="rounded-full bg-primary text-white px-8 py-3">Learn more</button>
        </div>
        <div>
          <iframe src="https://www.youtube.com/embed/tUP5S4YdEJo?si=DX9J7pDqedA4QDeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
    </main>
  );
}
