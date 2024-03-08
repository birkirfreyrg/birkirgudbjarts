type JobProps = {
  year: string;
  placeOfWork: string;
  jobTitle: string;
};

export default function Job({ year, placeOfWork, jobTitle }: JobProps) {
  return (
    <div className="border shadow-sm p-2 mb-2">
      <h3>
        <div className="flex ">
          <div className=" w-24">{year}</div>
          <div />
          {placeOfWork}
        </div>

        <p className="ml-24">{jobTitle}</p>
      </h3>
    </div>
  );
}
