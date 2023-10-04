import { collaborator } from "../interfaces/interfaces";

interface CollaboratorsCardIndividualProps {
  collaboratorsDataSlice: () => collaborator[];
}
export const CollaboratorsCardIndividual: React.FC<
  CollaboratorsCardIndividualProps
> = ({ collaboratorsDataSlice }) => {
  return (
    <>
      {collaboratorsDataSlice().map((a: collaborator, index: number) => {
        {
          /* TODO: Place in a new component (card) */
        }
        return (
          <div className="w-2/3 m-auto" key={index}>
            <a
              className="flex items-center justify-center "
              href={a.url}
              target="_blank"
            >
              <img
                className="w-32 md:w-20 rounded-full"
                src={a.photo}
                alt={a.name + " photo"}
              />
              <p className="ms-5  w-full text-start">{a.name}</p>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default CollaboratorsCardIndividual;
