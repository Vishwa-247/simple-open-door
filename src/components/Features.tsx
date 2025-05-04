
import { Settings, Info, Home, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featureCards = [
  {
    title: "Easy Integration",
    description: "Seamlessly connect with your favorite tools and platforms for a unified workflow experience.",
    icon: <Home className="h-10 w-10 text-brand-blue" />,
    delay: "100",
  },
  {
    title: "Advanced Analytics",
    description: "Gain valuable insights with our comprehensive analytics and reporting tools.",
    icon: <Info className="h-10 w-10 text-brand-blue" />,
    delay: "200",
  },
  {
    title: "Customizable Settings",
    description: "Tailor the platform to your unique needs with our flexible customization options.",
    icon: <Settings className="h-10 w-10 text-brand-blue" />,
    delay: "300",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the tools and capabilities that make our platform the preferred choice for businesses worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${card.delay}ms` }}>
              <CardHeader className="pb-2">
                <div className="mb-4">{card.icon}</div>
                <CardTitle className="text-xl font-bold">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">{card.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-brand-blue hover:text-brand-blue/80 hover:bg-brand-blue/10 p-0">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
