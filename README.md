# 카카오 테크 캠퍼스 3단계 과제: 축팅

포토부스의 사진을 공유하고, 만남을 연결하는 서비스 **축팅**입니다.

<br />

## 🏁 시작하기

파일을 저장한 후 다음의 명령어로 직접 프로젝트를 실행할 수 있습니다.

```zsh
npm install
npm start
```

<br />

## 🧐 프로젝트 소개

개발 기간 : 2023년 9월 24일 ~ 진행 중

카카오 테크 캠퍼스(이하 카테캠) 3단계 과제 수행 프로젝트 중 FE 개발을 다루고 있습니다.

기획부터 배포까지 서비스 개발에 필요한 전반적인 과정을 경험하고 있습니다.

기획안 발표 자료(PowerPoint) : [다운로드](https://drive.google.com/file/d/1NsLP3KFZE2CUSgwqEm7uGOyySQEIONOg/view?usp=sharing)

와이어프레임(Figma) : [보러가기](https://www.figma.com/file/n1fenCQYDfghtHT2Qua0YL/kakao14WireBoard?type=design&node-id=0%3A1&mode=design&t=oSx3LovlAi3IIcv2-1)

<br />

## 👋 팀 소개

프론트엔드 3인, 백엔드 4인으로 이루어진 7인 팀 SPARK 입니다.

<div style="display: flex; gap: 24px;">
  <div>
    <h3>FE</h3>
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>역할</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="https://github.com/MINJOO-KIM" target="_blank">김민주</a></td>
          <td>리액셔너</td>
        </tr>
        <tr>
          <td><a href="https://github.com/GhoRid" target="_blank">박건형</a></td>
          <td>기획리더</td>
        </tr>
        <tr>
          <td><a href="https://github.com/iam454" target="_blank">서완석</a></td>
          <td>테크리더</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <h3>BE</h3>
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>역할</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="https://github.com/GoBeromsu" target="_blank">고범수</a></td>
          <td>테크리더</td>
        </tr>
        <tr>
          <td><a href="https://github.com/yuseonkim" target="_blank">김유선</a></td>
          <td>타임키퍼</td>
        </tr>
        <tr>
          <td><a href="https://github.com/SongGaEun16" target="_blank">송가은</a></td>
          <td>리마인더</td>
        </tr>
        <tr>
          <td><a href="https://github.com/hwangdaesun" target="_blank">황대선</a></td>
          <td>조장</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<br />

## ⚙️ 기술 스택

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Development

<div style="display: flex; gap: 4px;">
  <img src="https://img.shields.io/badge/create react app-09D3AC?style=for-the-badge&logo=create react app&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled components&logoColor=white">
  <img src="https://img.shields.io/badge/react router dom-CA4245?style=for-the-badge&logo=react router&logoColor=white">
  <img src="https://img.shields.io/badge/react modal-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/framer motion-0055FF?style=for-the-badge&logo=framer&logoColor=white">
  <img src="https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white">
  <img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">
  <img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react query&logoColor=white">
  <img src="https://img.shields.io/badge/egjs infinite grid-03C75A?style=for-the-badge&logo=naver&logoColor=white">
</div>

<br />

# 주차별 과제 내용

<details>
  <summary>1주차(09.04 ~ 09.08)</summary>
  <div>

### ✅ 산출물

```
- 5 Whys
- 마켓 리서치
- 페르소나 & 저니맵
- 와이어프레임
- 칸반보드
```

  </div>
</details>

---

<details>
  <summary>2주차(09.11 ~ 09.15)</summary>
  <div>
  
### ✅ 산출물

```
- ERD 설계서
- API 명세서
```

  </div>
</details>

---

<details>
  <summary>3주차(09.18 ~ 09.22)</summary>
  <div>
  
### ✅ 산출물

```
- 기획안 발표
```

  </div>
</details>

---

<details>
  <summary>4주차(09.25 ~ 10.01)</summary>
  <div>
  
### ✅ 산출물

```
민주
- 게시물 Skeleton UI 생성

건형
- 모달 생성

완석
- 개발 환경 설정
- 스타일 초기화 및 폰트, 색상 결정
- 페이지 경로 설정 및 내비게이션 바 생성
- 공통 컴포넌트 생성
- 인기 페이지 UI 임시 생성
```

### ❓ 멘토링 질문

**건형, GhoRid**

1. 컴포넌트를 만들 때, 재사용성을 고려하면 컴포넌트에 받을 props가 너무 많아지는 걸 느꼈습니다. 예를 들어, 모달창 하나를 만드려면 모달창을 열고 닫는 함수, 모달창이 열려있는 상태, 모달창 텍스트, 버튼 함수, 버튼에 들어갈 텍스트(버튼이 2개면 두 개), 버튼 색상, 버튼 아이콘 등... 재사용성을 확보하려면 전달할 props가 워낙 많아지니 이런저런 상황에 활용할 수 있도록 만든 컴포넌트를 처음부터 알아서 만드는 느낌이 강해지는 터라 이에 대해 헷갈립니다. 커스텀을 어디까지 허용해야 할까요?

2. 현재 모달은 modalType이라는 변수에 따라 switch문으로 색상 및 텍스트를 변경할 수 있게 했습니다. modalType만 지정하여 props에 넘겨주면 미리 지정한 switch를 통해 알아서 스타일링이 바뀌게 됩니다. 새로운 상황이 생기면 switch문에 case를 추가하여 처리할 수 있습니다. case를 추가하여 스타일링을 확장하도록 하는 방식은 어떻게 생각하시나요? (코드 리뷰 후 이 방식이 안 좋다는 걸 느껴서 현재는 색상, 텍스트 등을 props로 받아서 직접 지정할 수 있도록 바꿀 예정입니다.)

3. 개발 첫 주를 진행하면서 코드 리뷰의 중요성을 몸소 깨달았습니다. 자주 소통하지 않으면 방향성이 틀어지는 걸 늦게 캐치하여 큰 수정이 필요하게 됩니다. 현업에서는 코드 리뷰의 주기가 어떻게 되나요?

**완석, iam454**

1️⃣ 코드 리뷰에 대한 조언을 여쭙고자 합니다.

저희 팀은 weekly 브랜치에 PR을 보내고 1명 이상의 리뷰 후 merge하는 방식을 채택했습니다. 놓친 부분을 리뷰를 통해 잡거나 직접 개발하지 않은 부분도 어느 정도 이해할 수 있게 되어서 장점을 느꼈지만, 단점 역시 느끼고 있습니다. 개발 첫 주동안 느낀 불편한 점은 다음과 같습니다.

- 같이 배우는 입장이기 때문에, 누가 더 좋은 방향성을 가진 코드인지 판단하기 어렵습니다.
- 리뷰의 과정이 감정을 상하게 할 수도 있을 것 같아 굉장히 조심스럽습니다.
- UI 관련 내용은 merge 이전에 화면으로 볼 수 없습니다.

코드 리뷰는 적절하게 이루어지고 있는지([예시1](https://github.com/Step3-kakao-tech-campus/Team14_FE/pull/12), [예시2](https://github.com/Step3-kakao-tech-campus/Team14_FE/pull/13)), 불편점을 완화해줄 꿀팁이 있는지 궁금합니다.

2️⃣ 디렉토리 구조에 대한 생각이 궁금합니다.

이 프로젝트는 다음과 같은 구조로 수행될 것 같습니다. 정답이 있는 문제는 아니겠지만 현업에서 자주 사용되는 방식이 있는지, 멘토님이 추천하시는 어떤 방식이 있는지 궁금합니다.

```
my-app
├── node_modules
├── public
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src
│   ├── api
│   │   ├── index.js
│   │   └── ... (다른 API 관련 파일들)
│   ├── components
│   │   ├── CommonComponent1
│   │   ├── CommonComponent2
│   │   └── ... (다른 공통 컴포넌트들)
│   ├── lib
│   │   ├── index.js
│   │   └── ... (다른 라이브러리 관련 파일들)
│   ├── pages
│   │   ├── Page1
│   │   │   ├── components
│   │   │   │   ├── Page1Component1
│   │   │   │   ├── Page1Component2
│   │   │   │   └── ... (다른 페이지 1의 컴포넌트들)
│   │   │   └── Page1.js (or Page1.jsx)
│   │   ├── Page2
│   │   │   ├── components
│   │   │   │   ├── Page2Component1
│   │   │   │   ├── Page2Component2
│   │   │   │   └── ... (다른 페이지 2의 컴포넌트들)
│   │   │   └── Page2.js (or Page2.jsx)
│   │   └── ... (다른 페이지들)
│   ├── utils
│   │   ├── index.js
│   │   └── ... (다른 유틸리티 함수들)
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── package-lock.json
└── ...
```

3️⃣ 이미지 파일 관리는 어디서 하는게 좋나요?(public vs src/assets)

이미지 파일은 public 폴더 혹은 src 폴더의 하위로 관리하는 것 같습니다(구글링). 그런데 제 수준에서는 어떤 폴더를 선택하는 것이 좋은지 잘 와닿지가 않습니다. 멘토님께서는 어떤 기준으로 어떤 방식을 선택하여 이미지 파일을 관리하나요? 추천해주시는 방식이 있나요?(아이콘(svg)과 로고(png or svg) 정도가 관리될 것 같습니다.)

4️⃣ 현업에서 라이브러리는 자주 사용되나요? 라이브러리의 선택 기준에는 어떤 것이 있나요?

  </div>
</details>

---

<details>
  <summary>5주차(10.02 ~ 10.08)</summary>
  <div>
  
### ✅ 산출물

```
민주
- 홈 페이지 Swiper 적용

건형
- 마이 페이지 UI 생성

완석
- 게시물 Skeleton UI 리팩토링
- 모달 리팩토링(react-modal 적용)
- 게시물 UI 생성
- 인기 페이지 UI 생성
- 인기 페이지 게시물 상세 조회 UI 생성
- 게시물 좋아요 애니메이션 생성
- 설정 페이지 생성
- 홈 페이지 Swiper 적용
- 홈 페이지 게시물 time progress bar 기능 생성
- 홈 페이지 게시물 pause/resume 기능 생성
```

### ❓ 멘토링 질문

**완석, iam454**

1️⃣ 클릭 이벤트와 더블클릭 이벤트의 구분

멘토링 시간 때 질문 드렸던 것과 동일합니다. 좀 더 연구해보겠습니다.

  </div>
</details>

---

<details>
  <summary>6주차(10.09 ~ 10.15)</summary>
  <div>
  
### ✅ 산출물

```
민주
- 업로드 완료 페이지 임시 생성

건형
- 마이 페이지 게시물 상세 조회 페이지 생성
- 업로드 선택 페이지 임시 생성

완석
- 홈 페이지 클릭/더블클릭 이벤트 이슈 해결
- 마이 페이지 리팩토링
- 마이 페이지 이미지 파일 업로드 기능 생성
- 업로드 페이지 임시 생성
```

  </div>
</details>

---

<details>
  <summary>7주차(10.16 ~ 10.22)</summary>
  <div>
  
### ✅ 산출물

```
민주
- 업로드 완료 페이지 리팩토링

건형
- 업로드 선택 페이지 리팩토링

완석
- 404 페이지 생성
- 시맨틱 태그 적용
- API 연결 준비
```

  </div>
</details>

---

<details>
  <summary>8주차(10.23 ~ 10.29)</summary>
  <div>

8주차는 중간고사 기간으로 자율적으로 개발했습니다.

### ✅ 산출물

```
- 완석
카카오 로그인 API 임시 연결
홈 전체 조회 API 임시 연결
인기 전체 조회 API 연결 및 무한 스크롤 구현
인기 상세 조회 API 연결
좋아요 API 연결
업로드 API 연결
인스타그램 연결 로직 임시 생성
로그아웃 API 임시 연결
로그인 여부에 따른 접근 제한(로그인) 모달 생성
MY 계정 정보 조회 API 임시 연결
MY 전체 조회 API 임시 연결 및 무한 스크롤 구현
MY 상세 조회 API 임시 연결
```

  </div>
</details>

---

<details>
  <summary>9주차(10.30 ~ 11.05)</summary>
  <div>
  
### ✅ 산출물

```
- to do
```

  </div>
</details>

---

<details>
  <summary>10주차(11.06 ~ 11.12)</summary>
  <div>
  
### ✅ 산출물

```
- to do
```

  </div>
</details>
