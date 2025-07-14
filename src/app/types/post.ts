// 블로그 포스트 타입 정의
export interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  excerpt?: string;
  author: string
}

// 초기 더미 데이터
export const initialPosts: Post[] = [
  {
    id: 1,
    title: "Next.js로 블로그 구축하기",
    content: "Next.js의 App Router를 활용하여 SEO 친화적인 블로그를 만드는 방법을 알아봅니다. 서버 컴포넌트와 클라이언트 컴포넌트를 적절히 조합하여 최적의 성능을 제공하는 방법에 대해 알아봅시다.\n\n 서버 컴포넌트의 장점\n\n서버 컴포넌트는 초기 로딩 시간을 크게 줄여줍니다...",
    excerpt: "Next.js의 App Router를 활용하여 SEO 친화적인 블로그를 만드는 방법을 알아봅니다.",
    category: "Next.js",
    author: 'ychanwoo'
  },
  {
    id: 2,
    title: "TypeScript 타입 시스템 완벽 가이드",
    content: "TypeScript의 고급 타입 기능을 활용하여 더 안전하고 유지보수하기 쉬운 코드를 작성하는 방법을 알아봅니다...",
    excerpt: "TypeScript의 고급 타입 기능을 활용하여 더 안전하고 유지보수하기 쉬운 코드를 작성하는 방법을 알아봅니다.",
    category: "TypeScript",
    author: 'ychanwoo'
  },
  {
    id: 3,
    title: "React 성능 최적화 기법",
    excerpt: "React 애플리케이션에서 발생할 수 있는 성능 병목 현상을 해결하고 렌더링 성능을 향상시키는 방법을 알아봅니다.",
    content: "React 애플리케이션에서 발생할 수 있는 성능 병목 현상을 해결하고 렌더링 성능을 향상시키는 방법을 알아봅니다...",
    category: "React",
    author: 'ychanwoo'
  },
  {
    id: 4,
    title: "CSS Grid 레이아웃 마스터하기",
    excerpt: "모던 웹 레이아웃을 위한 CSS Grid의 모든 것. 복잡한 레이아웃도 간단하게 구현해봅시다.",
    content: "모던 웹 레이아웃을 위한 CSS Grid의 모든 것. 복잡한 레이아웃도 간단하게 구현해봅시다...",
    category: "HTML/CSS",
    author: 'ychanwoo'
  }
];