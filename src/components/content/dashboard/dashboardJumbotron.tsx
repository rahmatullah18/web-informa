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
    <div
      className={`relative flex flex-col justify-center items-center p-2 m-2 rounded-lg shadow-md h-40 space-y-4 ${bgColor}`}
    >
      <img src={image} alt="" className="w-16 h-16 " />
      <h1 className="text-4xl font-bold text-center text-white left-4">
        {title}
      </h1>
    </div>
  );
};
