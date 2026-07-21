// ===== 1) 현재 연도 자동 표시 =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== 2) 스크롤하면 요소가 서서히 나타나는 효과 =====
// IntersectionObserver: 화면에 들어온 요소를 감지합니다.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target); // 한 번만 실행
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ===== 3) Skills 게이지 채우기 =====
// 스킬 영역이 화면에 보이면 data-level 값만큼 막대를 채웁니다.
const skillsSection = document.getElementById("skills");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".skill").forEach((skill) => {
          const level = skill.getAttribute("data-level"); // 0~100
          skill.querySelector(".skill__fill").style.width = level + "%";
        });
        skillObserver.unobserve(skillsSection);
      }
    });
  },
  { threshold: 0.3 }
);

if (skillsSection) skillObserver.observe(skillsSection);
