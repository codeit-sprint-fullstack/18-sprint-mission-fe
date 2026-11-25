# 판다마켓 (Panda Maket)

## 프로젝트 소개

Codeit FS sprint 미션을 통해 구현한
판다마켓 플랫폼의 웹 프론트엔드 프로젝트입니다.

Figma 디자인을 토대로 HTML과 CSS를 활용하여
랜딩 페이지, 로그인 및 회원가입 페이지를 구현했습니다.

## 배포 주소

[netlify](https://ornate-babka-4fd14f.netlify.app/)

[google analytics](https://analytics.google.com/analytics/web/#/a417367853p565707641/realtime/overview?params=_u..nav%3Dmaui)

## 기술 스택

-HTML

-CSS

-Git & GitHub

-Google Analytics

### 스프린트 미션 1

-랜딩 페이지 구현

-상단 네비바 및 푸터바 구현

-서비스 소개 섹션 구현

-Flexbox를 활용한 레이아웃 구성

### 스프린트 미션 2

-로그인 페이지 구현

-회원가입 페이지 구현

-로그인 및 회원가입 페이지 간 이동

-입력창 포커스 스타일 적용

-비밀번호 눈 모양 아이콘 배치

-입력 조건에 따른 색상 변경

-CSS 변수를 활용한 공통 색상 관리

-Google Analytics 연동

## 트러블 슈팅

### 랜딩 페이지 홈 배너 이미지가 중앙에 정렬되는 문제 발생

-배너 섹션의 텍스트와 버튼 배치에 집중하고 나서 보니 배너 이미지가 바닥에 붙어야하는데 붙지 않는 문제가 발생함.

-원인은 텍스트 영역을 가운데로 배치하려고 설정했던 algin-items: center;

-해당 문제는 align-items: flex-end;로 수정 후 텍스트 영역을 transform: translateY(-50px);로 보완함.

-transform: translate 기능 습득

### 입력 양식의 width 속성이 적용되지 않는 문제 발생

-auth-form 클래스를 만들어 width 100%을 지정했으나 적용되지 않는 문제 발생

-CSS 파일을 아무리 수정해도 반영되는 것이 없어 Liveserver로 연 페이지에서 해당 영역을 개발자 도구로 검사결과 HTML코드 클래스 지정 오타가 난 것을 발견해 해당 부분을 수정함.

-강의에서 들었던 CSS의 오류 검출이 어려운 경우에 대한 설명과 사례를 들어서 개발자 도구 활용해 문제 진단 능력 습득

### 비밀번호 입력칸 눈 모양 아이콘 배치 적용에 관한 문제 발생

-Figma에서 긁어 온 이미지를 삽입하였으나 Input 안에 들어가야 할 이미지가 입력 창 하단에 출력되는 문제 발생

-position: relative로 Input태그와 img 태그의 위치 기준 설정, position: absolute로 해당 이미지 아이콘의 배치 흐름 변경

-position 기능 추가 숙달

### 로그인과 회원가입 페이지 CSS 중복 방지

-스프린트 미션 2 진행 중 Figma에서 견본 이미지 식별했을 때 해당 디자인을 보고 CSS를 하나만 작성해서 적용이 가능할 것 같다는 발상이 들었음.

-기존 변수 선언도 별도 CSS를 작성해서 선언해 둘 수 있겠다는 생각이 들어서 색상 변수 선언은 추후 랜딩 페이지를 포함한 추가 작성될 페이지에도 활용 가능하겠다는 생각이 들어서 분리함.

-CSS 활용 능력 숙달

## 작업 중 배운 점

-시멘틱 태그의 역할과 웹 접근성

-Flexbox를 활용한 요소 배치

-CSS 변수 및 공통 클래스의 재사용성

-relative와 absolute를 활용한 위치 지정법

-개발자 도구를 활용한 유효성 검사

-GitHub Fork 기능과 Pull Request 기능
