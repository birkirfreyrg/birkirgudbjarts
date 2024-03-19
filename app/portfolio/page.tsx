import ImageRightTextLeft from "../components/ImageRightTextLeft";
import ImageTextSplit from "../components/ImageTextSplit";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

export default function page() {
  const oceanViewDescription1 = `"Ocean View Iceland" represents the pinnacle of digital craftsmanship, encapsulating an exquisite frontend project for a premier suite offering. Developed utilizing the synergistic power of Next.js and React.js, this website is typed with JavaScript and styled with the precision of Tailwind CSS, ensuring a seamless and responsive user experience.`;
  const oceanViewDescription2 = `Designed to highlight the natural beauty and quiet luxury of the Ocean View suite in Iceland, our platform utilizes advanced technology to craft an inviting and interactive online presence. Emphasizing ease of navigation and visual appeal, the website encourages visitors to discover the unique amenities and stunning views available at Ocean View Iceland.`;
  return (
    <Wrapper>
      <Title title="Portfolio" />
      <Nav />
      <div className="flex flex-col gap-8 justify-center items-center w-full mt-14 mb-14">
        <ImageTextSplit
          imageUrl="/oceanViewPhoto.PNG"
          altText="graduation"
          title="Ocean View Iceland"
          textContent={[oceanViewDescription1, oceanViewDescription2]}
          link="https://oceanviewiceland.vercel.app/"
        />
        <ImageRightTextLeft
          imageUrl="/oceanViewPhoto.PNG"
          altText="graduation"
          title="Ocean View Iceland"
          textContent={[oceanViewDescription1, oceanViewDescription2]}
          link="https://oceanviewiceland.vercel.app/"
        />
      </div>
    </Wrapper>
  );
}
