type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <div className="mt-0 md:mt-14 text-3xl">
      <h1 className="">{title}</h1>
    </div>
  );
}
