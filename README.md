# 🦁 동물 퀴즈 도감 (Animal Quiz Dictionary)

> 랜덤으로 제시되는 동물 사진을 보고 이름을 맞히면, 해당 동물의 상세 정보를 학습할 수 있는 웹 애플리케이션입니다.
> 퀴즈로 흥미를 유발하고 도감으로 지식을 정리하는, **"맞히면서 배우는"** 학습 경험을 목표로 만들었습니다.

<!-- 기술 스택 배지 (선택) -->
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📌 한눈에 보기

| 항목 | 내용 |
|------|------|
| **프로젝트 유형** | 프론트엔드 단일 페이지 웹 앱 (SPA 스타일) |
| **사용 기술** | HTML5, CSS3, Vanilla JavaScript (프레임워크 미사용) |
| **핵심 기능** | 동물 이름 맞히기 퀴즈 · 분류별 도감 탐색 |
| **데이터** | `animals.json` 기반 18종 (포유류 8 · 조류 5 · 파충류 5) |
| **의존성** | 외부 라이브러리 없음 (No dependency) |

---

## 🎬 데모 / 스크린샷

> 📸 **이미지 영역 ①** — 퀴즈 메인 화면 (랜덤 동물 사진 + 정답 입력창)
> 권장 파일: `docs/screenshot-quiz.png`
> ```markdown
> ![퀴즈 화면](docs/screenshot-quiz.png)
> ```

> 📸 **이미지 영역 ②** — 정답을 맞힌 후 상세 정보가 펼쳐진 화면 (학명/분류/서식지/설명)
> 권장 파일: `docs/screenshot-detail.png`

> 📸 **이미지 영역 ③** — 동물 도감 탭 (카드 그리드 + 분류 필터)
> 권장 파일: `docs/screenshot-catalog.png`

> 📸 **이미지 영역 ④ (선택)** — 전체 흐름을 보여주는 GIF (퀴즈 → 정답 → 도감 전환)
> 권장 파일: `docs/demo.gif`

> 💡 스크린샷은 저장소 루트에 `docs/` 폴더를 만들어 넣은 뒤 위 경로로 연결하면 됩니다.

---

## 🎯 프로젝트 소개

단순히 동물 정보를 나열하는 도감은 수동적으로 읽고 끝나기 쉽습니다.
이 프로젝트는 **먼저 사진만 보여주고 이름을 맞히게** 한 다음, 정답을 맞혔을 때 비로소 상세 정보를 공개하는 방식으로 **능동적인 학습**을 유도합니다.

- **퀴즈 모드**: 사진을 보고 동물 이름을 추측 → 정답 시 학명·분류·서식지·설명이 공개됨
- **도감 모드**: 전체 동물을 분류별로 정리해 한눈에 탐색 가능

---

## ✨ 주요 기능

### 1. 동물 퀴즈
- 랜덤으로 동물 사진을 제시하고 이름 입력을 받습니다.
- **연속 중복 출제 방지**: 직전에 나온 동물이 바로 다시 나오지 않도록 처리했습니다.
- 정답/오답에 따라 메시지 색상이 즉시 바뀝니다. (정답: 초록 / 오답: 빨강)
- **정답을 맞히면** 해당 동물의 상세 정보 카드가 펼쳐집니다.
- 정답을 맞힌 상태에서 다시 "정답 확인"을 누르면 **다음 문제로 넘어갑니다.**
- `Enter` 키 또는 버튼 클릭, 두 가지 방법 모두 지원합니다.

> 📸 **이미지 영역 ⑤ (선택)** — 오답 / 정답 메시지가 표시된 모습 비교

### 2. 동물 도감
- 전체 동물을 카드 형태로 정리해 보여줍니다.
- **분류 필터**: `전체 / 포유류 / 조류 / 파충류` 버튼으로 즉시 필터링됩니다.
- 카드에 마우스를 올리면 **툴팁**으로 학명과 서식지가 표시됩니다.

### 3. 반응형 레이아웃
- 화면 폭 `900px` 이하에서 레이아웃이 1열로 자동 전환됩니다.

---

## 🛠 기술 스택 및 선택 이유

| 기술 | 선택 이유 |
|------|-----------|
| **Vanilla JavaScript** | 프레임워크 없이 DOM 조작·이벤트 처리·`fetch` 비동기 데이터 로딩의 기본기를 직접 다루기 위함 |
| **JSON 데이터 분리** | 동물 데이터를 코드와 분리(`animals.json`)해 데이터 추가/수정이 쉽도록 구성 |
| **CSS Grid / Flexbox** | 카드 그리드 및 반응형 레이아웃 구현 |

---

## 📂 프로젝트 구조

```
Animal-quiz-dictionary/
├── main.html        # 페이지 구조 (탭, 퀴즈 패널, 도감 패널)
├── style.css        # 전체 스타일 (레이아웃, 카드, 반응형)
├── main.js          # 핵심 로직 (퀴즈 출제, 정답 판정, 도감 렌더링)
├── animals.json     # 동물 데이터 (18종)
└── images/          # 동물 이미지
    ├── tiger.jpg
    ├── penguin.jpg
    └── ...
```

---

## 🔍 핵심 구현

### 데이터 로딩 (비동기)
앱 시작 시 `fetch`로 `animals.json`을 불러와 도감을 미리 렌더링하고 첫 퀴즈를 출제합니다.

```javascript
async function loadAnimalData() {
    try {
        const res = await fetch('animals.json');
        if (!res.ok) throw new Error(res.status);
        animals = await res.json();
        renderCatalog(animals); // 도감 목록 준비
        newQuiz();              // 첫 퀴즈 출제
    } catch (e) {
        resultEl.textContent = '데이터 로드 실패';
        console.error(e);
    }
}
```

### 연속 중복 출제 방지
직전 인덱스(`lastIndex`)와 동일한 문제가 다시 나오지 않도록 새 인덱스를 다시 뽑습니다.

```javascript
do { idx = Math.floor(Math.random() * animals.length); }
while (idx === lastIndex);
```

### 분류별 필터링
선택한 분류에 맞는 동물만 추려 다시 렌더링합니다.

```javascript
const list = category === 'all'
    ? animals
    : animals.filter(a => a.category === category);
```

---

## 🗂 데이터 구조 (`animals.json`)

각 동물은 다음과 같은 형태로 저장됩니다.

```json
{
  "name": "호랑이",
  "scientific": "Panthera tigris",
  "category": "포유류",
  "habitat": "아시아 숲",
  "desc": "강력한 근육과 줄무늬를 가진 최상위 포식자.",
  "image": "images/tiger.jpg"
}
```

| 필드 | 설명 |
|------|------|
| `name` | 동물 이름 (퀴즈 정답) |
| `scientific` | 학명 |
| `category` | 분류 (포유류 / 조류 / 파충류) |
| `habitat` | 서식지 |
| `desc` | 한 줄 설명 |
| `image` | 이미지 경로 |

---

## 🚀 실행 방법

이 앱은 `fetch`로 로컬 JSON 파일을 불러오기 때문에, 파일을 더블클릭(`file://`)으로 열면 동작하지 않습니다.
**로컬 서버를 통해 실행**해야 합니다.

```bash
# 1. 저장소 클론
git clone https://github.com/<your-username>/Animal-quiz-dictionary.git
cd Animal-quiz-dictionary

# 2. 로컬 서버 실행 (둘 중 택1)
# Python 3
python -m http.server 8000

# 또는 VS Code 사용 시 Live Server 확장 → main.html 우클릭 → "Open with Live Server"
```

```
# 3. 브라우저에서 접속
http://localhost:8000/main.html
```

---

## 🌱 회고 / 배운 점

> ✍️ **작성 영역** — 아래는 예시입니다. 본인의 경험에 맞게 수정해 주세요.

- 프레임워크 없이 **DOM 조작과 이벤트 흐름**을 직접 설계하며 자바스크립트 기본기를 다졌습니다.
- 데이터(`JSON`)와 로직을 분리하면 **콘텐츠 확장이 얼마나 쉬워지는지** 체감했습니다.
- `fetch`의 비동기 처리와 `file://` 환경에서의 제약을 이해하게 되었습니다.

---

## 📜 라이선스

> ✍️ **작성 영역** — 필요 시 라이선스를 명시하세요. (예: MIT)