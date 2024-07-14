import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { Link, Outlet } from 'react-router-dom';

export default function Skills () {
  const skills = useSelector(selectCategories)

  return (
    <main>
      {/*<h1>Skill</h1>*/}
      <ul className='skills'>
        { Object.keys(skills).map(slug => (
          <li key={slug}>
            <Link to={`${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
      <Outlet/>
    </main>
  )
}
