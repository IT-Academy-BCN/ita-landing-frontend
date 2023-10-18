import { useDispatch, useSelector } from "react-redux";
import { getCollaboratorsData } from "../store/reducers/CollaboratorsCall/getCollaboratorsData";
import { useEffect, useState } from "react";
import CollaboratorsCardIndividual from "./CollaboratorsCardIndividual";
import { RootState } from "../store/store";
const CollaboratorsCard = ({ title }: { title: string }) => {
  //variables del componente

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //Variables Redux//
  const dispatch = useDispatch();

  const { collaborators, maxWidth } = useSelector(
    (state: RootState) => state.getCollaboratorsFunctionality
  );

  //Inicialization of the api//
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(getCollaboratorsData() as any);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [dispatch]);


//collaborators function
  const collaboratorsDataSlice = () => {
    // TODO: improve this workaround
    if (!collaborators) return [];
    //Colocar el 750 centralizado en redux en una variable//
    if (windowWidth > maxWidth && title != "modal") {
      return collaborators.slice(0, 15);
    } else if (windowWidth < maxWidth && title != "modal") {
      return collaborators.slice(0, 4);
    }

    return collaborators;
  };
  return (
    <div className="grid grid-cols-1 gap-y-5 md:w-11/12 m-auto md:grid-cols-3 lg:grid-cols-3">
      <CollaboratorsCardIndividual
        collaboratorsDataSlice={collaboratorsDataSlice}
      />
    </div>
  );
};

export default CollaboratorsCard;
