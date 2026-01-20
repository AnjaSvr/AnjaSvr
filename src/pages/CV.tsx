import { FileText } from "lucide-react";
import Header from "@/components/Header";

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Curriculum Vitae</h1>
          </div>

          <div className="space-y-8">
            <section className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground">Ph.D. Candidate </h3>
                  <p className="text-muted-foreground">Technical University of Munich, 2022- present</p>
                  <p className="text-foreground mt-2">Topic: Additivity of Constructible Factorization Algebras</p>
                  <p className="text-foreground mt-2">Supervisor: Prof. Dr. Claudia Scheimbauer</p>
                  <p className="text-foreground mt-2">Co-supervisor: Dr. Tashi Walde</p>
                  <p className="text-foreground mt-2">Expected Graduation: September 2026</p>
                </div>
                <div className="border-l-4 border-muted pl-6">
                  <h3 className="text-xl font-semibold text-foreground">Master of Science, Mathematics </h3>
                  <p className="text-muted-foreground">Technical University of Munich, 2019-2022</p>
                  <p className="text-foreground mt-2">Topic : Invertible Topological Field Theories and Stable Homotopy Theory</p>
                  <p className="text-foreground mt-2">Supervisor: Prof. Dr. Claudia Scheimbauer</p>
                </div>
                <div className="border-l-4 border-muted pl-6">
                  <h3 className="text-xl font-semibold text-foreground">Bachelor’s Degree in Pure Mathematics and Applications </h3>
                  <p className="text-muted-foreground">University of Belgrade, Faculty of Mathematics, 2014-2018</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
