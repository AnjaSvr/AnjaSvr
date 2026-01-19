const About = () => {
  return (
    <section className="py-12 px-6 bg-card">
      <div className="container mx-auto max-w-3xl">
        <p className="text-lg text-foreground leading-relaxed mb-8">
          Hi, I’m Anja! I am a  PhD student in mathematical physics under the supervision of {" "}

          <a href="http://www.scheimbauer.at/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
           Claudia Scheimbauer
          </a> 
           {" "} at Technical University Munich. My co-supervisor is {" "}

          <a href="https://www.math.cit.tum.de/en/algebra/personen/walde/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
           Tashi Walde
          </a>. 
        </p>


        <p className="text-lg text-foreground leading-relaxed mb-8">
          My research interests include higher algebra, higher category theory, and their applications to 
          mathematical physics and algebraic topology. I am interested in the mathematical frameworks 
          that underpin the study of quantum field theories and in the higher categorical structures that organize their algebraic 
          and geometric content. 
        </p>
          
        <p className="text-lg text-foreground leading-relaxed mb-8">
          Currently, I am supported SFB 1085: Higher Invariants from the Deutsche Forschungsgemeinschaft (DFG).
        </p>
      </div>
    </section>
  );
};

export default About;
