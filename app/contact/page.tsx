import ContactCard from "../components/ContactCard";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

export default function page() {
  return (
    <Wrapper>
      <Title title="Contact me" />
      <Nav />
      <ContactCard />
    </Wrapper>
  );
}
