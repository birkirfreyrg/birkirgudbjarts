import BorderedText from "./BorderedText";
import Bullets from "./Bullets";
import Job from "./Job";
import SmallHeader from "./SmallHeader";
import References from "./References";

export default function Resume() {
  return (
    <div className="flex flex-col justify-center text-justify items-center sm:w-2/3 w-full p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <SmallHeader text="About me" />
          <div className="ml-4 mt-1">
            <BorderedText>
              I am an enthusiastic and dedicated Computer Scientist with a
              strong background in programming, complemented by a passion for
              physical fitness and jiu-jitsu. My interest in jiu- jitsu not only
              keeps me physically active but also mentally sharp, enhancing my
              problem- solving skills.
            </BorderedText>
          </div>
        </div>

        <div className="mb-4">
          <SmallHeader text="Education" />
          <div className="ml-4 mt-1">
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
        </div>

        <div className="mb-4">
          <SmallHeader text="Work Experience" />
          <div className="ml-4 mt-1">
            <Job
              year="2022 - 2024"
              placeOfWork="Isal (Aluminum Factory), Rio Tinto"
              jobTitle="Current Job - Aluminum Manufacturing Specialist"
            />
            <Job
              year="2020"
              placeOfWork="Hreyfisport K45 ehf"
              jobTitle="Web Developer - Established an online store for Hreyfisport, managed various tasks"
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
        </div>

        <div className="mb-4">
          <SmallHeader text="Computer Skills" />
          <div className="ml-4 mt-1">
            <BorderedText>
              Proficient in programming and web development with a strong
              interest in computers. Languages and technologies that I have
              used:
              <Bullets />
              <span>GitHub:</span>
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
        </div>

        <div className="mb-4">
          <SmallHeader text="Strengths" />
          <div className="ml-4 mt-1">
            <BorderedText>
              Positive, diligent, punctual, and energetic team player. Adaptable
              to new environments and challenges. Detail-oriented and patient
              problem solver.
            </BorderedText>
          </div>
        </div>

        <div>
          <SmallHeader text="References" />
          <div className="ml-4 mt-1 ">
            <BorderedText>
              <References />
            </BorderedText>
          </div>
        </div>
      </div>
    </div>
  );
}
