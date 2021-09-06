import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import './Navbar.css';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light">
            <div class="container-fluid">
                <Link class="navbar-brand text-warning fs-2" to="/">NewsPortal</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <Link class="nav-link active text-light" aria-current="page" to="">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active text-light" to="">Subscribe</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active text-light" to="">Contact</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle active text-light" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More News
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link class="dropdown-item" to="">Fashion</Link></li>
                                <li><Link class="dropdown-item" to="">Travel</Link></li>
                                <li><Link class="dropdown-item" to="">Culture</Link></li>
                                <li><Link class="dropdown-item" to="">Photography</Link></li>
                                <li><Link class="dropdown-item" to="">Sports</Link></li>
                                <li><Link class="dropdown-item" to="">International</Link></li>
                            </ul>
                        </li>

                        {loggedInUser.email ? '' : <li class="nav-item">
                            <Link class="nav-link active text-light" to="/register">
                                <button class="btn btn-info ms-5 mr-3">
                                    Register
                                </button>
                            </Link>
                        </li>}
                        <li class="nav-item active ms-3
                        ">
                            <p>{loggedInUser.displayName || loggedInUser.name || loggedInUser.email}</p>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link active text-light" to="/login" tabindex="-1" aria-disabled="true">
                                <input type="submit" class="btn btn-success" onClick={handleSignOut} value={loggedInUser.email ? 'Log Out' : 'Log In'} />
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
