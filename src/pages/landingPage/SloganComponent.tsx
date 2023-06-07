import angularLogo from '../../img/angular.png';
import phpLogo from '../../img/php.png';
import javaLogo from '../../img/java.png';
import pythonLogo from '../../img/python.png';
import reactLogo from '../../img/react.png';
import scrumLogo from '../../img/scrum.png';
import nodejsLogo from '../../img/nodejs.png';
import gitLogo from '../../img/git.png';
import itacademyLogo from '../../img/itacademylogo.png';
const SloganComponent = () => (
    <>
        <div className="flex justify-center">
            <svg className="lg:visible xl:visible invisible sm:invisible" width="1376" height="772" viewBox="0 0 1376 772" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.5687 78.8927C8.57015 79.8101 -0.929365 92.1944 0.0705838 111V739.485C0.0705838 765.629 21.0695 771.592 36.5687 771.592C60.0675 771.592 1094.51 772.51 1118.01 771.592C1141.51 770.675 1154.01 766.547 1154.01 733.981C1154.01 701.414 1172.01 696.828 1194.51 696.828H1339C1371.5 696.828 1376 678.022 1376 659.216V111.918C1376 83.0208 1359.5 78.8927 1331 78.8927H1115.51C1071.02 78.8927 1055.52 73.3886 1055.52 38.529C1055.52 3.66943 1031.52 0 1012.02 0H309.059C274.061 0 270.061 20.6405 270.061 38.529C270.061 56.4175 264.062 78.8927 231.063 78.8927C198.065 78.8927 64.5673 77.9753 36.5687 78.8927Z" fill="#F0F0F0" />
            </svg>
            {/* <svg className="lg:invisible visible lg:w-0 " width="15000" height="842" viewBox="0 0 366 842" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.5687 94.8929C8.57015 95.8103 -0.929365 108.195 0.0705838 127V809.485C0.0705838 835.63 21.0695 841.593 36.5687 841.593H126H151.5C172 841.593 178.5 826 178.5 812.5C178.5 799 190 787 204.5 787H367.5V762.5C367.5 744.5 365.516 252.105 365.516 179.5V79.8929V39.5292V0.500232H265C249.36 0.500232 236.061 0.5 236.061 0.5V65.0002C236.061 82.8887 228.5 94.8929 204.5 94.8929C171.502 94.8929 64.5673 93.9756 36.5687 94.8929Z" fill="#F0F0F0" />
            </svg> */}

            <div className="overlay absolute flex justify-center ml-8 lg:ml-0 lg:flex lg:mt-[118px]">
                <div className="lg:w-1/2 text-center justify-center pl-[62px] pt-[155px] lg:pt-16 lg:pl-32">
                    <div className="font-black text-4xl lg:text-5xl text-left mr-8 lg:mr-16">
                        <p>
                            Gana y valida experiencia como programador
                        </p>
                    </div>

                    <div className="lg:invisible lg:h-0 mt-[45px]">
                        <div className="flex items-center justify-center">
                            <img className="h-[43px]" src={angularLogo} alt="Angular Logo"></img>
                            <img className="h-[59px]" src={reactLogo} alt="React Logo"></img>
                            <img className="h-[54px]" src={nodejsLogo}  alt="Nodejs Logo"></img>
                            <img className="h-[38px]" src={pythonLogo}  alt="Python Logo"></img>
                            <img className="h-[58px]" src={phpLogo}  alt="PHP Logo"></img>
                        </div>
                        <div className="flex items-center justify-center">
                            <img className="h-[52px]" src={javaLogo}  alt="Java Logo"></img>
                            <img className="h-[50px]" src={gitLogo}  alt="Git Logo"></img>
                            <img className="h-[41px]" src={scrumLogo}  alt="Scrum Logo"></img>
                        </div>
                    </div>


                    <div className="mt-16">
                        <div className="flex items-center">
                            <img className="absolute mr-[18px]" src="{{ asset('img/Ellipse.png') }}" alt=""></img>
                            <img className="absolute  ml-2 mr-[18px]" src="{{ asset('img/Vector.png') }}" alt=""></img>
                            <div className="ml-8 font-black">
                                <p>
                                    ¿Cómo colaborar?
                                </p>
                            </div>
                        </div>
                        <div className="mt-7">
                            <div className="relative py-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-[290px] lg:w-96 border-b border-gray-900"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 mr-8 w-[320px] h-[73px] lg:w-96 text-left">
                            <p>
                                La falta de experiencia te dificulta conseguir trabajo? Trabaja en equipo y ponte a prueba con nuestros proyectos
                            </p>
                        </div>
                    </div>

                    <div className="absolute lg:invisible mt-[80px] ml-[170px]">
                        <img className="h-[34px]" src="{{ asset('img/itacademylogo.png') }}" alt="IT Academy Logo"></img>
                    </div>
                </div>


                <div id="logos-section" className="lg:w-1/2 w-0 lg:visible invisible">
                    <img className="repel absolute mt-[34px] mr-[495px] ml-[108px]" src={angularLogo} alt="Angular Logo"></img>
                    <img className="repel absolute mt-[7px] mr-[118px] ml-[432px]" src={phpLogo} alt="PHP Logo"></img>
                    <img className="repel absolute mt-[88px] mr-[225px] ml-[198px]" src={reactLogo} alt="React Logo"></img>
                    <img className="repel absolute mt-[232px] mr-[591px] ml-[-12px]" src={javaLogo} alt="Java Logo"></img>
                    <img className="repel absolute mt-[249px] mr-[396px] ml-[166px]" src={nodejsLogo} alt="Nodejs Logo"></img>
                    <img className="repel absolute mt-[228px] mr-[152px] ml-[465px]" src={pythonLogo} alt="Python Logo"></img>
                    <img className="repel absolute mt-[429px] mr-[418px] ml-[159px]" src={gitLogo} alt="Git Logo"></img>
                    <img className="repel absolute mt-[385px] mr-[216px] ml-[384px]" src={scrumLogo} alt="Scrum Logo"></img>
                    <img className="absolute mt-[601px] mr-[32px] ml-[524px] mb-[54px]" src={itacademyLogo} alt="IT Academy Logo"></img>
                </div>

            </div>

        </div>
    </>

)

export default SloganComponent