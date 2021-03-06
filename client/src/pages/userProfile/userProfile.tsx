import React from 'react';
import './userProfile.scss';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom'
import Header from "../../components/Header";
import ErrorPage from '../errorPage';
import ProfileInfo from '../../containers/ProfileInfo';
import RandomCenterLoader from '../../components/Loaders/RandomCenterLoader';
import queryService from '../../services/queryService';


type TParams = { username: string }

export default function UserProfilePage (props: RouteComponentProps<TParams>): JSX.Element { 
  const self = props.match.params.username
  const query = queryService.GET_USER(self);

  const { loading, error, data } = useQuery(query);

  if (loading) {
    return <RandomCenterLoader />;
  }
  if (error) {
    return <ErrorPage message={error.message} ctx={props}/>
  }

  return (
    <>
    <Header title="Your profile" />
    <div className="profile-grand-wrapper">
      <div className="profile-info-wrapper">
        <ProfileInfo user={data.getUserByUsername}/>
      </div>
      <div className="profileButtons">
        <div className="buttonColLeft">
          <div className="findButtonWrapper">
            <Link to="/search">
              <button className="find lateral-button">
                <div className="white-find-icon" />
              </button>
            </Link>
          </div>
          <p>Find a Book</p>
        </div>
        <div className="buttonColCenter">
          <div className="centerButtons">
            <div className="pendingButtonWrapper">
              <Link to={`/pending/${self}`}>
                <button className="pending center-button">
                  <div className="white-pending-icon" />
                </button>
              </Link>
              <p>See pending Mooches</p>
            </div>
            <div className="faqButtonWrapper">
              <Link to="/faq">
                <button className="faq center-button">
                  <div className="white-faq-icon" />
                </button>
              </Link>
              <p>See F.A.Q.s</p>
            </div>
          </div>
        </div>
        <div className="buttonColRight">
          <div className="addButtonWrapper">
            <Link to="/findadd">
              <button className="add lateral-button">
                <div className="horizontal-bar"></div>
                <div className="vertical-bar"></div>
              </button>
            </Link>
          </div>
          <p>Add a Book</p>
        </div>
      </div>
      <div className="bottomLogoutWrapper">
        <p className="bottomLogoutLink">Not your profile? All done? Log out <span style={{textDecoration: 'underline', fontWeight: 'bold'}} onClick={() => {
          localStorage.removeItem('token');
          props.history.push('/');
        }}>here</span></p>
      </div>
    </div>
    </>
  )
}