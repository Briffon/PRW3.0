import React from "react";
import "./NavigationLeft.css";
import { NavLink } from "react-router-dom";

//THIS SHOULD BE NAV LINKS WITH NAV ELEMENT

const NavigationLeft = props => {
  return (
    <nav style={styles.container} className="nav-container">
      <div style={styles.logoContainer}>
        <img
          style={styles.logo}
          width="100px"
          height="100px"
          src={require("../../images/logo/PNG/CCG2.png")}
          alt="logo"
          style={styles.icon}
        />
        <h1> Admin</h1>
      </div>
      <NavLink to="/Home" style={styles.listItem}>
        <img
          src={require("../../images/dashboard.png")}
          width="25"
          alt="home icon"
          style={styles.icon}
        />
        Home
      </NavLink>
      <NavLink to="/Inventory" style={styles.listItem}>
        <img
          style={styles.icon}
          src={require("../../images/shelf.png")}
          width="25"
          alt="Inventory icon"
        />
        Inventory
      </NavLink>
      <NavLink to="/Analyics" style={styles.listItem}>
        <img
          src={require("../../images/analytics.png")}
          width="25"
          alt="Analtyics icon"
          style={styles.icon}
        />
        Analytics
      </NavLink>
      <NavLink to="/Events" style={styles.listItem}>
        <img
          src={require("../../images/place.png")}
          width="25"
          alt="Events icon"
          style={styles.icon}
        />
        Events
      </NavLink>
      <NavLink to="/SignIn" style={styles.listItem}>
        <img
          src={require("../../images/exit.png")}
          width="25"
          alt="Sign In icon"
          style={styles.icon}
        />
        Sign Out
      </NavLink>
    </nav>
  );
};

export default NavigationLeft;

const styles = {
  container: {
    width: "12%",
    backgroundColor: "#2D2D2D",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "left"
  },
  list: {
    listStyle: "none"
  },
  listItem: {
    textDecoration: "none",
    underline: "none",
    margin: "1rem",
    fontSize: "1.5em"
  },
  logoContainer: {
    display: "flex",
    justifyContent: "flex-start",
    color: "black",
    marginLeft: "2rem",
    flexDirection: "column",
    textAlign: "center",
    margin: "1rem"
  },
  icon: {
    marginRight: "1rem"
  }
};
