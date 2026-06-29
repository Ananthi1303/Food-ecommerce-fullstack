// import { Link } from "react-router-dom";

// function Navbar({ cartCount }) {
//   return (
//     <nav style={styles.nav}>
//       <h3 style={styles.logo}>Food App</h3>

//       <div style={styles.links}>
//         <Link to="/foods" style={styles.link}>Foods</Link>
//         <Link to="/cart" style={styles.link}>Cart ({cartCount})</Link>
//         <Link to="/logout" style={styles.link}>Logout</Link>
//         <Link to="/order" style={styles.link}>Order</Link>
//         <Link to="/orderhistory" style={styles.link}>Order History </Link>
//       </div>
//     </nav>
//   );
// }

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px 20px",
//     background: "#333",
//     color: "white",
//   },
//   logo: {
//     margin: 0,
//   },
//   links: {
//     display: "flex",
//     gap: "15px",
//   },
//   link: {
//     color: "white",
//     textDecoration: "none",
//   },
// };

// export default Navbar;



// import { Link } from "react-router-dom";

// function Navbar({ cartCount }) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
//       <div className="container">

//         <Link className="navbar-brand fw-bold fs-3" to="/foods">
//           🍔 Food App
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse justify-content-end"
//           id="navbarContent"
//         >
//           <ul className="navbar-nav align-items-center gap-2">

//             <li className="nav-item">
//               <Link className="nav-link" to="/foods">
//                 Foods
//               </Link>
//             </li>

//                    <li className="nav-item">
//               <Link
//                 className="btn btn-warning position-relative"
//                 to="/cart"
//               >
//                 🛒 Cart
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                   {cartCount}
//                 </span>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/order">
//                 Orders
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/orderhistory">
//                 History
//               </Link>
//             </li>

           
//                        <li className="nav-item">
//               <Link className="btn btn-danger " to="/logout">
//                 Logout
//               </Link>
//             </li>

//           </ul>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/foods">
          🍔 Food App
        </Link>

        <div className="navbar-nav ms-auto">

          <Link className="nav-link" to="/foods">
            Foods
          </Link>

        
          <Link className="btn btn-warning position-relative mx-2" to="/cart">
             🛒 Cart

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount}
         </span>
         </Link>

          <Link className="nav-link" to="/order">
            Orders
          </Link>

          <Link className="nav-link" to="/orderhistory">
            History
          </Link>

          <Link className="btn btn-danger ms-3" to="/logout">
            Logout
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;