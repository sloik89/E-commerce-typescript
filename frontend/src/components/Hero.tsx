import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { HeroCarousel } from "./";
const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="text-5xl max-w-2xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="leading-8 max-w-2xl text-lg mt-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum vitae
          ipsa ipsam reprehenderit hic. Placeat at hic odit iure eum.
        </p>
        <Button asChild size="sm" className="mt-10">
          <Link className="text-sm capitalize" to="/products">
            our products
          </Link>
        </Button>
      </div>

      <HeroCarousel />
    </section>
  );
};

export default Hero;
