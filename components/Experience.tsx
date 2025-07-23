import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Experience() {
  const experiences = [
    {
      company: "테크이노베이션",
      position: "Senior Flutter Developer",
      period: "2021.03 - 현재",
      description: "Flutter 개발팀 리드로서 5명의 개발자를 관리하며, 대규모 B2C 모바일 앱 개발을 담당했습니다.",
      achievements: [
        "Flutter 기반 전자상거래 앱 개발 (일 사용자 50만명)",
        "CI/CD 파이프라인 구축으로 배포 시간 80% 단축",
        "코드 리뷰 프로세스 도입으로 버그 발생률 60% 감소"
      ],
      tech: ["Flutter", "Firebase", "AWS", "CI/CD"]
    },
    {
      company: "모바일솔루션즈",
      position: "Flutter Developer",
      period: "2019.06 - 2021.02",
      description: "다양한 클라이언트를 위한 맞춤형 모바일 앱 개발 및 유지보수를 담당했습니다.",
      achievements: [
        "15개 이상의 클라이언트 프로젝트 성공적 완료",
        "Flutter 웹 전환으로 개발 비용 40% 절약",
        "사내 Flutter 교육 프로그램 기획 및 진행"
      ],
      tech: ["Flutter", "Dart", "REST API", "SQLite"]
    },
    {
      company: "스타트업코리아",
      position: "Mobile App Developer",
      period: "2017.09 - 2019.05",
      description: "스타트업 환경에서 Android 및 iOS 네이티브 앱 개발 경험을 쌓았습니다.",
      achievements: [
        "Android 및 iOS 네이티브 앱 개발",
        "크로스 플랫폼 전환 결정에 기여",
        "앱스토어 평점 4.8점 달성"
      ],
      tech: ["Android", "iOS", "Java", "Swift"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">경력 및 경험</h2>
          <p className="text-lg text-muted-foreground">
            7년간의 모바일 앱 개발 경험과 주요 성과들입니다.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <p className="text-lg text-primary">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>
                <div className="mb-4">
                  <h4 className="mb-2">주요 성과:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}