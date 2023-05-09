import angularLogo from '../../img/angular.png';
import phpLogo from '../../img/php.png';
import javaLogo from '../../img/java.png';
import pythonLogo from '../../img/python.png';
import reactLogo from '../../img/react.png';
import nodejsLogo from '../../img/nodejs.png';
import CardComponent from './CardComponent';

const TeamsectionComponent = () => (
    <div className="p-14">
        <div className="w-full flex flex-col items-center justify-center my-12 space-y-8">
            <h1 className="font-poppins font-bold text-5xl leading-58 text-gray-800">Equipos de trabajo</h1>
            <h3 className="font-poppins font-medium text-base text-gray-500">Los proyectos son realizados por
                equipos que combinan las siguientes tecnologías</h3>
        </div>

        <div className="flex w-full items-center justify-center md:flex-row flex-col space-y-4">
            <CardComponent pos={'01'} imgSrc1={reactLogo} imgSrc2={nodejsLogo} title={'React & Node'} description={'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam pellentesque dignissim interdum feugiat tortor ut.\nVelitbus vulputate neque lacinia faucibus blandit diam parturient luctus.'} buttonText={'Ver más'} />
            <CardComponent pos={'02'} imgSrc1={angularLogo} imgSrc2={javaLogo} title={'Angular & Java'} description={'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam pellentesque dignissim interdum feugiat tortor ut.\nVelitbus vulputate neque lacinia faucibus blandit diam parturient luctus.'} buttonText={'Ver más'} />
            <CardComponent pos={'03'} imgSrc1={phpLogo} title={'PHP'} description={'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam pellentesque dignissim interdum feugiat tortor ut.\nVelitbus vulputate neque lacinia faucibus blandit diam parturient luctus.'} buttonText={'Ver más'} />
            <CardComponent pos={'04'} imgSrc1={pythonLogo} title={'Data Science'} description={'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam pellentesque dignissim interdum feugiat tortor ut.\nVelitbus vulputate neque lacinia faucibus blandit diam parturient luctus.'} buttonText={'Ver más'} />
        </div>
    </div>
)

export default TeamsectionComponent;