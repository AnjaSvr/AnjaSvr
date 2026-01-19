import { BookOpen } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Publication {
  title: string;
  authors: string;
  link: string;
  year: string;

}

const publications: Publication[] = [
  {
    title: "Additivity of Constructible Factorization Algebras over Manifolds with Corners ",
    authors: "Victor Carmona, Anja Švraka",
    link: "https://arxiv.org/abs/2510.26504",
    year: "2025",
  },
  {
    title: "Simons Lectures on Categorical Symmetries ",
    authors: "notes for David Jordan’s lecture: IV. Applied Cobordism Hypothesis, with Jonte Gödicke and Aaron Hofer",
    link: " https://arxiv.org/abs/2411.09082",
    year: "2024",
  },
];

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Research</h1>
          </div>

          <div className="space-y-8">
            <section className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">Research Interests</h2>
              <p className="text-foreground leading-relaxed text-lg">
                My research interests include higher algebra, higher category theory, and their applications to mathe-
                matical physics and algebraic topology. I am interested in the mathematical frameworks that underpin
                the study of quantum field theories and in the higher categorical structures that organize their algebraic
                and geometric content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Preprints</h2>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <Card 
                    key={index} 
                    className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-2 hover:border-primary"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{pub.title}</CardTitle>
                      <CardDescription className="text-base">
                        {pub.authors}
                      </CardDescription>
                    </CardHeader>
                     <CardContent>
                        <p className="text-muted-foreground italic">
                       Available at:{" "}
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        arXiv
                      </a>, {pub.year}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
