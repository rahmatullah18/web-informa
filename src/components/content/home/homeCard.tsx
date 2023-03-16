type TypeHomeCard = {
  urlImge: string;
  color?: string;
  name: string;
};

export const HomeCard = ({ urlImge, color, name }: TypeHomeCard) => {
  return (
    <div
      className={`relative w-full h-40 
        ${color} rounded-lg  shadow-md`}
    >
      <img src={urlImge} alt="" className="object-cover w-full h-full " />
      <span className="absolute font-bold top-1 left-1 text-primary-200">
        {name}
      </span>
    </div>
  );
};
