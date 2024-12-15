import { useSelector } from "react-redux";

function Customer() {
  const data = useSelector((store) => store.customer);
  return <h2>👋 Welcome, {data.fullName}</h2>;
}

export default Customer;
