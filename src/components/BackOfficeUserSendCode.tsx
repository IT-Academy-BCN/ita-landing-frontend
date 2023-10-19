const BackOfficeUserSendCode = () => {
  return (
    <section className="flex flex-col place-items-center bg-white rounded-md mx-6 lg:px-10 pb-5">
      <h1 className="py-10 text-3xl font-bold">Invitar nuev@ admin</h1>
      <input type="text" placeholder="Dirección de email" className="flex my-8 input input-bordered input-[#BA007C] w-1/3 max-w-xs"/>
      <button className="btn w-1/3 bg-[#BA007C] text-white">Invitar</button>
    </section>
  )
}

export default BackOfficeUserSendCode