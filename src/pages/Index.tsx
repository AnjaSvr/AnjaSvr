import Header from "@/components/Header";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-muted-foreground mb-12">
            Welcome to my website! Navigate using the header links above.
          </p>
          {/* Removed FlashCard grid */}
        </div>
      </div>
    </div>
  );
};

export default Index;
