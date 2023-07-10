import itImage from '../../../images/ITA_Logo.png'
import LogoOut from '../../../images/Sign-out.png'
import FAQs from '../../landingPage/FAQsComponent';
export default function ViewBackOffice({setIsLogged,dispatch}:{setIsLogged:any,dispatch:any}) {


  
    
  return (
    
    <>
        <main className="grid grid-cols-6 min-h-screen  w-screen bg-backOffice-main">
            <nav className="h-full">

            <img src={itImage} alt="img-logo" />


            <button onClick={()=> dispatch(setIsLogged(false)) } className="flex">
                <img src={LogoOut} alt="" />
                Log Out</button>

            </nav>

            <div className=" col-span-5 m-5 bg-white rounded-md">
                <aside>
                    <FAQs/>
                </aside>
            </div>
        </main>
    </>
  )
}
