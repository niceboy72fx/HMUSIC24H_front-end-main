import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CommonsSlider } from "../common/slider";
import { PlayListMusic } from "../../redux/action/playMusic";
export const ListennerWant = ({ props }) => {
  // ---------------------RandomFunctions --------------------
  const randomFunc = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const dispatch = useDispatch();
  const random20Music = randomFunc(props, 20);

  useEffect(() => {
    dispatch(PlayListMusic(random20Music));
  }, []);

  return (
    <div className="p-5 flex text-center w-full ">
      <CommonsSlider props={random20Music} />
    </div>
  );
};
