
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-white to-brand-light">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col space-y-4 text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Modern solutions for your 
              <span className="text-brand-blue"> business needs</span>
            </h1>
            <p className="text-xl text-gray-600 md:text-2xl max-w-[600px]">
              Streamline your workflow, boost productivity, and take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 text-lg">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-indigo/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-2 md:p-6 rounded-3xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Woman using laptop" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
