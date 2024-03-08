import Link from "next/link";
import BorderedText from "./BorderedText";
import Bullets from "./Bullets";
import Job from "./Job";
import MediumText from "./MediumText";
import SmallHeader from "./SmallHeader";

export default function Resume() {
  return (
    <div className="border shadow-lg flex flex-col justify-center p-2 w-1/2 mb-6">
      <div className="ml-1">
        <SmallHeader text="Education" />
      </div>
      <div className="">
        <Job
          year="2017 - 2023"
          placeOfWork="University of Iceland"
          jobTitle="B.S. in Computer Science"
        />
        <Job
          year="2011 - 2015"
          placeOfWork="Fjölbrautaskóli Suðurnesja"
          jobTitle="Social Science, High School Diploma"
        />
      </div>
      <div>
        <div className="ml-1">
          <SmallHeader text="Work Experience" />
        </div>
        <Job
          year="2022 - 2024"
          placeOfWork="Isal (Aluminum Factory), Rio Tinto"
          jobTitle="Current Job - Smelter and furnance blending"
        />
        <Job
          year="2020"
          placeOfWork="Hreyfisport K45 ehf"
          jobTitle="Web Developer - Established an online store for Hreyfisport,
              managed various tasks"
        />
        <Job
          year="2020"
          placeOfWork="Orkustöð B20 ehf"
          jobTitle="Web Developer - Designed and launched website for fitness center Orkustöðin"
        />
        <Job
          year="2016 - 2019"
          placeOfWork="Duty Free Iceland"
          jobTitle="Salesperson"
        />
      </div>
      <div className="ml-1">
        <MediumText text="Computer Skills" />
      </div>
      <div>
        <BorderedText>
          Proficient in programming and web development with strong interest in
          computers. Languages and Technologies that I have used:
          <Bullets />
          Github:
          <a
            href="https://github.com/birkirfreyrg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 ml-1"
          >
            https://github.com/birkirfreyrg
          </a>
        </BorderedText>
      </div>
      <div className="ml-1">
        <MediumText text="Hobbies" />
      </div>
      <BorderedText>
        Passionate about computer architecture, programming, and
        problem-solving. Enthusiastic video game player. Dedicated and enjoy
        various forms of physical exercise and movement.
      </BorderedText>
      <div className="ml-1">
        <MediumText text="Strengths" />
      </div>
      <BorderedText>
        Positive, diligent, punctual, and energetic team player. Adaptable to
        new environments and challenges. Detail-oriented and patient problem
        solver.
      </BorderedText>
      <div className="ml-1">
        <MediumText text="References" />
      </div>
      <BorderedText>
        <p>
          - Anna Ósk Óskarsdóttir - Manager Isal, Rio Tinto. - Phone: 898-1447
        </p>
        <p>
          - Guðmundur Stefán Gunnarsson - Founder Júdódeild UMFN and Chairman of
          Wrestling Federation of Iceland (Glímusamband Íslands) - Phone:
          773-8091
        </p>
        <p>
          - Ljósbrá Mist Bjarnadóttir - Co-owner of Orkustöð Heilsurækt - Phone:
          692-7058
        </p>
        <p>
          - Sigurbjörg Gunnarsdóttir - CEO of Hreyfisports and Co-owner of
          Orkustöð Heilsurækt - Phone: 847-7922
        </p>
      </BorderedText>
    </div>
  );
}
