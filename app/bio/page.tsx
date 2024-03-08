import Bio from "../components/Bio";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

export default function page() {
  return (
    <>
      <Wrapper>
        <Title title="Bio" />
        <Nav />
        <Bio />
      </Wrapper>
    </>
  );
}
