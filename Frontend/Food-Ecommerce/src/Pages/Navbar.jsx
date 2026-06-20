import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>Food App</h3>

      <div style={styles.links}>
        <Link to="/foods" style={styles.link}>Foods</Link>
        <Link to="/cart" style={styles.link}>Cart ({cartCount})</Link>
        <Link to="/logout" style={styles.link}>Logout</Link>
        <Link to="/order" style={styles.link}>Order</Link>
        <Link to="/orderhistory" style={styles.link}>Order History </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#333",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;