# 프리온보딩 8월 챌린지 - CRUD w React Query

## 목차

1. [최종 구현 상세](#최종-구현-상세)
2. [설치 및 실행](#설치-및-실행)
3. [사용 기술](#사용-기술)
4. [과제 구현 명세](#과제-구현-명세)
5. [진행 과정](#진행-과정)

## 최종 구현 상세

### Auth (Log In / Sign Up)

> `/auth` 이미지가 들어갈 예정

### To Do List

> `/todos/*` 이미지가 들어갈 예정

## 설치 및 실행

### Backend API

```bash
git clone https://github.com/Real-Bird/wanted-pre-onboarding-challenge-fe-1-api.git
cd wanted-pre-onboarding-challenge-fe-1-api
yarn
yarn start
```

### Frontend

```bash
git clone https://github.com/Real-Bird/wanted-pre-onboarding-challenge-fe-1.git
cd wanted-pre-onboarding-challenge-fe-1
npm install
npm start
```

## 사용 기술

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white) : 베이스 프레임워크
- ![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=flat&logo=React%20Query&logoColor=white) : 메인 라이브러리
- ![Styled Components](https://img.shields.io/badge/Styled%20Components-DB7093?style=flat&logo=Styled%20Components&logoColor=white) : 스타일링 라이브러리
- ![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat&logo=React%20Router&logoColor=white) : 경로 라이브러리
- ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=flat&logo=React%20Hook%20Form&logoColor=white) : `form` 작성 편의 라이브러리

## 과제 구현 명세

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [?] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 진행 과정

### 강의 전 구현

### 강의 1회 차 리펙토링

### 강의 2회 차 리펙토링

### 강의 3회 차 리펙토링

## Refactoring 진행 사항

## 22-08-15

- `To Do List`에 `React Query`를 적용했습니다.
- 코드 정리 예정입니다.

## 22-08-13

- `Routes`를 수정했습니다.
  - `Nested Route`로 구성해 `URL`은 `Todo ID`를 포함하되 페이지 이동은 하지 않습니다.
- `styles`을 추가했습니다.
