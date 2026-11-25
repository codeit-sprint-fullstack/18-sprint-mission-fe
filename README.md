# 🐼 판다마켓 (Panda Market)

일상의 모든 물건을 거래하는 중고거래 마켓 웹 서비스의 프론트엔드 UI 구현 프로젝트입니다.

## 🔗 배포 링크

- **Live Demo:** [판다마켓 웹사이트 바로가기](https://panda-market-youngmi-kang.netlify.app)

---

## 🛠️ 기술 스택

- **Language:** HTML5, CSS3
- **Deploy & Analytics:** Netlify, Google Analytics
- **Version Control:** Git, GitHub

---

## 📁 폴더 구조

```text
├── assets/             # 로고, 아이콘 등 이미지 리소스
├── css/
│   ├── reset.css       # 브라우저 기본 스타일 초기화
│   ├── common.css      # 공통 색상 변수(:root), 폰트 및 전역 스타일
│   ├── index.css       # 메인 랜딩 페이지 전용 스타일
│   └── auth.css        # 로그인·회원가입 페이지 공통 레이아웃 및 폼 스타일
├── index.html          # 메인 랜딩 페이지
├── login.html          # 로그인 페이지
└── signup.html         # 회원가입 페이지
```

---

## 💡 구현 포인트

- **반응형 단위(`rem` vs `em`) 분리 적용:** 전체 레이아웃 간격(`gap`, 컨테이너 여백)과 폰트 크기는 루트 기준의 일관성을 위해 `rem`을 사용하고, 버튼·입력창 내부 여백은 글자 크기에 비례하도록 `em`을 적용해 유지보수성을 높였습니다.
