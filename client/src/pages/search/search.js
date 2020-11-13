import './search.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import UserHomeButton from '../../components/Buttons/UserHomeButton';
import CircleAddButton from '../../components/Buttons/CircleAddButton';

export default function SearchPage (props) {
  const [searchText, setSearchText] = useState('');

  return (
    <>
    <Header title="Find a book" />
    <div className="search-page-grand-wrapper">
      <div className="search-top-block">
        <p>Search here by title, author or topic</p>
        <div className="searchForm">
          <input onChange={e=>setSearchText(e.target.value)} type='text' required />
          <Link to={`/searchresults/${searchText}`} style={{textDecoration:'none'}}>
            <button className="search-button">
              <p>Search</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="browse-block">
        <p>Or, try browsing the catalogue</p>
        <div className="new-books-wrapper">
          <Link to="/searchresults/~~~recent" style={{textDecoration:'none'}}>
            <button className="square-button">
              <p>
                Newly<br />Added<br />Books
              </p>
            </button>
          </Link>
          <p>The latest books to hit Bookmooch</p>
        </div>
        <div className="available-books-wrapper">
          <p>Books with the most listings by users</p>
          <Link to="/searchresults" style={{textDecoration:'none'}}>
            <button className="square-button">
              <p>
                Most<br />Available<br />Books
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div className="search-footer">
        <div className='footer-button'>
          <UserHomeButton />
        </div>
        <CircleAddButton />
        <div className='footer-button'>
          <div className="placeholder"/>
        </div>
      </div>
    </div>
    </>
  );
}
