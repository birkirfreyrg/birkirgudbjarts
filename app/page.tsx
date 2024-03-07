import Image from "next/image";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Resume from "./components/Resume";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Title title="Birkir Freyr Guðbjartsson" />
        <Nav />
        <div className=" flex flex-col justify-center items-center mt-14">
          <Image
            className=" h-3/6"
            src="/gradpic.jpg"
            alt="Picture of me"
            width={500}
            height={300}
          ></Image>
          <Resume />
        </div>
      </Wrapper>
    </>
  );
}
