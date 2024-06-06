import HamburgerMenu from "../components/HamburgerMenu";
import ImageRightTextLeft from "../components/ImageRightTextLeft";
import ImageTextSplit from "../components/ImageTextSplit";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

export default function page() {
  const oceanViewDescription1 = `"Ocean View Iceland" represents the pinnacle of digital craftsmanship, encapsulating an exquisite frontend project for a premier suite offering. Developed utilizing the synergistic power of Next.js and React.js, this website is typed with JavaScript and styled with the precision of Tailwind CSS, ensuring a seamless and responsive user experience.`;
  const oceanViewDescription2 = `Designed to highlight the natural beauty and quiet luxury of the Ocean View suite in Iceland, our platform utilizes advanced technology to craft an inviting and interactive online presence. Emphasizing ease of navigation and visual appeal, the website encourages visitors to discover the unique amenities and stunning views available at Ocean View Iceland.`;
  const moviesAndEpisodesDescription1 = `"Movies and Episodes" is a dynamic app designed for movie buffs and series enthusiasts alike. It helps you organize and track your viewing habits efficiently. With this app, users can create a personalized watchlist of movies and TV show episodes, ensuring they never miss a beat of their favorite entertainment.`;
  const MoviesAndEpisodesDescription2 = ` Additionally, the app keeps a record of completed movies and episodes, providing a satisfying sense of accomplishment. It also excels in managing ongoing series by tracking episodes that are in-progress, making it easier to pick up right where you left off. Whether you're a casual viewer or a dedicated binge-watcher, "Movies and Episodes" is your ultimate companion in navigating the vast world of cinematic and television content.`;
  return (
    <>
      <HamburgerMenu />
      <Wrapper>
        <Title title="Portfolio" />
        <Nav />
        <div className="flex flex-col gap-8 justify-center items-center w-full mt-14  mb-14">
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
              MoviesAndEpisodesDescription2,
            ]}
            link="https://movies-and-episodes.vercel.app/"
          />
        </div>
      </Wrapper>
    </>
  );
}
