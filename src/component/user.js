import "./Style/Login.css"
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';

function UserProfile() {
    return (
        <>
            <div className="user-profile">
                <div className="user-flex">

                    <div className="user-details">
                        <div className="border-btm">  <h2>Zuber Dunge </h2>
                            <h6>    @ZuberDunge  </h6>
                        </div>

                        <div>
                            <h6>iamZuberDunge@gmail.com </h6>
                        </div>
                        <Link to="/"><button onClick={() => localStorage.removeItem("user")


                        } className="login-btn">Log Out</button></Link>
                    </div>

                </div>

            </div>


        </>

    );
}

export default UserProfile;
