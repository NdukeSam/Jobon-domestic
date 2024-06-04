

const CustomCheckbox = ({ checked }) => {
  return (
    <div className="checkbox-wrapper-12 relative pointer-events-none">
      <div className="cbx relative w-6 h-6">
        <input
          id="cbx-12"
          type="checkbox"
          checked={checked}
          className="absolute top-0 left-0 w-full h-full appearance-none cursor-pointer border-2 border-gray-400 rounded-full"
          readOnly
        />
        <label
          htmlFor="cbx-12"
          className="absolute top-0 left-0 w-full h-full bg-none rounded-full"
        ></label>
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" className="absolute top-1 left-1 z-10 pointer-events-none">
          <path
            d="M2 8.36364L6.23077 12L13 2"
            className="stroke-white stroke-3 stroke-linecap-round stroke-linejoin-round"
            style={{ strokeDasharray: 19, strokeDashoffset: checked ? 0 : 19, transition: 'stroke-dashoffset 0.3s ease', transitionDelay: '0.2s' }}
          ></path>
        </svg>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="absolute top-[-130%] left-[-170%] w-[110px] pointer-events-none">
        <defs>
          <filter id="goo-12">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
              result="goo-12"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default CustomCheckbox;
