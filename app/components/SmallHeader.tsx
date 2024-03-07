type TextProps = {
  text: string;
};

export default function SmallHeader({ text }: TextProps) {
  return (
    <div className="text-xl">
      <h1 className="font-medium">{text}</h1>
    </div>
  );
}
