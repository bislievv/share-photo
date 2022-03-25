import SearchIcon from '../../assets/icon/search.png';

export const Seacrh = () => {
  return (
    <div className="flex items-center justify-center">
      <label className="flex relative">
        <input
          type="text"
          className="px-4 py-2.5 w-64 text-xs text-neutrals/4 border-2 border-neutrals/6 font-poppins rounded-lg outline-none dark:bg-neutrals/1 dark:border-neutrals/3"
          placeholder="Search"
        />
        <span className="absolute bottom-3 right-3">
          <img src={SearchIcon} alt="search" width="16px" />
        </span>
      </label>
    </div>
  );
};
