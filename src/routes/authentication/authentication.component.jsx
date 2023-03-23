import SignUpForm from "../../Components/sing-up-form/sing-up-form.component";
import SignInForm from "../../Components/sing-in-form/sing-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
