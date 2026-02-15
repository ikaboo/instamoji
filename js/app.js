// Instamoji — Main Application
// Uses globals: EMOJIS, UI, LANG_CODES, LANGUAGES, CATEGORY_LIST (from data/*.js)

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// --- STATE ---
let currentLang = localStorage.getItem('instamoji-lang') || 'en';
let currentGameData = [];
let currentIndex = 0;
let swipeCount = 0;
let starsCollected = 0;

// --- SOUNDS ---

function playKnock() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.1);
    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(t); osc.stop(t + 0.1);
}

function playTwinkle() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const t = audioCtx.currentTime;

    // First sparkle — rising sine
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(880, t);
    osc1.frequency.exponentialRampToValueAtTime(1760, t + 0.12);
    gain1.gain.setValueAtTime(0.25, t);
    gain1.gain.exponentialRampToValueAtTime(0.01, t + 0.15);
    osc1.connect(gain1); gain1.connect(audioCtx.destination);
    osc1.start(t); osc1.stop(t + 0.15);

    // Second sparkle — higher, delayed
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1320, t + 0.08);
    osc2.frequency.exponentialRampToValueAtTime(2640, t + 0.22);
    gain2.gain.setValueAtTime(0, t);
    gain2.gain.linearRampToValueAtTime(0.2, t + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.01, t + 0.25);
    osc2.connect(gain2); gain2.connect(audioCtx.destination);
    osc2.start(t); osc2.stop(t + 0.25);
}

// --- TTS ---

function speak(text, lang) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = lang || LANG_CODES[currentLang];
    msg.pitch = 1.3;
    window.speechSynthesis.speak(msg);
}

function speakCurrent() {
    const item = currentGameData[currentIndex];
    speak(item.voice);
}

// --- DATA HELPERS ---

function getGameItems(categoryId) {
    // Alphabet: language-specific arrays
    if (categoryId === 'alphabet') {
        const items = EMOJIS.alphabet[currentLang];
        return items.map(a => ({
            type: 'text', content: a.content, text: a.content, voice: a.voice
        }));
    }

    // Numbers: universal digits, translated names
    if (categoryId === 'numbers') {
        return EMOJIS.numbers.map(n => ({
            type: 'text', content: n.content, text: n[currentLang], voice: n[currentLang]
        }));
    }

    // Emoji categories
    const items = EMOJIS[categoryId];
    if (!items) return [];
    return items.map(item => ({
        type: 'emoji', content: item.emoji, text: item[currentLang], voice: item[currentLang]
    }));
}

function getAllEmojiItems() {
    const cats = ['animals', 'vehicles', 'food', 'feelings', 'shapes', 'colors'];
    let all = [];
    cats.forEach(cat => { all = all.concat(getGameItems(cat)); });
    return all;
}

// --- SHUFFLING ---

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// --- SCREENS ---

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function goHome() {
    document.getElementById('star-bar').style.display = 'none';
    showScreen('menu-screen');
}

// --- LANGUAGE ---

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('instamoji-lang', lang);
    renderLangPicker();
    renderMenu();

    // Update button texts if in game/list screens
    document.getElementById('home-btn').textContent = UI[lang].home;
    document.getElementById('back-btn').textContent = UI[lang].back;
}

function renderLangPicker() {
    const picker = document.getElementById('lang-picker');
    picker.innerHTML = '';
    LANGUAGES.forEach(l => {
        const btn = document.createElement('button');
        btn.className = 'lang-btn' + (l.code === currentLang ? ' active' : '');
        btn.textContent = l.flag;
        btn.addEventListener('click', () => setLang(l.code));
        picker.appendChild(btn);
    });
}

// --- MENU ---

function renderMenu() {
    const grid = document.getElementById('menu-grid');
    const ui = UI[currentLang];
    grid.innerHTML = '';

    CATEGORY_LIST.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-card';
        const icon = cat.icon || ui.alphabetIcon;
        btn.innerHTML = '<span>' + icon + '</span>' + ui.categories[cat.id];
        btn.addEventListener('click', () => startGame(cat.id));
        grid.appendChild(btn);
    });

    // Random Mix button
    const randomBtn = document.createElement('button');
    randomBtn.className = 'cat-card random-btn';
    randomBtn.innerHTML = '<span>\u{1F3B2}</span>' + ui.categories.random;
    randomBtn.addEventListener('click', () => startGame('random'));
    grid.appendChild(randomBtn);

    // All Emojis button
    const allBtn = document.createElement('button');
    allBtn.className = 'cat-card all-btn';
    allBtn.innerHTML = '<span>\u{1F973}</span>' + ui.categories.all;
    allBtn.addEventListener('click', showAllEmojis);
    grid.appendChild(allBtn);
}

// --- GAME ---

function startGame(cat) {
    let items;

    if (cat === 'random') {
        const cats = ['alphabet', 'numbers', 'food', 'colors', 'shapes', 'animals', 'vehicles', 'feelings'];
        items = [];
        cats.forEach(c => { items = items.concat(getGameItems(c)); });
        items = shuffleArray(items);
        // Start with an emoji, not text
        while (items.length > 0 && items[0].type === 'text') {
            items = shuffleArray(items);
        }
    } else if (cat === 'vehicles') {
        const all = getGameItems('vehicles');
        const fire = all.find(i => i.content === '\u{1F692}');
        const train = all.find(i => i.content === '\u{1F682}');
        const others = all.filter(i => i.content !== '\u{1F692}' && i.content !== '\u{1F682}');
        items = [fire, train, ...shuffleArray(others)].filter(Boolean);
    } else {
        items = shuffleArray(getGameItems(cat));
    }

    currentGameData = items;
    currentIndex = 0;
    swipeCount = 0;
    starsCollected = 0;

    const starBar = document.getElementById('star-bar');
    starBar.innerHTML = '';
    starBar.style.display = 'flex';

    showScreen('game-screen');
    updateScreen();
}

function showAllEmojis() {
    const list = document.getElementById('full-list');
    list.innerHTML = '';
    const all = getAllEmojiItems();

    all.forEach(item => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.textContent = item.content;
        div.addEventListener('click', () => {
            playKnock();
            speak(item.voice);
        });
        list.appendChild(div);
    });

    showScreen('all-emojis-screen');
    document.getElementById('star-bar').style.display = 'none';
}

// --- CARD DISPLAY ---

function updateScreen(direction) {
    const card = document.getElementById('game-card');
    const visual = document.getElementById('visual-display');
    const desc = document.getElementById('description');
    const item = currentGameData[currentIndex];

    const renderItem = () => {
        visual.innerHTML = item.content;
        visual.className = item.type === 'emoji' ? 'system-emoji' : 'text-mode';
        desc.textContent = item.text;
    };

    if (direction) {
        card.classList.add(direction === 'next' ? 'slide-out-left' : 'slide-out-right');
        setTimeout(() => {
            renderItem();
            card.classList.remove('slide-out-left', 'slide-out-right');
            card.style.transition = 'none';
            card.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
            setTimeout(() => {
                card.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                card.style.transform = 'translateX(0)';
            }, 20);
        }, 300);
    } else {
        renderItem();
    }
}

function nextCard() {
    currentIndex = (currentIndex + 1) % currentGameData.length;
    swipeCount++;
    updateScreen('next');

    if (swipeCount % 5 === 0) {
        triggerMilestone();
    } else {
        setTimeout(speakCurrent, 300);
    }
}

function prevCard() {
    currentIndex = (currentIndex - 1 + currentGameData.length) % currentGameData.length;
    updateScreen('prev');
    setTimeout(speakCurrent, 300);
}

// --- INTERACTION (tap emoji) ---

function handleInteraction() {
    playKnock();
    speakCurrent();

    const item = currentGameData[currentIndex];
    const visual = document.getElementById('visual-display');

    if (item.type === 'emoji' && !visual.querySelector('img')) {
        const hex = Array.from(item.content)
            .map(c => c.codePointAt(0))
            .filter(cp => cp !== 0xfe0f)
            .map(cp => cp.toString(16))
            .join('_');

        const animUrl = 'https://fonts.gstatic.com/s/e/notoemoji/latest/' + hex + '/512.gif';
        const staticUrl = 'https://raw.githubusercontent.com/googlefonts/noto-emoji/main/png/512/emoji_u' + hex + '.png';

        const img = new Image();
        img.src = animUrl;
        img.alt = item.text;

        img.onload = function() {
            visual.innerHTML = '';
            visual.appendChild(img);
            visual.className = '';
        };

        img.onerror = function() {
            this.onerror = null;
            this.src = staticUrl;
        };
    } else if (visual.querySelector('img')) {
        // Restart animation
        const img = visual.querySelector('img');
        const src = img.src;
        img.src = '';
        img.src = src;
    }
}

// --- MILESTONES (Stars) ---

function triggerMilestone() {
    starsCollected++;
    const starBar = document.getElementById('star-bar');

    if (starsCollected > 8) {
        starsCollected = 1;
        starBar.innerHTML = '';
    }

    const starSpan = document.createElement('span');
    starSpan.textContent = '\u{2B50}';
    starSpan.className = 'star-pop';
    starSpan.addEventListener('click', () => {
        playTwinkle();
        starSpan.style.transform = 'scale(1.5) rotate(20deg)';
        setTimeout(() => { starSpan.style.transform = 'scale(1) rotate(0deg)'; }, 200);
    });
    starBar.appendChild(starSpan);

    confetti({
        particleCount: 120, spread: 80, origin: { y: 0.5 },
        shapes: ['star'],
        colors: ['#5271FF', '#FF5757', '#A855F7', '#FFFFFF'],
        scalar: 2
    });

    speak(UI[currentLang].greatJob);
}

// --- SWIPE (Physics-based, card follows finger) ---

let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let dragStartTime = 0;
let dragCurrentX = 0;
let dragLocked = false;
let isSwiping = false;

const VELOCITY_THRESHOLD = 0.3;    // px/ms to trigger fling
const DISTANCE_FRACTION = 0.25;    // fraction of viewport to trigger fling
const TAP_THRESHOLD = 12;          // px movement below this = tap

function onSwipeStart(e) {
    if (!document.getElementById('game-screen').classList.contains('active')) return;
    if (e.target.closest('.nav-btn') || e.target.closest('.small-btn') || e.target.closest('.star-pop')) return;

    const touch = e.changedTouches[0];
    isDragging = true;
    isSwiping = false;
    dragLocked = false;
    dragStartX = touch.clientX;
    dragStartY = touch.clientY;
    dragCurrentX = 0;
    dragStartTime = Date.now();

    const card = document.getElementById('game-card');
    card.style.transition = 'none';
}

function onSwipeMove(e) {
    if (!isDragging) return;

    const touch = e.changedTouches[0];
    const dx = touch.clientX - dragStartX;
    const dy = touch.clientY - dragStartY;

    // Lock direction after initial movement
    if (!dragLocked && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
        if (Math.abs(dy) > Math.abs(dx)) {
            isDragging = false;
            return;
        }
        dragLocked = true;
    }

    if (!dragLocked) return;

    isSwiping = true;
    dragCurrentX = dx;

    const card = document.getElementById('game-card');
    const rotation = Math.max(-15, Math.min(15, dx * 0.06));
    card.style.transform = 'translateX(' + dx + 'px) rotate(' + rotation + 'deg)';

    e.preventDefault();
}

function onSwipeEnd(e) {
    if (!isDragging) return;
    isDragging = false;

    const dx = dragCurrentX;
    const dt = Math.max(1, Date.now() - dragStartTime);
    const velocity = Math.abs(dx) / dt;
    const vw = window.innerWidth;
    const card = document.getElementById('game-card');

    // Tap: barely moved
    if (Math.abs(dx) < TAP_THRESHOLD) {
        card.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = 'translateX(0) rotate(0deg)';

        // If tapped on the emoji area, trigger interaction
        const touch = e.changedTouches[0];
        const el = document.elementFromPoint(touch.clientX, touch.clientY);
        if (el && (el.id === 'visual-display' || el.closest('#visual-display'))) {
            handleInteraction();
        }
        isSwiping = false;
        return;
    }

    const shouldFling = velocity > VELOCITY_THRESHOLD || Math.abs(dx) > vw * DISTANCE_FRACTION;

    if (shouldFling) {
        const dir = dx > 0 ? 1 : -1;
        const exitX = dir * (vw + 100);

        // Fling off
        card.style.transition = 'transform 0.2s ease-out';
        card.style.transform = 'translateX(' + exitX + 'px) rotate(' + (dir * 20) + 'deg)';

        setTimeout(function() {
            // Update index
            if (dir < 0) {
                currentIndex = (currentIndex + 1) % currentGameData.length;
                swipeCount++;
            } else {
                currentIndex = (currentIndex - 1 + currentGameData.length) % currentGameData.length;
            }

            // Render new content instantly
            var visual = document.getElementById('visual-display');
            var desc = document.getElementById('description');
            var item = currentGameData[currentIndex];
            visual.innerHTML = item.content;
            visual.className = item.type === 'emoji' ? 'system-emoji' : 'text-mode';
            desc.textContent = item.text;

            // Enter from opposite side
            card.style.transition = 'none';
            card.style.transform = 'translateX(' + (-dir * vw * 0.6) + 'px) rotate(0deg)';

            requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    card.style.transition = 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    card.style.transform = 'translateX(0) rotate(0deg)';
                });
            });

            // Milestone or speak
            if (dir < 0 && swipeCount % 5 === 0) {
                triggerMilestone();
            } else {
                speakCurrent();
            }
        }, 200);
    } else {
        // Spring back
        card.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = 'translateX(0) rotate(0deg)';
    }

    isSwiping = false;
}

document.addEventListener('touchstart', onSwipeStart, { passive: true });
document.addEventListener('touchmove', onSwipeMove, { passive: false });
document.addEventListener('touchend', onSwipeEnd);

// --- INIT ---

function init() {
    renderLangPicker();
    renderMenu();

    // Wire up static buttons
    document.getElementById('logo').addEventListener('click', goHome);
    document.getElementById('home-btn').addEventListener('click', goHome);
    document.getElementById('back-btn').addEventListener('click', goHome);
    document.getElementById('prev-btn').addEventListener('click', prevCard);
    document.getElementById('next-btn').addEventListener('click', nextCard);

    // Desktop: mousedown on emoji triggers interaction
    // Touch: handled by swipe system (tap detection in onSwipeEnd)
    const visual = document.getElementById('visual-display');
    visual.addEventListener('mousedown', handleInteraction);

    // Set initial button texts
    document.getElementById('home-btn').textContent = UI[currentLang].home;
    document.getElementById('back-btn').textContent = UI[currentLang].back;
}

init();
