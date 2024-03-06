import Address from "../components/Address";
import Chat from "../components/Chat";
import Email from "../components/Email";
import MediumText from "../components/MediumText";
import Nav from "../components/Nav";
import Phone from "../components/Phone";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import Facebook from "../components/Facebook";
import Twitter from "../components/Twitter";
import Instagram from "../components/Instagram";

export default function page() {
  return (
    <Wrapper>
      <Title title="Contact me" />
      <Nav />
      <div className="flex items-center justify-center w-full h-full gap-1 mt-14">
        <div className="flex flex-wrap items-center justify-center bg-gray-800 w-2/4 h-96 text-white text-lg">
          <div className="flex flex-col items-center justify-center w-1/2 h-1/2">
            <Address />
            <MediumText text="Address:" />
            <p>Nónhamar 6</p>
            <p>221 - Hafnarfjörður</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 h-1/2 pb-6">
            <Email />
            <MediumText text="Email:" />
            <p>
              <a href={"mailto:birkirgudbjartsson@gmail.com"}>
                birkirgudbjartsson@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 h-1/2">
            <Phone />
            <MediumText text="Call me:" />
            <p>
              {" "}
              <a href={"tel:3546908129"}>(+354) 690-8129</a>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 h-1/2">
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
    </Wrapper>
  );
}
