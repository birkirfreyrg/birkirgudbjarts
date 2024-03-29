// ImageTextSplit.tsx
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

const ImageTextSplit: React.FC<ImageTextSplitProps> = ({
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
      className="flex gap-4 border p-2 shadow-md w-1/2 h-full cursor-pointer transition-opacity duration-500 ease-in-out hover:opacity-75 "
    >
      <div className="flex justify-center items-center w-full min-h-96">
        {/* Using next/image with layout="fill" and objectFit="cover" */}
        <Image
          src={imageUrl}
          alt={altText}
          width={300}
          height={300}
          className="border shadow-md"
        />
      </div>

      <div className="flex flex-col w-full items-center">
        <h3 className=" font-extrabold text-2xl mb-1">{title}</h3>
        {/* Map over the textContent array and render each item as a paragraph */}
        {textContent.map((paragraph, index) => (
          <p key={index} className="font-light mb-2">
            {paragraph}
          </p>
        ))}
      </div>
    </a>
  );
};

export default ImageTextSplit;
