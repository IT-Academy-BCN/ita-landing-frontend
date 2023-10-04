import curvedArrow from "../../../assets/img/curvedArrow.svg";

const TitleApps = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-1">
      <img
        className="h-[44px] mr-24 place-self-end md:p-0 pl-14"
        src={curvedArrow}
      ></img>

      <h2 className="font-black text-4xl text-center col-span-6">
        Directorio de aplicaciones IT Academy
      </h2>
    </div>
  );
};

export default TitleApps;
