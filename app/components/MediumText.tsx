type TextProps = {
  text: string;
};

export default function MediumText({ text }: TextProps) {
  return (
    <div className="text-2xl">
      <h1 className="font-medium">{text}</h1>
    </div>
  );
}
