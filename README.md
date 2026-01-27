# 보드게임하자 (bohaapp)

보드게임 카페용 게임 큐레이션/목록/상세를 제공하는 웹페이지 입니다.
Front -> Vue 2 + Vuetify
Back -> Express + MongoDB(Mongoose)

## 주요 기능
- 큐레이션별 게임 리스트 제공 (인기/추천 등)
- 게임 목록 무한 스크롤 및 필터(인원/장르/난이도/상태)
- 게임 상세 정보(플레이 인원, 시간, 난이도, 설명, 코멘트)
- 게임/큐레이션 관리용 어드민 화면(코드 포함, 라우팅 연결은 별도)

## 구조
```
bohaapp-1/
  front/   # Vue 2 SPA
  back/    # Express API + 정적 파일 서빙 (front 빌드 결과)
```

## 기술 스택
- Frontend: Vue 2, Vue Router, Vuex, Vuetify, Axios, vue-infinite-loading
- Backend: Express, Mongoose, multer, AWS S3
- Storage/Assets: AWS S3 (썸네일/폰트 등)

## 빠른 시작
### 1) 백엔드 환경 변수 설정
`back/.env`에 다음 값을 준비합니다.
```
PORT=3000
MONGO_URI=<your_mongodb_uri>
```

### 2) 의존성 설치
```
# backend
cd back
npm install

# frontend
cd ../front
npm install
```

### 3) 개발 서버 실행
```
# backend (Express)
cd back
npm run start

# frontend (Vue)
cd ../front
npm run serve
```

### 4) 통합 실행(빌드 후 백엔드에서 서빙)
프런트를 빌드하면 결과물이 `back/public`에 생성됩니다.
```
cd front
npm run build

cd ../back
npm run start
```

## API 개요 (요약)
### Games
- `GET /games` (query: `key`, `value`) 난이도/인원/장르 필터
- `GET /games/all` 게임 이름 리스트
- `GET /games/page` 페이지네이션 (query: `page`)
- `GET /games/some` 여러 게임 조회 (query: `ids[]`)
- `GET /games/one` 단일 게임 조회 (query: `ids`)
- `POST /games` 게임 추가
- `PUT /games` 게임 수정
- `DELETE /games` 게임 삭제 (query: `_id`)

### Curation
- `GET /curation` 큐레이션 리스트
- `GET /curation/name` 큐레이션 이름으로 조회 (query: `<curationName>`)
- `POST /curation` 큐레이션 추가

## 데이터 모델 (요약)
### Game
- `korname`, `engname`
- `minplayer`, `maxplayer`
- `mintime`, `maxtime`
- `genre[]`, `difficulty`, `state`
- `gametext`, `comment`, `click`

### Curation
- `detail`
- `games[]` (게임 ID 혹은 이름 목록)

## 기타 메모
- 프런트 라우터는 history 모드이며, 백엔드에서 `connect-history-api-fallback`으로 SPA 라우팅을 지원합니다.
- 어드민 관련 뷰(`front/src/admin/*`)는 현재 라우터에 연결되어 있지 않습니다. 필요 시 라우터에 추가하세요.
