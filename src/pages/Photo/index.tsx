import designImage from '../../assets/image/design.png';
import avatarImage from '../../assets/image/avatar-2.png';
import backIcon from '../../assets/icon/back.svg';
import { Button } from '../../components/ui/Button';
import { Like } from '../../components/ui/Like';
import { Dropdown } from './Dropdown';

export const PhotoPage = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="flex justify-between">
          <div>
            <img
              src={designImage}
              alt="Photo"
              width={540}
              className="rounded-2xl"
            />
          </div>
          <div className="w-96 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-neutrals/2 text-4xl dark:text-neutrals/8">
                The amazing photo
              </h3>
              <p className="text-neutrals/4 font-poppins mt-10">
                This NFT Card will give you Access to Special Airdrops. To learn
                more about UI8 please visit
              </p>
            </div>
            <div className="p-6 w-80 rounded-2xl	shadow-card border border-neutrals/6 dark:bg-neutrals/2 dark:border-neutrals/2">
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={avatarImage}
                  alt="avatar"
                  width={48}
                  className="rounded-full bg-primary/4"
                />
                <span className="font-medium text-neutrals/4 text-lg dark:text-neutrals/8">
                  Jackson
                </span>
              </div>
              <div className="mt-6 flex justify-between">
                <Button className="bg-primary/1 text-neutrals/8">Follow</Button>
                <Button className="text-neutrals/2 border-2 border-neutrals/6 dark:text-neutrals/8 dark:border-neutrals/3">
                  Profile
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-2 border-neutrals/6 rounded-full p-2 cursor-pointer dark:bg-neutrals/1 dark:border-neutrals/3">
              <img src={backIcon} alt="back" />
            </div>
            <Like />
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};
