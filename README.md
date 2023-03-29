 ## 소개

https://youngthedev-site.web.app/

Next.js로 만든 웹 포트폴리오입니다. Firebase를 이용해 호스팅 했습니다.

내부 컨텐츠는 [노션페이지](https://www.notion.so/CMS-d6de3e846963418b8aa41cc952c11ace)와 연동해서 관리하고 있습니다. 

## 기능

- 다크모드 
  - 커스텀 데이터 속성 (Custom Data Attribute)을 이용해서 사이트 테마 변경 구현 https://github.com/young1the/youngthedev-site/pull/1
- 노션 API
  - Notion SDK 적용 https://github.com/young1the/youngthedev-site/pull/2 , https://github.com/young1the/youngthedev-site/pull/8 , https://github.com/young1the/youngthedev-site/pull/10
- firebase 연동
  - Firebase SDK를 React에 적용 https://github.com/young1the/youngthedev-site/pull/15
- PR시 firebase 호스팅 
  - [firebase-hosting-pull-request.yml](https://github.com/young1the/youngthedev-site/blob/dev/.github/workflows/firebase-hosting-pull-request.yml)
