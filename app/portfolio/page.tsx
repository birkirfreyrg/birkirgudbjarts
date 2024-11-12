import HamburgerMenu from "../components/HamburgerMenu";
import ImageRightTextLeft from "../components/ImageRightTextLeft";
import ImageTextSplit from "../components/ImageTextSplit";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

export default function page() {
  const oceanViewDescription1 = `Ocean View Iceland is a beautifully crafted frontend project designed to showcase the quiet luxury and natural beauty of the Ocean View suite in Iceland. The website combines elegance with functionality, providing visitors with an engaging, visually appealing platform to explore the suite's unique features and stunning views. Thoughtfully designed for easy navigation, the platform enhances the online experience, inviting users to discover the charm of Ocean View Iceland.`;
  const oceanViewDescription2 = `Technologies in Use
    Next.js: Chosen for its performance benefits, enabling server-side rendering and static generation to create a fast and SEO-optimized site.
    React.js: Utilized for its component-based structure, delivering a responsive and interactive user experience.
    JavaScript: Powers the site’s functionality, ensuring smooth interactions and rich interactivity.
    Tailwind CSS: Provides efficient and precise styling, contributing to a modern, seamless design that adapts beautifully across different devices.`;
  const oceanViewDescription3 = `This project demonstrates skills in building refined, user-centric interfaces that are both technically sound and visually compelling.`;
  const moviesAndEpisodesDescription1 = `Movies and Episodes is a dynamic app designed for movie lovers and series enthusiasts to organize and track their viewing effortlessly. With features for creating a personalized watchlist and tracking in-progress episodes, the app ensures users never lose track of where they left off in their favorite shows and movies. Movies and Episodes enhances the viewing experience by making it easy to manage completed content, providing a satisfying way to monitor progress and resume ongoing series at any time.`;
  const moviesAndEpisodesDescription2 = `Technologies in Use
    Next.js: Enables server-side rendering and static generation, enhancing app performance and SEO.
    React.js: Provides a component-based structure for a responsive, interactive user experience.
    JavaScript: Powers the app’s functionality, creating smooth interactions and engaging features.
    Tailwind CSS: Enables precise, efficient styling, delivering a modern and adaptive design across devices.
    MongoDB: Serves as the app’s database backbone, ensuring reliable, efficient data storage for user preferences and watchlists.`;
  const moviesAndEpisodesDescription3 = `This project showcases expertise in building functional, user-focused applications with a seamless design and robust backend integration.`;
  const agnesKnittingDescription1 = `Agnes Knitting is a project currently under development, dedicated to highlighting the exquisite craftsmanship of Agnes, a talented knitter. The website is designed to deliver a seamless, engaging user experience, carefully built with modern web technologies for both functionality and aesthetics.`;
  const agnesKnittingDescription2 = `Technologies in Use:
  Next.js: Chosen for its robust features in building high-performance web applications, Next.js enables server-side rendering and static site generation, enhancing both site speed and SEO.
React: Using React's component-based architecture, I am creating a dynamic, responsive user interface that is visually appealing and easy to navigate.
TypeScript: Integrating TypeScript for a more reliable codebase, allowing early error detection and contributing to a smoother development process.
Tailwind CSS: Tailwind CSS enables rapid customization and modern design, perfectly complementing the elegance of Agnes's work.`;
  const agnesKnittingDescription3 = `Database Integration:
  I am using MongoDB to store structured data, such as information and image URLs, while AWS S3 buckets handle image uploads. For each new item, images are uploaded to S3, and the resulting URLs are stored in MongoDB, ensuring efficient data management and scalable storage for media assets.`;

  const agnesKnittingDescription4 = `I developed an admin panel with secure Google API authentication, allowing only authorized admin accounts to log in. The panel provides comprehensive control over site content, enabling updates to images, text, and more to keep the site fresh and dynamic.`;

  const ordidDescription1 = `ORÐIÐ is a Wordle-inspired Icelandic word puzzle game where players are challenged to guess five-letter Icelandic words in six attempts. Each guess receives color-coded feedback, guiding players toward the correct answer. The game offers an engaging, language-based challenge with a clean and responsive design, ensuring a seamless experience across devices.`;
  const ordidDescription2 = `Technologies in Use
    React.js: Provides a component-based architecture, enhancing the interactivity and responsiveness of the game.
    Next.js: Enables server-side rendering and static site generation, optimizing the app for both performance and SEO.
    TypeScript: Ensures a robust and reliable codebase, catching potential errors early in development.
    Tailwind CSS: Used for styling, delivering a modern, streamlined look that adapts beautifully across devices and screen sizes.`;
  const ordidDescription3 = `This project demonstrates skills in building dynamic, interactive applications with a strong focus on user experience and interface styling.`;
  return (
    <>
      <HamburgerMenu />
      <Wrapper>
        <Title title="Portfolio" />
        <Nav />
        <div className="flex flex-col gap-8 justify-center items-center w-full mt-14 mb-14">
          <ImageRightTextLeft
            imageUrl="/ordid.png"
            altText="Orðið"
            title="ORÐIÐ"
            textContent={[
              ordidDescription1,
              ordidDescription2,
              ordidDescription3,
            ]}
            link="https://ordid.vercel.app/"
          />
          <ImageTextSplit
            imageUrl="/agnesKnitting.png"
            altText="Agnes Knitting"
            title="Agnes Knitting: A Forthcoming Showcase of Artisanal Knitting"
            textContent={[
              agnesKnittingDescription1,
              agnesKnittingDescription2,
              agnesKnittingDescription3,
              agnesKnittingDescription4,
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
            textContent={[
              oceanViewDescription1,
              oceanViewDescription2,
              oceanViewDescription3,
            ]}
            link="https://oceanviewiceland.vercel.app/"
          />
        </div>
      </Wrapper>
    </>
  );
}
