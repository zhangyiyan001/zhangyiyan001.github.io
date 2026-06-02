// ===== Publication Management System =====

// Sample publication data with model images
const papersData = [
    {
        id: 1,
        title: "Multimodal Transformer Network for Hyperspectral and LiDAR Classification",
        authors: "Yiyan Zhang, Shufang Xu, Danfeng Hong, Hongmin Gao, Chenkai Zhang, Meiqiao Bi, Chenming Li",
        venue: "IEEE Transactions on Geoscience and Remote Sensing",
        venueUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=36",
        journalInfo: "(SCI, Q1, IF:8.6)",
        esiHighlyCited: true,
        year: 2023,
        type: "journal",
        doi: null,
        pdf: "https://ieeexplore.ieee.org/document/10145469",
        code: "https://github.com/zhangyiyan001/MTNet",
        keywords: ["Feature extraction", "Transformers", "Hyperspectral and LiDAR Classification"],
        // Model image fields
        hasModelImage: true,
        modelImage: "images/models/multimodal-transformer-architecture.png",
        modelImageAlt: "Multimodal Transformer Network Architecture",
        // Citation data
        citations: 70,  // Google Scholar updated 2026-06-02
        googleScholarId: "citation_id_here",  // Google Scholar 文章ID（可选）
       
    },
    {
        id: 2,
        title: "A dual-branch siamese spatial-spectral transformer attention network for Hyperspectral Image Change Detection",
        authors: "Yiyan Zhang, Tingting Wang, Chenkai Zhang, Shufang Xu, Hongmin Gao, Chenming Li",
        venue: "Expert Systems with Applications",
        venueUrl: "https://www.sciencedirect.com/journal/expert-systems-with-applications",
        journalInfo: "(SCI, Q1, IF:7.5)",
        year: 2024,
        type: "journal",
        doi: null,
        pdf: "https://www.sciencedirect.com/science/article/pii/S0957417423026271",
        code: "https://github.com/zhangyiyan001/DBS3TAN",
        keywords: ["Hyperspectral change detection", "Dual-branch siamese network", "Spatial–spectral transformer", "Attention module", "CNN", "Change detection"],
        // Model image fields
        hasModelImage: true,
        modelImage: "images/models/dbs3tan-architecture.png",
        modelImageAlt: "DBS3TAN Network Architecture",
        // Citation data
        citations: 42,
        googleScholarId: "citation_id_here",
       
    },
    {
        id: 3,
        title: "Depthwise separable convolutional autoencoders for hyperspectral image change detection",
        authors: "Yiyan Zhang, Yongfeng Zhou, Shufang Xu, Hongmin Gao, Chenming Li, Qiqiang Zhong, Bing Zhang",
        venue: "IEEE Geoscience and Remote Sensing Letters",
        venueUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8859",
        journalInfo: "(SCI, Q1, IF:4.4)",
        year: 2023,
        type: "journal",    
        doi: null,
        pdf: "https://ieeexplore.ieee.org/document/10138748",
        code: null,
        keywords: ["Autoencoders", "Change Detection", "Depthwise Separable Convolutional", "Hyperspectral change detection"],
        // Model image fields
        hasModelImage: true,
        modelImage: "images/models/dsconv-autoencoder-architecture.png",
        modelImageAlt: "DSConv Autoencoder Architecture",
        // Citation data
        citations: 28,
        googleScholarId: "citation_id_here",
        
    },
    {
        id: 4,
        title: "A cross-modal feature aggregation and enhancement network for hyperspectral and LiDAR joint classification",
        authors: "Yiyan Zhang, Hongmin Gao, Zhou Jun, Chenkai Zhang, Pedram Ghamisi, Shufang Xu, Chenming Li, Bing Zhang",
        venue: "Expert Systems with Applications",
        venueUrl: "https://www.sciencedirect.com/journal/expert-systems-with-applications",
        journalInfo: "(SCI, Q1, IF:7.5)",
        year: 2024,
        type: "journal",
        doi: null,
        pdf: "https://www.sciencedirect.com/science/article/pii/S0957417424020128",
        code: "https://github.com/zhangyiyan001/CMFAEN",
        keywords: ["Image classification", "Land use and Land cover", "Cross-modal feature fusion", "Feature aggregation and enhancement"],
        // Model image fields
        hasModelImage: true,
        modelImage: "images/models/cmfaen-architecture.png",
        modelImageAlt: "CMFAEN Network Architecture",
        // Citation data
        citations: 44,
        googleScholarId: "citation_id_here"
    },
    {
        id: 5,
        title: "Adaptive multi-stage fusion of hyperspectral and LiDAR data via selective state space models",
        authors: "Yiyan Zhang, Hongmin Gao, Zhonghao Chen, Shuyu Fei, Jun Zhou, Pedram Ghamisi, Bing Zhang",
        venue: "Information Fusion",
        venueUrl: "https://www.sciencedirect.com/journal/information-fusion",
        journalInfo: "(SCI, Q1, IF:15.5)",
        year: 2026,
        type: "journal",
        doi: null,
        pdf: "https://www.sciencedirect.com/science/article/pii/S1566253525005615",
        code: "https://github.com/zhangyiyan001/AMSFN",
        keywords: [ "Mamba", "Selective state space", "Multi-source fusion", "State space models", "Adaptive fusion"],
        // Model image fields
        hasModelImage: true,
        modelImage: "images/models/amsfn-architecture.png",
        modelImageAlt: "AMSFN Network Architecture",
        // Citation data
        citations: 12,
        googleScholarId: "citation_id_here"
    },
    {
        id: 6,
        title: "E-Mamba: Efficient Mamba network for hyperspectral and LiDAR joint classification",
        authors: "Yiyan Zhang, Hongmin Gao, Zhonghao Chen, Chenkai Zhang, Pedram Ghamisi, Bing Zhang",
        venue: "Information Fusion",
        venueUrl: "https://www.sciencedirect.com/journal/information-fusion",
        journalInfo: "(SCI, Q1, IF:15.5)",
        year: 2026,
        type: "journal",
        doi: null,
        pdf: "https://www.sciencedirect.com/science/article/pii/S1566253525007213",
        code: "https://github.com/zhangyiyan001/E-Mamba",
        keywords: ["Selective scan mechanism", "Remote sensing", "Efficient networks", "State Space Model", "Cross-modal fusion", "Lightweight design"],
        // Model image fields
        hasModelImage: true,
        modelImage: "images/models/e-mamba-architecture.png",
        modelImageAlt: "E-Mamba Network Architecture",
        // Citation data
        citations: 16,
        googleScholarId: "citation_id_here"
    },
    {
        id: 7,
        title: "AMSSE-Net: Adaptive multiscale spatial–spectral enhancement network for classification of hyperspectral and LiDAR data",
        authors: "Hongmin Gao, Hao Feng, Yiyan Zhang, Shufang Xu, Bing Zhang",
        venue: "IEEE Transactions on Geoscience and Remote Sensing",
        venueUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=36",
        journalInfo: "(SCI, Q1, IF:8.6)",
        year: 2023,
        type: "journal",
        doi: null,
        pdf: 'https://ieeexplore.ieee.org/document/10313328',  // 如果有 PDF 链接，请在此更新
        code: 'https://github.com/haofeng0003/AMSSE-Net',  // 如果有代码仓库，请在此更新
        keywords: ["Multiscale feature extraction", "Spatial-spectral enhancement", "Feature fusion"],
        // Model image fields
        hasModelImage: true,
        modelImage: "images/models/amsse-net.png",
        modelImageAlt: "AMSSE-Net Network Architecture",
        // Citation data
        citations: 76,  // Google Scholar updated 2026-06-02
        googleScholarId: "citation_id_here"  // 请更新为实际的 Google Scholar ID
    },
    {
        id: 8,
        title: "Interactive enhanced network based on multihead self-attention and graph convolution for classification of hyperspectral and LiDAR data",
        authors: "Hongmin Gao, Hao Feng, Yiyan Zhang, Shuyu Fei, Runhua Shen, Shufang Xu, Bing Zhang",
        venue: "IEEE Transactions on Geoscience and Remote Sensing",
        venueUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=36",
        journalInfo: "(SCI, Q1, IF:8.6)",
        year: 2024,
        type: "journal",
        doi: null,
        pdf: 'https://ieeexplore.ieee.org/document/10693614',  // 如果有 PDF 链接，请在此更新
        code: 'https://github.com/haofeng0003/MSA-GCN',  // 如果有代码仓库，请在此更新
        keywords: ["Multihead self-attention", "Graph convolution", "Interactive learning"],
        // Model image fields
        hasModelImage: true,
        modelImage: "images/models/msa-gcn.png",
        modelImageAlt: 'msa-gcn network architecture',
        // Citation data
        citations: 27,  // Google Scholar updated 2026-06-02
        googleScholarId: "citation_id_here"  // 请更新为实际的 Google Scholar ID
    },
    {
        id: 9,
        title: "Global to local: A hierarchical detection algorithm for hyperspectral image target detection",
        authors: "Zhonghao Chen, Zhengtao Lu, Hongmin Gao, Yiyan Zhang, Jia Zhao, Danfeng Hong, Bing Zhang",
        venue: "IEEE Transactions on Geoscience and Remote Sensing",
        venueUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=36",
        journalInfo: "(SCI, Q1, IF:8.6)",
        esiHighlyCited: true,
        year: 2022,
        type: "journal",
        doi: null,
        pdf: 'https://ieeexplore.ieee.org/abstract/document/9968036',
        code: 'https://github.com/zhonghaochen/G2LHTD_Master',
        keywords: ["Target detection", "Hierarchical detection", "Global to local", "Hyperspectral image", "Detection algorithm", "Remote sensing"],
        // Model image fields
        hasModelImage: true,
        modelImage: "images/models/g2lhtd.png",
        modelImageAlt: "G2LHTD network architecture",
        // Citation data
        citations: 92,
        googleScholarId: "citation_id_here"
    },
    {
        id: 10,
        title: "Dual-feature attention-based contrastive prototypical clustering for multimodal remote sensing data",
        authors: "Shufang Xu, Xinchen Ding, Yiyan Zhang, Zhen Zhang, Hongmin Gao, Bing Zhang",
        venue: "IEEE Transactions on Geoscience and Remote Sensing",
        venueUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=36",
        journalInfo: "(SCI, Q1, IF:8.6)",
        year: 2024,
        type: "journal",
        doi: null,
        pdf: 'https://ieeexplore.ieee.org/document/10745565/',  // 如果有 PDF 链接，请在此更新
        code: 'https://github.com/RogsDing/DFCPC',  // 如果有代码仓库，请在此更新
        keywords: ["Contrastive learning", "Prototypical clustering", "Dual-feature attention", "Multimodal remote sensing", "Unsupervised learning"],
        // Model image fields
        hasModelImage: true,
        modelImage: 'images/models/dfcpc.png',
        modelImageAlt: 'dfcpc network architecture',
        // Citation data
        citations: 10,  // Google Scholar updated 2026-06-02
        googleScholarId: "citation_id_here"  // 请更新为实际的 Google Scholar ID
    },
    {
        id: 11,
        title: "Strengthened residual graph and multiscale gated guided convolutional fusion network for hyperspectral change detection",
        authors: "Shufang Xu, Xiangfei Xia, Haiwei Li, Yiyan Zhang, Runhua Sheng, Hongmin Gao, Bing Zhang",
        venue: "IEEE Transactions on Geoscience and Remote Sensing",
        venueUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=36",
        journalInfo: "(SCI, Q1, IF:8.6)",
        year: 2024,
        type: "journal",
        doi: null,
        pdf: 'https://ieeexplore.ieee.org/document/10770276',  // 如果有 PDF 链接，请在此更新
        code: 'https://github.com/zhangyiyan001/srgmgn',  // 如果有代码仓库，请在此更新
        keywords: ["Change detection", "Residual graph", "Multiscale feature fusion", "Gated convolution", "Hyperspectral image"],
        // Model image fields
        hasModelImage: true,
        modelImage: 'images/models/srgmgn.png',
        modelImageAlt: 'srgmgn network architecture',
        // Citation data
        citations: 6,  // Google Scholar updated 2026-06-02
        googleScholarId: "citation_id_here"  // 请更新为实际的 Google Scholar ID
    }
    
];

// Global variables - simplified after removing search/filter

// ===== Helper function to extract impact factor from journalInfo =====
function extractImpactFactor(journalInfo) {
    if (!journalInfo) return 0;
    // Extract IF value from string like "(SCI, Q1, IF:8.6)"
    const match = journalInfo.match(/IF:\s*(\d+\.?\d*)/);
    return match ? parseFloat(match[1]) : 0;
}

// ===== Helper function to check if Yiyan Zhang is first author =====
function isYiyanZhangFirstAuthor(authors) {
    // Check if the authors string starts with "Yiyan Zhang"
    return authors.trim().startsWith('Yiyan Zhang');
}

// ===== Sort papers function =====
function sortPapers(papers) {
    return papers.sort((a, b) => {
        const aIsFirstAuthor = isYiyanZhangFirstAuthor(a.authors);
        const bIsFirstAuthor = isYiyanZhangFirstAuthor(b.authors);
        
        // Priority 1: Yiyan Zhang first author papers come first
        if (aIsFirstAuthor && !bIsFirstAuthor) return -1;
        if (!aIsFirstAuthor && bIsFirstAuthor) return 1;
        
        // For Yiyan Zhang first author papers
        if (aIsFirstAuthor && bIsFirstAuthor) {
            // Sort by citations (descending)
            if (b.citations !== a.citations) {
                return (b.citations || 0) - (a.citations || 0);
            }
            // Then by impact factor (descending)
            const aIF = extractImpactFactor(a.journalInfo);
            const bIF = extractImpactFactor(b.journalInfo);
            if (bIF !== aIF) {
                return bIF - aIF;
            }
            // Finally by year (descending)
            return b.year - a.year;
        }
        
        // For other papers, sort by year (descending)
        return b.year - a.year;
    });
}

// Initialize papers system
document.addEventListener('DOMContentLoaded', function() {
    initPapersSystem();
    
    // Listen for language changes
    document.addEventListener('languageChanged', function(e) {
        console.log('Language changed, re-rendering publications...');
        const sortedPapers = sortPapers([...papersData]);
        renderPapers(sortedPapers);
    });
});

function initPapersSystem() {
    // Sort papers before rendering
    const sortedPapers = sortPapers([...papersData]);
    renderPapers(sortedPapers);
    initPaperInteractions();
}

// ===== Render publication list =====
function renderPapers(papers) {
    const container = document.getElementById('publicationsList');
    if (!container) return;

    if (papers.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center">
                <div class="no-results">
                    <i class="fas fa-file-alt fa-3x text-muted mb-3"></i>
                    <h4>No publications available</h4>
                    <p>Check back later for new publications</p>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = papers.map(paper => createPaperCard(paper)).join('');
}

// ===== Helper function to highlight specific author =====
function highlightAuthor(authors) {
    // Highlight "Yiyan Zhang" with bold font
    return authors.replace(/Yiyan Zhang/g, '<strong style="font-weight: 700; color: #0056b3;">Yiyan Zhang</strong>');
}

// ===== Create publication card with model image =====
function createPaperCard(paper) {
    // Get current translations
    const t = typeof getCurrentTranslation === 'function' ? getCurrentTranslation() : {
        publications: {
            journalArticle: 'Journal Article',
            conferenceArticle: 'Conference Paper',
            authors: 'Authors',
            journal: 'Journal',
            conference: 'Conference',
            pdf: 'PDF',
            doi: 'DOI',
            code: 'Code',
            esiHighlyCited: '🏆 ESI Highly Cited Paper',
            noModelDiagram: 'No model diagram available',
            clickToEnlarge: 'Click to enlarge'
        }
    };
    
    const typeIcon = paper.type === 'journal' ? 'fa-book' : 'fa-users';
    const typeText = paper.type === 'journal' ? t.publications.journalArticle : t.publications.conferenceArticle;
    const venueColor = paper.type === 'journal' ? 'primary' : 'success';

    return `
        <div class="col-lg-12 mb-4 publication-item" data-type="${paper.type}" data-id="${paper.id}">
            <div class="publication-card">
                <div class="publication-layout">
                    <!-- Left side: Publication information -->
                    <div class="publication-info">
                        <div class="publication-header d-flex justify-content-between align-items-start mb-3">
                            <h4 class="publication-title flex-grow-1">
                                <i class="fas ${typeIcon} me-2 text-${venueColor}"></i>
                                ${paper.title}
                            </h4>
                            <span class="badge bg-${venueColor}">${typeText}</span>
                        </div>

                        <div class="publication-meta mb-3">
                            <div class="publication-authors mb-2">
                                <i class="fas fa-user-friends me-2 text-muted"></i>
                                <strong>${t.publications.authors}:</strong> ${highlightAuthor(paper.authors)}
                            </div>
                            <div class="publication-venue mb-2">
                                <i class="fas fa-book-open me-2 text-muted"></i>
                                <strong>${paper.type === 'journal' ? t.publications.journal : t.publications.conference}:</strong>
                                ${paper.venueUrl ?
                                    `<a href="${paper.venueUrl}" class="text-${venueColor}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; font-weight: 500;">${paper.venue}</a>` :
                                    `<span class="text-${venueColor}">${paper.venue}</span>`
                                }, ${paper.year}
                                ${paper.journalInfo ? `<span class="badge bg-success" style="font-size: 0.75em; font-weight: 500; margin-left: 8px;">${paper.journalInfo}</span>` : ''}
                                ${paper.esiHighlyCited ? `<span class="badge bg-warning text-dark" style="font-size: 0.75em; font-weight: 600; margin-left: 8px;">${t.publications.esiHighlyCited}</span>` : ''}
                            </div>
                        </div>

                        <div class="publication-keywords mb-3">
                            <i class="fas fa-tags me-2 text-muted"></i>
                            ${paper.keywords.map(keyword => `<span class="keyword-tag-sm">${keyword}</span>`).join(' ')}
                        </div>

                        <div class="publication-links">
                            ${paper.pdf ? `
                                <a href="${paper.pdf}" class="btn btn-sm btn-outline-primary" target="_blank">
                                    <i class="fas fa-file-pdf me-1"></i>${t.publications.pdf}
                                </a>
                            ` : ''}
                            ${paper.doi ? `
                                <a href="https://doi.org/${paper.doi.replace(/^https?:\/\/doi\.org\//, '')}" class="btn btn-sm btn-outline-primary" target="_blank">
                                    <i class="fas fa-link me-1"></i>${t.publications.doi}
                                </a>
                            ` : ''}
                            ${paper.code ? `
                                <a href="${paper.code}" class="btn btn-sm btn-outline-primary" target="_blank">
                                    <i class="fas fa-code me-1"></i>${t.publications.code}
                                </a>
                            ` : ''}
                            ${createCitationBadge(paper)}
                        </div>
                    </div>

                    <!-- Right side: Model image -->
                    <div class="publication-model">
                        ${createModelImageSection(paper)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ===== Create citation badge =====
function createCitationBadge(paper) {
    // Get current translations
    const t = typeof getCurrentTranslation === 'function' ? getCurrentTranslation() : {
        publications: {
            citations: 'citations',
            viewCitations: 'View citations on Google Scholar',
            citationCount: 'Citation count'
        }
    };
    
    // If no citation data is available, return empty string
    if (paper.citations === undefined || paper.citations === null) {
        return '';
    }

    // Build Google Scholar URL if googleScholarId is provided
    let scholarUrl = '';
    if (paper.googleScholarId && paper.googleScholarId !== 'citation_id_here') {
        scholarUrl = `https://scholar.google.com/scholar?cluster=${paper.googleScholarId}`;
    } else if (paper.pdf) {
        // Fallback: Search by title on Google Scholar
        scholarUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(paper.title)}`;
    }

    // Create the badge with or without link
    const badgeContent = `
        <span class="citation-badge">
            <i class="fas fa-quote-right me-1"></i>
            <span class="citation-count">${paper.citations}</span>
            <span class="citation-label">${t.publications.citations}</span>
        </span>
    `;

    if (scholarUrl) {
        return `
            <a href="${scholarUrl}" 
               class="btn btn-sm citation-link-highlight" 
               target="_blank"
               title="${t.publications.viewCitations}"
               data-citations="${paper.citations}">
                ${badgeContent}
            </a>
        `;
    } else {
        return `
            <span class="btn btn-sm citation-link-highlight disabled" 
                  title="${t.publications.citationCount}: ${paper.citations}"
                  data-citations="${paper.citations}">
                ${badgeContent}
            </span>
        `;
    }
}

// ===== Create model image section =====
function createModelImageSection(paper) {
    // Get current translations
    const t = typeof getCurrentTranslation === 'function' ? getCurrentTranslation() : {
        publications: {
            noModelDiagram: 'No model diagram available',
            clickToEnlarge: 'Click to enlarge'
        }
    };
    
    if (!paper.hasModelImage || !paper.modelImage) {
        return `
            <div class="model-placeholder">
                <i class="fas fa-image fa-3x text-muted"></i>
                <p class="mt-2 text-muted">${t.publications.noModelDiagram}</p>
            </div>
        `;
    }

    return `
        <div class="model-image-container">
            <img src="${paper.modelImage}"
                 alt="${paper.modelImageAlt}"
                 class="model-image"
                 onclick="openModelImage('${paper.modelImage}', '${paper.modelImageAlt}', '${paper.modelImageCaption || ''}')"
                 loading="lazy">
            ${paper.modelImageCaption ? `
                <div class="model-caption">
                    <small class="text-muted">${paper.modelImageCaption}</small>
                </div>
            ` : ''}
            <div class="model-overlay">
                <i class="fas fa-search-plus"></i>
                <span>${t.publications.clickToEnlarge}</span>
            </div>
        </div>
    `;
}

// ===== Open model image in lightbox =====
function openModelImage(imageSrc, imageAlt, imageCaption) {
    // Get current translations
    const t = typeof getCurrentTranslation === 'function' ? getCurrentTranslation() : {
        publications: {
            download: 'Download'
        }
    };
    
    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.className = 'model-lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <div class="lightbox-header">
                <h5 class="lightbox-title">${imageAlt}</h5>
                <button class="lightbox-close" onclick="closeModelLightbox()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="lightbox-body">
                <img src="${imageSrc}" alt="${imageAlt}" class="lightbox-image">
                ${imageCaption ? `
                    <div class="lightbox-caption">
                        <p class="mb-0 text-muted">${imageCaption}</p>
                    </div>
                ` : ''}
            </div>
            <div class="lightbox-footer">
                <button class="btn btn-outline-primary btn-sm" onclick="downloadModelImage('${imageSrc}', '${imageAlt}')">
                    <i class="fas fa-download me-1"></i>${t.publications.download}
                </button>
            </div>
        </div>
    `;

    // Add styles
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
    `;

    const content = lightbox.querySelector('.lightbox-content');
    content.style.cssText = `
        background: white;
        border-radius: 12px;
        max-width: 90vw;
        max-height: 90vh;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        cursor: default;
        animation: slideUp 0.3s ease;
    `;

    const header = lightbox.querySelector('.lightbox-header');
    header.style.cssText = `
        padding: 1.5rem;
        border-bottom: 1px solid #e9ecef;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const body = lightbox.querySelector('.lightbox-body');
    body.style.cssText = `
        padding: 1.5rem;
        text-align: center;
        max-height: 60vh;
        overflow-y: auto;
    `;

    const image = lightbox.querySelector('.lightbox-image');
    image.style.cssText = `
        max-width: 100%;
        max-height: 50vh;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    `;

    const caption = lightbox.querySelector('.lightbox-caption');
    if (caption) {
        caption.style.cssText = `
            margin-top: 1rem;
            font-style: italic;
        `;
    }

    const footer = lightbox.querySelector('.lightbox-footer');
    footer.style.cssText = `
        padding: 1rem 1.5rem;
        border-top: 1px solid #e9ecef;
        text-align: center;
    `;

    // Add dark mode styles
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        content.style.background = '#2d3748';
        content.style.color = '#f8f9fa';
        header.style.borderColor = '#4a5568';
        footer.style.borderColor = '#4a5568';
    }

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Add to page
    document.body.appendChild(lightbox);

    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeModelLightbox();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModelLightbox();
        }
    });
}

// ===== Close model lightbox =====
function closeModelLightbox() {
    const lightbox = document.querySelector('.model-lightbox');
    if (lightbox) {
        lightbox.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (lightbox.parentNode) {
                lightbox.parentNode.removeChild(lightbox);
            }
        }, 300);
    }
}

// ===== Download model image =====
function downloadModelImage(imageSrc, imageAlt) {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `${imageAlt.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
    link.target = '_blank';
    link.click();
}

// ===== Search and filter functionality - Removed =====

// ===== Paper interaction functionality =====
function initPaperInteractions() {
    // Removed abstract toggle and hover effects
}

// ===== Share and Citation functions - Removed =====

// ===== Show notification =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification-toast position-fixed`;
    notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 1050;
        min-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-check-circle me-2"></i>
            ${message}
        </div>
    `;

    document.body.appendChild(notification);

    // Auto remove
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ===== Export publication list =====
function exportPapers(format = 'json') {
    const filteredPapers = papersData; // Since we removed filter functionality, export all papers

    switch (format) {
        case 'json':
            exportAsJSON(filteredPapers);
            break;
        case 'csv':
            exportAsCSV(filteredPapers);
            break;
        case 'bibtex':
            exportAsBibTeX(filteredPapers);
            break;
        default:
            console.error('Unsupported export format');
    }
}

// ===== JSON export =====
function exportAsJSON(papers) {
    const dataStr = JSON.stringify(papers, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = `papers_${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// ===== CSV export =====
function exportAsCSV(papers) {
    const headers = ['Title', 'Authors', 'Venue', 'Year', 'Type', 'DOI', 'Abstract'];
    const csvContent = [
        headers.join(','),
        ...papers.map(paper => [
            `"${paper.title}"`,
            `"${paper.authors}"`,
            `"${paper.venue}"`,
            paper.year,
            paper.type,
            paper.doi || '',
            `"${paper.abstract.replace(/"/g, '""')}"`
        ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `papers_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}

// ===== BibTeX export =====
function exportAsBibTeX(papers) {
    const bibtexContent = papers.map(paper => {
        const citation = generateCitation(paper);
        return citation.bibtex;
    }).join('\n\n');

    const blob = new Blob([bibtexContent], { type: 'text/plain;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `papers_${new Date().toISOString().split('T')[0]}.bib`;
    link.click();
}

// ===== Statistics functionality =====
function getPapersStatistics() {
    const stats = {
        total: papersData.length,
        journals: papersData.filter(p => p.type === 'journal').length,
        conferences: papersData.filter(p => p.type === 'conference').length,
        years: {}
    };

    papersData.forEach(paper => {
        stats.years[paper.year] = (stats.years[paper.year] || 0) + 1;
    });

    return stats;
}

// Display statistics
function displayStatistics() {
    const stats = getPapersStatistics();
    console.log('Publication Statistics:', stats);
    return stats;
}

// ===== Utility functions =====
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        console.log('Link copied to clipboard');
    } catch (err) {
        console.error('Copy failed:', err);
    }

    document.body.removeChild(textarea);
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
