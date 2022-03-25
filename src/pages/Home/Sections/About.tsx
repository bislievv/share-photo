import { Seacrh } from '../../../components/ui/Seacrh';
import avatarImage from '../../../assets/image/avatar.png';
import krugImage from '../../../assets/image/nft-krug.png';
import robotImage from '../../../assets/image/nft-robot.png';
import headImage from '../../../assets/image/head.png';
import designImage from '../../../assets/image/design.png';
import likeIcon from '../../../assets/icon/unlike.svg';
import fullHeartIcon from '../../../assets/icon/like.svg';

export const About = () => {
  return (
    <section>
      <div className="container pt-10 pb-20">
        <div>
          <h1 className="text-neutrals/2 font-bold text-4xl text-center dark:text-neutrals/8">
            The new creative photo.
          </h1>
          <div className="flex justify-start items-center space-x-8 mt-10">
            <select className="form-select w-64 border-2 border-neutrals/6 font-poppins rounded-xl text-neutrals/2 font-medium text-sm dark:bg-neutrals/1 dark:text-neutrals/8 dark:border-neutrals/3">
              <option>Popular</option>
              <option>Latest</option>
            </select>
            <Seacrh />
          </div>
          <div className="flex justify-between mt-8">
            <div className="w-64">
              <img src={headImage} alt=" random imgee" className="rounded-md" />
              <div className="p-6 pb-3 rounded-lg shadow-lg dark:shadow-cyan-500/50">
                <div className="text-base font-medium  font-poppins text-neutrals/2 dark:text-neutrals/8">
                  Amazing digital art
                </div>
                <div className="mt-4">
                  <span className="text-teal-600 text-md font-semibold">
                    250 likes{' '}
                  </span>
                  <span className="text-sm text-gray-600">
                    (based on 234 ratings)
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <img
                    src={avatarImage}
                    alt="avatar"
                    className="rounded-full bg-neutrals/6"
                  />
                  <span className="text-neutrals/2 text-sm ml-2 dark:text-neutrals/8">
                    Jackson
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="bg-teal-200 text-teal-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                    Popular
                  </div>
                  <div className="bg-neutrals/8 shadow-lm rounded-full p-2 cursor-pointer dark:bg-neutrals/2">
                    <img src={fullHeartIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-64">
              <img
                src={robotImage}
                alt=" random imgee"
                className="rounded-md"
              />
              <div className="p-6 pb-3 rounded-lg shadow-lg dark:shadow-cyan-500/50">
                <div className="text-base font-medium  font-poppins text-neutrals/2 dark:text-neutrals/8">
                  Amazing digital art
                </div>
                <div className="mt-4">
                  <span className="text-teal-600 text-md font-semibold">
                    222 likes{' '}
                  </span>
                  <span className="text-sm text-gray-600">
                    (based on 234 ratings)
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <img
                    src={avatarImage}
                    alt="avatar"
                    className="rounded-full bg-neutrals/6"
                  />
                  <span className="text-neutrals/2 text-sm ml-2 dark:text-neutrals/8">
                    Jackson
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="bg-teal-200 text-teal-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                    Popular
                  </div>
                  <div className="bg-neutrals/8 shadow-lm rounded-full p-2 cursor-pointer dark:bg-neutrals/2">
                    <img src={likeIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-64">
              <img src={krugImage} alt=" random imgee" className="rounded-md" />
              <div className="p-6 pb-3 rounded-lg shadow-lg dark:shadow-cyan-500/50">
                <div className="text-base font-medium  font-poppins text-neutrals/2 dark:text-neutrals/8">
                  Amazing digital art
                </div>
                <div className="mt-4">
                  <span className="text-teal-600 text-md font-semibold">
                    197 likes{' '}
                  </span>
                  <span className="text-sm text-gray-600">
                    (based on 234 ratings)
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <img
                    src={avatarImage}
                    alt="avatar"
                    className="rounded-full bg-neutrals/6"
                  />
                  <span className="text-neutrals/2 text-sm ml-2 dark:text-neutrals/8">
                    Jackson
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="bg-teal-200 text-teal-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                    Popular
                  </div>
                  <div className="bg-neutrals/8 shadow-lm rounded-full p-2 cursor-pointer dark:bg-neutrals/2">
                    <img src={fullHeartIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-64">
              <img
                src={designImage}
                alt=" random imgee"
                className="rounded-md"
              />
              <div className="p-6 pb-3 rounded-lg shadow-lg dark:shadow-cyan-500/50">
                <div className="text-base font-medium  font-poppins text-neutrals/2 dark:text-neutrals/8">
                  Amazing digital art
                </div>
                <div className="mt-4">
                  <span className="text-teal-600 text-md font-semibold">
                    152 likes{' '}
                  </span>
                  <span className="text-sm text-gray-600">
                    (based on 234 ratings)
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <img
                    src={avatarImage}
                    alt="avatar"
                    className="rounded-full bg-neutrals/6"
                  />
                  <span className="text-neutrals/2 text-sm ml-2 dark:text-neutrals/8">
                    Jackson
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="bg-teal-200 text-teal-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                    Popular
                  </div>
                  <div className="bg-neutrals/8 shadow-lm rounded-full p-2 cursor-pointer dark:bg-neutrals/2">
                    <img src={likeIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <button className="mt-12 border-2 border-neutrals/6 rounded-[92px] py-2 px-4 font-bold dark:text-neutrals/8 dark:border-neutrals/4">
              Load more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
