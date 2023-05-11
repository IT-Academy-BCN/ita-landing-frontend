function CollaboratorsModal() {
    return (
      <>
        <input type="checkbox" id="CollaboratorsModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
          <label htmlFor="CollaboratorsModal" className="absolute right-5 top-5 hover:text-purple-600 hover:cursor-pointer">✕</label>
            <h3 className="font-bold text-lg">
              Collaborators
            </h3>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem excepturi nemo tempore architecto laudantium quos atque? Impedit quibusdam, similique veniam consequuntur iste repudiandae, voluptatum eaque, officia enim quos voluptatem!
            </p>
            <div className="modal-action flex justify-center">
              <label htmlFor="CollaboratorsModal" className="btn bg-[#BA007C] hover:bg-[#B91879] hover:bg-opacity-30 active:bg-white active:bg-opacity-30 text-white">
                Entendido
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default CollaboratorsModal;