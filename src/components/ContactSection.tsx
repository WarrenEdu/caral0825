import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section 
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center p-4 md:p-8"
      style={{ backgroundImage: "url('https://nesweip.com/boceto_larco/imagenes/PERSONAL_Ciudad_Sagrada_de_Caral-Supe.jpg')" }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* White content card */}
      <div className="relative z-10 w-full max-w-4xl bg-white p-8 md:p-12 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left section: Text content */}
          <div className="flex flex-col space-y-4">
            <span className="text-sm font-serif text-gray-500">Museum news</span>
            <h2 className="text-4xl font-light text-black">
              JOIN OUR <br /> NEWSLETTER
            </h2>
            <p className="text-gray-600">
              Stay up to date with our latest press releases, new exhibits and events by subscribing to our newsletter.
            </p>
          </div>
          
          {/* Right section: Form */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="h-12 border-none border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black bg-white" 
              />
              <Input 
                type="text" 
                placeholder="First Name" 
                className="h-12 border-none border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black bg-white" 
              />
              <Input 
                type="text" 
                placeholder="Last Name" 
                className="h-12 border-none border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black bg-white" 
              />
              <Input 
                type="text" 
                placeholder="Zip Code" 
                className="h-12 border-none border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black bg-white" 
              />
            </div>
            <Button 
              className="w-full text-white py-6 px-4 font-normal transition-colors duration-300"
              style={{ backgroundColor: 'rgb(180, 24, 35)' }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;