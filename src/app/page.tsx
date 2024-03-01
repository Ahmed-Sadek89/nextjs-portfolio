import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full px-5 py-1 md:py-5 md:px-32 flex flex-col md:flex-row gap-5 items-baseline md:items-center">
      <section className="w-full h-1/2 md:h-full relative flex-1">
        <Image src={'/hero.png'} alt="hero" fill  />
      </section>
      <section className="w-full md:w-1/2 h-1/2 md:h-full flex-1 flex flex-col gap-2 justify-center">
        <h2 className="leading-tight text-xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h2>
        <p className="leading-tight  text-sm md:text-base">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        <div className="flex flex-row items-center gap-2 flex-wrap">
          <button className="bg-black text-white rounded-lg p-3">View My Work</button>
          <button className="bg-white text-black rounded-lg p-3 border-black border-[1px]">Contact Us</button>
        </div>
      </section>
    </main>
  );
}
