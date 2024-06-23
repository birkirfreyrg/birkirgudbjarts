import HamburgerMenu from "../components/HamburgerMenu";
import ImageRightTextLeft from "../components/ImageRightTextLeft";
import ImageTextSplit from "../components/ImageTextSplit";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

export default function page() {
  const oceanViewDescription1 = `"Ocean View Iceland" represents the pinnacle of digital craftsmanship, encapsulating an exquisite frontend project for a premier suite offering. Developed utilizing the synergistic power of Next.js and React.js, this website is typed with JavaScript and styled with the precision of Tailwind CSS, ensuring a seamless and responsive user experience.`;
  const oceanViewDescription2 = `Designed to highlight the natural beauty and quiet luxury of the Ocean View suite in Iceland, our platform utilizes advanced technology to craft an inviting and interactive online presence. Emphasizing ease of navigation and visual appeal, the website encourages visitors to discover the unique amenities and stunning views available at Ocean View Iceland.`;
  const moviesAndEpisodesDescription1 = `"Movies and Episodes" represents the zenith of digital innovation, catering to both movie buffs and series enthusiasts. This dynamic app is meticulously crafted to help users organize and track their viewing habits with utmost efficiency. With "Movies and Episodes," users can create a personalized watchlist of movies and TV show episodes, ensuring they never miss a moment of their favorite entertainment.`;
  const moviesAndEpisodesDescription2 = `Built using the powerful combination of Next.js and React.js, this app is typed with JavaScript and styled with the precision of Tailwind CSS, guaranteeing a seamless and responsive user experience. Furthermore, MongoDB serves as the robust database backbone, ensuring reliable and efficient data management.`;
  const moviesAndEpisodesDescription3 = `The app not only keeps a record of completed movies and episodes, providing a gratifying sense of accomplishment, but it also excels in managing ongoing series by tracking in-progress episodes. This feature makes it effortless to resume watching exactly where you left off. Whether you're a casual viewer or a dedicated binge-watcher, "Movies and Episodes" is your ultimate companion for navigating the expansive world of cinematic and television content.`;

  return (
    <>
      <HamburgerMenu />
      <Wrapper>
        <Title title="Portfolio" />
        <Nav />
        <div className="flex flex-col gap-8 justify-center items-center w-full mt-14 mb-14">
          <ImageTextSplit
            imageUrl="/oceanViewPhoto.PNG"
            altText="OceanView"
            title="Ocean View Iceland"
            textContent={[oceanViewDescription1, oceanViewDescription2]}
            link="https://oceanviewiceland.vercel.app/"
          />
          <ImageRightTextLeft
            imageUrl="/watchlistMovies.png"
            altText="Movies And Episodes"
            title="Movies and Episodes"
            textContent={[
              moviesAndEpisodesDescription1,
              moviesAndEpisodesDescription2,
              moviesAndEpisodesDescription3,
            ]}
            link="https://movies-and-episodes.vercel.app/"
          />
        </div>
      </Wrapper>
    </>
  );
}
