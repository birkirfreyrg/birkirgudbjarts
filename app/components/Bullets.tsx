export default function Bullets() {
  const bullet = "h-2 w-2 bg-gray-600 rounded-full mr-3";
  return (
    <div>
      <ul className=" mt-1 sm:ml-8">
        <li className="flex items-center mb-2">
          <span className={`${bullet}`}></span>
          <span className="flex-1">Java, C, C++, C#, Python.</span>
        </li>
        <li className="flex items-center mb-2">
          <span className={`${bullet}`}></span>
          <span className="flex-1">
            HTML, CSS, Sass, Tailwind, Styled Components, JavaScript,
            TypeScript, React, Vue.js, WebGL, Node.js, Next.js, Express.js,
            MongoDB, WordPress.
          </span>
        </li>
        <li className="flex items-center mb-2">
          <span className={`${bullet}`}></span>
          <span className="flex-1">R, SQL, PostgreSQL, Postman.</span>
        </li>
        <li className="flex items-center mb-2">
          <span className={`${bullet}`}></span>
          <span className="flex-1">Git, GitHub.</span>
        </li>
        <li className="flex items-center mb-2">
          <span className={`${bullet}`}></span>
          <span className="flex-1">Linux og Windows Skipanalínu, Vim.</span>
        </li>
        <li className="flex items-center mb-2">
          <span className={`${bullet}`}></span>
          <span className="flex-1">
            Scene builder, Java Spring, Android Studio, .Net.
          </span>
        </li>
        <li className="flex items-center mb-2">
          <span className={`${bullet}`}></span>
          <span className="flex-1">Slack, Discord, Microsoft Teams, Zoom</span>
        </li>
      </ul>
    </div>
  );
}
