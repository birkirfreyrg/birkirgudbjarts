import Image from "next/image";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Title />
        <Nav />
        <div className=" mt-14">
          <Image
            className=" h-3/6"
            src="/gradpic.jpg"
            alt="Picture of me"
            width={500}
            height={100}
          ></Image>
        </div>
      </Wrapper>
    </>
  );
}
