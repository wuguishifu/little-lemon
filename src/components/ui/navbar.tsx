import { cn } from "@/lib/utils";
import navIcon from '/nav-logo.png';
import { Link } from "react-router-dom";

export default function Navbar({ className }: { className?: string }) {
    return (
        <nav className={cn(className, "w-full flex flex-row items-center gap-8 py-3 h-20 justify-around")}>
            <Link to="/" ><img src={navIcon} className="h-20" /></Link>
            <Link to="/"><div className="nav text-accent-foreground">Home</div></Link>
            <div className="nav text-accent-foreground cursor-pointer">About</div>
            <Link to="/menu"><div className="nav text-accent-foreground">Menu</div></Link>
            <div className="nav text-accent-foreground cursor-pointer">Order</div>
            <Link to="/reserve"><div className="nav text-accent-foreground">Reservations</div></Link>
        </nav>
    );
};