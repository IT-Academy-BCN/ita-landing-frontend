import NormativaModal from "./Modals/NormativaModal";

const Footer = () => (
  <footer className="bg-[#BA007C] w-screen">
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
        <a className="mx-5 text-white hover:text-purple-600" href="https://www.barcelonactiva.cat/es/inicio">Barcelona Activa</a>
        <a className="mx-5 text-white hover:text-purple-600" href="https://www.barcelonactiva.cat/es/itacademy">IT Academy</a>
        <a className="mx-5 text-white hover:text-purple-600" href="">¿Cómo colaborar?</a>
        <label htmlFor="NormativaModal" className="mx-5 text-white hover:text-purple-600 hover:cursor-pointer">Normativa</label>
        <NormativaModal />
      </div>
      <div className="flex justify-center mt-20 font-medium pb-3">
        <a className="mx-7 text-white hover:text-purple-600" href="">Términos</a>
        <a className="mx-7 text-white hover:text-purple-600" href="">Privacidad</a>
        <a className="mx-7 text-white hover:text-purple-600" href="">Cookies</a>
      </div>
    </div>
  </div>
</footer>
)

export default Footer; 