import React from 'react';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <span className="footer-logo">Small Technology Company</span>
                    <div className="social-links">
                        {/* Icon placeholders */}
                        <a href="#">📸</a> {/* Instagram */}
                        <a href="#">in</a> {/* LinkedIn */}
                    </div>
                </div>
                <div className="footer-bottom">
                    <nav className="footer-nav">
                        <a href="#">Corporate</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Contact</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;