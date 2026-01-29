# 보드게임하자 (bohaapp)

보드게임 카페용 게임 큐레이션/목록/상세를 제공하는 웹페이지입니다.
프런트는 Vue 2 + Vuetify,
백엔드는 Vercel Serverless + MongoDB(Mongoose)로 구성되어 있습니다.

## 주요 화면
- 홈(큐레이션 바로가기)
  - (여기에 홈 페이지 스크린샷)
- 게임 목록 + 필터
  - (여기에 게임 목록/필터 스크린샷)
- 큐레이션 리스트
  - (여기에 큐레이션 리스트 스크린샷)
- 게임 상세
  - (여기에 게임 상세 스크린샷)

## 주요 기능
- 큐레이션별 게임 리스트 제공 (인기/추천)
- 게임 목록 무한 스크롤 및 필터(인원/장르/난이도/상태)
- 게임 상세 정보(플레이 인원, 시간, 난이도, 설명, 코멘트)
- 이미지/폰트 S3 연동

## 구조
```
bohaapp-1/
  src/        # Vue 2 SPA
  public/     # 정적 리소스
  api/        # Vercel Serverless Functions
```

## 기술 스택
- Frontend: Vue 2, Vue Router, Vuex, Vuetify, Axios, vue-infinite-loading
- Backend: Vercel Serverless, Mongoose
- Storage/Assets: AWS S3 (썸네일/폰트)

## 빠른 시작 (로컬)
### 1) 환경 변수
`.env.local`에 `MONGO_URI` 설정

### 2) 의존성 설치
```
npm install
```

### 3) 로컬 실행
터미널 2개 필요
```
# API 서버 (로컬 전용)
npm run api:dev
```
```
# 프론트
npm run serve
```

## 배포 (Vercel)

## S3 업로드 규칙
이미지는 S3 버킷 `boha-app` 루트에 업로드합니다.
- 썸네일: `{engname}_thumbnail.jpg`
- 상세 이미지: `{engname}_1.jpg`, `{engname}_2.jpg`
- 폰트: `font/AppleSDGothicNeoB.ttf`, `font/GmarketSansTTFBold.ttf` 등

## API 개요 (요약)
### Games
- `GET /api/games` (query: `key`, `value`) 난이도/인원/장르 필터
- `GET /api/games/all` 게임 이름 리스트
- `GET /api/games/page` 페이지네이션 (query: `page`)
- `GET /api/games/some` 여러 게임 조회 (query: `ids`)
- `GET /api/games/one` 단일 게임 조회 (query: `ids`)
- `POST /api/games` 게임 추가
- `PUT /api/games` 게임 수정
- `DELETE /api/games` 게임 삭제 (query: `_id`)

### Curation
- `GET /api/curation` 큐레이션 리스트
- `GET /api/curation/name` 큐레이션 이름으로 조회 (query: `<curationName>`)
- `POST /api/curation` 큐레이션 추가

## 데이터 모델 (요약)
### Game
- `korname`, `engname`
- `minplayer`, `maxplayer`
- `mintime`, `maxtime`
- `genre[]`, `difficulty`, `state`
- `gametext`, `comment`, `click`

### Curation
- `detail`
- `games[]` (게임 ID 목록)
