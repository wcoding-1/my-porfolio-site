import { createSlice } from '@reduxjs/toolkit';
import { ARTICLES } from '../../app/data';

export const projectsSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: ARTICLES,
  },
  reducers: {}
});

export const selectArticles = (state) => state.articles.articles;
export const filterArticles = (query, articles) => Object.values(articles).filter(article => article.title.toLowerCase().includes(query.toLowerCase()))
export default projectsSlice.reducer;
