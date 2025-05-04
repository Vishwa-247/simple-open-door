
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Marketing Director",
    content: "This platform has revolutionized how we handle our marketing campaigns. The analytics capabilities alone have increased our ROI by 40%.",
    image: "/placeholder.svg",
    initials: "AJ",
    delay: "100"
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    content: "I've tried many similar tools, but this one stands out with its intuitive interface and powerful customization options. It's become invaluable to our team.",
    image: "/placeholder.svg",
    initials: "SW",
    delay: "300"
  },
  {
    name: "Michael Chen",
    role: "CEO & Founder",
    content: "Implementing this solution helped us streamline operations and reduce overhead costs. The customer support team has been exceptional throughout our onboarding.",
    image: "/placeholder.svg",
    initials: "MC",
    delay: "500"
  },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-brand-blue/10 px-4 py-2 rounded-full">
              <span className="text-brand-blue font-medium">About Us</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              We're building the future of business solutions
            </h2>
            <p className="text-gray-600 text-lg">
              Founded in 2020, our team of experts has been committed to creating innovative solutions that empower businesses to achieve their goals. We combine cutting-edge technology with user-centered design to deliver exceptional experiences.
            </p>
            <ul className="space-y-2">
              {[
                "10+ years of industry experience",
                "Trusted by 500+ businesses worldwide",
                "Award-winning customer support",
                "Continuous innovation and improvement"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="h-6 w-6 text-brand-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-indigo/20 rounded-3xl transform -rotate-2"></div>
            <div className="relative bg-white p-6 rounded-3xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Team collaboration" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        <div id="testimonials" className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${testimonial.delay}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
