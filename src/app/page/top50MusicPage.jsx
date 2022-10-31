import React from "react";
import { ListMusic } from "../components/common/List/listMusic";

const Top50MusicPage = () => {
  return (
    <div className=" transition ease-in-out delay-1800 text-white">
      <div>
        <span className="text-3xl font-bold">
          Top 50 bài hát khán giả nghe nhiều{" "}
        </span>
      </div>
      <div>
        <ListMusic />
      </div>
    </div>
  );
};

export default Top50MusicPage;
