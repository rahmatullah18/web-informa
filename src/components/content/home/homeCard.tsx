import shoes from "../../assets/shoes.svg";

type TypeHomeCard = {
  urlImge: string;
  color?: string;
};

export const HomeCard = ({ urlImge, color }: TypeHomeCard) => {
  return (
    <div
      className={`relative w-full h-40 ${
        color ? `bg-[${color}]` : "bg-secondary-200"
      } rounded-lg  shadow-md`}
    >
      <img src={urlImge} alt="" className="object-cover w-full h-full " />
    </div>
  );
};
