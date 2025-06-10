import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={toggle}></AiFillHeart>
    );
  return <AiOutlineHeart color="#ff6b81" size={20} onClick={toggle}></AiOutlineHeart>;
};

export default Like;
