import { Link } from "react-router-dom";
import briefcase from "../assets/images/briefcase.svg";
import user from "../assets/images/user.svg";

export const Header = ({ isAuth, setIsAuth }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" data-test-id="header-logo" className="header__logo">
          Travel App
        </Link>
        {isAuth && (
          <nav data-test-id="header-nav" className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <Link
                  to="/bookings"
                  data-test-id="header-bookings-link"
                  className="nav-header__inner"
                >
                  <span className="visually-hidden">Bookings</span>
                  <img src={briefcase} alt="bookings" />
                </Link>
              </li>
              <li className="nav-header__item" title="Profile">
                <div
                  data-test-id="header-profile-nav"
                  className="nav-header__inner profile-nav"
                  tabIndex={0}
                >
                  <span className="visually-hidden">Profile</span>
                  <img src={user} alt="profile" />
                  <ul
                    data-test-id="header-profile-nav-list"
                    className="profile-nav__list"
                  >
                    <li
                      data-test-id="header-profile-nav-username"
                      className="profile-nav__item profile-nav__username"
                    >
                      John Doe
                    </li>
                    <li className="profile-nav__item">
                      <Link
                        to="sign-in"
                        data-test-id="header-profile-nav-sign-out"
                        className="profile-nav__sign-out button"
                        onClick={() => setIsAuth(false)}
                      >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
