import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  GraduationCap, 
  MessageSquare, 
  CheckCircle, 
  BookOpen, 
  Users,
  ArrowRight
} from "lucide-react";

const tools = [
  {
    icon: FileText,
    title: "Lesson Plan Generator",
    description: "Create comprehensive lesson plans tailored to your curriculum, grade level, and learning objectives in minutes.",
    features: ["Curriculum aligned", "Customizable templates", "Standards integration"]
  },
  {
    icon: CheckCircle,
    title: "Assignment Assessor",
    description: "Provide detailed feedback on student papers, homework, and projects with consistent grading criteria.",
    features: ["Instant feedback", "Rubric-based scoring", "Progress tracking"]
  },
  {
    icon: MessageSquare,
    title: "Quiz & Test Creator",
    description: "Generate engaging quizzes, tests, and assessments with various question types and difficulty levels.",
    features: ["Multiple formats", "Auto-grading", "Analytics dashboard"]
  },
  {
    icon: GraduationCap,
    title: "Learning Material Builder",
    description: "Create presentations, worksheets, and study guides that match your teaching style and student needs.",
    features: ["Visual content", "Interactive elements", "Export options"]
  },
  {
    icon: Users,
    title: "Student Support Assistant",
    description: "Generate personalized learning strategies and intervention plans for students who need extra help.",
    features: ["Individual plans", "Parent communication", "Progress monitoring"]
  },
  {
    icon: BookOpen,
    title: "Curriculum Mapper",
    description: "Align your teaching content with educational standards and track coverage across the school year.",
    features: ["Standards alignment", "Pacing guides", "Gap analysis"]
  }
];

const ToolsGrid = () => {
  return (
    <section id="tools" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Complete AI Teaching Toolkit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access powerful AI tools designed specifically for educators. Each tool is trained on educational best practices and curriculum standards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Card key={tool.title} className="bg-card-gradient hover:shadow-lg transition-smooth group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  Try This Tool
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;