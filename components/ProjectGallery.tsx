import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

export function ProjectGallery() {
  const projects = [
    {
      title: "E-커머스 모바일 앱",
      description: "대형 온라인 쇼핑몰의 크로스 플랫폼 모바일 앱. 실시간 재고 관리, 결제 시스템, 푸시 알림 등을 구현했습니다.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tech: ["Flutter", "Firebase", "Stripe", "Provider"],
      github: "#",
      demo: "#"
    },
    {
      title: "헬스케어 앱",
      description: "의료진과 환자를 연결하는 원격 진료 플랫폼. 화상 통화, 처방전 관리, 건강 데이터 추적 기능을 포함합니다.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      tech: ["Flutter", "WebRTC", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "금융 관리 앱",
      description: "개인 재정 관리를 위한 모바일 앱. 가계부, 투자 포트폴리오 추적, 금융 목표 설정 등의 기능을 제공합니다.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      tech: ["Flutter", "Bloc", "Chart.js", "REST API"],
      github: "#",
      demo: "#"
    },
    {
      title: "교육 플랫폼",
      description: "온라인 학습 플랫폼의 모바일 앱. 비디오 스트리밍, 퀴즈, 진도 추적, 오프라인 학습 지원 등을 구현했습니다.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      tech: ["Flutter", "GetX", "Video Player", "SQLite"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">주요 프로젝트</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            다양한 도메인에서 성공적으로 완료한 프로젝트들입니다.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github size={16} />
                    코드 보기
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink size={16} />
                    데모 보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}