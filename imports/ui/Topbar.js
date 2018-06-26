import React from 'react';
import NavDropdown from './NavDropdown';

const TITLE = 'RegEngine';
const MENU_REG_ANALYSIS = 'RegAnalysis';
const MENU_REG_SEARCH = 'RegSearch';
const MENU_DROPDOWN = 'Dropdown';

const NavItem = (props) => {
  const pageURI = window.location.pathname + window.location.search;
  const liClassName = (props.path === pageURI) ? 'nav-item active' : 'nav-item';
  const aClassName = props.disabled ? 'nav-link disabled' : 'nav-link';
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (
          <span className="sr-only">
(current)
          </span>
        ) : ''}
      </a>
    </li>
  );
};

export default class Topbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          {TITLE}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem path="/" name={MENU_REG_ANALYSIS} />
            <NavItem path="/page2" name={MENU_REG_SEARCH} />
            <NavItem path="/page3" name="Disabled" disabled="true" />
            <NavDropdown name={MENU_DROPDOWN}>
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </NavDropdown>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
