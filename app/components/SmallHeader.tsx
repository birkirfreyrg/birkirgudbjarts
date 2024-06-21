type TextProps = {
  text: string;
};

export default function SmallHeader({ text }: TextProps) {
  return (
    <div className="text-lg">
      <div className="font-medium">{text}</div>
    </div>
  );
}
