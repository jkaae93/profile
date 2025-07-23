import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">연락하기</h2>
          <p className="text-lg text-muted-foreground">
            새로운 프로젝트나 협업 기회에 대해 언제든 연락주세요.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">연락처 정보</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary text-primary-foreground">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">이메일</p>
                    <p>kim.flutter@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary text-primary-foreground">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">전화번호</p>
                    <p>+82 10-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary text-primary-foreground">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">위치</p>
                    <p>서울, 대한민국</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl mb-4">소셜 미디어</h3>
              <div className="flex gap-4">
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
          </div>
          
          {/* 연락 폼 */}
          <Card>
            <CardHeader>
              <CardTitle>메시지 보내기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="이름" />
                <Input placeholder="이메일" type="email" />
              </div>
              <Input placeholder="제목" />
              <Textarea 
                placeholder="메시지를 입력해주세요..."
                className="min-h-32"
              />
              <Button className="w-full">
                메시지 전송
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}