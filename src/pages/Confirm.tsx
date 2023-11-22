import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Menu from '/menu.webp';
import { useNavigate } from "react-router-dom";

export default function Confirm() {
    const navigate = useNavigate();

    return (
        <main>
            <div className="bg-accent-foreground flex flex-col items-center gap-16 px-32 py-8" id="hero">
                <h1 className="text-5xl text-white">Your Reservation is Confirmed!</h1>
                <p className="text-xl text-white">A confirmation message has been sent to your email.</p>
            </div>
            <div className="flex flex-row bg-background gap-16 px-96 py-8">
                <Button className="flex-1">Order Online</Button>
                <Button className="flex-1" onClick={() => navigate('/')}>Home Page</Button>
            </div>
            <div className="flex justify-center">
                <h1>View our menu below</h1>
            </div>
            <img className="mt-8" src={Menu} />
            <Footer />
        </main>
    );
};