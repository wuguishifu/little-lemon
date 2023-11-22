import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import AboutImage from '/food/food1.png';
import HeroImage from '/food/greek-salad.png';
import Footer from "@/components/Footer";

const testimonials = [{ name: "John M. - Food Enthusiast", content: "Little Lemon is a hidden gem! The flavors in every dish are extraordinary, and the attention to detail is unparalleled. From the appetizers to the desserts, each bite is a burst of culinary delight. Highly recommended!", }, { name: "Sarah B. - Local Foodie", content: "I can't get enough of Little Lemon! The atmosphere is cozy, the staff is friendly, and the food is absolutely delicious. The menu offers a perfect blend of classic favorites and unique twists. It's become my go-to spot for a fantastic dining experience.", }, { name: "David H. - Date Night Approved", content: "For a romantic evening or a casual date night, Little Lemon is the ideal choice. The ambiance is charming, the service is impeccable, and the food is simply divine. My partner and I had a memorable experience, and we'll definitely be back for more.", }, { name: "Emily S. - Vegetarian Delight", content: "As a vegetarian, I appreciate a restaurant that caters to my dietary preferences without compromising on taste. Little Lemon's vegetarian options are not only creative but also incredibly satisfying. It's a haven for anyone looking for flavorful plant-based dishes.", }, { name: "Michael L. - Family-Friendly Excellence", content: "Little Lemon is a family favorite! The menu has something for everyone, and the portions are generous. The staff is warm and welcoming, making it a perfect spot for family gatherings. My kids love the kid-friendly options, and my wife and I enjoy the diverse selection.", }, { name: "Alicia G. - Cocktail Connoisseur", content: "The cocktail menu at Little Lemon is a masterpiece. The mixologists really know their craft, and the drinks are both inventive and expertly crafted. It's a great place to unwind with friends after a long day. The 'Little Lemonade' cocktail is a must-try!", }, { name: "Carlos R. - Business Lunch Haven", content: "I often host business lunches, and Little Lemon has become my top choice. The ambiance is professional yet relaxed, the service is prompt, and the menu offers a variety that suits all tastes. It creates the perfect setting for sealing deals over a delightful meal.", }, { name: "Sophie T. - Dessert Lover's Paradise", content: "Little Lemon takes desserts to a whole new level. The dessert menu is a dream come true for anyone with a sweet tooth. The presentation is as impressive as the taste. The lemon-infused desserts are especially divine – a true treat for dessert enthusiasts!", }, { name: "Robert K. - Fresh and Flavorful", content: "What sets Little Lemon apart is the emphasis on fresh, high-quality ingredients. Every dish bursts with flavor, and you can tell that the ingredients are sourced with care. It's a refreshing change from the usual dining options, and I appreciate the commitment to quality.", }, { name: "Megan F. - Cozy Brunch Spot", content: "Little Lemon is my favorite brunch spot in town. The cozy atmosphere, paired with a menu that caters to both savory and sweet breakfast cravings, makes it a go-to weekend destination. The eggs benedict and the lemon-infused pancakes are my personal favorites. Can't recommend it enough!", }];

export default function Landing() {
    const navigate = useNavigate();

    return (
        <main>
            <div className="bg-accent-foreground flex flex-row items-center gap-16 px-32 py-8" id="hero">
                <div className="flex flex-col items-start text-accent flex-1 gap-4">
                    <h1 className="text-5xl">Little Lemon Chicago</h1>
                    <p className="text-xl">We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
                    <Button onClick={() => navigate('/reserve')}>Reserve a Table</Button>
                </div>
                <div className="flex flex-col items-center justify-center flex-1">
                    <img src={HeroImage} />
                </div>
            </div>
            <div className="bg-background py-8 px-32" id="highlights">
                <h1>This Week's Specials</h1>
                <Button className="mt-4" onClick={() => navigate('/menu')}>Online Menu</Button>
                <div className="mt-4 flex flex-row items-center gap-8">
                    <Highlight title="Greek Salad" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil." image={HeroImage} />
                    <Highlight title="Greek Salad" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil." image={HeroImage} />
                    <Highlight title="Greek Salad" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil." image={HeroImage} />
                </div>
            </div>
            <div className="bg-background py-8 px-32 flex flex-col gap-4" id="testimonials">
                <div className="w-full flex justify-center"><h1>Testimonials</h1></div>
                <div className="flex flex-row gap-4">
                    {testimonials.slice(0, 5).map(i => <Testimonial name={i.name} content={i.content} key={i.name} />)}
                </div>
                <div className="flex flex-row gap-4">
                    {testimonials.slice(5, 10).map(i => <Testimonial name={i.name} content={i.content} key={i.name} />)}
                </div>
            </div>
            <div className="bg-primary flex flex-row items-center gap-16 px-32 py-8" id="about">
                <div className="flex flex-col items-start text-primary-foreground flex-1 gap-4">
                    <h1 className="text-5xl">Little Lemon Chicago</h1>
                    <p className="text-xl">We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
                </div>
                <div className="flex flex-col items-center justify-center flex-1">
                    <img className="object-cover w-[75%] aspect-square -rotate-90" src={AboutImage} />
                </div>
            </div>
            <Footer />
        </main>
    );
}

function Highlight({ title, description, image }: { title: string, description: string, image: string }) {
    return (
        <div className="flex flex-col flex-1 bg-gray-200 pb-8">
            <img src={image} className="object-cover h-[600px]" />
            <div className="flex flex-col gap-4 pt-4 px-8">
                <h2>{title}</h2>
                <p>{description}</p>
                <div>
                    <Button>Order for Delivery</Button>
                </div>
            </div>
        </div>
    );
}

function Testimonial({ name, content }: { name: string, content: string }) {
    return (
        <div className="flex-1 flex flex-col items-start gap-4 p-4 bg-gray-200">
            <h3>{name}</h3>
            <p>{content}</p>
        </div>
    );
}