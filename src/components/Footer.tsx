
const Footer = () => (
  <footer className="bg-[#BA007C] w-screen">
  <div className="mx-auto w-full py-6 text-white text-sm">
    <div>
      <div className="flex justify-center items-center">
        <img
          src="../../public/images/ITA_Logo.png"
          className="h-10"
          alt="IT Academy Footer Logo"
        />
      </div>
      <div className="flex justify-center mt-10 font-semibold">
        <a className="mx-5 text-white" href="https://www.barcelonactiva.cat/es/inicio">Barcelona Activa</a>
        <a className="mx-5 text-white" href="https://www.barcelonactiva.cat/es/itacademy">IT Academy</a>
        <a className="mx-5 text-white" href="">¿Cómo colaborar?</a>
      </div>
      <div className="flex justify-center mt-20 font-medium pb-3">
        <a className="mx-7 text-white" href="">Términos</a>
        <a className="mx-7 text-white" href="">Privacidad</a>
        <a className="mx-7 text-white" href="">Cookies</a>
      </div>
    </div>
  </div>
</footer>
)

export default Footer; 