// ===== Language Translation System =====

// Translation data object
const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            publications: "Publications",
            services: "Services",
            gallery: "Gallery",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            welcome: "Welcome to Yiyan Zhang's Academic Homepage",
            title: "Faculty Member | School of Artificial Intelligence and Computer Science",
            university: "Nantong University",
            profileName: "Yiyan Zhang",
            profileTitle: "Faculty Member",
            profileUniversity: "Nantong University",
            ntuCollege: "School of Artificial Intelligence and Computer Science, Nantong University",
            intro1: "I am currently a faculty member at the",
            intro2: ", supervised by",
            intro3: "and",
            intro4: "My research focuses on integrating deep learning techniques with remote sensing data analysis to design intelligent image processing algorithms and apply artificial intelligence methods to remote sensing image interpretation.",
            collegeOf: "College of Information Science and Engineering",
            totalCitations: "Citations"
        },
        // Buttons
        buttons: {
            publications: "Publications",
            services: "Services",
            gallery: "Gallery",
            contact: "Contact"
        },
        // Publications Section
        publications: {
            title: "Publications",
            authors: "Authors",
            journal: "Journal",
            conference: "Conference",
            journalArticle: "Journal Article",
            conferenceArticle: "Conference Paper",
            pdf: "PDF",
            doi: "DOI",
            code: "Code",
            citations: "citations",
            viewCitations: "View citations on Google Scholar",
            citationCount: "Citation count",
            noModelDiagram: "No model diagram available",
            clickToEnlarge: "Click to enlarge",
            download: "Download",
            esiHighlyCited: "🏆 ESI Highly Cited Paper"
        },
        // Services Section
        services: {
            title: "Academic Services",
            subtitle: "I serve as a reviewer for several prestigious journals in the fields of image processing, remote sensing, and artificial intelligence.",
            journalReviewer: "Journal Reviewer"
        },
        // Gallery Section
        gallery: {
            title: "Research Gallery",
            comingSoon: "Research Gallery Coming Soon",
            comingSoonDesc: "Research photos and images will be displayed here",
            imageNotAvailable: "Image not available"
        },
        // Contact Section
        contact: {
            title: "Contact",
            email: "Email",
            findMeOn: "Find Me On",
            googleScholar: "Google Scholar",
            researchGate: "ResearchGate",
            weChat: "WeChat",
            scanToConnect: "Scan to Connect",
            weChatID: "WeChat ID",
            copyID: "Copy ID",
            done: "Done",
            scanDescription: "Scan the QR code with WeChat to add me as a contact",
            qrCodeUnavailable: "QR Code Unavailable",
            idCopied: "WeChat ID copied to clipboard!",
            copyFailed: "Failed to copy WeChat ID"
        },
        // Footer
        footer: {
            welcome: "Welcome to Yiyan Zhang's Homepage"
        },
        // Back to Top
        backToTop: "Back to Top"
    },
    zh: {
        // Navigation
        nav: {
            home: "首页",
            publications: "学术成果",
            services: "学术服务",
            gallery: "图片展示",
            contact: "联系方式"
        },
        // Hero Section
        hero: {
            welcome: "欢迎来到张亦严的学术主页",
            title: "教师 | 人工智能与计算机学院",
            university: "南通大学",
            profileName: "张亦严",
            profileTitle: "教师",
            profileUniversity: "南通大学",
            ntuCollege: "南通大学人工智能与计算机学院",
            intro1: "我是",
            intro2: "的博士研究生，导师为",
            intro3: "教授和",
            intro4: "我的研究专注于将深度学习技术与遥感数据分析相结合，设计智能化的图像处理算法，将人工智能方法用于遥感图像解译工作。",
            collegeOf: "信息科学与工程学院",
            totalCitations: "总引用"
        },
        // Buttons
        buttons: {
            publications: "学术成果",
            services: "学术服务",
            gallery: "图片展示",
            contact: "联系方式"
        },
        // Publications Section
        publications: {
            title: "学术成果",
            authors: "作者",
            journal: "期刊",
            conference: "会议",
            journalArticle: "期刊论文",
            conferenceArticle: "会议论文",
            pdf: "PDF",
            doi: "DOI",
            code: "代码",
            citations: "引用",
            viewCitations: "在谷歌学术上查看引用",
            citationCount: "引用次数",
            noModelDiagram: "暂无模型图",
            clickToEnlarge: "点击放大",
            download: "下载",
            esiHighlyCited: "🏆 ESI高被引论文"
        },
        // Services Section
        services: {
            title: "学术服务",
            subtitle: "我担任图像处理、遥感和人工智能领域多个知名期刊的审稿人。",
            journalReviewer: "期刊审稿人"
        },
        // Gallery Section
        gallery: {
            title: "科研活动图片",
            comingSoon: "科研图片展示即将推出",
            comingSoonDesc: "科研照片和图像将在此处展示",
            imageNotAvailable: "图像不可用"
        },
        // Contact Section
        contact: {
            title: "联系方式",
            email: "邮箱",
            findMeOn: "在这里找到我",
            googleScholar: "谷歌学术",
            researchGate: "ResearchGate",
            weChat: "微信",
            scanToConnect: "扫码添加",
            weChatID: "微信号",
            copyID: "复制微信号",
            done: "完成",
            scanDescription: "使用微信扫描二维码添加我为好友",
            qrCodeUnavailable: "二维码不可用",
            idCopied: "微信号已复制到剪贴板！",
            copyFailed: "复制微信号失败"
        },
        // Footer
        footer: {
            welcome: "欢迎访问张亦严的主页"
        },
        // Back to Top
        backToTop: "返回顶部"
    }
};

// Current language state
let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize language system
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSystem();
});

function initLanguageSystem() {
    // Initializing language system

    // Apply saved language
    applyLanguage(currentLanguage);

    // Bind language toggle button
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
        updateLanguageButton();
    }
}

// Toggle between languages
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    localStorage.setItem('language', currentLanguage);
    applyLanguage(currentLanguage);
    updateLanguageButton();

    // Trigger custom event for other components
    const event = new CustomEvent('languageChanged', {
        detail: { language: currentLanguage }
    });
    document.dispatchEvent(event);

    // Language switched to: ${currentLanguage}
}

// Update language button icon/text
function updateLanguageButton() {
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        const icon = langToggle.querySelector('i');
        const text = langToggle.querySelector('.lang-text');

        if (currentLanguage === 'zh') {
            if (icon) icon.className = 'fas fa-language';
            if (text) text.textContent = 'EN';
        } else {
            if (icon) icon.className = 'fas fa-language';
            if (text) text.textContent = '中文';
        }
    }
}

// Apply language to all elements
function applyLanguage(lang) {
    const t = translations[lang];

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Navigation
    updateNavigation(t);

    // Hero Section
    updateHeroSection(t);

    // Publications Section
    updatePublicationsSection(t);

    // Services Section
    updateServicesSection(t);

    // Gallery Section
    updateGallerySection(t);

    // Contact Section
    updateContactSection(t);

    // Footer
    updateFooter(t);

    // Language applied: ${lang}
}

// Update Navigation
function updateNavigation(t) {
    const navLinks = {
        'home': t.nav.home,
        'publications': t.nav.publications,
        'services': t.nav.services,
        'gallery': t.nav.gallery,
        'contact': t.nav.contact
    };

    Object.keys(navLinks).forEach(key => {
        const link = document.querySelector(`.nav-link[href="#${key}"]`);
        if (link) {
            link.textContent = navLinks[key];
        }
    });
}

// Update Hero Section
function updateHeroSection(t) {
    // Main title
    const mainTitle = document.querySelector('.hero-content h1');
    if (mainTitle) {
        mainTitle.textContent = t.hero.welcome;
    }

    // Subtitle
    const subtitle = document.querySelector('.hero-content h2');
    if (subtitle) {
        subtitle.textContent = t.hero.title;
    }

    // University
    const university = document.querySelector('.hero-content h3');
    if (university) {
        university.textContent = t.hero.university;
    }

    const profileName = document.querySelector('.profile-name');
    if (profileName) {
        profileName.textContent = t.hero.profileName;
    }

    const profileTitle = document.querySelector('.profile-title');
    if (profileTitle) {
        profileTitle.textContent = t.hero.profileTitle;
    }

    const profileUniversity = document.querySelector('.profile-university');
    if (profileUniversity) {
        const icon = profileUniversity.querySelector('i');
        profileUniversity.innerHTML = `${icon ? icon.outerHTML : '<i class="fas fa-university me-2"></i>'}\n                                ${t.hero.profileUniversity}`;
    }

    // Scholar metrics labels
    const citationsLabel = document.getElementById('totalCitationsLabel');
    if (citationsLabel) {
        citationsLabel.textContent = t.hero.totalCitations;
    }

    // Introduction paragraph - preserving links
    const introPara = document.querySelector('.hero-content p');
    if (introPara) {
        const ntuCollegeLink = introPara.querySelector('a[href="https://ai.ntu.edu.cn/"]');
        const dingLink = introPara.querySelector('a[href*="ai.ntu.edu.cn/2024/0817/c9718a246514/page.htm"]');
        const collegeLink = introPara.querySelector('a[href*="ise.hhu.edu.cn"]');
        const hhuLink = introPara.querySelector('a[href*="www.hhu.edu.cn"]');
        const prof1Link = introPara.querySelector('a[href*="ghm"]');
        const prof2Link = introPara.querySelector('a[href*="lcm"]');

        if (ntuCollegeLink && dingLink && collegeLink && hhuLink && prof1Link && prof2Link) {
            // Clone links to preserve attributes
            const ntuCollegeClone = ntuCollegeLink.cloneNode(true);
            const dingClone = dingLink.cloneNode(true);
            const collegeClone = collegeLink.cloneNode(true);
            const hhuClone = hhuLink.cloneNode(true);
            const prof1Clone = prof1Link.cloneNode(true);
            const prof2Clone = prof2Link.cloneNode(true);

            // Update link text
            ntuCollegeClone.textContent = t.hero.ntuCollege;
            dingClone.textContent = currentLanguage === 'zh' ? '丁卫平院长' : 'Prof. Weiping Ding (丁卫平)';
            collegeClone.textContent = t.hero.collegeOf;
            hhuClone.textContent = currentLanguage === 'zh' ? '河海大学' : 'Hohai University';
            // Keep professor names as is (no translation)

            // Rebuild the paragraph based on language
            if (currentLanguage === 'zh') {
                introPara.innerHTML = `
                    我目前是${ntuCollegeClone.outerHTML}的教师，并加入了不确定性人工智能与脑认知研究团队，团队负责人为
                    ${dingClone.outerHTML}。
                    博士阶段毕业于${hhuClone.outerHTML}${collegeClone.outerHTML}，导师为
                    ${prof1Clone.outerHTML}
                    教授和
                    ${prof2Clone.outerHTML}研究员。
                    我的研究专注于将深度学习技术与遥感数据分析相结合，设计智能化的图像处理算法，将人工智能方法用于遥感图像解译工作。
                `;
            } else {
                introPara.innerHTML = `
                    I am currently a faculty member at the ${ntuCollegeClone.outerHTML},
                    and a member of the Uncertainty Artificial Intelligence and Brain Cognition Research Team led by
                    ${dingClone.outerHTML}.
                    I received my Ph.D. from the ${collegeClone.outerHTML}, ${hhuClone.outerHTML}, under the supervision of
                    ${prof1Clone.outerHTML}
                    and
                    ${prof2Clone.outerHTML}.
                    My research focuses on integrating deep learning techniques with remote sensing data analysis to design intelligent image processing algorithms
                    and apply artificial intelligence methods to remote sensing image interpretation.
                `;
            }
        }
    }

    // Navigation buttons
    const heroButtons = document.querySelectorAll('.hero-content a.btn');
    heroButtons.forEach(btn => {
        const href = btn.getAttribute('href');
        const icon = btn.querySelector('i');

        if (href === '#publications') {
            btn.innerHTML = `${icon ? icon.outerHTML : ''} ${t.buttons.publications}`;
        } else if (href === '#services') {
            btn.innerHTML = `${icon ? icon.outerHTML : ''} ${t.buttons.services}`;
        } else if (href === '#gallery') {
            btn.innerHTML = `${icon ? icon.outerHTML : ''} ${t.buttons.gallery}`;
        } else if (href === '#contact') {
            btn.innerHTML = `${icon ? icon.outerHTML : ''} ${t.buttons.contact}`;
        }
    });
}

// Update Publications Section
function updatePublicationsSection(t) {
    const pubTitle = document.querySelector('#publications h2');
    if (pubTitle) {
        pubTitle.textContent = t.publications.title;
    }

    // Re-render publications with new language
    if (typeof papersData !== 'undefined' && typeof renderPapers === 'function') {
        renderPapers(sortPapers([...papersData]));
    }
}

// Update Services Section
function updateServicesSection(t) {
    const servicesTitle = document.querySelector('#services h2');
    if (servicesTitle) {
        servicesTitle.textContent = t.services.title;
    }

    const servicesSubtitle = document.querySelector('#services p.text-center');
    if (servicesSubtitle) {
        servicesSubtitle.textContent = t.services.subtitle;
    }

    const journalReviewerTitle = document.querySelector('.service-card h3');
    if (journalReviewerTitle) {
        const icon = journalReviewerTitle.querySelector('i');
        journalReviewerTitle.innerHTML = `${icon ? icon.outerHTML : ''} ${t.services.journalReviewer}`;
    }
}

// Update Gallery Section
function updateGallerySection(t) {
    const galleryTitle = document.querySelector('#gallery h2');
    if (galleryTitle) {
        galleryTitle.textContent = t.gallery.title;
    }
}

// Update Contact Section
function updateContactSection(t) {
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) {
        contactTitle.textContent = t.contact.title;
    }

    const emailTitle = document.querySelector('#contact h4');
    if (emailTitle && emailTitle.textContent === 'Email') {
        emailTitle.textContent = t.contact.email;
    }

    const findMeTitle = document.querySelectorAll('#contact h4')[1];
    if (findMeTitle) {
        findMeTitle.textContent = t.contact.findMeOn;
    }

    // Social links text
    const socialTexts = document.querySelectorAll('.social-link-large span');
    socialTexts.forEach(span => {
        const text = span.textContent.trim();
        if (text === 'Google Scholar' || text === '谷歌学术') {
            span.textContent = t.contact.googleScholar;
        } else if (text === 'ResearchGate') {
            span.textContent = t.contact.researchGate;
        } else if (text === 'WeChat' || text === '微信') {
            span.textContent = t.contact.weChat;
        }
    });
}

// Update Footer
function updateFooter(t) {
    const footerText = document.querySelector('footer p');
    if (footerText) {
        footerText.textContent = t.footer.welcome;
    }
}

// Get current translation object
function getCurrentTranslation() {
    return translations[currentLanguage];
}

// Make functions globally available
window.toggleLanguage = toggleLanguage;
window.getCurrentTranslation = getCurrentTranslation;
window.currentLanguage = currentLanguage;

// Export for use in papers.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        translations,
        currentLanguage,
        getCurrentTranslation
    };
}

