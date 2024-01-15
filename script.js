document.addEventListener('DOMContentLoaded', function () {
    const articles = [
        { title: 'Kde hledat brigádu', keywords: ['brigády', 'hledat', 'práce'] },
        { title: 'Druhy daní', keywords: ['daně', 'poplatky', 'druhy daní'] },
        { title: 'do-ceho-investovat', keywords: ['investice', 'peníze', 'úspory', 'do ceho investovat', 'investovat', "investice"] },
        { title: "co-je-to-ruzovy-papir", keywords: ["co je to růžový papír", "růžový papír", "ruzovy papir", "papír", "daně", "odpištění daní"] }
    ];

    const form = document.querySelector('.search-bar');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const searchInput = document.getElementById('search').value.toLowerCase();
        const matchingArticles = [];

        // Search for matching articles
        articles.forEach(article => {
            if (article.keywords.some(keyword => keyword.toLowerCase().includes(searchInput))) {
                matchingArticles.push(article);
            }
        });

        if (matchingArticles.length > 0) {
            // Redirect to the page with the best match
            window.location.href = `../clanky/${matchingArticles[0].title}.html`;
        } else {
            // Handle no matching articles found
            alert('No matching articles found');
        }
    });
});