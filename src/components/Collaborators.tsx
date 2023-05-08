const Collaborators = () => (
    <section className="my-10">
        <div className="flex justify-center">
            <p className="text-4xl font-extrabold my-5">Colaboradores de proyectos</p>
        </div>
        <div className="flex justify-center my-5">
        <div className="flex justify-center w-[726px]">
            <div className="flex navbar bg-base-100 drop-shadow-md justify-between rounded-full">
                <a className="btn btn-ghost text-sm normal-case rounded-3xl active:bg-[#025E7E]">Angular</a>
                <a className="btn btn-ghost text-sm normal-case rounded-3xl active:bg-[#025E7E]">React</a>
                <a className="btn btn-ghost text-sm normal-case rounded-3xl active:bg-[#025E7E]">PHP</a>
                <a className="btn btn-ghost text-sm normal-case rounded-3xl active:bg-[#025E7E]">Node</a>
                <a className="btn btn-ghost text-sm normal-case rounded-3xl active:bg-[#025E7E]">Java</a>
                <a className="btn btn-ghost text-sm normal-case rounded-3xl active:bg-[#025E7E]">Data
                    Science</a>
            </div>
        </div>
        </div>
        <div className="flex justify-end my-5 mr-10">
            <a className="font-bold text-[#025E7E] active:underline " href="">Ver Todos </a>
        </div>
        <div className="grid grid-cols-3 gap-3 w-3/4">
            <div className="flex justify-center my-5">
                <div className="w-24 h-24 overflow-hidden rounded-full">
                    <img className="w-full h-full object-cover" src="../../public/images/img_test.jpg" />
                </div>
                    <p className="text-2xl mt-8 ml-5">Joël Arana</p>
                </div>
        </div>
    </section>
)

export default Collaborators;