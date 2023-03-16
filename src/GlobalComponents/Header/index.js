import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';
import { UserAuth } from 'GoogleFireBase/FireBaseContext';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

// Header.propTypes = {
//     title: PropTypes.string
// }
// Header.defaultProps = {
//     title: '',
// };


function Header() {
  const {user, googleLogOut} = UserAuth();
  const navigate = useNavigate();

  const handleGoogleLogOut = async () => {
    try {
      await googleLogOut();
    } catch (error){
      console.log("error r")
    }
  }

  useEffect(() => {
      navigate("/photos")
  }, [user])


  return (
    <div style={{
      padding: "0 2rem",
      backgroundColor: "#fff",
      opacity: '0.8'
    }}>
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://reactrouter.com/en/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Router Document
            </a>
          </Col>

          <Col xs="auto" className='header__title'>
            {user ? `Hello, ${user.displayName}` : ''}
          </Col>

          <Col xs="auto">
            <NavLink
              end
              to="photos/sign_in"
              className={({isActive, isPending}) => 
                isPending ? "header--active" : isActive ? "header--active" : "header__link header__title"
              }
              onClick={handleGoogleLogOut}

            > 
              {/* Photo Page */}
              {user ? "Log Out" : "Sign In"}
           </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
    </div>
  );
}

export default Header;