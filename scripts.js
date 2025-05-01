function switchLanguage(language) {
    const texts = {
        // Головна сторінка

        "home-header": {
            "uk": "Головна",
            "en": "Home"
        },
        "catalog-header": {
            "uk": "Каталог",
            "en": "Catalog"
        },
        "login-header": {
            "uk": "Вхід",
            "en": "Login"
        },
        "subheader-title": {
            "uk": "ОБЕРИ СВОЄ ДОЗВІЛЛЯ",
            "en": "CHOOSE YOUR FUN"
        },
        "footer-text": {
            "uk": "Київ Івент - поринай у веселощі",
            "en": "Kyiv Event - Dive into Fun"
        },
        "footer-text1": {
            "uk": "Контакти: +380 12 345 67 89 | email@example.com",
            "en": "Contacts: +380 12 345 67 89 | email@example.com"
        },
        "footer-text2": {
            "uk": "Розробник: Андрущенко Софія ФІТ 2-11",
            "en": "Developer: Sofiia Andrushchenko FIT 2-11"
        },
        "view-events-button":{
            "uk": "Переглянути найближчі події",
            "en": "View upcoming events"
        },
        // Вхід
        "login-header-text": {
            "uk": "Вхід",
            "en": "Login"
        },
        "login-username": {
            "uk": "Логін",
            "en": "Username"
        },
        "login-password": {
            "uk": "Пароль",
            "en": "Password"
        },
        "login-button": {
            "uk": "Увійти",
            "en": "Log in"
        },

        // Адмін
        "admin-header": {
            "uk": "Адмін - Редагувати події",
            "en": "Admin - Edit Events"
        },
        "admin-add-event": {
            "uk": "Додати подію",
            "en": "Add Event"
        },
        "admin-delete-event": {
            "uk": "Видалити подію",
            "en": "Delete Event"
        },

        // Каталог
        "event-details": {
            "uk": "Деталі події",
            "en": "Event Details"
        },
            // Фільтри
        "filter-date-label": {
            "uk": "Дата:",
            "en": "Date:"
        },
        "filter-price-label": {
            "uk": "Ціна до:",
            "en": "Price up to:"
        },

        "filter-type-label": {
            "uk": "Тип події:",
            "en": "Event type:"
        },
        "filter-all-option": {
            "uk": "Всі",
            "en": "All"
        },
        "filter-concert-option": {
            "uk": "Концерт/Вистава",
            "en": "Concert/Performance"
        },
        "filter-exhibition-option": {
            "uk": "Виставка",
            "en": "Exhibition"
        },
        "filter-master-option": {
            "uk": "Майстер-клас",
            "en": "Master class"
        },
        "filter-button": {
            "uk": "Фільтрувати",
            "en": "Filter"
        },
        "filter-reset-button": {
            "uk": "Скинути",
            "en": "Reset"
        },

        // Переклад кнопок на заголовках
        "event-description": {
            "uk": "Опис події",
            "en": "Event Description"
        },
        "event-date": {
            "uk": "Дата події",
            "en": "Event Date"
        },
        "event-price": {
            "uk": "Ціна",
            "en": "Price"
        },
        // Заголовки подій
        "event-1-title": {
            "uk": "Музичний концерт",
            "en": "Music Concert"
        },
        "event-2-title": {
            "uk": "Театральна вистава \"Коли засинає місто\"",
            "en": "Theater Performance \"When the City Sleeps\""
        },
        "event-3-title": {
            "uk": "Йога на свіжому повітрі",
            "en": "Outdoor Yoga"
        },

        // Опис подій
        "event-1-excerpt": {
            "uk": "Присутні на концерті зможуть насолоджуватися найкращими релізами 2025 року.",
            "en": "Attendees will enjoy the best releases of 2025."
        },
        "event-2-excerpt": {
            "uk": "У великому місті життя вирує вдень, але справжні історії народжуються вночі. Лірична драма про тих, хто шукає себе серед тиші сплячих вулиць.",
            "en": "In a big city, life thrives during the day, but real stories are born at night. A lyrical drama about those searching for themselves in the silence of sleeping streets."
        },
        "event-3-excerpt": {
            "uk": "Заняття йогою на відкритому повітрі серед природи, що дозволяє зняти стрес, покращити самопочуття та налаштуватися на позитивні емоції.",
            "en": "Outdoor yoga classes amidst nature, helping to relieve stress, improve well-being, and set a positive mood."
        },

        // Дата подій
        "event-1-date": {
            "uk": "Дата: 10 травня 2025",
            "en": "Date: May 10, 2025"
        },
        "event-2-date": {
            "uk": "Дата: 15 травня 2025",
            "en": "Date: May 15, 2025"
        },
        "event-3-date": {
            "uk": "Дата: 16 травня 2025",
            "en": "Date: May 16, 2025"
        },

        // Ціна подій
        "event-1-price": {
            "uk": "Ціна: 250 грн",
            "en": "Price: 250 UAH"
        },
        "event-2-price": {
            "uk": "Ціна: 300 грн",
            "en": "Price: 300 UAH"
        },
        "event-3-price": {
            "uk": "Ціна: 400 грн",
            "en": "Price: 400 UAH"
        },

        // Лінки на деталі подій
        "event-1-link": {
            "uk": "Деталі події",
            "en": "Event Details"
        },
        "event-2-link": {
            "uk": "Деталі події",
            "en": "Event Details"
        },
        "event-3-link": {
            "uk": "Деталі події",
            "en": "Event Details"
        }
    };

    // Оновлення всіх текстових елементів
    Object.keys(texts).forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = texts[id][language];
        }
    });

    // Оновлення атрибутів placeholder
    document.querySelectorAll('[data-translate-placeholder]').forEach((input) => {
        const key = input.getAttribute('data-translate-placeholder');
        if (texts[key]) {
            input.placeholder = texts[key][language];
        }
    });
}
// Збереження та отримання даних з localStorage
const eventsKey = 'events';

function saveEvents(events) {
    localStorage.setItem(eventsKey, JSON.stringify(events));
}

function getEvents() {
    const storedEvents = localStorage.getItem(eventsKey);
    return storedEvents ? JSON.parse(storedEvents) : [];
}

function renderEvents() {
    const events = getEvents();
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = ''; // Очищаємо список подій

    events.forEach((event, index) => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = 
        <h3>${event.name}</h3>;
        <p>Дата: ${event.date}</p>;
        <p>Ціна: ${event.price} грн</p>;
        <p>Опис: ${event.description}</p>;
        <p>Категорія: ${event.category}</p>;
        <button onclick="deleteEvent(${index})">Видалити</button>;
        eventsContainer.appendChild(eventCard);
        });
}

// Додавання нової події
document.getElementById('add-event-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventPrice = document.getElementById('event-price').value;
    const eventDescription = document.getElementById('event-description').value;
    const eventCategory = document.getElementById('event-category').value;

    const newEvent = {
        name: eventName,
        date: eventDate,
        price: eventPrice,
        description: eventDescription,
        category: eventCategory,
    };

    const events = getEvents();
    events.push(newEvent);
    saveEvents(events);

    renderEvents();
    document.getElementById('add-event-form').reset();
});

// Видалення події
function deleteEvent(index) {
    const events = getEvents();
    events.splice(index, 1); // Видаляємо подію за індексом
    saveEvents(events);
    renderEvents();
}
function loadTranslations(lang) {
            const elements = document.querySelectorAll('[id]');
            elements.forEach(element => {
                const key = element.id;
                if (translations[lang] && translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
                if (element.tagName === 'INPUT') {
                    const placeholderKey = element.getAttribute('placeholder-key');
                    if (translations[lang] && translations[lang][placeholderKey]) {
                        element.placeholder = translations[lang][placeholderKey];
                    }
                }
            });
            const placeholderInputs = document.querySelectorAll('[placeholder-key]');
            placeholderInputs.forEach(input => {
                const key = input.getAttribute('placeholder-key');
                if (translations[lang] && translations[lang][key]) {
                    input.placeholder = translations[lang][key];
                }
            });
            localStorage.setItem('currentLanguage', lang); // Зберігаємо обрану мову
        }

        function switchLanguage(lang) {
            loadTranslations(lang);
            document.documentElement.lang = lang;
        }

        window.onload = () => {
            const storedLanguage = localStorage.getItem('currentLanguage');
            const initialLanguage = storedLanguage || document.documentElement.lang || 'uk'; // Пріоритет: збережена мова, потім мова браузера, потім укр.
            loadTranslations(initialLanguage);
            document.documentElement.lang = initialLanguage;
        };
