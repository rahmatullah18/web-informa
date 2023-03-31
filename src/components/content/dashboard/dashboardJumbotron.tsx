type TypeDashboradJumbotronProps = {
  image?: string;
  title?: string;
  bgColor?: string;
};

export const DashboardJumbotron = ({
  image,
  title,
  bgColor,
}: TypeDashboradJumbotronProps) => {
  return (
    <div className={`relative p-2 m-2 rounded-lg shadow-md h-60 ${bgColor}`}>
      <h1 className="absolute text-6xl font-bold text-white left-4 top-10">
        {title}
      </h1>
      <img src={image} alt="" className="absolute right-0 w-60 h-60" />
    </div>
  );
};
