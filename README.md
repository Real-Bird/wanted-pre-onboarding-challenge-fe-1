# 프리온보딩 8월 챌린지 - CRUD w React Query

## 목차

1. [최종 구현 상세](#최종-구현-상세)
2. [설치 및 실행](#설치-및-실행)
3. [사용 기술](#사용-기술)
4. [과제 구현 명세](#과제-구현-명세)
5. [진행 과정](#진행-과정)

## 1. 최종 구현 상세

### 1-1. Auth (Log In / Sign Up)

> `/auth` 이미지가 들어갈 예정

### 1-2. To Do List

> `/todos/*` 이미지가 들어갈 예정

## 2. 설치 및 실행

### 2-1. Backend API

```bash
git clone https://github.com/Real-Bird/wanted-pre-onboarding-challenge-fe-1-api.git
cd wanted-pre-onboarding-challenge-fe-1-api
yarn
yarn start
```

### 2-2. Frontend

```bash
git clone https://github.com/Real-Bird/wanted-pre-onboarding-challenge-fe-1.git
cd wanted-pre-onboarding-challenge-fe-1
npm install
npm start
```

## 3. 사용 기술

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white) : 베이스 프레임워크
- ![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=flat&logo=React%20Query&logoColor=white) : 메인 라이브러리
- ![Styled Components](https://img.shields.io/badge/Styled%20Components-DB7093?style=flat&logo=Styled%20Components&logoColor=white) : 스타일링 라이브러리
- ![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat&logo=React%20Router&logoColor=white) : 경로 라이브러리
- ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=flat&logo=React%20Hook%20Form&logoColor=white) : `form` 작성 편의 라이브러리

## 4. 사전 과제 명세

### 4-1. Login / SignUp

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

### 4-2. Todo List

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

## 5. 진행 과정

### 5-0. 강의 전 과제 - 사전 과제 구현

#### 5-0-1. 디렉토리 구조

```bash
· 📂src
   ├─ 📂components
   │   ├─ 📂Todos
   │   │   ├─ 💾TodoDetail.js
   │   │   ├─ 💾TodoInsert.js
   │   │   ├─ 💾TodoItem.js
   │   │   ├─ 💾TodoList.js
   │   │   └─ 💾index.js
   │   ├─ 📂auth
   │   │   ├─ 💾LoginForm.js
   │   │   └─ 💾index.js
   │   └─ 💾Router.js
   ├─ 📂libs
   │	 └─ 💾utils.js
   ├─ 💾App.js
   ├─ 💾index.css
   └─ 💾index.js
```

#### 5-0-2. 셀프 피드백

사전 과제에서 요구한 기능만 최소한으로 구현했다. 디렉토리는 나름대로 컴포넌트 역할에 따라 분류했다. 상태 관리나 함수 분류 등은 전혀 고려하지 않았다.

가령, 모든 비동기 호출에서 `token`이 필요했는데, 상태관리를 전혀 몰랐던 나는 자연스럽게 `prop`을 상위 컴포넌트에서 하위 컴포넌트로 `drilling`했다.

뭐가 문제인지 전혀 모르고, 과제를 빠르게 했다는 사실에 안도했다.

### 5-1. 강의 1회 차 과제 - 리펙토링, Typescript 적용

#### 5-1-1. 디렉토리 구조

```bash
· 📂src
   ├─ 📂Login
   │   └─ 💾LoginForm.tsx
   ├─ 📂Todos
   │   ├─ 💾TodoDetail.tsx
   │   ├─ 💾TodoHome.tsx
   │   ├─ 💾TodoInsert.tsx
   │   └─ 💾TodoList.tsx
   ├─ 📂components
   │   ├─ 💾globalStyled.ts
   │   ├─ 💾input.tsx
   │   └─ 💾todosStyled.ts
   ├─ 📂libs
   │   ├─ 💾theme.ts
   │   ├─ 💾todos.ts
   │   ├─ 💾users.ts
   │   └─ 💾utils.ts
   ├─ 📂pages
   │   ├─ 💾Auth.tsx
   │   └─ 💾Home.tsx
   ├─ 💾App.tsx
   ├─ 💾Router.tsx
   ├─ 💾index.css
   ├─ 💾index.tsx
   ├─ 💾react-app-env.d.ts
   └─ 💾styled.d.ts
```

#### 5-1-2. 셀프 피드백

`typescript`로의 전환이 필요해 먼저 작업했다. 타입 단언을 지양하고, 최대한 타입 추론과 `interface`를 활용하려고 했다.

컴포넌트 내에서 호출하던 `fetch`를 역할에 따라 `libs` 디렉토리에 분류해 저장했다. `todos.ts`에는 `To Do List`와 관련된 함수들(ex. `getTodos`, `setTodos` 등)이, `users.ts`에는 `Login/Signup`과 관련된 함수들(ex. `getToken`, `getLogin` 등)이 모여 있다.

`추상화`를 통한 `명령형 함수`를 구성하고 싶어 기능에 따라 나눴지만, 개념을 이해하지 못해 단순한 분류에 그쳤다. 그 때문에 여전히 `props drilling`의 한계에서 벗어나지 못했다.

`styled components`로 구성한 컴포넌트를 `components` 디렉토리로 분류해 재사용성을 높였다.

### 5-2. 강의 2회 차 과제

### 5-3. 강의 3회 차 과제

<!-- ## Refactoring 진행 사항

## 22-08-15

- `To Do List`에 `React Query`를 적용했습니다.
- 코드 정리 예정입니다.

## 22-08-13

- `Routes`를 수정했습니다.
  - `Nested Route`로 구성해 `URL`은 `Todo ID`를 포함하되 페이지 이동은 하지 않습니다.
- `styles`을 추가했습니다. -->
