import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface FlashCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  link: string;
  gradient: string;
}

const FlashCard = ({ icon: Icon, title, description, details, link, gradient }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="flashcard-container h-[400px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
        {/* Front of card */}
        <div className="flashcard-face flashcard-front">
          <Card className="h-full border-2 hover:border-primary transition-colors">
            <CardHeader className={`bg-gradient-to-br ${gradient} rounded-t-lg pb-8`}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex flex-col justify-between h-[calc(100%-180px)]">
              <p className="text-muted-foreground text-center leading-relaxed">
                {description}
              </p>
              <p className="text-center text-sm text-primary font-medium mt-4">
                Click to flip →
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Back of card */}
        <div className="flashcard-face flashcard-back">
          <Card className="h-full border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader className="pb-4">
              <CardTitle className="text-center text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between h-[calc(100%-100px)]">
              <ul className="space-y-3 mb-4">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary text-lg mt-0.5">•</span>
                    <span className="text-foreground text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Click to flip back</p>
                <Link to={link} onClick={(e) => e.stopPropagation()}>
                  <Button className="w-full">View Full Page</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
