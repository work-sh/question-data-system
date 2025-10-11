# Question Data System - Web App

TanStack Router, TanStack Query, Zustand를 사용한 모던 React 애플리케이션입니다.

## 🚀 기술 스택

- **Framework**: Vite + React 19
- **Routing**: TanStack Router (파일 기반 라우팅)
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **TypeScript**: 완전한 타입 안전성

## 📁 프로젝트 구조

```
apps/web/
├── app/                    # TanStack Router 파일 기반 라우팅
│   ├── __root.tsx         # 루트 레이아웃
│   ├── index.tsx          # 홈 페이지 (/)
│   ├── login.tsx          # 로그인 페이지 (/login)
│   ├── main.tsx           # 앱 진입점
│   ├── router.ts          # 라우터 설정
│   └── routeTree.gen.ts   # 자동 생성된 라우트 트리
├── components/            # React 컴포넌트
│   ├── login-form.tsx     # 로그인 폼
│   └── providers.tsx      # 프로바이더 설정
├── hooks/                 # TanStack Query 훅
│   ├── use-questions.ts   # Questions 관련 훅
│   └── index.ts
├── lib/                   # 유틸리티
│   └── query-client.ts    # Query Client 설정
├── stores/                # Zustand 스토어
│   ├── auth-store.ts      # 인증 상태 관리
│   └── index.ts
└── vite.config.ts         # Vite 설정
```

## 🛠️ 개발 명령어

```bash
# 개발 서버 시작
pnpm dev

# 빌드
pnpm build

# 미리보기
pnpm preview

# 린트
pnpm lint

# 타입 체크
pnpm typecheck
```

## 📚 주요 기능

### 1. 파일 기반 라우팅 (TanStack Router)
- `app/` 폴더의 파일들이 자동으로 라우트가 됩니다
- 타입 안전한 네비게이션
- 개발자 도구 포함

### 2. 상태 관리 (Zustand)
- 인증 상태 관리
- 로컬 스토리지 지속성
- 간단하고 직관적인 API

### 3. 데이터 페칭 (TanStack Query)
- 서버 상태 관리
- 캐싱 및 동기화
- 개발자 도구 포함

### 4. UI 컴포넌트 (shadcn/ui)
- 재사용 가능한 컴포넌트
- Tailwind CSS 기반
- 접근성 고려

## 🔧 사용법

### 새 페이지 추가
`app/` 폴더에 새 `.tsx` 파일을 생성하면 자동으로 라우트가 생성됩니다.

```tsx
// app/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <div>About Page</div>
}
```

### Zustand 스토어 사용
```tsx
import { useAuthStore } from '@/stores'

function MyComponent() {
  const { user, login, logout } = useAuthStore()
  // ...
}
```

### TanStack Query 훅 사용
```tsx
import { useQuestions } from '@/hooks'

function QuestionsList() {
  const { data, isLoading, error } = useQuestions()
  // ...
}
```

## 🌐 라우트

- `/` - 홈 페이지 (Questions 목록)
- `/login` - 로그인 페이지

## 📦 의존성

- `@tanstack/react-router` - 라우팅
- `@tanstack/react-query` - 데이터 페칭
- `@tanstack/react-query-devtools` - 개발자 도구
- `zustand` - 상태 관리
- `next-themes` - 테마 관리
- `@packages/ui` - UI 컴포넌트 (모노레포)
