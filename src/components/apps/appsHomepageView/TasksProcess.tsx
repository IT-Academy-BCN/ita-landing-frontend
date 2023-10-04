import { FaRegCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

const TasksProcess = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-6 gap-4">
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
      <div className="flex justify-center items-center gap-2">
        <IconContext.Provider
          value={{ color: "#f7cbc4", className: "global-class-name" }}
        >
          <FaRegCircle />
          Próximamente
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default TasksProcess;
