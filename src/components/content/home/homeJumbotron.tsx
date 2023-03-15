import greenShoes from "../../assets/greenShoes.svg";
export const HomeJumbotron = () => {
  return (
    <div className="relative p-2 m-2 rounded-lg shadow-md h-60 bg-primary-100">
      <h1 className="absolute text-6xl font-bold text-white left-4 top-10">
        Nike
      </h1>
      <img src={greenShoes} alt="" className="absolute right-0 w-60 h-60" />
    </div>
  );
};
