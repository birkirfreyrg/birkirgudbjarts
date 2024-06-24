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

const ImageRightTextLeft: React.FC<ImageTextSplitProps> = ({
  imageUrl,
  altText,
  title,
  textContent,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row gap-4 border rounded-md p-2 shadow-md w-11/12 md:w-4/5 cursor-pointer transition-opacity duration-500 ease-in-out hover:opacity-80"
    >
      <div className="order-1 md:order-2 flex justify-center items-center w-full">
        <Image
          src={imageUrl}
          alt={altText}
          width={500}
          height={500}
          className="border shadow-md"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full md:overflow-auto overflow-hidden">
        <h3 className="font-extrabold text-2xl mb-4">{title}</h3>
        <div className="text-center">
          {textContent.map((paragraph, index) => (
            <p key={index} className="font-light mb-2">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ImageRightTextLeft;
