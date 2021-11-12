import {useParams} from "react-router-dom";


function PetDetails(){

  const { id } = useParams<{ id: string }>();

    return(
        <div>
            hola {`${id}`}
        </div>

    );
}

export default PetDetails;
