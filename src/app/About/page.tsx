export default function AboutPage(){
  return(
    <div>
      {/* 헤더 섹션 */}
      <div>
        <h1>About Me</h1>
        <p>안녕하세요, 프론트엔드 개발자 우영찬 입니다.</p>
      </div>

      {/* 프로필 이미지 & 기본 정보 */}
      <div>
        <h2>우영찬</h2>
        <p>Frontend Developer</p>
      </div>

      {/* 소개 */}
      <section>
        <h3>👋 소개</h3>
        <div>
          <p>
            안녕하세요! 사용자 경험을 중시하는 프론트엔드 개발자 우영찬 입니다. 
            아름답고 직관적인 웹 인터페이스를 만드는 것에 열정을 가지고 있습니다.
          </p>
          <p>
            새로운 기술을 배우고 적용하는 것을 좋아하며, 특히 사용자 중심의 
            개발 방법론에 관심이 많습니다. 개발하면서 겪은 경험과 학습한 내용을 
            이 블로그를 통해 공유하고자 합니다.
          </p>
        </div>
      </section>

      {/* 기술 스택 */}
      <section>
        <h3>🛠️ 기술 스택</h3>
        <div>
          {[
            'JavaScript', 'TypeScript', 'React', 
            'Next.js', 'HTML/CSS', 'Tailwind CSS',
            'Git', 'Node.js', 'Figma'
          ].map((tech) => (
            <div key={tech}>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 블로그 목적 */}
      <section>
        <h3>📝 블로그 목적</h3>
        <ul>
          <li>프론트엔드 개발 팁과 트릭</li>
          <li>새로운 기술 학습 기록</li>
          <li>프로젝트 경험담</li>
          <li>개발 도구 및 라이브러리 리뷰</li>
          <li>일상 생활과 개발자로서의 성장 이야기</li>
        </ul>
      </section>

      {/* 관심사 */}
      <section>
        <h3>🎯 관심사</h3>
        <ul>
          <li>새로운 기술 트렌드</li>
          <li>디자인과 아트</li>
          <li>독서와 글쓰기</li>
          <li>여행과 사진</li>
        </ul>
      </section>
    </div>
  )
}