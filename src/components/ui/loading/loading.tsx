import { createPortal } from "react-dom";
import style from "./loading.module.css";

const AnimationLoading = () => {
  return (
    <div className="absolute bg-gray-500 bg-opacity-30 inset-1">
      <div className="flex items-center justify-center h-full">
        <div className={style.typingIndicator}>
          <div className={style.typingCircle}></div>
          <div className={style.typingCircle}></div>
          <div className={style.typingCircle}></div>
          <div className={style.typingShadow}></div>
          <div className={style.typingShadow}></div>
          <div className={style.typingShadow}></div>
        </div>
      </div>
    </div>
  );
};

export const Loading = () => {
  const loadingId: any = document.getElementById("loading");
  return <>{createPortal(<AnimationLoading />, loadingId)}</>;
};
