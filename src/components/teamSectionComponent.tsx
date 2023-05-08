import angularLogo from '../img/angular.png';
import phpLogo from '../img/php.png';
import javaLogo from '../img/java.png';
import pythonLogo from '../img/python.png';
import reactLogo from '../img/react.png';
import nodejsLogo from '../img/nodejs.png';
import ellipse from '../img/Ellipse.png';
import vector from '../img/Vector.png';

const TeamsectionComponent = () => (
    <div className="p-14">
        <div className="w-full flex flex-col items-center justify-center my-12 space-y-8">
            <h1 className="font-poppins font-bold text-5xl leading-58 text-gray-800">Equipos de trabajo</h1>
            <h3 className="font-poppins font-medium text-base text-gray-500">Los proyectos son realizados por
                equipos que combinan las siguientes tecnologías</h3>
        </div>

        <div className="flex w-full items-center justify-center md:flex-row flex-col space-y-4">

            <div className="relative mt-4">
                <svg width="360" height="410" viewBox="0 0 268 329" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1637 43.8887C5.60393 43.8887 0.000167875 51.1484 0.00016269 59.0682C0.76933 85.6874 1.41757e-06 124.736 0 217.133V308.211C2.7589e-05 321.08 4.94464 329 11.208 329H253.825C261.077 329 268 322.73 268 315.47V14.8495C268 4.61986 262.066 0 252.836 0H58.6766C51.4245 0 45.8205 5.27984 45.8205 12.8696V31.349C45.8205 38.9388 39.887 43.8887 32.6348 43.8887H15.1637Z" fill="#F0F0F0" />
                </svg>
                <div className="overlay absolute inset-0 flex flex-col w-full h-full justify-between">
                    <div className="p-6 pb-0 1/5">
                        <p className="font-normal font-medium text-base leading-5 text-gray-600 text-left">/ 01</p>
                    </div>
                    <div className="flex justify-center items-center relative">
                        <img className="absolute translate-x-12 translate-y-8" src={nodejsLogo} alt="NodeJS Logo"></img>
                        <img className="absolute -translate-x-12 -translate-y-8" src={reactLogo} alt="React Logo"></img>
                    </div>
                    <div className="flex justify-center items-center p-3 h-1/5">
                        <p className="text-center font-poppins font-medium text-2xl text-black">React & Node</p>
                    </div>
                    <a href="#" className="overlay absolute inset-0 flex flex-col m-[45px] mt-[75px] h-4/5 overflow-hidden opacity-0 text-left hover:opacity-100" style={{backgroundColor: "#F0F0F0"}}>
                        <p className="font-poppins font-medium text-xl text-black overflow-hidden mb-3">Lorem ipsum dolor sit amet consectetur adipiscing elit nullam pellentesque dignissim interdum feugiat tortor ut.</p>
                        <p className="font-poppins font-medium text-xl text-black overflow-hidden">Velitbus vulputate neque lacinia faucibus blandit diam parturient luctus.</p>
                        <div className="flex items-center mt-5">
                            <img className="absolute mr-[18px]" src={ellipse} alt=""></img>
                            <img className="absolute m-2" src={vector} alt=""></img>
                            <div className="ml-8 text-black font-bold text-xl">
                                <p>
                                    Ver más
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="relative">
                <svg width="360" height="410" viewBox="0 0 268 329" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1637 43.8887C5.60393 43.8887 0.000167875 51.1484 0.00016269 59.0682C0.76933 85.6874 1.41757e-06 124.736 0 217.133V308.211C2.7589e-05 321.08 4.94464 329 11.208 329H253.825C261.077 329 268 322.73 268 315.47V14.8495C268 4.61986 262.066 0 252.836 0H58.6766C51.4245 0 45.8205 5.27984 45.8205 12.8696V31.349C45.8205 38.9388 39.887 43.8887 32.6348 43.8887H15.1637Z" fill="#F0F0F0" />
                </svg>
                <div className="overlay absolute inset-0 flex flex-col w-full h-full justify-between">
                    <div className="p-6 pb-0 1/5">
                        <p className="font-normal font-medium text-base leading-5 text-gray-600 text-left">/ 02</p>
                    </div>
                    <div className="flex justify-center items-center relative">
                        <img className="absolute translate-x-10 translate-y-8" src={javaLogo} alt="Java Logo"></img>
                        <img className="absolute -translate-x-10 -translate-y-8" src={angularLogo} alt="Angular Logo"></img>
                    </div>
                    <div className="flex justify-center items-center p-3 h-1/5">
                        <p className="text-center font-poppins font-medium text-2xl text-black">Angular & Java</p>
                    </div>
                    <a href="#" className="overlay absolute inset-0 flex flex-col m-[45px] mt-[75px] h-4/5 overflow-hidden opacity-0 text-left opacity-100" style={{backgroundColor: "#F0F0F0"}}>
                        <p className="font-poppins font-medium text-xl text-black overflow-hidden mb-3">Lorem ipsum dolor sit amet consectetur adipiscing elit nullam pellentesque dignissim interdum feugiat tortor ut.</p>
                        <p className="font-poppins font-medium text-xl text-black overflow-hidden">Velitbus vulputate neque lacinia faucibus blandit diam parturient luctus.</p>
                        <div className="flex items-center mt-5">
                            <img className="absolute mr-[18px]" src={ellipse} alt=""></img>
                            <img className="absolute  m-2" src={vector} alt=""></img>
                            <div className="ml-8 text-black font-bold text-xl">
                                <p>
                                    Ver más
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="relative">
                <svg width="360" height="410" viewBox="0 0 268 329" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1637 43.8887C5.60393 43.8887 0.000167875 51.1484 0.00016269 59.0682C0.76933 85.6874 1.41757e-06 124.736 0 217.133V308.211C2.7589e-05 321.08 4.94464 329 11.208 329H253.825C261.077 329 268 322.73 268 315.47V14.8495C268 4.61986 262.066 0 252.836 0H58.6766C51.4245 0 45.8205 5.27984 45.8205 12.8696V31.349C45.8205 38.9388 39.887 43.8887 32.6348 43.8887H15.1637Z" fill="#F0F0F0" />
                </svg>
                <div className="overlay absolute inset-0 flex flex-col w-full h-full justify-between">
                    <div className="p-6 pb-0 1/5">
                        <p className="font-normal font-medium text-base leading-5 text-gray-600 text-left">/ 03</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={phpLogo} alt="PHP Logo"></img>
                    </div>
                    <div className="flex justify-center items-center p-3 h-1/5">
                        <p className="text-center font-poppins font-medium text-2xl text-black">PHP</p>
                    </div>
                    <a href="#" className="overlay absolute inset-0 flex flex-col m-[45px] mt-[75px] h-4/5 overflow-hidden opacity-0 text-left hover:opacity-100" style={{backgroundColor: "#F0F0F0"}}>
                        <p className="font-poppins font-medium text-xl text-black overflow-hidden mb-3">Lorem ipsum dolor sit amet consectetur adipiscing elit nullam pellentesque dignissim interdum feugiat tortor ut.</p>
                        <p className="font-poppins font-medium text-xl text-lg text-black overflow-hidden">Velitbus vulputate neque lacinia faucibus blandit diam parturient luctus.</p>
                        <div className="flex items-center mt-5">
                            <img className="absolute mr-[18px]" src={ellipse} alt=""></img>
                            <img className="absolute  m-2" src={vector} alt=""></img>
                            <div className="ml-8 text-black font-bold text-xl">
                                <p>
                                    Ver más
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="relative">
                <svg width="360" height="410" viewBox="0 0 268 329" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1637 43.8887C5.60393 43.8887 0.000167875 51.1484 0.00016269 59.0682C0.76933 85.6874 1.41757e-06 124.736 0 217.133V308.211C2.7589e-05 321.08 4.94464 329 11.208 329H253.825C261.077 329 268 322.73 268 315.47V14.8495C268 4.61986 262.066 0 252.836 0H58.6766C51.4245 0 45.8205 5.27984 45.8205 12.8696V31.349C45.8205 38.9388 39.887 43.8887 32.6348 43.8887H15.1637Z" fill="#F0F0F0" />
                </svg>
                <div className="overlay absolute inset-0 flex flex-col w-full h-full justify-between">
                    <div className="p-6 pb-0 1/5">
                        <p className="font-normal font-medium text-base leading-5 text-gray-600 text-left">/ 04</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={pythonLogo} alt="Python Logo"></img>
                    </div>
                    <div className="flex justify-center items-center p-3 h-1/5">
                        <p className="text-center font-poppins font-medium text-2xl text-black">Data Science</p>
                    </div>
                    <a href="#" className="overlay absolute inset-0 flex flex-col m-[45px] mt-[75px] h-4/5 overflow-hidden opacity-0 text-left hover:opacity-100" style={{backgroundColor: "#F0F0F0"}}>
                        <p className="font-poppins font-medium text-xl text-black overflow-hidden mb-3">Lorem ipsum dolor sit amet consectetur adipiscing elit nullam pellentesque dignissim interdum feugiat tortor ut.</p>
                        <p className="font-poppins font-medium text-xl text-black overflow-hidden">Velitbus vulputate neque lacinia faucibus blandit diam parturient luctus.</p>
                        <div className="flex items-center mt-5">
                            <img className="absolute mr-[18px]" src={ellipse} alt=""></img>
                            <img className="absolute  m-2" src={vector} alt=""></img>
                            <div className="ml-8 text-black font-bold text-xl">
                                <p>
                                    Ver más
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    </div>
)

export default TeamsectionComponent;