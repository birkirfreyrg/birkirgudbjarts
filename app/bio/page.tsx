import Bio from "../components/Bio";
import HamburgerMenu from "../components/HamburgerMenu";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

export default function page() {
  return (
    <>
      <HamburgerMenu />
      <Wrapper>
        <Title title="Bio" />
        <Nav />
        <div className="flex justify-center items-center">
          <Bio />
        </div>
      </Wrapper>
    </>
  );
}
