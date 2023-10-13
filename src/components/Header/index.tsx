import logo from "../../assets/livelink-logo.svg";

function Header() {
  return (
    <div className="flex justify-center">
      <img src={logo} alt="LiveLink logo" className="h-[50px] w-[50px]" />
      <div className="flex flex-col justify-center ">
        <h1 className="text-[32px] font-bold">LiveLink</h1>
      </div>
    </div>
  )
}

export default Header;
