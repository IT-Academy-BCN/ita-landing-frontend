import { useDispatch, useSelector, } from "react-redux";
import { getCollaboratorsData } from "../store/reducers/CollaboratorsCall/getCollaboratorsData";
import { useEffect,useState } from "react";
import { collaborator } from "../interfaces/interfaces";

const CollaboratorsCard = ({title}: {title: string}) => {

const [windowWidth, setWindowWidth] = useState(window.innerWidth);


//Variables Redux//
 const dispatch =  useDispatch();

 const {collaborators} = useSelector((state:any)=> state.getCollaboratorsFunctionality);

//Inicialization of the api//
   useEffect(()=>{
    
    dispatch(getCollaboratorsData() as any);
   },[]);



   console.log(collaborators)
    return (
    <div className="grid grid-cols-1 gap-y-5    md:w-11/12 m-auto md:grid-cols-3 lg:grid-cols-3">
        
            {
                collaborators.slice(window.innerWidth > 750 ? 0 : 0, window.innerWidth > 750 ? 15 : 4).map((a:collaborator, index:number)=>{
                    
                    return  <div className="w-2/3 m-auto"   key={index} > <a  className="flex items-center justify-center "href={a.url} target="_blank"  >  <img className="w-32 md:w-20 rounded-full" src={a.photo} alt={a.name+ ' photo'} /> <p className="ms-5  w-full text-start">{a.name}</p> </a> </div>
                })
            }
        </div>
    )
}


export default CollaboratorsCard;