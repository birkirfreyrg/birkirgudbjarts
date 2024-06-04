import HamburgerMenu from "../components/HamburgerMenu";
import Nav from "../components/Nav";
import Resume from "../components/Resume";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

export default function page() {
  return (
    <>
      <HamburgerMenu />
      <Wrapper>
        <Title title="Bio" />
        <Nav />
        <div className=" flex justify-center items-center mt-14">
          <Resume />
        </div>
      </Wrapper>
    </>
  );
}
