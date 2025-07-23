# 포트폴리오 웹사이트 설치 가이드

## 📁 프로젝트 구조

```
flutter-portfolio/
├── public/
│   └── flutter-icon.svg (추가 필요)
├── src/
│   └── main.tsx
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── TechStack.tsx
│   ├── ProjectGallery.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── utils.ts
├── styles/
│   └── globals.css
├── App.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── index.html
└── README.md
```

## 🚀 빠른 시작

### 1. 새 폴더 생성
```bash
mkdir flutter-portfolio
cd flutter-portfolio
```

### 2. package.json으로 시작
아래 내용으로 `package.json` 파일 생성:

```json
{
  "name": "flutter-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.2.2",
    "vite": "^5.2.0",
    "@tailwindcss/vite": "^4.0.0-alpha.15"
  }
}
```

### 3. 의존성 설치
```bash
npm install
```

### 4. 설정 파일들 생성
위에서 제공한 `vite.config.ts`, `tsconfig.json`, `index.html` 등의 파일들을 생성하세요.

### 5. 소스 파일들 복사
제공된 모든 컴포넌트 파일들을 해당 위치에 복사하세요.

### 6. 개발 서버 실행
```bash
npm run dev
```

## 🎨 커스터마이징 팁

### 개인정보 변경
1. **이름 및 타이틀**: `components/HeroSection.tsx`
2. **기술 스택**: `components/TechStack.tsx`
3. **프로젝트**: `components/ProjectGallery.tsx`
4. **경력**: `components/Experience.tsx`
5. **연락처**: `components/Contact.tsx`

### 색상 테마 변경
`styles/globals.css` 파일에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다.

### 이미지 교체
- 프로필 이미지: `components/HeroSection.tsx`의 아바타 부분
- 프로젝트 이미지: `components/ProjectGallery.tsx`의 이미지 URL들

## 🌐 배포 방법

### Vercel 배포
1. GitHub에 코드 푸시
2. Vercel에서 리포지토리 연결
3. 자동 배포

### Netlify 배포
1. GitHub에 코드 푸시
2. Netlify에서 리포지토리 연결
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🔧 문제 해결

### 빌드 에러 시
1. `node_modules` 삭제 후 재설치
2. TypeScript 버전 확인
3. 모든 import 경로 확인

### 스타일이 적용되지 않을 때
1. `globals.css` import 확인
2. Tailwind CSS 설정 확인
3. 브라우저 캐시 클리어

## 📞 지원

추가 질문이나 도움이 필요하시면 언제든 연락주세요!