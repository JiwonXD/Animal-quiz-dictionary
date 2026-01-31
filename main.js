document.addEventListener('DOMContentLoaded', () => {
    const imgEl = document.getElementById('animal-image');
    const inputEl = document.getElementById('answer-input');
    const checkBtn = document.getElementById('check-btn');
    const resultEl = document.getElementById('result-message');
    const detailSec = document.getElementById('detail-section');

    // 탭 관련 요소
    const tabQuiz = document.getElementById('tab-quiz');
    const tabCatalog = document.getElementById('tab-catalog');
    const quizPanel = document.getElementById('quiz-panel');
    const catalogPanel = document.getElementById('catalog-panel');
    const cardGrid = document.getElementById('card-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let animals = [];
    let current = null;
    let answerCorrect = false;
    let lastIndex = -1;

    function switchTab(tab) {
        if (tab === 'quiz') {
            tabQuiz.classList.add('active');
            tabCatalog.classList.remove('active');
            quizPanel.classList.remove('hidden');
            catalogPanel.classList.add('hidden');
        } else {
            tabCatalog.classList.add('active');
            tabQuiz.classList.remove('active');
            catalogPanel.classList.remove('hidden');
            quizPanel.classList.add('hidden');
        }
    }

    function renderCatalog(list) {
        if (!cardGrid) return;
        cardGrid.innerHTML = list.map(a => `
            <div class="animal-card" data-name="${a.name}">
                <img src="${a.image}" alt="${a.name}">
                <div class="card-body">
                    <div class="name">${a.name}</div>
                    <div class="mini">${a.category}</div>
                </div>
                <div class="tooltip">
                    <strong>${a.name}</strong><br>${a.scientific || ''}<br>${a.habitat || ''}
                </div>
            </div>
        `).join('');
    }

    function filterAnimals(category) {
        const list = category === 'all'
            ? animals
            : animals.filter(a => a.category === category);
        renderCatalog(list);
        filterBtns.forEach(b => b.classList.toggle('active', b.dataset.category === category));
    }

    function showDetail(animal) {
        document.getElementById('detail-name').textContent = animal.name || '';
        document.getElementById('detail-scientific').textContent = animal.scientific || '';
        document.getElementById('detail-category').textContent = animal.category || '';
        document.getElementById('detail-habitat').textContent = animal.habitat || '';
        document.getElementById('detail-desc').textContent = animal.desc || '';
        detailSec.classList.remove('hidden');
    }

    function newQuiz() {
        if (!animals.length) return;
        let idx;
        if (animals.length === 1) idx = 0;
        else {
            do { idx = Math.floor(Math.random() * animals.length); }
            while (idx === lastIndex);
        }
        lastIndex = idx;

        current = animals[idx];
        imgEl.src = current.image;
        imgEl.alt = current.name;
        inputEl.value = '';
        inputEl.focus();
        resultEl.textContent = '';
        resultEl.className = 'result-message';
        detailSec.classList.add('hidden');
        answerCorrect = false;
    }

    function checkAnswer() {
        const val = inputEl.value.trim();
        if (answerCorrect) {
            newQuiz();
            return;
        }
        if (!val) return;
        if (current && val === current.name) {
            resultEl.textContent = '정답입니다!';
            resultEl.className = 'result-message correct';
            showDetail(current);
            answerCorrect = true;
        } else {
            resultEl.textContent = '오답입니다!';
            resultEl.className = 'result-message wrong';
        }
    }

    // 이벤트
    tabQuiz?.addEventListener('click', () => switchTab('quiz'));
    tabCatalog?.addEventListener('click', () => {
        switchTab('catalog');
        renderCatalog(animals);
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => filterAnimals(btn.dataset.category));
    });

    inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
    checkBtn.addEventListener('click', checkAnswer);

    // 데이터 로드
    async function loadAnimalData() {
        try {
            const res = await fetch('animals.json');
            if (!res.ok) throw new Error(res.status);
            animals = await res.json();
            renderCatalog(animals); // 초기 도감 목록 준비
            newQuiz();              // 첫 퀴즈 표시
        } catch (e) {
            resultEl.textContent = '데이터 로드 실패';
            console.error(e);
        }
    }

    switchTab('quiz');
    loadAnimalData();
});