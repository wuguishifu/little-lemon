import { Link } from "react-router-dom";
import FooterImage from '/footer-logo.png';

export default function Footer() {
    return (
        <footer className="bg-accent-foreground flex flex-row justify-between px-32 py-8 text-white" id="footer">
            <div className="flex-1">
                <img src={FooterImage} className="px-36" />
            </div>
            <nav className="flex-1 flex flex-col items-start">
                <h3>Navigation</h3>
                <Link to="/"><p className="text-sm">Home</p></Link>
                <p className="text-sm cursor-pointer">About</p>
                <Link to="/menu"><p className="text-sm">Menu</p></Link>
                <p className="text-sm cursor-pointer">Order</p>
                <Link to="/reserve"><p className="text-sm">Reservations</p></Link>
            </nav>
            <div className="flex-1 flex flex-col items-start">
                <h3>Contact</h3>
                <p className="text-sm">(123)-456-7890</p>
                <p className="text-sm cursor-pointer">info@littlelemon.com</p>
                <p className="text-sm">2395 Maldove Way</p>
                <p className="text-sm">Chicago Illinois</p>
            </div>
            <div className="flex-1 flex flex-col items-start">
                <h3>Connect</h3>
                <p className="text-sm cursor-pointer">Facebook</p>
                <p className="text-sm cursor-pointer">Instagram</p>
            </div>
        </footer>
    );
};