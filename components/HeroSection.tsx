import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-4xl">김</span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            김플러터
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Senior Flutter Developer
          </h2>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          7년 경력의 Flutter 전문 개발자로, 크로스 플랫폼 모바일 앱 개발부터 
          대규모 엔터프라이즈 솔루션까지 다양한 프로젝트를 성공적으로 리드해왔습니다.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button size="lg" className="gap-2">
            <Mail size={20} />
            연락하기
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Download size={20} />
            이력서 다운로드
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="#" className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}