import Job from "./Job";
import SmallHeader from "./SmallHeader";

export default function Resume() {
  return (
    <div className="border shadow-lg mt-4 flex flex-col justify-center p-2">
      <SmallHeader text="Education" />
      <div className="">
        <h3>2017 – 2023 University of Iceland – B.S. in Computer Science</h3>
        <h3>
          2011 – 2015 Fjölbrautaskóli Suðurnesja – Social Science, High School
          Diploma
        </h3>
      </div>
      <div>
        <SmallHeader text="Work Experience" />
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
          placeOfWork=" Orkustöð B20 ehf"
          jobTitle="Web Developer - Designed and launched website for fitness center Orkustöðin"
        />
      </div>
    </div>
  );
}
