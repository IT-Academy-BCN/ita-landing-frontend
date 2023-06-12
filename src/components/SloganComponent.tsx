import angularLogo from '../img/angular.png';
import phpLogo from '../img/php.png';
import javaLogo from '../img/java.png';
import pythonLogo from '../img/python.png';
import reactLogo from '../img/react.png';
import scrumLogo from '../img/scrum.png';
import nodejsLogo from '../img/nodejs.png';
import gitLogo from '../img/git.png';
import itacademyLogo from '../img/itacademylogo.png';
import HeaderComponent from '../components/HeaderComponent'


const SloganComponent = () => (
    <>
        
        

        <div className="relative flex justify-center m-auto background-image-style  "   >
            <HeaderComponent/>
             
            {/* <svg className="lg:invisible visible lg:w-0 " width="15000" height="842" viewBox="0 0 366 842" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.5687 94.8929C8.57015 95.8103 -0.929365 108.195 0.0705838 127V809.485C0.0705838 835.63 21.0695 841.593 36.5687 841.593H126H151.5C172 841.593 178.5 826 178.5 812.5C178.5 799 190 787 204.5 787H367.5V762.5C367.5 744.5 365.516 252.105 365.516 179.5V79.8929V39.5292V0.500232H265C249.36 0.500232 236.061 0.5 236.061 0.5V65.0002C236.061 82.8887 228.5 94.8929 204.5 94.8929C171.502 94.8929 64.5673 93.9756 36.5687 94.8929Z" fill="#F0F0F0" />
            </svg> */}

            <div className="overlay   flex justify-center ml-8 lg:ml-0 lg:flex lg:mt-[118px]">
                <div className="lg:w-1/2  text-center justify-center pl-[62px] pt-[155px] lg:pt-16 pl-0 lg:pl-32">
                    <div className="font-black text-4xl lg:text-5xl text-left mr-8 lg:mr-16">
                        <p>
                            Gana y valida experiencia como programador
                        </p>
                    </div>

                    <div className="lg:invisible  lg:h-0  mt-[45px]">
                        <div className="flex  items-center justify-between md:justify-evenly">
                            <img className="h-[53px] " src={angularLogo} alt="Angular Logo"></img>
                            <img className="h-[69px]" src={reactLogo} alt="React Logo"></img>
                            <img className="h-[64px]" src={nodejsLogo}  alt="Nodejs Logo"></img>
                            <img className="h-[48px]" src={pythonLogo}  alt="Python Logo"></img>
                            <img className="h-[68px]" src={phpLogo}  alt="PHP Logo"></img>
                        </div>
                        <div className="flex items-center justify-evenly">
                            <img className="h-[62px]" src={javaLogo}  alt="Java Logo"></img>
                            <img className="h-[60px]" src={gitLogo}  alt="Git Logo"></img>
                            <img className="h-[51px]" src={scrumLogo}  alt="Scrum Logo"></img>
                        </div>
                    </div>
            

                    <div className="mt-16      ">
                        <div className='w-96 md:w-full lg:w-3/4'>
                        <div className="text-start ">
                            <img className="absolute mr-[18px]" src="{{ asset('img/Ellipse.png') }}" alt=""></img>
                            <img className="absolute  ml-2 mr-[18px]" src="{{ asset('img/Vector.png') }}" alt=""></img>
                            <div className=" font-black">
                                <p>
                                    ¿Cómo colaborar?
                                </p>
                            </div>
                        </div>
                        <div className="mt-7">
                            <div className="relative py-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full lg:w-96 border-b border-gray-900"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 mr-8 w-full h-[73px] lg:w-96 text-left">
                            <p>
                                La falta de experiencia te dificulta conseguir trabajo? Trabaja en equipo y ponte a prueba con nuestros proyectos
                            </p>
 
                        </div>
                        </div>
                        
                            <div className='flex  me-auto'>
                            <img className=" mt-10 ms-auto block lg:hidden   " src={itacademyLogo} alt="IT Academy Logo"></img>

                            </div>

                    </div>

                     
                </div>


                <div id="logos-section" className="lg:w-1/2 w-0   lg:visible invisible   grid  grid-cols-3      ">
                    <img className="  xl:w-32 ml-5   " src={angularLogo} alt="Angular Logo"></img>
                    <img className="  xl:w-32  pt-20    " src={reactLogo} alt="React Logo"></img>

                    <img className="  xl:w-32    " src={phpLogo} alt="PHP Logo"></img>
                    <img className="  xl:w-32    " src={javaLogo} alt="Java Logo"></img>
                    <img className="  xl:w-32 justify-self-center pt-12   " src={nodejsLogo} alt="Nodejs Logo"></img>
                    <img className="  xl:w-32  justify-self-end pr-5  " src={pythonLogo} alt="Python Logo"></img>
                    <img className="  xl:w-32   justify-self-end place-self-end   " src={gitLogo} alt="Scrum Logo"></img>
                    <img className="  xl:w-32    justify-self-end  " src={scrumLogo} alt="Scrum Logo"></img>
                    
                    <img className="  lg:place-self-end  " src={itacademyLogo} alt="IT Academy Logo"></img>
                </div>
            
            </div>
            

        </div>
    </>

)

export default SloganComponent