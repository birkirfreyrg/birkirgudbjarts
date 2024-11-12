import Image from "next/image";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import HamburgerMenu from "./components/HamburgerMenu";
import FrontPageCard from "./components/FrontPageCard";

const desc1 = `I’m a computer scientist with a degree from the University of Iceland, driven by a passion for building things through programming. With a strong foundation in software and web development, I’m currently focused on personal projects that push my skills and allow me to explore new technologies. However, I’m also actively seeking opportunities to contribute my expertise professionally in web or software development.`;
const desc2 = `Outside of coding, I stay active through regular exercise and enjoy creative outlets like video games. I'm always eager to tackle new challenges and grow my skill set. If you’re looking for a dedicated developer with a love for problem-solving and continuous learning, let’s connect!`;
const desc3 = `Feel free to explore my work under the Portfolio tab! There, you’ll find a selection of my projects showcasing my skills in web and software development. Each project reflects my dedication to quality, creativity, and problem-solving—take a look and see what I’ve been building!`;
export default function Home() {
  return (
    <>
      <HamburgerMenu />
      <Wrapper>
        <Title title="Birkir Freyr Guðbjartsson" />
        <Nav />
        <div className=" flex flex-col justify-center items-center mt-6 md:mt-14 w-full">
          <FrontPageCard
            imageUrl="/gradpic.jpg"
            altText="Birkir Freyr"
            title="Hello, I'm Birkir Freyr"
            textContent={[desc1, desc2, desc3]}
            link="/contact"
          />
        </div>
      </Wrapper>
    </>
  );
}
