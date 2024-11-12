import React from "react";
import Image from "next/image"; // Import from next/image
import Link from "next/link";

interface ImageTextSplitProps {
  imageUrl: string;
  altText: string;
  title: string;
  textContent: string[];
  link: string;
}

const FrontPageCard: React.FC<ImageTextSplitProps> = ({
  imageUrl,
  altText,
  title,
  textContent,
  link,
}) => {
  return (
    <Link
      href={link}
      className="flex flex-col md:flex-row gap-4 rounded-md p-2 shadow-md w-11/12 md:w-4/5 cursor-pointer transition duration-1000 lg:hover:scale-105"
    >
      <div className="order-1 md:order-2 flex justify-center items-center w-full">
        <Image
          src={imageUrl}
          alt={altText}
          width={500}
          height={500}
          className="md:w-96 md:h-96 md:rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full md:overflow-auto overflow-hidden">
        <h3 className="font-extrabold text-2xl mb-4">{title}</h3>
        <div className="text-justify preserveWhitespace">
          {textContent.map((paragraph, index) => (
            <p key={index} className="font-light mb-2">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default FrontPageCard;
