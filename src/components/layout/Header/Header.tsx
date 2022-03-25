import logoIcon from '../../../assets/icon/symbol.png';
import { Seacrh } from '../../ui/Seacrh';
import Toggle from './ThemeToggle';

export const Header = () => {
  return (
    <header className="border-b border-neutrals/6 dark:border-neutrals/3">
      <div className="container py-5 ">
        <div className="flex justify-between text-neutrals/2">
          <div className="flex items-center space-x-9">
            <div className="flex justify-between items-center">
              <img src={logoIcon} alt="logo" width="32px " />
              <div className="text-2xl font-semibold font-poppins ml-2 dark:text-neutrals/7">
                crypter
              </div>
            </div>
            <div className="border border-neutrals/6 rounded-sm h-10 bg-neutrals/6"></div>
            <ul className="flex space-x-12 text-neutrals/4">
              <li className="text-sm font-bold">Discover</li>
              <li className="text-sm font-bold">How it work</li>
            </ul>
          </div>
          <div className="flex items-center space-x-10">
            <Seacrh />
            <Toggle />
            <button className="py-2 px-4 border-2 border-neutrals/6 rounded-full text-sm font-bold dark:border-neutrals/3 dark:text-neutrals/8">
              Profile
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
