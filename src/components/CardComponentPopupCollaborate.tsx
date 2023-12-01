import React from 'react';

interface CardComponentPopupCollaborateProps {
  pos: string;
  imgSrc1: string; 
  title: string;
  description: string;
}

const CardComponentPopupCollaborate: React.FC<CardComponentPopupCollaborateProps> = ({
  pos,
  imgSrc1, 
  title,
  description,
}) => {
  return (
    <div className="relative p-3 sm:w-1/2 lg:w-1/4">
      <svg
        className="w-full h-full"
        viewBox="0 0 268 329"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.1637 43.8887C5.60393 43.8887 0.000167875 51.1484 0.00016269 59.0682C0.76933 85.6874 1.41757e-06 124.736 0 217.133V308.211C2.7589e-05 321.08 4.94464 329 11.208 329H253.825C261.077 329 268 322.73 268 315.47V14.8495C268 4.61986 262.066 0 252.836 0H58.6766C51.4245 0 45.8205 5.27984 45.8205 12.8696V31.349C45.8205 38.9388 39.887 43.8887 32.6348 43.8887H15.1637Z"
          fill="#F0F0F0"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col justify-between w-full h-full p-3">
        <div className="flex items-center h-1/6 pl-1.5">
          <p className="text-base font-medium text-left text-gray-600">
            {pos}
          </p>
        </div>
        <div className="flex items-center justify-center p-2 h-50">
          <img className="mx-auto mt-2" src={imgSrc1} alt="Logo" />
        </div>
        <div className="overflow-hidden">
          <p className="text-2xl font-semibold text-center text-black mt-5 h-[3em]">{title}</p>
          <p className="mb-20 text-sm font-medium text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponentPopupCollaborate;
