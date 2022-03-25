import React from 'react';
import likeIcon from '../../assets/icon/unlike.svg';
import fullHeartIcon from '../../assets/icon/like.svg';

export const Like = () => {
  return (
    <div className="bg-neutrals/8 border-2 border-neutrals/6 rounded-full p-2 cursor-pointer dark:bg-neutrals/2 dark:border-neutrals/3">
      <img src={fullHeartIcon} alt="like" />
    </div>
  );
};
