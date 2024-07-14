import React from "react";
import { useSelector } from "react-redux";
import { selectArticles, filterArticles } from "../features/articles/projectsSlice";
import Search from "./Search";

// Import Link and useSearchParams from React Router
import { Link ,useSearchParams} from "react-router-dom";

export default function Projects () {
  const articles = useSelector(selectArticles);

  // Grab URLSearchParams object from useSearchParams hook
  const [searchParam, setSearchParams] = useSearchParams()
  
  // Get the queryParams from object returned from useSearchParams and set to `title`

  const title = searchParam.get('title');

  const filteredArticles = title ? filterArticles(title, articles) : Object.values(articles)

  return (
    <main>
      {/*<h1>Projects</h1>*/}
      <ul className='project'>
        { filteredArticles.map(article => (
          <li key={article.slug}>
            {/* Replace these a tags! */}

              {article.title}

          </li>
        ))}
      </ul>
      <Search />
    </main>
  )
}
