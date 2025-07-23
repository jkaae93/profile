# Flutter 개발자 포트폴리오

React + TypeScript + Tailwind CSS v4로 제작된 Flutter 시니어 개발자 포트폴리오 웹사이트입니다.

## 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: 정적 호스팅 가능 (Vercel, Netlify 등)

## 기능

- ✅ 반응형 디자인
- ✅ 다크 모드 지원
- ✅ 현대적인 UI/UX
- ✅ 부드러운 애니메이션
- ✅ SEO 최적화
- ✅ 접근성 고려

## 설치 및 실행

### 1. 프로젝트 클론
```bash
git clone <repository-url>
cd flutter-portfolio
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

### 4. 빌드
```bash
npm run build
```

### 5. 프리뷰
```bash
npm run preview
```

## 커스터마이징

### 개인정보 수정
다음 파일들에서 개인정보를 수정하세요:

- `components/HeroSection.tsx` - 이름, 소개글, 연락처
- `components/Experience.tsx` - 경력 정보
- `components/ProjectGallery.tsx` - 프로젝트 정보
- `components/Contact.tsx` - 연락처 정보

### 스타일 수정
- `styles/globals.css` - 전역 스타일 및 테마 색상
- 각 컴포넌트 파일의 Tailwind 클래스

### 이미지 교체
프로젝트 이미지들은 Unsplash에서 가져온 것이므로, 실제 프로젝트 스크린샷으로 교체하세요.

## 배포

### Vercel
1. Vercel 계정 생성
2. GitHub 리포지토리 연결
3. 자동 배포 설정

### Netlify
1. Netlify 계정 생성
2. 빌드 명령어: `npm run build`
3. 배포 디렉토리: `dist`

## 라이센스

MIT License