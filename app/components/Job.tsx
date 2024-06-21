type JobProps = {
  year: string;
  placeOfWork: string;
  jobTitle: string;
};

export default function Job({ year, placeOfWork, jobTitle }: JobProps) {
  return (
    <div className="font-light p-2 mb-2">
      <div>
        <div className="flex ">
          <div className=" w-24">{year}</div>
          <div />
          {placeOfWork}
        </div>

        <p className="ml-24">{jobTitle}</p>
      </div>
    </div>
  );
}
