import { Phone, MapPin, Shield, Eye, Wrench, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-400">Vision</span>Tech
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#consultancy" className="text-white/80 hover:text-blue-400 transition-colors">
                Consultancy
              </a>
              <a href="#cctv" className="text-white/80 hover:text-blue-400 transition-colors">
                CCTV Inspection & Installation
              </a>
              <a href="#services" className="text-white/80 hover:text-blue-400 transition-colors">
                Other Services
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Secure Your <span className="text-blue-400">Future</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Professional CCTV installation and technology consultancy services for homes and businesses
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultancy */}
            <Card id="consultancy" className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">Technology Consultancy</h3>
                <p className="text-white/80">
                  Expert advice on security systems, network infrastructure, and technology solutions tailored to your needs.
                </p>
              </CardContent>
            </Card>

            {/* CCTV Services */}
            <Card id="cctv" className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <Eye className="h-16 w-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">CCTV Installation</h3>
                <p className="text-white/80">
                  Professional CCTV inspection, installation, and maintenance services for comprehensive security coverage.
                </p>
              </CardContent>
            </Card>

            {/* Other Services */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <Wrench className="h-16 w-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">Other Services</h3>
                <p className="text-white/80">
                  Network setup, smart home integration, alarm systems, and comprehensive tech support solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose VisionTech?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Professional Installation</h3>
                    <p className="text-white/80">Certified technicians with years of experience in security systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-white/80">Round-the-clock technical support and maintenance services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Latest Technology</h3>
                    <p className="text-white/80">Cutting-edge equipment and modern security solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Get a Free Quote</h3>
              <p className="text-white/90 mb-6">Contact us today for a personalized consultation and quote.</p>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <Phone className="h-8 w-8 text-blue-400" />
              <div className="text-left">
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-white/80">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <MapPin className="h-8 w-8 text-blue-400" />
              <div className="text-left">
                <h3 className="text-white font-semibold">Address</h3>
                <p className="text-white/80">123 Tech Street, City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/40 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-white/60">© 2024 VisionTech Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
