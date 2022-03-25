import arrowIcon from '../../../assets/icon/arrow.png';
import followIcon from '../../../assets/icon/follow.png';
import avatar2Image from '../../../assets/image/avatar-2.png';

export const Popular = () => {
  return (
    <section className="bg-neutrals/7 dark:bg-neutrals/2">
      <div className="container py-28">
        <h3 className="font-semibold font-poppins text-2xl text-neutrals/4">
          Popular
        </h3>
        <h2 className="font-bold text-4xl text-neutrals/2 dark:text-neutrals/8">
          Photographers
        </h2>
        <div className="flex justify-between mt-16">
          <div className="w-48 rounded-2xl bg-neutrals/8 p-6 dark:bg-neutrals/1 transform transition-transform duration-500 hover:scale-110">
            <div className="flex justify-between">
              <div className="font-poppins font-semibold bg-primary/1 rounded-full text-xs px-2 text-neutrals/8 flex items-center">
                #1
              </div>
              <div className="flex space-x-2">
                <img src={arrowIcon} alt="arrow" className="cursor-pointer" />
                <img src={followIcon} alt="follow" className="cursor-pointer" />
              </div>
            </div>
            <div className="bg-neutrals/6 h-[1px] my-6 dark:bg-neutrals/3"></div>
            <div className="flex flex-col items-center">
              <img
                src={avatar2Image}
                alt="avatar"
                className="bg-secondary/1 rounded-full w-16"
              />
              <div className="mt-4 font-poppins font-medium text-sm dark:text-neutrals/8">
                Edd haris
              </div>
            </div>
          </div>
          <div className="w-48 rounded-2xl bg-neutrals/8 p-6 dark:bg-neutrals/1 transform transition-transform duration-500 hover:scale-110">
            <div className="flex justify-between">
              <div className="font-poppins font-semibold bg-primary/2 rounded-full text-xs px-2 text-neutrals/8 flex items-center">
                #2
              </div>
              <div className="flex space-x-2">
                <img src={arrowIcon} alt="arrow" className="cursor-pointer" />
                <img src={followIcon} alt="follow" className="cursor-pointer" />
              </div>
            </div>
            <div className="bg-neutrals/6 h-[1px] my-6 dark:bg-neutrals/3"></div>
            <div className="flex flex-col items-center">
              <img
                src={avatar2Image}
                alt="avatar"
                className="bg-secondary/1 rounded-full w-16"
              />
              <div className="mt-4 font-poppins font-medium text-sm dark:text-neutrals/8">
                Edd haris
              </div>
            </div>
          </div>
          <div className="w-48 rounded-2xl bg-neutrals/8 p-6 dark:bg-neutrals/1 transform transition-transform duration-500 hover:scale-110">
            <div className="flex justify-between">
              <div className="font-poppins font-semibold bg-primary/4 rounded-full text-xs px-2 text-neutrals/8 flex items-center">
                #3
              </div>
              <div className="flex space-x-2">
                <img src={arrowIcon} alt="arrow" className="cursor-pointer" />
                <img src={followIcon} alt="follow" className="cursor-pointer" />
              </div>
            </div>
            <div className="bg-neutrals/6 h-[1px] my-6 dark:bg-neutrals/3"></div>
            <div className="flex flex-col items-center">
              <img
                src={avatar2Image}
                alt="avatar"
                className="bg-secondary/1 rounded-full w-16"
              />
              <div className="mt-4 font-poppins font-medium text-sm dark:text-neutrals/8">
                Edd haris
              </div>
            </div>
          </div>
          <div className="w-48 rounded-2xl bg-neutrals/8 p-6 dark:bg-neutrals/1 transform transition-transform duration-500 hover:scale-110">
            <div className="flex justify-between">
              <div className="font-poppins font-semibold bg-neutrals/4 rounded-full text-xs px-2 text-neutrals/8 flex items-center">
                #4
              </div>
              <div className="flex space-x-2">
                <img src={arrowIcon} alt="arrow" className="cursor-pointer" />
                <img src={followIcon} alt="follow" className="cursor-pointer" />
              </div>
            </div>
            <div className="bg-neutrals/6 h-[1px] my-6 dark:bg-neutrals/3"></div>
            <div className="flex flex-col items-center">
              <img
                src={avatar2Image}
                alt="avatar"
                className="bg-secondary/1 rounded-full w-16"
              />
              <div className="mt-4 font-poppins font-medium text-sm dark:text-neutrals/8">
                Edd haris
              </div>
            </div>
          </div>
          <div className="w-48 rounded-2xl bg-neutrals/8 p-6 dark:bg-neutrals/1 transform transition-transform duration-500 hover:scale-110">
            <div className="flex justify-between">
              <div className="font-poppins font-semibold bg-neutrals/4 rounded-full text-xs px-2 text-neutrals/8 flex items-center">
                #5
              </div>
              <div className="flex space-x-2">
                <img src={arrowIcon} alt="arrow" className="cursor-pointer" />
                <img src={followIcon} alt="follow" className="cursor-pointer" />
              </div>
            </div>
            <div className="bg-neutrals/6 h-[1px] my-6 dark:bg-neutrals/3"></div>
            <div className="flex flex-col items-center">
              <img
                src={avatar2Image}
                alt="avatar"
                className="bg-secondary/1 border-[#000000] rounded-full w-16"
              />
              <div className="mt-4 font-poppins font-medium text-sm dark:text-neutrals/8">
                Edd haris
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
