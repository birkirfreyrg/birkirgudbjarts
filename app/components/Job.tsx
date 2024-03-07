type JobProps = {
  year: string;
  placeOfWork: string;
  jobTitle: string;
};

export default function Job({ year, placeOfWork, jobTitle }: JobProps) {
  return (
    <div>
      <h3>
        {year}
        {placeOfWork}
        <p className="ml-24">{jobTitle}</p>
      </h3>
    </div>
  );
}
