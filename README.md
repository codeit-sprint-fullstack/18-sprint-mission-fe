# 판다마켓

중고 거래 서비스 **판다마켓**의 랜딩·로그인·회원가입 페이지를 HTML/CSS로 구현한 코드잇 스프린트 미션입니다.

## 배포 주소

- 배포 후 추가 예정

## 페이지

| 주소 | 내용 |
| --- | --- |
| `/` | 랜딩 페이지 (스프린트 미션 1) |
| `/login` | 로그인 페이지 |
| `/signup` | 회원가입 페이지 |

## 구현 내용 (스프린트 미션 2)

### 기본

- 로고를 누르면 루트 페이지(`/`)로 이동
- 간편 로그인 아이콘: 구글 → `https://www.google.com/`, 카카오 → `https://www.kakaocorp.com/page/`
- 입력칸에 포커스가 있으면 테두리 `#3692FF`, 포커스가 빠지면 테두리 없음
- 로그인 페이지의 "회원가입" → `/signup`, 회원가입 페이지의 "로그인" → `/login`

### 심화

- 피그마 팔레트 색상을 CSS 변수로 등록해 사용 (`css/palette.css`)
- 구글 애널리틱스 스크립트 삽입
- 비밀번호·비밀번호 확인 칸의 눈 아이콘으로 비밀번호 보기/숨기기 (`js/password-toggle.js`)

## 폴더 구조

```
├── index.html          # 랜딩
├── login/index.html    # 로그인
├── signup/index.html   # 회원가입
├── css/
│   ├── reset.css
│   ├── palette.css     # 색상 변수
│   ├── style.css       # 랜딩 스타일
│   └── auth.css        # 로그인·회원가입 공통 스타일
├── js/
│   └── password-toggle.js
└── images/
```

## 사용 기술

- HTML5, CSS3, JavaScript
- 폰트: [Pretendard](https://github.com/orioncactus/pretendard)
- 배포: Netlify
