# 프리온보딩 8월 챌린지 - CRUD w React Query

## 목차

1. [최종 구현 상세](#1-최종-구현-상세)
2. [설치 및 실행](#2-설치-및-실행)
3. [사용 기술](#3-사용-기술)
4. [사전 과제 명세](#4-사전-과제-명세)
5. [진행 과정](#5-진행-과정)

## 1. 최종 구현 상세 [맨 위로](#목차)

### 1-1. Auth

#### 1-1-1. Login / Signup

[login/signup](https://user-images.githubusercontent.com/83404864/185549010-3feb5d33-7e29-47f9-bf8b-957db5507b13.webm)

#### 1-1-2. Logout

[logout](https://user-images.githubusercontent.com/83404864/185552775-5159e3ef-d870-4c45-afa7-7b2031fe9784.webm)

### 1-2. To Do List

#### 1-2-1. Insert ToDos

[insert todo](https://user-images.githubusercontent.com/83404864/185552914-1173e991-ccb4-439a-8bf4-09c4439ac79e.webm)

#### 1-2-2. Update ToDos

[update todo](https://user-images.githubusercontent.com/83404864/185552950-cfb2e21d-2cbe-415a-84e7-e62486d11c11.webm)

#### 1-2-3. Delete ToDos

[delete todo](https://user-images.githubusercontent.com/83404864/185552997-a6fd754f-9e8f-42fd-b536-d51fa25bc024.webm)

## 2. 설치 및 실행 [맨 위로](#목차)

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

## 3. 사용 기술 [맨 위로](#목차)

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white) : 베이스 프레임워크
- ![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=flat&logo=React%20Query&logoColor=white) : 메인 라이브러리
- ![Styled Components](https://img.shields.io/badge/Styled%20Components-DB7093?style=flat&logo=Styled%20Components&logoColor=white) : 스타일링 라이브러리
- ![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat&logo=React%20Router&logoColor=white) : 경로 라이브러리
- ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=flat&logo=React%20Hook%20Form&logoColor=white) : `form` 작성 편의 라이브러리

## 4. 사전 과제 명세 [맨 위로](#목차)

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

## 5. 진행 과정 [맨 위로](#목차)

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

사전 과제에서 요구한 기능만 최소한으로 구현했다. 디렉토리는 나름대로 컴포넌트 역할에 따라 분류했다. 상태 관리나 함수 분류 등은 전혀 고려하지 않았다. [#커밋](https://github.com/Real-Bird/wanted-pre-onboarding-challenge-fe-1/commit/0f9203cc3cfba9aed7021ae688d163c8f5c5a97c)

가령, 모든 비동기 호출에서 `token`이 필요했는데, 상태관리를 전혀 몰랐던 나는 자연스럽게 `prop`을 상위 컴포넌트에서 하위 컴포넌트로 `drilling`했다. [#커밋](https://github.com/Real-Bird/wanted-pre-onboarding-challenge-fe-1/commit/16b3b88dc890f93d5c2082bcb858a163c2ad0ddd)

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

`typescript`로의 전환이 필요해 먼저 작업했다. 타입 단언을 지양하고, 최대한 타입 추론과 `interface`를 활용하려고 했다. [#커밋](https://github.com/Real-Bird/wanted-pre-onboarding-challenge-fe-1/commit/6974f69c79e26d6c215e4c7cc4dbdeea2cffb808)

컴포넌트 내에서 호출하던 `fetch`를 역할에 따라 `libs` 디렉토리에 분류해 저장했다. `todos.ts`에는 `To Do List`와 관련된 함수들(ex. `getTodos`, `setTodos` 등)이, `users.ts`에는 `Login/Signup`과 관련된 함수들(ex. `getToken`, `getLogin` 등)이 모여 있다.

`추상화`를 통한 `명령형 함수`를 구성하고 싶어 기능에 따라 나눴지만, 개념을 이해하지 못해 단순한 분류에 그쳤다. 그 때문에 여전히 `props drilling`의 한계에서 벗어나지 못했다.

`styled components`로 구성한 컴포넌트를 `components` 디렉토리로 분류해 재사용성을 높였다. [#커밋](https://github.com/Real-Bird/wanted-pre-onboarding-challenge-fe-1/commit/6262bbdf73069af8665af5a54ea5103c9c4a5686)

### 5-2. 강의 2회 차 과제 - Redux 컨셉 학습 및 `createStore` 최소 구현, React Query 적용

#### 5-2-1. 디렉토리 구조

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
   ├─ 💾404.tsx
   ├─ 💾App.tsx
   ├─ 💾Router.tsx
   ├─ 💾index.css
   ├─ 💾index.tsx
   ├─ 💾react-app-env.d.ts
   └─ 💾styled.d.ts
```

#### 5-2-2. 셀프 피드백

`404` 페이지를 추가하고, `token` 여부에 따라 페이지를 보호했다. [커밋](https://github.com/Real-Bird/wanted-pre-onboarding-challenge-fe-1/blob/e182930f2b7f78eb3be7d265edf5c6e20f2a73a4/src/Router.tsx)

2회 차 과제는 엉망진창이었다. 먼저, `Redux` 컨셉을 학습하고 `createStore`의 최소 구현체를 어떻게 작성해야 하는지 제대로 이해하지 못했다.

느낌만 풀어보자면, `props/state`를 컴포넌트로 전달하면 매번 상태가 변한다. `React`는 `props/state`가 지나간 컴포넌트의 개수만큼 `re-rendering`을 진행하기 때문에 불필요한 `re-rendering`이 발생한다. 따라서 `props/state`가 필요한 부분에서만 호출할 수 있도록 `Store`라는 장소에 그것을 저장해둔다.

변화가 필요한 `props/state`는 `Action`이라는 트리거를 담은 `reducer`를 `Dispatcher`에 보내 내부에서 변경되어 리턴된다.

이런 느낌으로 나름의 의사코드를 작성했다.

```javascript
export function createStore(
  reducer: (상태, 행동들fn) => 변한상태,
  미리적재된상태
) {
  let currentReducer = reducer;
  let 현재상태 = 미리적재된상태 | null;
  let 현재리스너 = [];
  let 다음리스너 = 현재리스너;

  function dispatch(행동: 행동) {
    현재상태 = currentReducer(현재상태, 행동);
    return 행동;
  }

  function getState() {
    return 현재상태;
  }

  function subscribe(리스너: 행동) {
    다음리스너.push(리스너);

    let 구독중 = true;

    return function unsubscribe() {
      if (!구독중) {
        return;
      }
      구독중 = false;

      const index = 다음리스너.indexOf(리스너);
      다음리스너.splice(index, 1);
      현재리스너 = null;
    };
  }

  const 저장소 = {
    dispatch,
    getState,
    subscribe,
  };
  return 저장소;
}
```

그러나 여기서 `리스너`와 `subscribe`의 역할을 이해하지 못해 `scratch` 코드로 구현하지 못했다.

`React Query`의 적용 또한 난제였다. `useQuery`를 통한 상태 저장/호출은 수월했으나 `useMutation`을 적용하지 못하고 포기했었다. 다음 날, 갑작스레 흐름이 이해되면서 공식 문서가 읽혔다. 신기한 경험에 전율하며 기본적인 `React Query`를 적용할 수 있었다. [커밋](https://github.com/Real-Bird/wanted-pre-onboarding-challenge-fe-1/commit/e182930f2b7f78eb3be7d265edf5c6e20f2a73a4)

`To Do` 컴포넌트는 변화가 잦으므로 `React Query`를 사용했고, `Login` 컴포넌트는 단회성이어서 `fetch`를 그대로 사용했다.

비동기 함수를 각 역할에 따라 `todos.ts`와 `users.ts`에 몰아 넣어두었고, 커스텀 훅은 만들지 않았다. 꼭 세분화하여 분리해야 하는가?

### 5-3. 강의 3회 차 과제 - README 작성 및 코드 정리, '개발자로서의 나' 특징 정의해보기

#### 5-3-1. 최종 디렉토리 구조

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
   │   ├─ 💾authStyled.ts
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
   ├─ 💾404.tsx
   ├─ 💾App.tsx
   ├─ 💾Router.tsx
   ├─ 💾index.css
   ├─ 💾index.tsx
   ├─ 💾react-app-env.d.ts
   └─ 💾styled.d.ts
```

`Login` 컴포넌트를 위한 `authStyled`를 추가했다.

#### 5-3-2. 셀프 피드백

`README` 열심히 작성했다. **코드 정리**는 나 스스로 판단하기에는 너무 어렵다. 커스텀 훅으로 `useMutation`을 빼면 좋을 것 같은데, 그림이 안 그려진다.

#### 5-3-3. 개발자로서의 나

1. `개발자`를 하고 싶은 이유

> 가장 큰 이유는 **재미**있기 때문이다. 구체적으로 3가지 부분에서 매력을 느꼈다.
>
> 1. 풀리지 않는 코드를 붙잡고 고민하다가 어느 순간 풀리면서 쾌감을 맞이할 때! 열받아서 때려치우고 싶다가도 다시 코드를 보게 된다.
>
> 2. 로직을 짜는 과정이 나의 대학 전공이었던 **문예창작**과 비슷한 면이 있다. 소설을 구상하며 사용했던 로직이 프로그래밍이 대응된다는 느낌을 받았다. `배경 === 프레임워크`, `사건 === 함수`, `등장인물 === 변수`, `플롯 === 컴포넌트` 등등. 익숙함을 느끼니 점점 더 매력적으로 다가왔다.
>
> 3. 새로운 기술과 지식을 배우는 게 즐겁다. 잘못 알았던 사실을 깨닫는 과정, 유저 입장에서만 봐 왔던 기술을 구현하는 과정, 더 나은 로직을 떠올리는 과정, 새로운 라이브러리 or 프레임워크를 배우는 과정 등. 무엇이 되었든 새로 배우는 자체가 즐거운데, `개발`, 그 중에서도 `웹 개발`은 가시적인 피드백이 빨라 그 즐거움이 배가 된다.

2. `사회` / `회사`에 더하고 싶은 가치

> 고민이 필요... 내가 뭘 할 수 있는가.

3. `개발자`로서의 장점과 단점

> 장점 : 문제 해결에 대한 집념이 강함. 해결될 때까지 붙잡고 있는 타입
> 단점 : 시동 걸리기까지 오래 걸림. 목표를 잘게 쪼개 감당할 수 있는 크기로 만들어 접근해 극복 중

4. 노력의 방향

> `프리온보딩` 강의를 듣기 전에는 기술에 집중하며 공부했다. 공식 문서 읽기를 소홀히 했고, 대체로 구글링과 배운 내용 위주로 코딩했다. 호환이 안 되는 문제나 구글링으로 해결 안 되는 에러를 만나면 포기했다.
>
> 강의를 들으며 이러한 노력이 초보자가 흔히 하는 실수이며, 직업으로서의 개발 공부는 아니라는 사실을 깨달았다. 즉, 기본 소양을 다지는 공부였던 것.
>
> `개발`을 직업으로 삼기 위해 내가 걸어야 하는 방향은 사용하는 라이브러리의 코드를 열어 보고, 공식 문서와 깃허브 이슈 등을 먼저 찾아보는 습관을 길러야 한다. 기술 블로그 역시 내가 사용하는 기술의 컨셉과 구성을 풀어내는 용도로 정리하는 것이 최적의 사용법이다.
>
> 지금까지 한쪽 눈만 뜬 채로 걸었다. 앞으로는 두 눈 모두 뜨고 넓은 시야로 걷는 법을 익히자.
