import { useNavigate } from "react-router-dom";

function Logout() {

  const navigate = useNavigate();

  const logout = () => {

    console.log("Logout clicked");

    navigate("/");

  };

  return (

    <div>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Logout;



