# WEBSITE Project

> 🤖 Этот проект был автоматически сгенерирован с помощью AI Constructor Bot

## 📝 Описание

Бургер-меню:
- Position: absolute, right: 20px, top: 50%, transform: translateY(-50%)
- Width: 32px, Height: 24px
- Три линии:
  - width: 100%, height: 2px, background: #000000
  - transition: all 0.3s ease
- Анимация при открытии:
  - Верхняя линия: transform: rotate(45deg) translateY(10px)
  - Средняя линия: opacity: 0
  - Нижняя линия: transform: rotate(-45deg) translateY(-10px)

Мобильное меню (открытое состояние):
- Position: fixed
- Top: 64px, Left: 0, Width: 100%, Height: calc(100vh - 64px)
- Background: rgba(255, 255, 255, 0.98), backdrop-filter: blur(20px)
- Display: flex, flex-direction: column, align-items: center, justify-content: center
- Gap: 32px
- Анимация появления: 
  - От opacity: 0, transform: translateY(-20px) 
  - К opacity: 1, transform: translateY(0)
  - Duration: 0.4s, Easing: ease-out

---

## БЛОК 2: HERO SECTION (ГЛАВНАЯ СЕКЦИЯ)

### Структура контейнера:
- Padding: 160px 48px 96px (Desktop), учитывая fixed header
- Max-width: 1440px
- Margin: 0 auto
- Display: grid
- Grid-template-columns: 1fr 1fr (две равные колонки)
- Gap: 64px
- Align-items: center
- Min-height: calc(100vh - 80px)

### ПОДБЛОК 2.1: Текстовый блок (левая колонка)

Контейнер текста:
- Display: flex
- Flex-direction: column
- Gap: 32px

Элемент 1: Имя "John Taylor"
- Font-size: 20px
- Font-weight: 500
- Color: #666666
- Letter-spacing: 0.05em
- Text-transform: uppercase
- Margin-bottom: 16px
- Анимация появления:
  - Initial: opacity: 0, transform: translateY(20px)
  - Animate: opacity: 1, transform: translateY(0)
  - Delay: 0s, Duration: 0.8s

Элемент 2: Заголовок H1 "Digital Designer"
- Font-size: 96px (Desktop), 48px (Mobile)
- Font-weight: 700
- Line-height: 1.05
- Letter-spacing: -0.03em
- Color: #000000
- Margin: 0
- Анимация появления:
  - Initial: opacity: 0, transform: translateY(30px)
  - Animate: opacity: 1, transform: translateY(0)
  - Delay: 0.1s, Duration: 0.8s

Элемент 3: Подзаголовок (описание)
- Font-size: 20px (Desktop), 18px (Mobile)
- Font-weight: 400
- Line-height: 1.6
- Color: #333333
- Max-width: 540px
- Margin-top: 24px
- Анимация появления:
  - Initial: opacity: 0, transform: translateY(20px)
  - Animate: opacity: 1, transform: translateY(0)
  - Delay: 0.2s, Duration: 0.8s

### ПОДБЛОК 2.2: Изображение (правая колонка)

Контейнер изображения:
- Width: 100%
- Height: auto
- Aspect-ratio: 3/4 (портретная ориентация)
- Position: relative
- Overflow: hidden
- Border-radius: 8px (мягкие углы)

Изображение:
- Width: 100%
- Height: 100%
- Object-fit: cover
- Object-position: center
- Filter: grayscale(0%), brightness(100%)

Lazy loading эффект (Blur placeholder):
- Initial state: 
  - Blur placeholder загружен: filter: blur(20px), transform: scale(1.05)
- After full load:
  - filter: blur(0), transform: scale(1)
  - transition: all 0.6s ease-out

Hover эффект на изображение:
- transform: scale(1.02)
- transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)

Анимация появления контейнера:
- Initial: opacity: 0, transform: translateX(40px)
- Animate: opacity: 1, transform: translateX(0)
- Delay: 0.3s, Duration: 1s

### МОБИЛЬНАЯ ВЕРСИЯ HERO:
- Grid-template-columns: 1fr (одна колонка)
- Gap: 48px
- Padding: 120px 20px 64px
- Порядок: сначала текст, потом изображение
- H1 уменьшается до 48px
- Изображение: aspect-ratio: 4/5

---

## БЛОК 3: ABOUT SECTION (О КОМПАНИИ/ДИЗАЙНЕРЕ)

### Структура контейнера:
- Padding: 128px 48px (Desktop)
- Background: #F9F9F9 (светлый серый фон для контраста)
- Max-width: 1440px
- Margin: 0 auto
- Display: grid
- Grid-template-columns: 5fr 7fr (левая колонка уже, правая шире)
- Gap: 80px
- Align-items: center

### ПОДБЛОК 3.1: Изображение (левая колонка)

Контейнер:
- Width: 100%
- Aspect-ratio: 3/4
- Position: relative
- Overflow: hidden
- Border-radius: 8px

Изображение (черно-белые цветы с glass effect):
- Width: 100%
- Height: 100%
- Object-fit: cover
- Filter: grayscale(100%) (черно-белое)
- Lazy loading: те же принципы что в Hero

# СУПЕР ДЕТАЛЬНЫЙ ПРОМПТ ДЛЯ ВОССОЗДАНИЯ САЙТА BALANCE

## ОБЩИЕ ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ

### Цветовая палитра:
- Основной фон: #FFFFFF (чистый белый)
- Вторичный фон: #F9F9F9 (очень светлый серый для секций)
- Текст основной: #000000 (чистый черный)
- Текст вторичный: #333333 (темно-серый)
- Текст приглушенный: #666666 (средне-серый для меток)
- Границы/линии: #E5E5E5 (светло-серый)
- Hover состояния: #000000 с opacity 0.7

### Типографика (шрифт: Inter или аналогичный современный sans-serif):

Размеры шрифтов:
- H1 (главный заголовок "Digital Designer"): 
  - Desktop: 96px, font-weight: 700 (Bold), line-height: 1.1, letter-spacing: -0.02em
- H2 (названия проектов): 
  - Desktop: 48px, font-weight: 600 (Semi-Bold), line-height: 1.2, letter-spacing: -0.01em
- H3 (подзаголовки секций): 
  - Desktop: 32px, font-weight: 600, line-height: 1.3
- Основной текст: 
  - Desktop: 18px, font-weight: 400 (Regular), line-height: 1.6
- Навигация: 
  - Desktop: 16px, font-weight: 500 (Medium), line-height: 1.5
- Мелкий текст (метки): 
  - Desktop: 14px, font-weight: 400, line-height: 1.4, часто italic
- Имя "John Taylor": 
  - Desktop: 20px, font-weight: 500, line-height: 1.4, letter-spacing: 0.02em

### Spacing System (8px grid):
- Extra Small: 8px
- Small: 16px
- Medium: 24px
- Large: 32px
- XL: 48px
- XXL: 64px
- XXXL: 96px
- Mega: 128px

### Breakpoints:
- Mobile: 0-767px
- Tablet: 768px-1023px
- Desktop Small: 1024px-1439px
- Desktop Large: 1440px+

### Анимации (общие):
- Transition duration: 0.3s для hover эффектов
- Easing: cubic-bezier(0.4, 0, 0.2, 1) (ease-out)
- Scroll animations: появление элементов с opacity: 0 → 1 и transform: translateY(20px) → translateY(0)
- Duration scroll animations: 0.6s
- Delay между элементами: 0.1s

---

## БЛОК 1: HEADER (ШАПКА САЙТА)

### Структура и позиционирование:
- Position: fixed (прикреплен к верху страницы)
- Width: 100%
- Height: 80px
- Background: rgba(255, 255, 255, 0.95) с backdrop-filter: blur(10px)
- Border-bottom: 1px solid rgba(0, 0, 0, 0.05)
- Z-index: 1000
- Padding: 0 48px (Desktop), 0 24px (Mobile)

### Layout (Flexbox):
Display: flex
Justify-content: space-between
Align-items: center

### ПОДБЛОК 1.1: Логотип (левая часть)
- Размер контейнера: 200px × 60px
- SVG размер: примерно 160px × 40px
- Цвет SVG: #000000
- Hover эффект: 
  - transform: scale(1.02)
  - transition: transform 0.3s ease
- Cursor: pointer
- Alt текст: "John Taylor - Logo"

### ПОДБЛОК 1.2: Навигация (центр)
- Display: flex
- Gap: 40px
- Align-items: center

Каждая ссылка навигации:
- Font-size: 16px
- Font-weight: 500
- Color: #000000
- Text-decoration: none
- Padding: 8px 0
- Position: relative

Hover эффект навигации:
- Подчеркивание снизу появляется слева направо
- Псевдоэлемент ::after:
  
  content: ''
  position: absolute
  bottom: 0
  left: 0
  width: 0
  height: 2px
  background: #000000
  transition: width 0.3s ease
  
- При hover: width: 100%

Active (текущая страница):
- Font-weight: 600
- Подчеркивание присутствует всегда (width: 100%)

### ПОДБЛОК 1.3: Контактная информация (правая часть)
- Display: flex
- Flex-direction: column
- Gap: 12px
- Align-items: flex-end

Блок Inquiries:
- Метка "(Inquiries)": 
  - font-size: 14px
  - font-style: italic
  - color: #666666
  - margin-bottom: 4px
- Email "john[at]jt-studio[dot]com":
  - font-size: 15px
  - font-weight: 400
  - color: #000000
  - Hover: color: #666666, transition: color 0.3s

Блок Phone:
- Метка "(Phone)": те же стили что Inquiries
- Телефон "+491234 56789":
  - font-size: 15px
  - font-weight: 400
  - color: #000000
  - text-decoration: underline
  - text-decoration-color: transparent
  - Hover: text-decoration-color: #000000, transition: 0.3s

### МОБИЛЬНАЯ ВЕРСИЯ HEADER:
- Height: 64px
- Padding: 0 20px
- Контактная информация скрыта
- Навигация скрыта, заменена на бургер-меню

Анимация появления (scroll trigger):
- Initial: opacity: 0, transform: translateX(-40px)
- Animate: opacity: 1, transform: translateX(0)
- Trigger: когда элемент попадает во viewport на 30%
- Duration: 0.8s

### ПОДБЛОК 3.2: Текстовый блок (правая колонка)

Контейнер:
- Display: flex
- Flex-direction: column
- Gap: 48px

Элемент 1: Основной текст (paragraph)
- Font-size: 24px (крупнее обычного)
- Font-weight: 400
- Line-height: 1.6
- Color: #000000
- Margin-bottom: 32px
- Текст: "I help brands craft meaningful stories..."
- Анимация: появление с translateY(20px), delay 0s

Элемент 2: Блок "From A to Z"
- Margin-top: 24px

Sub-элемент - заголовок:
- Font-size: 20px
- Font-weight: 600
- Color: #000000
- Margin-bottom: 12px
- Анимация: появление, delay 0.1s

Sub-элемент - текст:
- Font-size: 16px
- Font-weight: 400
- Line-height: 1.6
- Color: #333333
- Анимация: появление, delay 0.2s

Элемент 3: Блок "Solo or Team"
- Идентичная структура как "From A to Z"
- Анимация: появление, delay 0.15s и 0.25s соответственно

Элемент 4: CTA кнопка "More about me"

Структура кнопки:
- Display: inline-flex
- Align-items: center
- Gap: 12px
- Padding: 16px 32px
- Background: #000000
- Color: #FFFFFF
- Font-size: 16px
- Font-weight: 500
- Border: none
- Border-radius: 4px
- Text-decoration: none
- Cursor: pointer
- Position: relative
- Overflow: hidden
- Margin-top: 16px

Стрелка (→):
- Font-size: 18px
- Transition: transform 0.3s ease

Hover эффект кнопки:
Background: #000000
Стрелка: transform: translateX(4px)
Вся кнопка: transform: translateY(-2px)
Box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15)
Transition: all 0.3s ease

Псевдоэлемент ::before для hover эффекта:
content: ''
position: absolute
top: 0
left: -100%
width: 100%
height: 100%
background: rgba(255, 255, 255, 0.1)
transition: left 0.3s ease
При hover: left: 100% (эффект сияния слева направо)

Анимация появления кнопки:
- Initial: opacity: 0, transform: translateY(20px)
- Animate: opacity: 1, transform: translateY(0)
- Delay: 0.3s, Duration: 0.6s

### МОБИЛЬНАЯ ВЕРСИЯ ABOUT:
- Grid-template-columns: 1fr
- Gap: 48px
- Padding: 80px 20px
- Порядок: сначала изображение, потом текст
- Основной текст уменьшается до 20px

---

## БЛОК 4: PORTFOLIO/WORK SECTION (ПРОЕКТЫ)

### Структура контейнера:
- Padding: 128px 48px (Desktop)
- Background: #FFFFFF
- Max-width: 1440px
- Margin: 0 auto

### Заголовок секции (если есть):
- Font-size: 14px
- Font-weight: 500
- Color: #666666
- Text-transform: uppercase
- Letter-spacing: 0.1em
- Margin-bottom: 64px
- Text-align: center

### ПОДБЛОК 4.1: Сетка проектов

Grid контейнер:
- Display: grid
- Grid-template-columns: repeat(3, 1fr) (Desktop - 3 колонки)
- Gap: 48px
- Margin-bottom: 64px

### Карточка проекта (единая структура для всех трех):

Контейнер карточки:
- Position: relative
- Display: flex
- Flex-direction: column
- Background: #FFFFFF
- Border-radius: 8px
- Overflow: hidden
- Transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
- Cursor: pointer

Hover эффект контейнера:
transform: translateY(-8px)
box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12)

Контейнер изображения:
- Width: 100%
- Aspect-ratio: 16/10 (широкоформатное)
- Position: relative
- Overflow: hidden
- Background: #F5F5F5 (пока грузится изображение)

Изображение проекта:
- Width: 100%
- Height: 100%
- Object-fit: cover
- Object-position: center
- Transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)

Hover эффект изображения:
transform: scale(1.05)

Blur placeholder (lazy loading):
- Initial: filter: blur(20px), opacity: 0.6
- Loaded: filter: blur(0), opacity: 1
- Transition: 0.6s ease-out

Текстовый блок (под изображением):
- Padding: 32px 24px
- Background: #FFFFFF

H2 заголовок проекта:
- Font-size: 32px (Desktop)
- Font-weight: 600
- Line-height: 1.2
- Color: #000000
- Margin: 0
- Letter-spacing: -0.01em

Эффект дублированного текста (техника):
Заголовок повторяется дважды для эффекта глубины:
<h2>
  <span class="text-front">Apex Architects</span>
  <span class="text-back">Apex Architects</span>
</h2>

CSS:
h2 { position: relative }
.text-front {
  position: relative
  z-index: 2
}
.text-back {
  position: absolute
  left: 0
  top: 0
  z-index: 1
  opacity: 0.05
  transform: translate(2px, 2px)
}

Анимация появления карточек (stagger animation):
- Карточка 1: delay 0s
- Карточка 2: delay 0.15s
- Карточка 3: delay 0.3s
- Initial: opacity: 0, transform: translateY(40px)
- Animate: opacity: 1, transform: translateY(0)
- Duration: 0.8s
- Trigger: при scroll на 20% viewport

### ПОДБЛОК 4.2: Описания отдельных проектов

Проект 1: "Apex Architects"
- Изображение: Архитектурные элементы, бетон, современная архитектура
- Цветовая гамма изображения: серые и бежевые тона
- Название: "Apex Architects"

Проект 2: "Dionysos Resorts"
- Изображение: Курортная тематика, возможно интерьер или пейзаж
- Цветовая гамма изображения: теплые тона, золотистые оттенки
- Название: "Dionysos Resorts"

Проект 3: "Argus Eyewear"
- Изображение: Очки, аксессуары, модная фотография
- Цветовая гамма изображения: контрастные цвета
- Название: "Argus Eyewear"

### ПОДБЛОК 4.3: CTA "All work"

Контейнер:
- Text-align: center
- Margin-top: 64px

Ссылка "All work (6)":
- Display: inline-flex
- Align-items: center
- Gap: 12px
- Font-size: 18px
- Font-weight: 500
- Color: #000000
- Text-decoration: none
- Position: relative
- Padding: 12px 0

Число "(6)":
- Color: #666666
- Font-weight: 400

Стрелка:
- Font-size: 20px
- Transition: transform 0.3s ease

Подчеркивание (псевдоэлемент):
::after {
  content: ''
  position: absolute
  bottom: 8px
  left: 0
  width: 0
  height: 2px
  background: #000000
  transition: width 0.4s ease
}

Hover эффект:
- Стрелка: transform: translateX(6px)
- Подчеркивание: width: calc(100% - 32px) (не включает стрелку)

### МОБИЛЬНАЯ ВЕРСИЯ PORTFOLIO:
- Grid-template-columns: 1fr (одна колонка)
- Gap: 32px
- Padding: 80px 20px
- H2 уменьшается до 24px
- Карточки появляются без задержки

---

## БЛОК 5: CONTACT CTA SECTION (ПРИЗЫВ К ДЕЙСТВИЮ)

### Структура контейнера:
- Padding: 96px 48px (Desktop)
- Background: #F9F9F9
- Max-width: 1440px
- Margin: 0 auto
- Position: relative
- Display: flex
- Align-items: center
- Min-height: 500px

### Layout:
- Grid-template-columns: 7fr 5fr (текст слева больше, изображение справа меньше)
- Gap: 64px

### ПОДБЛОК 5.1: Текстовый блок (левая часть)

Контейнер:
- Display: flex
- Flex-direction: column
- Gap: 32px
- Z-index: 2
- Position: relative

Метка "(Contact)":
- Font-size: 14px
- Font-weight: 400
- Font-style: italic
- Color: #666666
- Margin-bottom: 16px
- Анимация: fade in + translateY, delay 0s

H2 заголовок:
- Font-size: 48px (Desktop), 32px (Mobile)
- Font-weight: 600
- Line-height: 1.2
- Color: #000000
- Max-width: 700px
- Letter-spacing: -0.01em
- Текст: "Global presence, global recognition — Contact me to take your next step."
- Анимация: fade in + translateY, delay 0.1s

Длинное тире (—):
- Использовать настоящий em-dash: &mdash; или —

CTA кнопка "Contact me":

Структура идентична кнопке "More about me" из About секции, с небольшими отличиями:
- Padding: 18px 36px (чуть крупнее)
- Font-size: 18px
- Margin-top: 24px

Все hover эффекты и анимации - те же самые.

Анимация появления кнопки:
- Delay: 0.2s

### ПОДБЛОК 5.2: Изображение (правая часть)

Контейнер:
- Width: 100%
- Aspect-ratio: 3/4
- Position: relative
- Overflow: hidden
- Border-radius: 8px
- Z-index: 1

Изображение (затылок с дредами):
- Width: 100%
- Height: 100%
- Object-fit: cover
- Object-position: center

Анимация появления:
- Initial: opacity: 0, transform: translateX(40px) scale(0.95)
- Animate: opacity: 1, transform: translateX(0) scale(1)
- Delay: 0.3s
- Duration: 1s

Параллакс эффект при скролле (опционально):
transform: translateY(calc(scrollPosition * 0.1))

### МОБИЛЬНАЯ ВЕРСИЯ CONTACT CTA:
- Grid-template-columns: 1fr
- Padding: 64px 20px
- Порядок: сначала текст, потом изображение
- H2 уменьшается до 28px
- Изображение: aspect-ratio: 1/1 (квадратное)

---

## БЛОК 6: FOOTER (ПОДВАЛ САЙТА)

.stagger-item (элементы с задержкой):
.stagger-item:nth-child(1) { transition-delay: 0s }
.stagger-item:nth-child(2) { transition-delay: 0.1s }
.stagger-item:nth-child(3) { transition-delay: 0.2s }
.stagger-item:nth-child(4) { transition-delay: 0.3s }
и т.д.

### Применение к блокам:
- Hero текст: .fade-in-up с разными delay
- Hero изображение: .fade-in-right
- About изображение: .fade-in-left
- About текст: .fade-in-up с stagger на параграфы
- Portfolio карточки: .fade-in-up + .stagger-item
- Contact CTA: .fade-in-up для текста, .fade-in-right для изображения

---

## БЛОК 8: ДОПОЛНИТЕЛЬНЫЕ ИНТЕРАКТИВНЫЕ ЭФФЕКТЫ

### Эффект курсора (опционально, для Desktop):

Custom cursor:
- Size: 12px × 12px (small dot)
- Background: #000000
- Border-radius: 50%
- Position: fixed
- Pointer-events: none
- Z-index: 10000
- Mix-blend-mode: difference (инвертирует цвета)

На hover по ссылкам:
- Курсор увеличивается до 32px × 32px
- Transition: all 0.3s ease

### Smooth scroll behavior:
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* учитываем высоту fixed header */
}

### Прелоадер (загрузка страницы):

Overlay:
- Position: fixed
- Top: 0, Left: 0, Width: 100%, Height: 100vh
- Background: #FFFFFF
- Z-index: 9999
- Display: flex
- Justify-content: center
- Align-items: center

Анимация прелоадера:
- Логотип или спиннер вращается
- После загрузки: opacity: 0, затем display: none
- Transition: opacity 0.5s ease

### Parallax эффект на изображениях:

Для больших изображений (Hero, About, Contact):
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax');
  
  parallaxElements.forEach(el => {
    const speed = el.dataset.speed || 0.5;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

---

## БЛОК 9: АДАПТИВНОСТЬ И BREAKPOINTS

### Детальные breakpoints:

Mobile Small (320px - 480px):
- H1: 40px
- H2: 28px
- Padding секций: 60px 16px
- Gap в grid: 24px
- Кнопки: padding: 14px 24px, font-size: 15px

Mobile Large (481px - 767px):
- H1: 48px
- H2: 32px
- Padding секций: 72px 20px
- Gap в grid: 32px

Tablet (768px - 1023px):
- H1: 64px
- H2: 40px
- Padding секций: 96px 32px
- Grid: 2 колонки для портфолио
- Навигация может оставаться в header

Desktop Small (1024px - 1439px):
- H1: 80px
- H2: 44px
- Padding секций: 112px 40px
- Max-width контейнера: 1200px

Desktop Large (1440px+):
- Полные размеры как описано выше
- Max-width контейнера: 1440px

### Media queries:
/* Mobile */
@media (max-width: 767px) {
  /* Одна колонка везде */
  /* Бургер меню */
  /* Уменьшенные шрифты */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  /* 2 колонки в портфолио */
  /* Средние размеры */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Полная раскладка */
  /* Hover эффекты активны */
}

---

## БЛОК 10: ТЕХНИЧЕСКИЕ ДЕТАЛИ И ОПТИМИЗАЦИЯ

### Performance оптимизация:

Изображения:
- Формат: WebP с fallback на JPG
- Lazy loading: loading="lazy" attribute
- Blur placeholder: Low-Quality Image Placeholder (LQIP)
- Responsive images: srcset с разными размерами
- Aspect-ratio boxes для предотвращения layout shift

CSS:
- Критический CSS инлайн в <head>
- Остальной CSS асинхронно
- Минификация
- Удаление неиспользуемых стилей

JavaScript:
- Defer/async загрузка скриптов
- Intersection Observer для ленивой загрузки
- Debounce для scroll events
- Минификация

Шрифты:
- font-display: swap для предотвращения FOIT
- Preload главных шрифтов
- Использовать system fonts как fallback

### Accessibility (A11y):

Семантический HTML:
<header>
<nav>
<main>
  <section aria-label="Hero">
  <section aria-label="About">
  <section aria-label="Portfolio">
  <section aria-label="Contact">
</main>
<footer>

ARIA атрибуты:
- aria-label для иконок без текста
- aria-current="page" для активной страницы в навигации
- role="button" для кликабельных элементов
- aria-hidden="true" для декоративных элементов

### Структура контейнера:
- Padding: 64px 48px 32px (Desktop)
- Background: #000000 (черный фон)
- Color: #FFFFFF (белый текст)
- Max-width: 1440px
- Margin: 0 auto

### Layout (Grid):
- Display: grid
- Grid-template-columns: repeat(4, 1fr) (4 равные колонки на Desktop)
- Gap: 48px
- Margin-bottom: 48px

### ПОДБЛОК 6.1: Контактная информация (колонка 1)

Структура:
- Display: flex
- Flex-direction: column
- Gap: 24px

Блок Inquiries:

Метка "(Inquiries)":
- Font-size: 14px
- Font-style: italic
- Color: #999999
- Margin-bottom: 8px

Email:
- Font-size: 16px
- Font-weight: 400
- Color: #FFFFFF
- Text-decoration: none

Hover эффект email:
color: #CCCCCC
transition: color 0.3s ease

Блок Phone:

Метка "(Phone)":
- Те же стили что "(Inquiries)"

Телефон:
- Font-size: 16px
- Font-weight: 400
- Color: #FFFFFF
- Text-decoration: underline
- Text-decoration-color: rgba(255, 255, 255, 0.3)

Hover эффект телефона:
text-decoration-color: rgba(255, 255, 255, 1)
transition: text-decoration-color 0.3s ease

### ПОДБЛОК 6.2: Навигация (колонка 2)

Заголовок (опционально):
- Может быть скрыт или показан как "Navigation"
- Font-size: 14px
- Font-weight: 600
- Color: #999999
- Text-transform: uppercase
- Letter-spacing: 0.1em
- Margin-bottom: 16px

Список навигации:
- Display: flex
- Flex-direction: column
- Gap: 16px
- List-style: none
- Padding: 0
- Margin: 0

Каждая ссылка:
- Font-size: 16px
- Font-weight: 400
- Color: #FFFFFF
- Text-decoration: none
- Transition: color 0.3s ease, transform 0.3s ease

Hover эффект ссылок:
color: #CCCCCC
transform: translateX(4px)

### ПОДБЛОК 6.3: Социальные сети (колонка 3) - если есть

Структура аналогична навигации, но может содержать иконки соцсетей.

### ПОДБЛОК 6.4: Юридическая информация (колонка 4)

Структура:
- Display: flex
- Flex-direction: column
- Gap: 16px
- Align-items: flex-end (выравнивание справа)

Ссылки:
- "Imprint"
- "Privacy Policy"

Стили идентичны навигационным ссылкам:
- Font-size: 16px
- Color: #FFFFFF
- Text-decoration: none

Hover эффект:
color: #CCCCCC
transition: color 0.3s ease

### ПОДБЛОК 6.5: Нижняя строка (bottom bar)

Контейнер:
- Border-top: 1px solid rgba(255, 255, 255, 0.1)
- Padding-top: 32px
- Margin-top: 32px
- Display: flex
- Justify-content: space-between
- Align-items: center
- Flex-wrap: wrap
- Gap: 16px

"Back to top" ссылка:
- Font-size: 14px
- Color: #999999
- Text-decoration: none
- Display: flex
- Align-items: center
- Gap: 8px

Иконка стрелки вверх (↑):
- Font-size: 16px
- Transition: transform 0.3s ease

Hover эффект "Back to top":
color: #FFFFFF
Стрелка: transform: translateY(-4px)

"You can buy this website" ссылка:
- Font-size: 14px
- Color: #666666
- Text-decoration: underline
- Text-decoration-color: transparent
- Transition: color 0.3s, text-decoration-color 0.3s

Hover эффект:
color: #999999
text-decoration-color: #999999

### МОБИЛЬНАЯ ВЕРСИЯ FOOTER:
- Grid-template-columns: 1fr (одна колонка)
- Gap: 32px
- Padding: 48px 20px 24px
- Все элементы выровнены по левому краю
- Нижняя строка: flex-direction: column, align-items: flex-start

---

## БЛОК 7: SCROLL ANIMATIONS (ГЛОБАЛЬНЫЕ)

### Общая логика скролл-анимаций:

Intersection Observer настройки:
threshold: 0.2 // элемент появляется когда 20% во viewport
rootMargin: '0px 0px -10% 0px' // триггер чуть раньше

Классы для анимаций:

.fade-in-up (появление снизу):
Initial state:
  opacity: 0
  transform: translateY(40px)

Animated state:
  opacity: 1
  transform: translateY(0)
  transition: opacity 0.8s ease, transform 0.8s ease

.fade-in-left (появление слева):
Initial state:
  opacity: 0
  transform: translateX(-40px)

Animated state:
  opacity: 1
  transform: translateX(0)
  transition: opacity 0.8s ease, transform 0.8s ease

.fade-in-right (появление справа):
Initial state:
  opacity: 0
  transform: translateX(40px)

Animated state:
  opacity: 1
  transform: translateX(0)
  transition: opacity 0.8s ease, transform 0.8s ease

Клавиатурная навигация:
- tabindex для правильного порядка
- Видимый focus state:
:focus-visible {
  outline: 2px solid #000000;
  outline-offset: 4px;
}

Цветовой контраст:
- Текст на белом: минимум #333333 для WCAG AA
- Текст на черном футере: #FFFFFF
- Интерактивные элементы: минимум 4.5:1 контраст

### SEO:

Meta теги:
<title>Balance | John Taylor - Digital Designer</title>
<meta name="description" content="I help designers and agencies elevate their branding with creative development support.">
<meta name="keywords" content="digital designer, branding, design agency">

<!-- Open Graph -->
<meta property="og:title" content="Balance | John Taylor">
<meta property="og:description" content="Digital Designer Portfolio">
<meta property="og:image" content="[URL to preview image]">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Balance | John Taylor">
<meta name="twitter:description" content="Digital Designer Portfolio">

Структурированные данные (JSON-LD):
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "John Taylor",
  "jobTitle": "Digital Designer",
  "email": "john@jt-studio.com",
  "telephone": "+491234 56789",
  "url": "https://balance.michael-aust.com"
}

---

## БЛОК 11: ФИНАЛЬНЫЕ ДЕТАЛИ И ПОЛИРОВКА

### Микро-взаимодействия:

При клике на кнопку:
- Небольшая анимация нажатия: transform: scale(0.98)
- Duration: 0.1s
- Возврат: 0.2s

При загрузке новой страницы:
- Fade out текущей страницы
- Fade in новой страницы
- Duration: 0.3s

При наведении на изображения:
- Легкое увеличение
- Возможно изменение brightness: filter: brightness(1.05)

### Состояния загрузки:

Скелетоны (skeleton screens):
Для карточек проектов до загрузки:
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #e0e0e0 50%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0 }
  100% { background-position: -200% 0 }
}

### Типографические детали:

Висячие строки (orphans/widows):
p {
  orphans: 2;
  widows: 2;
}

Лигатуры:
body {
  font-feature-settings: "liga" 1, "kern" 1;
  text-rendering: optimizeLegibility;
}

Оптический выравнивание:
h1, h2, h3 {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

---

## 🚀 Технологии

- HTML5
- CSS3 (SCSS)
- JavaScript (ES6+)
- React.js (для динамических компонентов и управления состоянием)
- Next.js (для SSR и оптимизации производительности)
- GSAP (GreenSock Animation Platform) для анимаций
- Intersection Observer API для скролл-анимаций
- Webpack или Vite (для сборки проекта)

## 📁 Структура проекта

- `package.json`
- `index.html`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `src/main.jsx`
- `src/index.css`
- `src/App.jsx`
- `vercel.json`
- `.gitignore`
- `README.md`

## 🛠️ Установка

```bash
npm install
```

## ▶️ Запуск

```bash
npm start
# или
npm run dev
```

## 📋 План разработки

1.

## 📄 Лицензия

MIT

## 🤖 Создано с помощью

[AI Constructor Bot](https://t.me/construct_ai_bot) - Telegram бот для автоматической генерации проектов с помощью AI
