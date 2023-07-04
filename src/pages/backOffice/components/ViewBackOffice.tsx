import itImage from '../../../images/ITA_Logo.png'
import LogoOut from '../../../images/Sign-out.png'
export default function ViewBackOffice({setIsLogged,dispatch}:{setIsLogged:any,dispatch:any}) {

    
  return (
    <>
        <main className="grid grid-cols-6 h-screen w-screen bg-backOffice-main">
            <nav className="">

            <img src={itImage} alt="img-logo" />


            <button onClick={()=> dispatch(setIsLogged(false)) } className="flex">
                <img src={LogoOut} alt="" />
                Log Out</button>

            </nav>

            <div className=" col-span-5 m-5 bg-white rounded-md">
                <div>
                    acordeon
                </div>
            </div>
        </main>
    </>
  )
}
