import ellipse from '../../img/Ellipse.png';
import vector from '../../img/Vector.png';

type CardTwoLogosProps = {
    pos: string,
    imgSrc1: string;
    imgSrc2?: string;
    title: string;
    description: string;
    buttonText: string;
}

const CardComponent = ({ pos, imgSrc1, imgSrc2, title, description, buttonText }: CardTwoLogosProps) => {
    let paragraphs = description.split('\n');
    return (
        <div className="relative mt-4">
            <svg width="360" height="410" viewBox="0 0 268 329" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1637 43.8887C5.60393 43.8887 0.000167875 51.1484 0.00016269 59.0682C0.76933 85.6874 1.41757e-06 124.736 0 217.133V308.211C2.7589e-05 321.08 4.94464 329 11.208 329H253.825C261.077 329 268 322.73 268 315.47V14.8495C268 4.61986 262.066 0 252.836 0H58.6766C51.4245 0 45.8205 5.27984 45.8205 12.8696V31.349C45.8205 38.9388 39.887 43.8887 32.6348 43.8887H15.1637Z" fill="#F0F0F0" />
            </svg>
            <div className="overlay absolute inset-0 flex flex-col w-full h-full justify-between">
                <div className="p-6 pb-0 1/5">
                    <p className="font-normal font-medium text-base leading-5 text-gray-600 text-left">/ {pos}</p>
                </div>
                <div className="flex justify-center items-center relative">
                    {imgSrc2 ? (
                        <>
                            <img className="absolute translate-x-12 translate-y-8" src={imgSrc2} alt="Logo"></img>
                            <img className="absolute -translate-x-12 -translate-y-8" src={imgSrc1} alt="Logo"></img>
                        </>
                    ) : (
                        <img src={imgSrc1} alt="Logo"></img>
                    )}
                </div>
                <div className="flex justify-center items-center p-3 h-1/5">
                    <p className="text-center font-medium text-2xl text-black">{title}</p>
                </div>
                <a href="#" className="overlay absolute inset-0 flex flex-col m-[45px] mt-[75px] h-4/5 overflow-hidden opacity-0 text-left hover:opacity-100" style={{ backgroundColor: "#F0F0F0" }}>
                    {paragraphs.map((paragraphs, index) => (
                        <p key={index} className="font-medium text-xl text-black overflow-hidden mb-3">{paragraphs}</p>
                    ))}
                    <div className="flex items-center mt-5">
                        <div className="relative 1/5">
                            <img className="" src={ellipse} alt=""></img>
                            <img className="absolute top-1 left-1.5" src={vector} alt="" />
                        </div>
                        <div className="ml-3 text-black font-bold text-xl">
                            <p className="align-center">
                                {buttonText}
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default CardComponent;