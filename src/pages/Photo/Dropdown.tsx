import dotsIcon from '../../assets/icon/dots.svg';

export const Dropdown = () => {
  return (
    <div>
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className="p-2 rounded-full border-neutrals/6 border-2 dark:bg-neutrals/1 dark:border-neutrals/3"
      >
        <img src={dotsIcon} alt="settings" />
      </button>
      <div
        id="dropdownNavbar"
        className="hidden z-10 w-44 rounded-xl divide-y divide-gray-100 shadow dark:bg-neutrals/2 dark:divide-gray-600"
      >
        <ul
          className="py-3 px-2 text-sm font-bold text-neutrals/4"
          aria-labelledby="dropdownLargeButton"
        >
          <li className="hover:bg-gray-100 py-3 px-2 rounded-md dark:hover:bg-neutrals/3">
            Delete
          </li>
          <li className="hover:bg-gray-100 py-3 px-2 rounded-md border-t border-neutrals/6 dark:border-neutrals/3 dark:hover:bg-neutrals/3">
            Change
          </li>
        </ul>
      </div>
    </div>
  );
};
