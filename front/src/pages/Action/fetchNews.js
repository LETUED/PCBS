const axios = require('axios');
const cheerio = require('cheerio');
const { resources } = require('./NewsCollecter'); // 경로 수정

async function fetchNews() {
    const newsData = [];

    for (const resource of resources) {
        try {
            const response = await axios.get(resource.url);
            const html = response.data;
            const $ = cheerio.load(html);

            $(resource.selectors.item).each((index, element) => {
                const item = $(element);
                const newsItem = {
                    title: resource.selectors.title(item),
                    desc: resource.selectors.desc(item),
                    url: resource.selectors.url(item),
                    image: resource.selectors.image(item),
                    date: resource.selectors.date(item),
                    author: resource.selectors.author(item)
                };
                console.log(`Parsed news item from ${resource.name}:`, newsItem); // 데이터 확인용 로그
                newsData.push(newsItem);
            });
        } catch (error) {
            console.error(`Error fetching news from ${resource.name}:`, error);
        }
    }

    console.log('Fetched news data:', newsData); // 데이터 확인용 로그
    return newsData;
}

module.exports = fetchNews;
