import { FormAuth } from "components/FormAuth/FormAuth";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="container-global">
      <h1>Form para login</h1>
      <FormAuth typeForm="SignIn" />
      <Link to="/SignUp">Sign Up</Link>
    </div>
  );
}
