import { Heading } from "../../ui/heading/heading";

type TypeDashboardTitle = {
  title?: string;
};

export const DashboardTitle = ({ title }: TypeDashboardTitle) => {
  return (
    <div className="flex flex-col justify-center text-center">
      <Heading size="lg">{title}</Heading>
    </div>
  );
};
