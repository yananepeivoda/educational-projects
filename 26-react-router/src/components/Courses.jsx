import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import courses from '../data/courses';
import Filter from './Filter';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();

  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState([]);

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey();
      setSortedCourses([...courses]);
    }
    setSortedCourses(sortCourses(courses, sortKey));
  }, [sortKey, navigate]);

  const handleSortChange = (event) => {
    const selectedSortKey = event.target.value;
    setSortKey(selectedSortKey);
    navigate(`?sort=${selectedSortKey}`);
  };

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      <Filter
        options={SORT_KEYS}
        selectedOption={sortKey}
        onChange={handleSortChange}
      />
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
