# youngthedev-site

https://user-images.githubusercontent.com/86599495/234543680-8c54c53a-c9d1-433b-a785-b5175c8d7a77.mov

https://youngthedev-site.web.app/

사용스택: TypeScript, Next.js, Firebase SDK, Notion SDK, Github Action

SoundCloud의 코멘트 기능에서 영감을 받아, 사용자가 보는 화면 위치에 피드백을 남길 수 있는 웹 포트폴리오를 제작하였습니다. 

포트폴리오의 특성상 정적인 데이터가 많아 Next.js를 이용해 구현했습니다.

포트폴리오를 음악앨범으로 구성하고, 스크롤바를 사운드바처럼 구현하여 몰입감을 줬습니다.

내부 컨텐츠는 [노션페이지](https://www.notion.so/CMS-d6de3e846963418b8aa41cc952c11ace)와 연동해서 관리하여 내용을 수정할 때, 코드가 아닌 노션 페이지를 통해 수정할 수 있습니다.

---

### 🌜 다크모드 🌛

#### 💁‍♂️ 구현과정

- 커스텀 데이터 속성 (Custom Data Attribute)을 이용해서 사이트 테마 변경 구현했습니다. https://github.com/young1the/youngthedev-site/pull/1

#### 💁‍♂️ DEMO
https://user-images.githubusercontent.com/86599495/234540438-9f1ddf6e-1efb-4b0d-97a3-5c262a472c6d.mov

---
  
### 🗒️ 노션 API 🗒️

#### 💁‍ 구현과정

- Notion API를 이용해서 노션페이지를 Next.js의 `getStaticProps()`을 이용해 빌드 시에 불러왔습니다. https://github.com/young1the/youngthedev-site/pull/2
- 노션페이지 하위블록의 모든 데이터를 받아오기 위해 데이터를 받아오는 함수를 재귀로 구현하고 `Promise.all` 메서드를 이용 했습니다. https://github.com/young1the/youngthedev-site/pull/8
- 기타 https://github.com/young1the/youngthedev-site/pull/10

#### 💁‍ DEMO
<img width="584" alt="cms" src="https://user-images.githubusercontent.com/86599495/234540565-362fe1a4-cadc-4b27-b938-88da8eefbe4b.png">
<img width="584" alt="cms_inside" src="https://user-images.githubusercontent.com/86599495/234540576-2a82b27e-ff14-4d55-8b60-4248167f9a19.png">

---

### 🐹 Google OAuth, 익명로그인 기능 🐹

#### 💁‍ 구현과정

- Firebase SDK를 React에 적용하여 OAuth 기능을 구현했습니다. https://github.com/young1the/youngthedev-site/pull/15

#### 💁‍ DEMO

https://user-images.githubusercontent.com/86599495/234541196-954c37f9-a68b-4c76-ac99-dfdd2ef6d022.mov

https://user-images.githubusercontent.com/86599495/234541253-e6de8f1e-47fa-484c-aecd-9a654dcc255e.mov

https://user-images.githubusercontent.com/86599495/234541329-b60620d2-0d60-467d-8e19-f02ef370a687.mov

### 🤖 Github Actions 🤖

#### 💁‍ 구현과정
- [firebase-hosting-pull-request.yml](https://github.com/young1the/youngthedev-site/blob/dev/.github/workflows/firebase-hosting-pull-request.yml)

#### 💁‍ DEMO
<img width="584" alt="ghAction" src="https://user-images.githubusercontent.com/86599495/234544252-8326366a-8aab-4c06-9dd1-0c8aa1f5cd4b.png">
