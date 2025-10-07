// Wait for DOM to be fully loaded
// Wait for DOM to be ready
function initWebsite() {
    
    // ========== TRANSLATIONS ==========
    const translations = {
        en: {
            // Navigation
            nav_home: "Home",
            nav_about: "About",
            nav_gallery: "Gallery",
            nav_pricing: "Pricing",
            nav_contact: "Contact",
            
            // Translation Button
            translate_button: "Translate",
            select_language: "Select Language",
            
            // Hero
            commission_open: "🌿 COMMISSIONS OPEN 🌿",
            hero_subtitle: "Art with Specialization in Furrys, Militarism and History",
            hero_cta: "View Commission Prices",
            
            // About
            about_title: "About the Artist",
            about_intro: "Welcome to my artistic universe! I'm Pepe, a passionate illustrator creating diverse furry art with all kinds of characters and themes.",
            about_p1: "While I work with a wide variety of subjects and styles, my <strong>highlight and specialty</strong> is historical military themes, particularly <strong>World War I and World War II</strong>. From detailed military uniforms and authentic weaponry to atmospheric scenes and period-accurate vehicles, I love bringing history to life through anthropomorphic art.",
            about_p2: "Whether you're looking for a character icon, a detailed full-body illustration with backgrounds, or a complex scene, I work in both <strong>traditional and digital mediums</strong> to bring your vision to reality.",
            tag_wwi: "WWI/WWII Themes",
            tag_uniforms: "Military Uniforms",
            tag_vehicles: "Historical Vehicles",
            tag_weaponry: "Weaponry",
            tag_furry: "Furry Characters",
            
            // Gallery
            gallery_title: "Gallery",
            gallery_subtitle: "Explore my diverse furry art portfolio",
            military_title: "Militarism/History",
            vehicles_title: "Vehicles/Standard",
            
            // Pricing
            pricing_title: "Commission Pricing",
            pricing_subtitle: "Choose your commission type and extras",
            pricing_body_type: "Body Type",
            pricing_background_type: "Background Type",
            pricing_extras: "Extras",
            
            price_icon_desc: "Head and shoulders portrait",
            price_halfbody_desc: "From head to waist",
            price_fullbody_desc: "Complete character illustration",
            price_refsheet_desc: "Complete reference sheet",
            
            price_no_bg: "No Background",
            price_no_bg_desc: "Simple transparent/solid color",
            price_normal: "Normal",
            price_normal_desc: "Simple background scenery",
            price_complex: "Complex",
            price_complex_desc: "Detailed scene with elements",
            
            extra_bg: "Extra Background",
            extra_bg_desc: "Additional background elements",
            extra_char: "Extra Character",
            extra_char_desc: "Additional character in scene",
            extra_nsfw_desc: "Adult content (+18)",
            
            btn_select: "Select",
            btn_add: "Add",
            btn_remove: "Remove",
            
            calc_title: "Your Commission",
            calc_body: "Body Type:",
            calc_background: "Background:",
            calc_extras: "Extras:",
            calc_total: "Total:",
            calc_not_selected: "Not selected",
            calc_none: "None",
            calc_request: "Request Commission",
            
            donations: "Donations:",
            or: "or",
            
            // Contact
            contact_title: "Get in Touch",
            contact_subtitle: "Follow me on social media and contact me for commissions",
            nsfw_available: "NSFW Available",
            
            // Footer
            footer_note: "Furry Art with Historical Military Highlights",
            footer_credits: "Made by Sturska",
            
            // Modal
            modal_title: "Request Commission",
            modal_text: "Please contact me through one of these platforms:",
            modal_contact_x: "Contact on X",
            modal_contact_telegram: "Contact on Telegram"
        },
        pt: {
            // Navigation
            nav_home: "Início",
            nav_about: "Sobre Mim",
            nav_gallery: "Trabalhos",
            nav_pricing: "Valores",
            nav_contact: "Contato",
            
            // Translation Button
            translate_button: "Traduzir",
            select_language: "Selecione o Idioma",
            
            // Hero
            commission_open: "🌿 COMISSÕES ABERTAS 🌿",
            hero_subtitle: "Artes com Especialidade em Furrys, Militarismo e Histórico",
            hero_cta: "Ver Tabela de Preços",
            
            // About
            about_title: "Sobre o Artista",
            about_intro: "Seja bem-vindo ao meu universo artístico! Me chamo Pepe e sou um ilustrador apaixonado por criar arte furry diversificada, com personagens e temas variados.",
            about_p1: "Trabalho com diversos estilos e assuntos, mas meu <strong>grande destaque</strong> são as temáticas militares históricas, especialmente da <strong>Primeira e Segunda Guerra Mundial</strong>. Uniformes militares detalhados, armamento autêntico, cenários atmosféricos e veículos de época - amo trazer a história à vida através de personagens antropomórficos.",
            about_p2: "Seja um ícone de personagem, uma ilustração completa com cenário, ou uma cena elaborada, trabalho tanto em <strong>meio tradicional quanto digital</strong> para dar vida à sua ideia.",
            tag_wwi: "Guerras Mundiais",
            tag_uniforms: "Uniformes Militares",
            tag_vehicles: "Veículos de Época",
            tag_weaponry: "Armamento",
            tag_furry: "Personagens Furry",
            
            // Gallery
            gallery_title: "Portfólio",
            gallery_subtitle: "Conheça meu trabalho e variedade de estilos",
            military_title: "Militarismo/História",
            vehicles_title: "Veículos/Padrão",
            
            // Pricing
            pricing_title: "Tabela de Preços",
            pricing_subtitle: "Monte sua encomenda escolhendo tipo e extras",
            pricing_body_type: "Tipo de Arte",
            pricing_background_type: "Cenário",
            pricing_extras: "Adicionais",
            
            price_icon_desc: "Busto/retrato do personagem",
            price_halfbody_desc: "Personagem da cintura para cima",
            price_fullbody_desc: "Personagem de corpo completo",
            price_refsheet_desc: "Ficha técnica completa",
            
            price_no_bg: "Sem Cenário",
            price_no_bg_desc: "Fundo transparente ou cor única",
            price_normal: "Simples",
            price_normal_desc: "Cenário básico",
            price_complex: "Detalhado",
            price_complex_desc: "Cenário rico em elementos",
            
            extra_bg: "Cenário Adicional",
            extra_bg_desc: "Mais elementos no fundo",
            extra_char: "Personagem Adicional",
            extra_char_desc: "Outro personagem na arte",
            extra_nsfw_desc: "Conteúdo adulto (+18)",
            
            btn_select: "Escolher",
            btn_add: "Incluir",
            btn_remove: "Retirar",
            
            calc_title: "Seu Pedido",
            calc_body: "Arte:",
            calc_background: "Cenário:",
            calc_extras: "Adicionais:",
            calc_total: "Valor Total:",
            calc_not_selected: "Nada selecionado",
            calc_none: "Nenhum",
            calc_request: "Fazer Pedido",
            
            donations: "Apoie:",
            or: "ou",
            
            // Contact
            contact_title: "Fale Comigo",
            contact_subtitle: "Me siga nas redes e entre em contato para encomendar",
            nsfw_available: "Conteúdo +18 Disponível",
            
            // Footer
            footer_note: "Arte Furry com Foco em Temas Militares Históricos",
            footer_credits: "Feito por Sturska",
            
            // Modal
            modal_title: "Fazer Encomenda",
            modal_text: "Entre em contato através de uma dessas plataformas:",
            modal_contact_x: "Falar no X",
            modal_contact_telegram: "Falar no Telegram"
        },
        el: {
            // Navigation
            nav_home: "Αρχική",
            nav_about: "Για Μένα",
            nav_gallery: "Έργα",
            nav_pricing: "Τιμοκατάλογος",
            nav_contact: "Επικοινωνία",
            
            // Translation Button
            translate_button: "Μετάφραση",
            select_language: "Επιλέξτε Γλώσσα",
            
            // Hero
            commission_open: "🌿 ΔΕΧΟΜΑΙ ΠΑΡΑΓΓΕΛΙΕΣ 🌿",
            hero_subtitle: "Τέχνη με Ειδίκευση σε Furrys, Στρατιωτισμό και Ιστορία",
            hero_cta: "Δες τις Τιμές",
            
            // About
            about_title: "Για τον Καλλιτέχνη",
            about_intro: "Καλώς ήρθατε στον καλλιτεχνικό μου κόσμο! Με λένε Pepe και είμαι εικονογράφος που λατρεύει να δημιουργεί ποικίλη furry τέχνη με διαφορετικούς χαρακτήρες και θέματα.",
            about_p1: "Δουλεύω με πολλά διαφορετικά στυλ και θέματα, αλλά το <strong>μεγάλο μου πάθος</strong> είναι τα ιστορικά στρατιωτικά θέματα, ειδικά από τον <strong>Α' και Β' Παγκόσμιο Πόλεμο</strong>. Λεπτομερείς στολές, αυθεντικά όπλα, ατμοσφαιρικές σκηνές και οχήματα εποχής - μου αρέσει να ζωντανεύω την ιστορία μέσα από ανθρωπόμορφους χαρακτήρες.",
            about_p2: "Είτε θέλετε ένα εικονίδιο χαρακτήρα, μια πλήρη εικονογράφηση με σκηνικό, ή μια πολύπλοκη σκηνή, δουλεύω τόσο <strong>παραδοσιακά όσο και ψηφιακά</strong> για να δώσω ζωή στην ιδέα σας.",
            tag_wwi: "Παγκόσμιοι Πόλεμοι",
            tag_uniforms: "Στρατιωτικές Στολές",
            tag_vehicles: "Ιστορικά Οχήματα",
            tag_weaponry: "Όπλα",
            tag_furry: "Furry Χαρακτήρες",
            
            // Gallery
            gallery_title: "Χαρτοφυλάκιο",
            gallery_subtitle: "Δείτε τη δουλειά μου και την ποικιλία στυλ",
            military_title: "Στρατιωτισμός/Ιστορία",
            vehicles_title: "Οχήματα/Στάνταρ",
            
            // Pricing
            pricing_title: "Τιμοκατάλογος",
            pricing_subtitle: "Φτιάξτε την παραγγελία σας επιλέγοντας τύπο και extras",
            pricing_body_type: "Τύπος Τέχνης",
            pricing_background_type: "Σκηνικό",
            pricing_extras: "Επιπλέον",
            
            price_icon_desc: "Προσωπογραφία χαρακτήρα",
            price_halfbody_desc: "Χαρακτήρας από τη μέση και πάνω",
            price_fullbody_desc: "Χαρακτήρας ολόσωμος",
            price_refsheet_desc: "Πλήρης τεχνική καρτέλα",
            
            price_no_bg: "Χωρίς Σκηνικό",
            price_no_bg_desc: "Διαφανές ή μονόχρωμο φόντο",
            price_normal: "Απλό",
            price_normal_desc: "Βασικό σκηνικό",
            price_complex: "Λεπτομερές",
            price_complex_desc: "Πλούσιο σκηνικό με στοιχεία",
            
            extra_bg: "Επιπλέον Σκηνικό",
            extra_bg_desc: "Περισσότερα στοιχεία στο φόντο",
            extra_char: "Επιπλέον Χαρακτήρας",
            extra_char_desc: "Άλλος χαρακτήρας στην τέχνη",
            extra_nsfw_desc: "Περιεχόμενο +18",
            
            btn_select: "Διάλεξε",
            btn_add: "Πρόσθεσε",
            btn_remove: "Αφαίρεσε",
            
            calc_title: "Η Παραγγελία σου",
            calc_body: "Τέχνη:",
            calc_background: "Σκηνικό:",
            calc_extras: "Επιπλέον:",
            calc_total: "Συνολικό Κόστος:",
            calc_not_selected: "Τίποτα επιλεγμένο",
            calc_none: "Κανένα",
            calc_request: "Κάνε Παραγγελία",
            
            donations: "Υποστήριξη:",
            or: "ή",
            
            // Contact
            contact_title: "Επικοινωνία",
            contact_subtitle: "Ακολούθησέ με στα social media και στείλε μήνυμα για παραγγελίες",
            nsfw_available: "Διαθέσιμο Περιεχόμενο +18",
            
            // Footer
            footer_note: "Furry Τέχνη με Εστίαση σε Ιστορικά Στρατιωτικά Θέματα",
            footer_credits: "Φτιαγμένο από τον Sturska",
            
            // Modal
            modal_title: "Κάνε Παραγγελία",
            modal_text: "Επικοινώνησε μαζί μου μέσω μιας από αυτές τις πλατφόρμες:",
            modal_contact_x: "Μίλησε στο X",
            modal_contact_telegram: "Μίλησε στο Telegram"
        },
        de: {
            // Navigation
            nav_home: "Startseite",
            nav_about: "Über mich",
            nav_gallery: "Galerie",
            nav_pricing: "Preise",
            nav_contact: "Kontakt",
            
            // Translation Button
            translate_button: "Übersetzen",
            select_language: "Sprache wählen",
            
            // Hero
            commission_open: "🌿 AUFTRÄGE OFFEN 🌿",
            hero_subtitle: "Kunst mit Spezialisierung auf Furrys, Militarismus und Geschichte",
            hero_cta: "Preise ansehen",
            
            // About
            about_title: "Über den Künstler",
            about_intro: "Willkommen in meinem künstlerischen Universum! Ich bin Pepe, ein leidenschaftlicher Illustrator, der vielfältige Furry-Kunst mit verschiedenen Charakteren und Themen erschafft.",
            about_p1: "Ich arbeite mit vielen verschiedenen Stilen und Themen, aber meine <strong>große Leidenschaft</strong> sind historische Militärthemen, insbesondere aus dem <strong>Ersten und Zweiten Weltkrieg</strong>. Detaillierte Uniformen, authentische Waffen, atmosphärische Szenen und historische Fahrzeuge - ich liebe es, Geschichte durch anthropomorphe Charaktere zum Leben zu erwecken.",
            about_p2: "Ob Icon, vollständige Illustration mit Hintergrund oder komplexe Szene - ich arbeite sowohl <strong>traditionell als auch digital</strong>, um deine Idee zum Leben zu erwecken.",
            tag_wwi: "Weltkriegsthemen",
            tag_uniforms: "Militäruniformen",
            tag_vehicles: "Historische Fahrzeuge",
            tag_weaponry: "Waffen",
            tag_furry: "Furry-Charaktere",
            
            // Gallery
            gallery_title: "Portfolio",
            gallery_subtitle: "Entdecke meine Arbeit und Stilvielfalt",
            military_title: "Militarismus/Geschichte",
            vehicles_title: "Fahrzeuge/Standard",
            
            // Pricing
            pricing_title: "Preisliste",
            pricing_subtitle: "Stelle deinen Auftrag zusammen",
            pricing_body_type: "Kunsttyp",
            pricing_background_type: "Hintergrund",
            pricing_extras: "Zusätzlich",
            
            price_icon_desc: "Charakterporträt",
            price_halfbody_desc: "Charakter von der Taille aufwärts",
            price_fullbody_desc: "Ganzkörper-Charakter",
            price_refsheet_desc: "Vollständiges Referenzblatt",
            
            price_no_bg: "Ohne Hintergrund",
            price_no_bg_desc: "Transparenter oder einfarbiger Hintergrund",
            price_normal: "Einfach",
            price_normal_desc: "Grundlegender Hintergrund",
            price_complex: "Detailliert",
            price_complex_desc: "Detailreicher Hintergrund",
            
            extra_bg: "Zusätzlicher Hintergrund",
            extra_bg_desc: "Mehr Elemente im Hintergrund",
            extra_char: "Zusätzlicher Charakter",
            extra_char_desc: "Weiterer Charakter im Bild",
            extra_nsfw_desc: "Erwachseneninhalte (+18)",
            
            btn_select: "Wählen",
            btn_add: "Hinzufügen",
            btn_remove: "Entfernen",
            
            calc_title: "Deine Bestellung",
            calc_body: "Kunst:",
            calc_background: "Hintergrund:",
            calc_extras: "Zusätzlich:",
            calc_total: "Gesamtpreis:",
            calc_not_selected: "Nicht ausgewählt",
            calc_none: "Keine",
            calc_request: "Auftrag anfragen",
            
            donations: "Unterstützung:",
            or: "oder",
            
            // Contact
            contact_title: "Kontakt",
            contact_subtitle: "Folge mir auf Social Media und kontaktiere mich für Aufträge",
            nsfw_available: "+18 Inhalte verfügbar",
            
            // Footer
            footer_note: "Furry-Kunst mit Fokus auf historische Militärthemen",
            footer_credits: "Erstellt von Sturska",
            
            // Modal
            modal_title: "Auftrag anfragen",
            modal_text: "Kontaktiere mich über eine dieser Plattformen:",
            modal_contact_x: "Auf X kontaktieren",
            modal_contact_telegram: "Auf Telegram kontaktieren"
        },
        es: {
            // Navigation
            nav_home: "Inicio",
            nav_about: "Sobre mí",
            nav_gallery: "Galería",
            nav_pricing: "Precios",
            nav_contact: "Contacto",
            
            // Translation Button
            translate_button: "Traducir",
            select_language: "Seleccionar Idioma",
            
            // Hero
            commission_open: "🌿 COMISIONES ABIERTAS 🌿",
            hero_subtitle: "Arte con Especialidad en Furrys, Militarismo e Historia",
            hero_cta: "Ver precios",
            
            // About
            about_title: "Sobre el artista",
            about_intro: "¡Bienvenido a mi universo artístico! Soy Pepe, un ilustrador apasionado que crea arte furry diverso con todo tipo de personajes y temas.",
            about_p1: "Trabajo con muchos estilos y temas diferentes, pero mi <strong>gran pasión</strong> son los temas militares históricos, especialmente de la <strong>Primera y Segunda Guerra Mundial</strong>. Uniformes detallados, armamento auténtico, escenas atmosféricas y vehículos de época - me encanta dar vida a la historia a través de personajes antropomórficos.",
            about_p2: "Ya sea un icono de personaje, una ilustración completa con fondo, o una escena compleja, trabajo tanto en <strong>medios tradicionales como digitales</strong> para dar vida a tu idea.",
            tag_wwi: "Guerras Mundiales",
            tag_uniforms: "Uniformes Militares",
            tag_vehicles: "Vehículos Históricos",
            tag_weaponry: "Armamento",
            tag_furry: "Personajes Furry",
            
            // Gallery
            gallery_title: "Portafolio",
            gallery_subtitle: "Descubre mi trabajo y variedad de estilos",
            military_title: "Militarismo/Historia",
            vehicles_title: "Vehículos/Estándar",
            
            // Pricing
            pricing_title: "Lista de precios",
            pricing_subtitle: "Arma tu encargo eligiendo tipo y extras",
            pricing_body_type: "Tipo de arte",
            pricing_background_type: "Fondo",
            pricing_extras: "Extras",
            
            price_icon_desc: "Retrato del personaje",
            price_halfbody_desc: "Personaje de cintura para arriba",
            price_fullbody_desc: "Personaje de cuerpo completo",
            price_refsheet_desc: "Hoja de referencia completa",
            
            price_no_bg: "Sin fondo",
            price_no_bg_desc: "Fondo transparente o color sólido",
            price_normal: "Simple",
            price_normal_desc: "Fondo básico",
            price_complex: "Detallado",
            price_complex_desc: "Fondo rico en elementos",
            
            extra_bg: "Fondo adicional",
            extra_bg_desc: "Más elementos en el fondo",
            extra_char: "Personaje adicional",
            extra_char_desc: "Otro personaje en el arte",
            extra_nsfw_desc: "Contenido adulto (+18)",
            
            btn_select: "Elegir",
            btn_add: "Añadir",
            btn_remove: "Quitar",
            
            calc_title: "Tu pedido",
            calc_body: "Arte:",
            calc_background: "Fondo:",
            calc_extras: "Extras:",
            calc_total: "Precio total:",
            calc_not_selected: "No seleccionado",
            calc_none: "Ninguno",
            calc_request: "Hacer pedido",
            
            donations: "Apoyo:",
            or: "o",
            
            // Contact
            contact_title: "Contacto",
            contact_subtitle: "Sígueme en redes sociales y contáctame para encargos",
            nsfw_available: "Contenido +18 disponible",
            
            // Footer
            footer_note: "Arte Furry con enfoque en temas militares históricos",
            footer_credits: "Hecho por Sturska",
            
            // Modal
            modal_title: "Hacer pedido",
            modal_text: "Contáctame a través de una de estas plataformas:",
            modal_contact_x: "Contactar en X",
            modal_contact_telegram: "Contactar en Telegram"
        },
        ru: {
            // Navigation
            nav_home: "Главная",
            nav_about: "Обо мне",
            nav_gallery: "Галерея",
            nav_pricing: "Цены",
            nav_contact: "Контакты",
            
            // Translation Button
            translate_button: "Перевести",
            select_language: "Выберите язык",
            
            // Hero
            commission_open: "🌿 ЗАКАЗЫ ОТКРЫТЫ 🌿",
            hero_subtitle: "Искусство со специализацией на Фурри, Милитаризме и Истории",
            hero_cta: "Смотреть цены",
            
            // About
            about_title: "О художнике",
            about_intro: "Добро пожаловать в мой художественный мир! Меня зовут Pepe, я иллюстратор, создающий разнообразный фурри-арт с различными персонажами и темами.",
            about_p1: "Я работаю со многими стилями и темами, но моя <strong>большая страсть</strong> - это исторические военные темы, особенно <strong>Первая и Вторая мировые войны</strong>. Детализированная форма, аутентичное оружие, атмосферные сцены и техника той эпохи - мне нравится оживлять историю через антропоморфных персонажей.",
            about_p2: "Будь то иконка персонажа, полная иллюстрация с фоном или сложная сцена, я работаю как в <strong>традиционной, так и в цифровой технике</strong>, чтобы воплотить вашу идею в жизнь.",
            tag_wwi: "Мировые войны",
            tag_uniforms: "Военная форма",
            tag_vehicles: "Историческая техника",
            tag_weaponry: "Оружие",
            tag_furry: "Фурри-персонажи",
            
            // Gallery
            gallery_title: "Портфолио",
            gallery_subtitle: "Посмотрите мои работы и разнообразие стилей",
            military_title: "Милитаризм/История",
            vehicles_title: "Транспорт/Стандарт",
            
            // Pricing
            pricing_title: "Прайс-лист",
            pricing_subtitle: "Составьте свой заказ, выбрав тип и дополнения",
            pricing_body_type: "Тип работы",
            pricing_background_type: "Фон",
            pricing_extras: "Дополнительно",
            
            price_icon_desc: "Портрет персонажа",
            price_halfbody_desc: "Персонаж по пояс",
            price_fullbody_desc: "Персонаж в полный рост",
            price_refsheet_desc: "Полный реф-лист",
            
            price_no_bg: "Без фона",
            price_no_bg_desc: "Прозрачный или однотонный фон",
            price_normal: "Простой",
            price_normal_desc: "Базовый фон",
            price_complex: "Детальный",
            price_complex_desc: "Детализированный фон",
            
            extra_bg: "Дополнительный фон",
            extra_bg_desc: "Больше элементов на фоне",
            extra_char: "Дополнительный персонаж",
            extra_char_desc: "Еще один персонаж на арте",
            extra_nsfw_desc: "Контент 18+",
            
            btn_select: "Выбрать",
            btn_add: "Добавить",
            btn_remove: "Убрать",
            
            calc_title: "Ваш заказ",
            calc_body: "Работа:",
            calc_background: "Фон:",
            calc_extras: "Дополнительно:",
            calc_total: "Итоговая цена:",
            calc_not_selected: "Не выбрано",
            calc_none: "Нет",
            calc_request: "Сделать заказ",
            
            donations: "Поддержка:",
            or: "или",
            
            // Contact
            contact_title: "Контакты",
            contact_subtitle: "Подписывайтесь на меня в соцсетях и связывайтесь для заказов",
            nsfw_available: "Контент 18+ доступен",
            
            // Footer
            footer_note: "Фурри-арт с акцентом на исторические военные темы",
            footer_credits: "Создано Sturska",
            
            // Modal
            modal_title: "Сделать заказ",
            modal_text: "Свяжитесь со мной через одну из этих платформ:",
            modal_contact_x: "Связаться в X",
            modal_contact_telegram: "Связаться в Telegram"
        }
    };
    
    let currentLanguage = 'en';
    
    // Function to change language
    function changeLanguage(lang) {
        currentLanguage = lang;
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        // Store preference
        localStorage.setItem('preferred-language', lang);
    }
    
    // ========== TRANSLATION BUTTON ==========
    function initTranslationSystem() {
        console.log('=== INITIALIZING TRANSLATION SYSTEM ===');
        
        const translateBtn = document.getElementById('translateBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        
        if (!translateBtn || !languageDropdown) {
            console.error('Translation elements not found');
            return;
        }
        
        console.log('✅ Translation elements found');
        
        // Toggle dropdown function
        function toggleDropdown() {
            const isOpen = languageDropdown.classList.contains('active');
            
            if (isOpen) {
                languageDropdown.classList.remove('active');
                translateBtn.classList.remove('active');
            } else {
                languageDropdown.classList.add('active');
                translateBtn.classList.add('active');
            }
        }
        
        // Close dropdown function
        function closeDropdown() {
            languageDropdown.classList.remove('active');
            translateBtn.classList.remove('active');
        }
        
        // Button click event
        translateBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleDropdown();
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageDropdown.contains(e.target) && e.target !== translateBtn) {
                closeDropdown();
            }
        });
        
        // Language selection events
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                console.log('Language selected:', lang);
                changeLanguage(lang);
                
                // Update active state
                document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                // Close dropdown
                closeDropdown();
            });
        });
        
        // Load saved language preference
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && translations[savedLang]) {
            changeLanguage(savedLang);
            
            // Set active state
            document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
            const activeOption = document.querySelector(`[data-lang="${savedLang}"]`);
            if (activeOption) {
                activeOption.classList.add('active');
            }
        }
        
        console.log('✅ Translation system initialized');
    }
    
    // Initialize translation system
    initTranslationSystem();
    
    
    // ========== NAVIGATION ==========
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== CURRENCY SELECTOR ==========
    let currentCurrency = 'usd';
    const currencyButtons = document.querySelectorAll('.currency-btn');
    const prices = document.querySelectorAll('.price');
    
    currencyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            currencyButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current currency
            currentCurrency = this.getAttribute('data-currency');
            
            // Update all prices
            updatePrices();
            
            // Recalculate total
            calculateTotal();
        });
    });
    
    function updatePrices() {
        prices.forEach(price => {
            const usdPrice = price.getAttribute('data-usd');
            const brlPrice = price.getAttribute('data-brl');
            
            if (currentCurrency === 'usd') {
                price.textContent = `$${usdPrice}`;
            } else {
                price.textContent = `R$${brlPrice}`;
            }
        });
    }
    
    // ========== PRICING CALCULATOR ==========
    let selectedBody = null;
    let selectedBodyPrice = 0;
    let selectedBackground = null;
    let selectedBackgroundPrice = 0;
    let selectedExtras = [];
    
    const bodyItems = document.querySelectorAll('[data-type="body"]');
    const backgroundItems = document.querySelectorAll('[data-type="background"]');
    const extraItems = document.querySelectorAll('[data-type="extra"]');
    
    // Body type selection
    bodyItems.forEach(item => {
        const button = item.querySelector('.select-btn');
        button.addEventListener('click', function() {
            // Remove selected class from all body items
            bodyItems.forEach(i => i.classList.remove('selected'));
            
            // Add selected class to clicked item
            item.classList.add('selected');
            
            // Update selected body
            selectedBody = item.getAttribute('data-value');
            
            // Get price based on currency
            const priceElement = item.querySelector('.price');
            const usdPrice = parseFloat(priceElement.getAttribute('data-usd'));
            const brlPrice = parseFloat(priceElement.getAttribute('data-brl'));
            
            selectedBodyPrice = currentCurrency === 'usd' ? usdPrice : brlPrice;
            
            // Update calculator display
            const bodyName = item.querySelector('h4').textContent;
            document.getElementById('selected-body').textContent = bodyName;
            
            // Recalculate total
            calculateTotal();
        });
    });
    
    // Background type selection
    backgroundItems.forEach(item => {
        const button = item.querySelector('.select-btn');
        button.addEventListener('click', function() {
            // Remove selected class from all background items
            backgroundItems.forEach(i => i.classList.remove('selected'));
            
            // Add selected class to clicked item
            item.classList.add('selected');
            
            // Update selected background
            selectedBackground = item.getAttribute('data-value');
            
            // Get price based on currency
            const priceElement = item.querySelector('.price');
            const usdPrice = parseFloat(priceElement.getAttribute('data-usd'));
            const brlPrice = parseFloat(priceElement.getAttribute('data-brl'));
            
            selectedBackgroundPrice = currentCurrency === 'usd' ? usdPrice : brlPrice;
            
            // Update calculator display
            const backgroundName = item.querySelector('h4').textContent;
            document.getElementById('selected-background').textContent = backgroundName;
            
            // Recalculate total
            calculateTotal();
        });
    });
    
    // Extras selection
    extraItems.forEach(item => {
        const button = item.querySelector('.toggle-btn');
        button.addEventListener('click', function() {
            const extraValue = item.getAttribute('data-value');
            const extraName = item.querySelector('h4').textContent;
            
            // Toggle selected class
            item.classList.toggle('selected');
            
            // Update selected extras array
            if (item.classList.contains('selected')) {
                // For NSFW, get the fixed price
                if (extraValue === 'nsfw') {
                    const priceElement = item.querySelector('.price');
                    const usdPrice = parseFloat(priceElement.getAttribute('data-usd'));
                    const brlPrice = parseFloat(priceElement.getAttribute('data-brl'));
                    selectedExtras.push({
                        name: extraName,
                        value: extraValue,
                        fixedPrice: currentCurrency === 'usd' ? usdPrice : brlPrice
                    });
                } else {
                    selectedExtras.push({
                        name: extraName,
                        value: extraValue,
                        percentage: extraValue === 'background' ? 0.5 : 0.65
                    });
                }
                button.textContent = 'Remove';
            } else {
                selectedExtras = selectedExtras.filter(e => e.value !== extraValue);
                button.textContent = 'Add';
            }
            
            // Update calculator display
            if (selectedExtras.length > 0) {
                const extrasText = selectedExtras.map(e => e.name).join(', ');
                document.getElementById('selected-extras').textContent = extrasText;
            } else {
                document.getElementById('selected-extras').textContent = 'None';
            }
            
            // Recalculate total
            calculateTotal();
        });
    });
    
    // Calculate total price
    function calculateTotal() {
        if (selectedBody === null) {
            document.getElementById('total-price').textContent = currentCurrency === 'usd' ? '$0' : 'R$0';
            return;
        }
        
        let total = selectedBodyPrice;
        
        // Add background price if selected
        if (selectedBackground !== null && selectedBackground !== 'none') {
            total += selectedBackgroundPrice;
        }
        
        // Calculate extras
        let extrasTotal = 0;
        selectedExtras.forEach(extra => {
            if (extra.value === 'nsfw') {
                // NSFW is a fixed price
                extrasTotal += extra.fixedPrice;
            } else if (extra.value === 'background') {
                // Extra background is 50% of background price
                extrasTotal += selectedBackgroundPrice * extra.percentage;
            } else if (extra.value === 'character') {
                // Extra character is 65% of body price
                extrasTotal += selectedBodyPrice * extra.percentage;
            }
        });
        
        total += extrasTotal;
        
        // Format and display total
        const formattedTotal = total.toFixed(0);
        const currencySymbol = currentCurrency === 'usd' ? '$' : 'R$';
        document.getElementById('total-price').textContent = `${currencySymbol}${formattedTotal}`;
    }
    
    // ========== CONTACT MODAL ==========
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close');
    
    // Function to open modal
    window.openContactModal = function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // ========== GALLERY ANIMATIONS ==========
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Intersection Observer for gallery items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    galleryItems.forEach(item => {
        observer.observe(item);
    });
    
    // ========== SCROLL EFFECTS ==========
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(20, 20, 20, 0.98)';
        } else {
            navbar.style.background = 'rgba(20, 20, 20, 0.95)';
        }
    });
    
    // ========== SECTION ANIMATIONS ==========
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
    
    // ========== HERO SECTION ==========
    // Reset hero section animations
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
    
    // ========== COPY TO CLIPBOARD ==========
    // Add click to copy functionality for Discord username
    const discordCard = document.querySelector('.social-card.discord');
    if (discordCard) {
        discordCard.style.cursor = 'pointer';
        discordCard.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Copy Discord username to clipboard
            const discordUsername = 'pepi7561';
            navigator.clipboard.writeText(discordUsername).then(function() {
                // Show feedback
                const originalText = discordCard.querySelector('p').textContent;
                discordCard.querySelector('p').textContent = 'Copied to clipboard!';
                
                // Reset after 2 seconds
                setTimeout(function() {
                    discordCard.querySelector('p').textContent = originalText;
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy: ', err);
            });
        });
    }
    
    // ========== KEYBOARD SHORTCUTS ==========
    document.addEventListener('keydown', function(e) {
        // Close modal with ESC key
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // ========== PARALLAX EFFECT ==========
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // ========== SMOOTH SCROLL TO TOP ==========
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gold);
        color: var(--black);
        border: 3px solid var(--brass);
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.background = 'var(--brass)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.background = 'var(--gold)';
    });
    
    // ========== PRELOAD IMAGES ==========
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });
    
    // ========== IMAGE LIGHTBOX ==========
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    const galleryImages = document.querySelectorAll('.gallery-item img');
    let currentImageIndex = 0;
    let imagesArray = Array.from(galleryImages);
    
    console.log('Lightbox elements:', { lightbox, lightboxImg, lightboxClose, lightboxPrev, lightboxNext });
    console.log('Gallery images found:', galleryImages.length);
    
    // Open lightbox when clicking on gallery image
    galleryImages.forEach((img, index) => {
        img.parentElement.addEventListener('click', function() {
            console.log('Gallery image clicked:', index);
            currentImageIndex = index;
            openLightbox(img.src);
        });
    });
    
    function openLightbox(src) {
        if (lightbox && lightboxImg) {
            lightbox.style.display = 'block';
            lightboxImg.src = src;
            document.body.style.overflow = 'hidden';
            console.log('Lightbox opened:', src);
        }
    }
    
    function closeLightbox() {
        if (lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
            console.log('Lightbox closed');
        }
    }
    
    function showNextImage() {
        if (imagesArray.length > 0 && lightboxImg) {
            currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
            lightboxImg.src = imagesArray[currentImageIndex].src;
            console.log('Next image:', currentImageIndex);
        }
    }
    
    function showPrevImage() {
        if (imagesArray.length > 0 && lightboxImg) {
            currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
            lightboxImg.src = imagesArray[currentImageIndex].src;
            console.log('Previous image:', currentImageIndex);
        }
    }
    
    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    // Navigation buttons
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }
    
    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox && lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });
    
    // ========== INITIAL SETUP ==========
    console.log('🌿 Pepe (Fur Pepi) Website Loaded Successfully!');
    console.log('🎨 Furry Art with Historical Military Highlights');
    console.log('🌍 Multi-language support: EN, PT, EL, DE, ES, RU');
    console.log('📧 Contact: dimitri.souza.papaioannou@gmail.com');
    
}

// Initialize website when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWebsite);
} else {
    initWebsite();
}