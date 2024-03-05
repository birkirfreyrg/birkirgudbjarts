import Nav from "../components/Nav";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

export default function page() {
  return (
    <Wrapper>
      <Title title="Contact me" />
      <Nav />
      <div className="flex items-center justify-center w-full h-full gap-1">
        <div className="flex flex-wrap items-center justify-center bg-gray-700 w-1/4 h-96">
          <div className="w-1/2 bg-red-500 h-1/2">Address:</div>
          <div className="w-1/2 bg-blue-500 h-1/2">Email:</div>
          <div className="w-1/2 bg-purple-500 h-1/2">Call me:</div>
          <div className="w-1/2 bg-yellow-500 h-1/2">Contact me</div>
        </div>
        <div className="bg-gray-700 w-1/4 h-96">
          <div>Address:</div>
          <div>Email:</div>
          <div>Call me:</div>
          <div>Contact me</div>
        </div>
      </div>
    </Wrapper>
  );
}
