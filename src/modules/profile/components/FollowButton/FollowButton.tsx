import clsx from "clsx";
import { FC } from "react";

enum ButtonStyleEnum {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

interface FollowButtonProps {
  username: string;
  btnStyle?: keyof typeof ButtonStyleEnum;
}

const FollowButton: FC<FollowButtonProps> = ({
  username,
  btnStyle = ButtonStyleEnum.DARK,
}) => {
  const btnClasses = clsx(
    "text-center cursor-pointer select-none border py-1 px-2 text-sm rounded-sm hover:bg-followLinkHover",
    {
      "border-darkgrey text-darkgrey  focus:bg-followLinkHover":
        btnStyle === ButtonStyleEnum.DARK,
      "border-followLinkHover text-followLinkHover hover:text-white":
        btnStyle === ButtonStyleEnum.LIGHT,
    }
  );

  return (
    <button className={btnClasses}>
      <i className="ion-plus-round" />
      &nbsp; Follow {username}
    </button>
  );
};

export default FollowButton;
