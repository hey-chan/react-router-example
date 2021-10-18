import { useParams } from "react-router-dom";

function ClassNotFoundPage(){
  const { nonexistantClass} = useParams();

  return(
    <div className="ClassNotFound">
      <h2>Whoops!</h2>
      <p>We don't have the {nonexistantClass} in our database</p>
    </div>
  )
}
export default ClassNotFoundPage;