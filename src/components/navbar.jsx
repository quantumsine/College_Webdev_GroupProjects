import react from 'react';


const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <span className="logo">Small Technology Co.</span>
                    <ul className="nav-links">
                        <li><a href="#">Software & Products</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Industries</a></li>
                    </ul>
                    <div className="nav-actions">
                        <button className="search-icon">🔍</button>
                        <a href="#" className="btn-log-in">Log In</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};
