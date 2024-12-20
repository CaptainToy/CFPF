import './css/Dashboard.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        console.log('Logging out...');
        navigate('/loginElement');
    };

    return (
        <nav className="Dashboard-last-navbar">
            <div className="Dashboard-last-logo">
                <img
                    src="http://placeholder-image.com/api/placeholderimage?width=150&fontweight=false&fontstyle=false&fontdecoration=false&height=150&text=150px x 150px&color=black&fontFamily=arial&fontSize=small&background=%23999999"
                    alt="logo"
                />
            </div>
            <ul>
                <li>
                    <Link
                        to="/dashboard"
                        className={location.pathname === '/dashboard' ? 'active' : ''}
                    >
                        <i className="fas fa-user"></i> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/BlogDashboard"
                        className={location.pathname === '/blog-post' ? 'active' : ''}
                    >
                        <i className="fas fa-chart-bar"></i> <span>Blog Post</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/news"
                        className={location.pathname === '/news' ? 'active' : ''}
                    >
                        <i className="fas fa-tasks"></i> <span>News</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/testimonials"
                        className={location.pathname === '/testimonials' ? 'active' : ''}
                    >
                        <i className="fab fa-google-drive"></i> <span>Testimonials</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/event-post"
                        className={location.pathname === '/event-post' ? 'active' : ''}
                    >
                        <i className="fas fa-cog"></i> <span>Event Post</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/donate-now"
                        className={location.pathname === '/donate-now' ? 'active' : ''}
                    >
                        <i className="fas fa-question-circle"></i> <span>Donate Now</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/loginElement"
                        className="Dashboard-last-logout"
                        onClick={(e) => {
                            e.preventDefault();
                            handleLogout();
                        }}
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideBar;
