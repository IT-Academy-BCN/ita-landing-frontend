import curvedArrow from "../../img/curvedArrow.svg"
import { FaRegCircle, FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";

const ProjectsComponent = () => (
  <>
    <div className=" container  mx-auto mt-20 flex ">
      {/*Projects section*/}
      <section className="flex  flex-col justify-center">
        {/*Projects title area*/}
        <div className="grid grid-cols-4 grid-rows-1  ">
          <img className="h-[44px] mr-10 place-self-end md:p-0 pl-14" src={curvedArrow}></img>
          <h2 className="font-black text-3xl text-center col-span-6">
            Directorio de aplicaciones IT Academy
          </h2>
        </div>
        {/* Projects legend*/}
        <div className="flex flex-col md:flex-row lg:w-3/4  lg:justify-end justify-center mx-auto my-6  gap-4">
          <div className="flex justify-center items-center gap-2">
            <IconContext.Provider
              value={{ color: "#bedfc8", className: "global-class-name" }}
            >
              <FaRegCircle />
              Terminadas
            </IconContext.Provider>
          </div>
          <div className="flex justify-center items-center gap-2">
            <IconContext.Provider
              value={{ color: "#f8e9b9", className: "global-class-name" }}
            >
              <FaRegCircle /> En construcción
            </IconContext.Provider>
          </div>
          <div className = "flex justify-center items-center gap-2">
            <IconContext.Provider
              value={{ color: "#f7cbc4", className: "global-class-name" }}
            >
              <FaRegCircle />
              Próximamente
            </IconContext.Provider>
          </div>
        </div>
        {/*Cards*/}
        <div className="flex flex-wrap gap-7 justify-center ">
          {/*Card 1*/}
          <div className="card md:w-80 m-5 md:m-0 p-0 lg:p-4  bg-completed text-grey-it">
            <div className="card-body">
              <h2 className="card-title">Wiki</h2>
              <p>
                Plataforma en la que l@s alumn@s pueden subir y votar recursos
                que encuentran útiles para su aprendizaje.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-block btn-outline bg-base-100 border-none normal-case gap-2">
                  Ir a app <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/*Card 2*/}
          <div className="card md:w-80 m-5  p-0 md:m-0 lg:p-4 bg-completed text-grey-it">
            <div className="card-body">
              <h2 className="card-title">Challenges & Hackathons</h2>
              <p>
                Lanzamiento de retos periódicos y Hackathons. El desempeño de
                l@s alumn@s pueden ser consumidos por otras apps
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-block btn-outline bg-base-100 border-none normal-case gap-2">
                  Ir a app <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/*Card 3*/}
          <div className="card md:w-80 m-5 md:m-0 p-0 lg:p-4 bg-building text-grey-it">
            <div className="card-body">
              <h2 className="card-title">Game!</h2>
              <p>
                L@s alumn@s ganan puntos al realizar actividades de ayuda a sus
                compañeros. Hay un ranking, perfil con premios ¡y mucho más!
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-block btn-outline bg-base-100 border-none normal-case gap-2">
                  Ir a app <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/*Card 4*/}
          <div className="card md:w-80 m-5 md:m-0 p-0 lg:p-4 bg-building text-grey-it">
            <div className="card-body">
              <h2 className="card-title">ITA Profiles</h2>
              <p>
                Directorio de perfiles de la IT Academy, con información
                relevante como desempeño en retos y hackathons.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-block btn-outline bg-base-100 border-none normal-case gap-2">
                  Ir a app <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/*Card 5*/}
          <div className="card md:w-80 m-5 md:m-0 p-0 lg:p-4 bg-soon text-grey-it">
            <div className="card-body">
              <h2 className="card-title">Reports</h2>
              <p>
                Dashboard en la que l@s estudiantes, mentor@s y staff pueden
                encontrar información actualizada sobre la academia.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-block btn-outline bg-base-100 border-none normal-case gap-2">
                  Ir a app <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/*Card 6*/}
          <div className="card md:w-80 m-5 md:m-0 p-0 lg:p-4 bg-soon text-grey-it">
            <div className="card-body">
              <h2 className="card-title">ITA Brain</h2>
              <p className="font-16">
                Predicción de probabilidad de abandono de un alumno en función
                de la información recogida en las apps y moodle.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-block btn-outline bg-base-100 border-none normal-case gap-2">
                  Ir a app <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default ProjectsComponent;
