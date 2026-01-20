import Header from "@/components/Header";
import About from "@/components/About";
import ContactInfo from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 md:pt-20">
        {/* Two-column layout */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
            
            {/* Left column: Contact Info */}
            <div className="md:w-1/3">
              <ContactInfo />
            </div>

            {/* Right column: About text */}
            <div className="md:w-2/3">
              <About />
            </div>

          </div>
        </div>

        {/* Footer text */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-muted-foreground mb-12">
              Welcome to my website! Navigate using the header links above.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;


