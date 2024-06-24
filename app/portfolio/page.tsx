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
  const agnesKnittingDescription1 = `Welcome to Agnes Knitting, a forthcoming website dedicated to showcasing the exquisite craftsmanship and creative prowess of the talented knitter, Agnes. Currently under development, this project is being meticulously crafted using the latest web technologies to ensure a seamless and delightful user experience.`;
  const agnesKnittingDescription2 = `Technologies in Use

    Next.js: My choice of framework for its robustness and efficiency in building high-performance web applications. Next.js allows for server-side rendering and static site generation, which will enhance the speed and SEO-friendliness of Agnes Knitting.
    React: Leveraging the power of React for its component-based architecture, I aim to create a dynamic and responsive user interface that is both intuitive and visually appealing.
    TypeScript: By incorporating TypeScript, I ensure a safer and more reliable codebase, catching errors early in the development process and providing a smoother development experience.
    Tailwind CSS: For styling, I have opted for Tailwind CSS, which allows for rapid customization and a modern, sleek design that complements the elegance of Agnes's knitting work.`;
  const agnesKnittingDescription3 = `Database Integration: While the specific database service is yet to be finalized, I am evaluating several options to ensure optimal performance, scalability, and security. The database will be a critical component, managing user data, product information, and content efficiently.`;
  return (
    <>
      <HamburgerMenu />
      <Wrapper>
        <Title title="Portfolio" />
        <Nav />
        <div className="flex flex-col gap-8 justify-center items-center w-full mt-14 mb-14">
          <ImageTextSplit
            imageUrl="/agnesKnitting.png"
            altText="Agnes Knitting"
            title="Agnes Knitting: A Work in Progress"
            textContent={[
              agnesKnittingDescription1,
              agnesKnittingDescription2,
              agnesKnittingDescription3,
            ]}
            link="https://agnesknitting.vercel.app/"
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
          <ImageTextSplit
            imageUrl="/oceanViewPhoto.PNG"
            altText="OceanView"
            title="Ocean View Iceland"
            textContent={[oceanViewDescription1, oceanViewDescription2]}
            link="https://oceanviewiceland.vercel.app/"
          />
        </div>
      </Wrapper>
    </>
  );
}
