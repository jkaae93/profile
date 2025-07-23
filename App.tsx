import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TechStack } from "./components/TechStack";
import { ProjectGallery } from "./components/ProjectGallery";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <TechStack />
        <ProjectGallery />
        <Experience />
        <Contact />
      </main>
      
      {/* 푸터 */}
      <footer className="py-8 px-4 text-center text-muted-foreground border-t">
        <div className="max-w-6xl mx-auto">
          <p>&copy; 2025 김플러터. 모든 권리 보유.</p>
        </div>
      </footer>
    </div>
  );
}