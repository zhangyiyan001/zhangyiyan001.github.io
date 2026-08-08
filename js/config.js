// ===== Configuration File =====

// Social Media Links Configuration
const socialLinks = {
    github: 'https://github.com/your-username', // Replace with actual GitHub username
    googleScholar: 'https://scholar.google.com/citations?user=your-user-id', // Replace with actual Google Scholar ID
    researchGate: 'https://www.researchgate.net/profile/your-profile', // Replace with actual ResearchGate profile
    email: 'mailto:your-email@hhu.edu.cn' // Replace with actual email
};

// Google Scholar Metrics Configuration
const scholarMetrics = {
    totalCitations: 686, // Google Scholar citation count, updated manually
    lastUpdated: '2026-08-08',
    scholarUrl: 'https://scholar.google.com/citations?user=ALuJTwMAAAAJ&hl=en'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { socialLinks, scholarMetrics };
} else {
    window.socialLinks = socialLinks;
    window.scholarMetrics = scholarMetrics;
}
