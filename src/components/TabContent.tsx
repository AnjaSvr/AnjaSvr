import { FileText, BookOpen, GraduationCap } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
}

interface Course {
  title: string;
  code: string;
  term: string;
  description: string;
}

const publications: Publication[] = [
  {
    title: "Your Research Paper Title Here",
    authors: "Author 1, Author 2, Your Name",
    venue: "Journal Name or Conference",
    year: "2024",
  },
  {
    title: "Another Interesting Research Paper",
    authors: "Your Name, Collaborator Name",
    venue: "Conference Proceedings",
    year: "2023",
  },
];

const courses: Course[] = [
  {
    title: "Introduction to Your Field",
    code: "FIELD 101",
    term: "Fall 2024",
    description: "An introductory course covering fundamental concepts and methodologies.",
  },
  {
    title: "Advanced Topics in Your Specialty",
    code: "FIELD 501",
    term: "Spring 2024",
    description: "Graduate-level course exploring cutting-edge research and advanced techniques.",
  },
];

interface TabContentProps {
  activeTab: string;
}

const TabContent = ({ activeTab }: TabContentProps) => {
  if (activeTab === "cv") {
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Curriculum Vitae</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Education</h3>
            <div className="space-y-3 text-foreground">
              <div className="border-l-2 border-primary pl-4">
                <p className="font-medium">Ph.D. in Your Field</p>
                <p className="text-muted-foreground">University Name, Year</p>
              </div>
              <div className="border-l-2 border-muted pl-4">
                <p className="font-medium">M.S. in Related Field</p>
                <p className="text-muted-foreground">University Name, Year</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Employment</h3>
            <div className="space-y-3 text-foreground">
              <div className="border-l-2 border-primary pl-4">
                <p className="font-medium">Assistant Professor</p>
                <p className="text-muted-foreground">University Name, Year - Present</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Awards & Honors</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Award Name, Year</li>
              <li>Fellowship Name, Year</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === "research") {
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Research</h2>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Research Interests</h3>
          <p className="text-foreground leading-relaxed mb-6">
            My research spans several interconnected areas including computational methods, 
            theoretical frameworks, and empirical analysis. I am particularly interested in 
            developing novel approaches that bridge theory and practice.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Selected Publications</h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div 
                key={index} 
                className="p-4 bg-muted/30 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <h4 className="font-medium text-foreground mb-1">{pub.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                <p className="text-sm text-muted-foreground italic">
                  {pub.venue}, {pub.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === "teaching") {
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Teaching</h2>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Teaching Philosophy</h3>
          <p className="text-foreground leading-relaxed mb-6">
            I believe in fostering critical thinking and hands-on learning experiences. 
            My courses emphasize both theoretical foundations and practical applications, 
            preparing students for research and professional careers in the field.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Courses</h3>
          <div className="space-y-4">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="p-5 bg-muted/30 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-foreground">{course.title}</h4>
                  <span className="text-sm text-muted-foreground">{course.term}</span>
                </div>
                <p className="text-sm text-primary font-medium mb-2">{course.code}</p>
                <p className="text-foreground">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default TabContent;
