import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { selectArticles } from '../features/articles/projectsSlice';
import { Link, useParams } from 'react-router-dom';

export default function Skill () {
  const categories = useSelector(selectCategories)
  const articles = useSelector(selectArticles)

  const { name } = useParams()

  return (
    <div    >
      <h2>{name}</h2>
      <ul>
        { categories[name].map((articleSlug, i) => (
          <li>
            {i + 1} - {articleSlug}
          </li>
        ))}
      </ul>
    </div>
  )
}
