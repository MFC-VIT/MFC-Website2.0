import "../styles/AboutUs.css";

function AboutUs({ onBackClick }) {
    return (
        <div className="section">
            <button className="about" onClick={onBackClick}><span className="dash"></span>About Us</button>
            <header>
                <h1 className="heading">BLAZE THE TRAIL OF TOMORROW</h1>
            </header>
            <p>
                At the Mozilla Firefox Club, we empower members to explore the vast possibilities of the digital world.
                Join us to fuel your curiosity, drive innovation, and create a more open and inclusive internet.
                Together, we blaze new trails in technology and make a positive impact on the web.
            </p>
        </div>
    );
};

export default AboutUs;