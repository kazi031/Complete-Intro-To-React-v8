import { useParams } from "react-router-dom";
// useParams Cant be used without a BrowserRouter
const Details = () => {
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;
