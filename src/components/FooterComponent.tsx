//import NormativaModal from "../../pages/landingPage/Modals/NormativaModal";
import ImgLogoFooter from '../assets/img/ITA_Logo.png'
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation();
  return (
    <footer className="bg-pink-it w-screen absolute left-0 mt-5 ">
    <div className="mx-auto w-full py-6 text-white text-sm">
      <div>
        <div className="flex justify-center items-center">
          <img
            src={ImgLogoFooter}
            className="h-10"
            alt="IT Academy Footer Logo"
          />
        </div>
        <div className="flex justify-center mt-10 font-semibold">
          <a
            className="link link-hover mx-5 text-white hover:text-white"
            href="https://www.barcelonactiva.cat/es/inicio"
          >
            {t("landingPage.footer.institution")}
          </a>
          <a
            className="link link-hover mx-5 text-white hover:text-white"
            href="https://www.barcelonactiva.cat/es/itacademy"
          >
            {t("landingPage.footer.academy")}
          </a>
          <a
            className="link link-hover mx-5 text-white hover:text-white"
            href=""
          >
            {t("landingPage.footer.buttonCollaborate")}
          </a>
          <label
            htmlFor="NormativaModal"
            className="mx-5 text-white hover:text-purple-600 hover:cursor-pointer hover:underline"
          >
            {t("landingPage.footer.normative")}
          </label>
          {/*<NormativaModal />*/}
        </div>
        <div className="flex justify-center mt-20 font-medium pb-3">
          <a
            className="link link-hover mx-5 text-white hover:text-white"
            href=""
          >
            {t("landingPage.footer.terms")}
          </a>
          <a
            className="link link-hover mx-5 text-white hover:text-white"
            href=""
          >
            {t("landingPage.footer.privacity")}
          </a>
          <a
            className="link link-hover mx-5 text-white hover:text-white"
            href=""
          >
            {t("landingPage.footer.cookies")}
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer