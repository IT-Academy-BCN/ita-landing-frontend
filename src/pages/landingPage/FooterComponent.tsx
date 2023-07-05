import NormativaModal from "./Modals/NormativaModal";


const Footer = () => (
  
  <footer className="bg-pink-it w-screen absolute left-0 mt-5 ">
     
  <div className="mx-auto w-full py-6 text-white text-sm">
    <div>
      <div className="flex justify-center items-center">
        <img
          src="../../src/images/ITA_Logo.png"
          className="h-10"
          alt="IT Academy Footer Logo"
        />
      </div>
      <div className="flex justify-center mt-10 font-semibold">
        <a className="link link-hover mx-5 text-white hover:text-white" href="https://www.barcelonactiva.cat/es/inicio">Barcelona Activa</a>
        <a className="link link-hover mx-5 text-white hover:text-white" href="https://www.barcelonactiva.cat/es/itacademy">IT Academy</a>
        <a className="link link-hover mx-5 text-white hover:text-white" href="">¿Cómo colaborar?</a>
        <label htmlFor="NormativaModal" className="mx-5 text-white hover:text-purple-600 hover:cursor-pointer hover:underline">Normativa</label>
        <NormativaModal />
      </div>
      <div className="flex justify-center mt-20 font-medium pb-3">
        <a className="link link-hover mx-5 text-white hover:text-white" href="">Términos</a>
        <a className="link link-hover mx-5 text-white hover:text-white" href="">Privacidad</a>
        <a className="link link-hover mx-5 text-white hover:text-white" href="">Cookies</a>
      </div>
    </div>
  </div>
</footer>
)

export default Footer; 