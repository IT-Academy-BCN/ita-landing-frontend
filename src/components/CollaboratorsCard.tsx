import { useDispatch, useSelector } from "react-redux";
import { getCollaboratorsData } from "../store/reducers/CollaboratorsCall/getCollaboratorsData";
import { useEffect } from "react";


const CollaboratorsCard = ({title}: {title: string}) => {
 const dispatch =  useDispatch();
 const {collaborators} = useSelector((state:any)=> state.getCollaboratorsFunctionality)
   useEffect(()=>{
    dispatch(getCollaboratorsData() as any);
   
   },[]);

   console.log(collaborators)
    return (
        <div className="card">
            <p>{title}</p>
            {
                collaborators.map((a:any)=>{
                    
                    return <div> <p>{a.name}</p> <img src={a.photo} alt="" /> </div>
                })
            }
        </div>
    )
}

export default CollaboratorsCard;