import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function TechStack() {
  const techCategories = [
    {
      title: "프론트엔드",
      skills: ["Flutter", "Dart", "React", "TypeScript", "HTML5", "CSS3"]
    },
    {
      title: "백엔드 & 데이터베이스",
      skills: ["Firebase", "Node.js", "MongoDB", "PostgreSQL", "REST API", "GraphQL"]
    },
    {
      title: "도구 & 플랫폼",
      skills: ["Git", "Docker", "AWS", "Google Cloud", "Figma", "Android Studio"]
    },
    {
      title: "모바일 개발",
      skills: ["iOS", "Android", "Flutter Web", "Provider", "Bloc", "GetX"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">기술 스택</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            다양한 기술 스택을 활용하여 효율적이고 확장 가능한 솔루션을 제공합니다.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}