import Image from "next/image";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import HamburgerMenu from "./components/HamburgerMenu";

export default function Home() {
  return (
    <>
      <HamburgerMenu />
      <Wrapper>
        <Title title="Birkir Freyr Guðbjartsson" />
        <Nav />
        <div className=" flex flex-col justify-center items-center mt-14 w-full">
          <Image
            className=" h-3/6 mb-14 w-80 sm:w-2/5"
            src="/gradpic.jpg"
            alt="Picture of me"
            width={500}
            height={300}
          ></Image>
        </div>
      </Wrapper>
    </>
  );
}
