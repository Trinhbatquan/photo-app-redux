import "./SignIn.scss";
import { UserAuth } from "GoogleFireBase/FireBaseContext";
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export const SignIn = () => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log("lỗi này" + error);
    }
  };

  return (
    <div className="signIn">
      <h1 className="h1">Login Form</h1>
      <p className="p">or login with social accounts</p>
      <div className="contact">
        <div class="google-btn" onClick={handleGoogleSignIn}>
          <div class="google-icon-wrapper">
            <img
              class="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Sign in with Google"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
        <Button color="primary">
        <i className="fa-solid fa-arrow-left"></i>
          <NavLink
            end
            to="/photos"
            className={({ isActive, isPending }) =>
              isPending
                ? "header__link"
                : isActive
                ? "header__link"
                : "header__link"
            }
          >
            Go to Photo Page
          </NavLink>
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
