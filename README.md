# 보드게임하자 (bohaapp)

보드게임 카페용 게임 큐레이션/목록/상세를 제공하는 풀스택 앱입니다. 프런트는 Vue 2 + Vuetify, 백엔드는 Express + MongoDB(Mongoose)로 구성되어 있습니다.

## 주요 기능
- 큐레이션별 게임 리스트 제공 (인기/추천 등)
- 게임 목록 무한 스크롤 및 필터(인원/장르/난이도/상태)
- 게임 상세 정보(플레이 인원, 시간, 난이도, 설명, 코멘트)
- 게임/큐레이션 관리용 어드민 화면(코드 포함, 라우팅 연결은 별도)

## 구조
```
bohaapp-1/
  src/        # Vue 2 SPA 소스
  public/     # 정적 리소스
  backend/    # (legacy) Express API 참고용
  api/        # Vercel Serverless Functions
```

## 기술 스택
- Frontend: Vue 2, Vue Router, Vuex, Vuetify, Axios, vue-infinite-loading
- Backend: Express, Mongoose, multer(+S3), dotenv, cors
- Storage/Assets: AWS S3 (썸네일/폰트 등)

## 빠른 시작
### 1) 환경 변수 설정 (Vercel)
Vercel 프로젝트 환경변수에 `MONGO_URI`를 설정합니다.

### 2) 의존성 설치
```
# frontend (root)
npm install

 
```

### 3) 개발 서버 실행
```
# Vercel 로컬 실행
# 1) vercel dev (API + 프론트)
# 2) npm run serve (프론트)
```

### 4) 통합 실행(빌드 후 백엔드에서 서빙)
프런트를 빌드하면 결과물이 `dist`에 생성됩니다.
```
npm run build
```

## API 개요 (요약)
### Games
- `GET /api/games` (query: `key`, `value`) 난이도/인원/장르 필터
- `GET /api/games/all` 게임 이름 리스트
- `GET /api/games/page` 페이지네이션 (query: `page`)
- `GET /api/games/some` 여러 게임 조회 (query: `ids[]`)
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
- `games[]` (게임 ID 혹은 이름 목록)

## 기타 메모
- 프런트 라우터는 history 모드이며, Vercel은 `vercel.json`의 rewrite로 SPA 라우팅을 처리합니다.
- 어드민 관련 뷰(`src/admin/*`)는 현재 라우터에 연결되어 있지 않습니다. 필요 시 라우터에 추가하세요.
