const API_KEY = process.env.API_KEY;
export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchSomething: {
        title: 'Action',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchMore: {
        title: 'Comedy',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchMore2: {
        title: 'Horror Movies',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    }
}