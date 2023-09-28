import Cross from "../../../assets/img/cross.png";
export default function ModalsAddApps({
  newInfoApps,
  setNewInfoApps,
  sendInfo,
}: {
  newInfoApps: any;
  setNewInfoApps: any;
  sendInfo: any;
}) {
  
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box flex flex-col text-start h-4/5">
          <button className="cursor-pointer bg-transparent ml-auto border-0 focus:outline-none hover:bg-transparent">
            <img src={Cross} alt="Cross button" />
          </button>

          <input
            placeholder="Titulo"
            onChange={(e) =>
              setNewInfoApps({ ...newInfoApps, title: e.target.value })
            }
            className="focus:outline-none mb-2 text-black font-poppins font-bold"
            type="text"
          />

          <textarea
            placeholder="Descripción"
            onChange={(e) =>
              setNewInfoApps({ ...newInfoApps, description: e.target.value })
            }
            className="focus:outline-none mt-2 mb-4 w-full text-[#7e7e7e]"
          />

          <div className="my-2">
            <h3 className="font-bold mb-1">Url del proyecto</h3>
            <input
              placeholder="URL"
              onChange={(e) =>
                setNewInfoApps({ ...newInfoApps, url: e.target.value })
              }
              type="text"
              className="input input-bordered w-full py-2"
            />
          </div>

          <div className="my-4">
            <h3 className="font-bold mb-1">Url del repositorio de GitHub</h3>
            <input
              placeholder="GitHub"
              onChange={(e) =>
                setNewInfoApps({ ...newInfoApps, github: e.target.value })
              }
              type="text"
              className="input input-bordered w-full py-2"
            />
          </div>

          <h3 className="font-bold mt-2 mb-3">Estado</h3>
          <div className="flex w-fit rounded-full p-1 border border-[#7e7e7e]">
            <p
              onClick={() => { setNewInfoApps({ ...newInfoApps, state: "COMPLETED" })}}
              className={`
                ${newInfoApps.state == "COMPLETED"
                  ? "font-bold bg-completed rounded-full p-3 cursor-pointer"
                  : "cursor-pointer p-3"
                } text-sm`}
            >
              Completada
            </p>
            <p
              onClick={() => {setNewInfoApps({ ...newInfoApps, state: "IN PROGRESS" })}}
              className={`
                ${newInfoApps.state == "IN PROGRESS"
                  ? "font-bold bg-building ml-2 rounded-full p-3 cursor-pointer"
                  : "cursor-pointer p-3 ml-2"
                } text-sm`}
            >
              En progreso
            </p>
            <p
              onClick={() => {setNewInfoApps({ ...newInfoApps, state: "SOON" })}}
              className={`
                ${newInfoApps.state == "SOON"
                  ? "font-bold bg-soon ml-2 rounded-full p-3 cursor-pointer"
                  : "cursor-pointer p-3 ml-2"
                } text-sm`}
            >
              Próximamente
            </p>
          </div>

          <div className="flex place-content-center mt-6 gap-12">
            <button className="btn normal-case xl:px-12 text-[#7e7e7e] border border-[#7e7e7e] bg-white">Cancelar</button>
            <button className="btn normal-case xl:px-12 text-white bg-pink-it" onClick={sendInfo}>Crear</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
