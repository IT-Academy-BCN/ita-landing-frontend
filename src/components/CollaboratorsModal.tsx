import CollaboratorsCard from "./CollaboratorsCard";

function CollaboratorsModal() {

  return (
    <>
      <input type="checkbox" id="CollaboratorsModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white  w-11/12 max-w-5xl">
          <label
            htmlFor="CollaboratorsModal"
            className="absolute right-5 top-5 hover:text-purple-600 hover:cursor-pointer"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-5 py-5">Collaboradores wiki</h3>
            <CollaboratorsCard title ='modal'/>
        </div>
      </div>
    </>
  );
}
export default CollaboratorsModal;
