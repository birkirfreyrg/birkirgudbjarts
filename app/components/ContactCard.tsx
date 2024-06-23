import Address from "./Address";
import Chat from "./Chat";
import Email from "./Email";
import Instagram from "./Instagram";
import MediumText from "./MediumText";
import Phone from "./Phone";
import Twitter from "./Twitter";
import Facebook from "../components/Facebook";

export default function ContactCard() {
  return (
    <div className="flex items-center justify-center w-full h-full md:gap-1 mt-14">
      <div className="flex flex-wrap items-center justify-center bg-gray-800 border shadow-md rounded-lg w-11/12 md:w-2/4 h-[600px] md:h-96 text-white text-lg px-2">
        <div className="flex flex-col items-center justify-center w-full h-1/4 md:w-1/2 md:h-1/2 mt-2 md:mt-0">
          <Address />
          <MediumText text="Location:" />
          <p>221 - Hafnarfjörður</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-1/4 md:w-1/2 md:h-1/2 md:pb-6">
          <Email />
          <MediumText text="Email:" />
          <p>
            <a href={"mailto:birkirgudbjartsson@gmail.com"}>
              birkirgudbjartsson@gmail.com
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-1/4 md:w-1/2 md:h-1/2">
          <Phone />
          <MediumText text="Call me:" />
          <p>
            {" "}
            <a href={"tel:3546908129"}>(+354) 690-8129</a>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-1/4 md:w-1/2 md:h-1/2">
          <Chat />
          <MediumText text="Social media:" />
          <div className="flex gap-3">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
}
