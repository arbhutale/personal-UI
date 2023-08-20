import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { authActions, userActions } from '../_store';

export { Nav };

function Nav() {
    const [user, setUser] = useState({});
    setTimeout(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, 1000);

    const auth = useSelector(x => x.auth.value);
    const dispatch = useDispatch();
    const logout = () => dispatch(authActions.logout());

    // only show nav when logged in
    if (!auth) return null

    return (
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div class="container">
                <a class="navbar-brand" href="#">ARB Finance</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <NavLink to="/" className="nav-item nav-link"> Dashboard
                                <span class="visually-hidden">(current)</span>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Loans</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Accounts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Assests</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-md-auto">
                        <li class="nav-item">
                            <a target="_blank" rel="noopener" class="nav-link" href="https://github.com/thomaspark/bootswatch/"><i class="bi bi-github"></i><span class="d-lg-none ms-2">GitHub</span></a>
                        </li>
                        <li class="nav-item">
                            <a target="_blank" rel="noopener" class="nav-link" href="https://twitter.com/bootswatch"><i class="bi bi-twitter"></i><span class="d-lg-none ms-2">Twitter</span></a>
                        </li>
                        <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                            <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
                            <hr class="d-lg-none my-2 text-white-50" />
                        </li>
                        <li class="nav-item dropdown" data-bs-theme="light">
                            <a class="nav-link dropdown-toggle d-flex align-items-center show" href="#" id="theme-menu" aria-expanded="true" data-bs-toggle="dropdown" data-bs-display="static" aria-label="Toggle theme">
                                <i class="bi bi-person-circle"></i>
                                <span class="d-lg-none ms-2">Toggle theme</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end show" data-bs-popper="static">
                                <li>
                                    <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                                        <i class="bi bi-person-fill"></i><span class="ms-2">{user?.username}</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={logout} type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="true">
                                        <i class="bi bi-box-arrow-in-left"></i><span class="ms-2">Logout</span>
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <span className="btn btn-link nav-item nav-link">{user?.username}</span>
                </div>
            </div>
        </nav>

    );
}