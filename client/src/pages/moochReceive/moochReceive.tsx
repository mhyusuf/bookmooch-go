import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import './moochReceive.scss';
import { useQuery } from '@apollo/client';
import RandomCenterLoader from '../../components/Loaders/RandomCenterLoader';
import ActiveItem from '../../containers/BookItems/ActiveItem'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorPage from '../errorPage';
import formatDate from '../../services/dateProcessor';
import queryService from '../../services/queryService/queryService';
import { Transaction } from '../../services/queryService/queryServiceInterfaces';

type TParams = {
  user: string,
  number: string
}

interface Data {
  getConfidentialPendingById: Transaction;
}

export default function MoochReceivePage (props: RouteComponentProps<TParams>): JSX.Element {
  const username = props.match.params.user
  const transactionNumber = props.match.params.number
  const id = username + '/' + transactionNumber;
  const query = queryService.GET_CONF_PENDING_RECEIVE(id);

  const { loading, error, data } = useQuery<Data>(query);

  if (loading) {
    return <RandomCenterLoader />;
  }
  if (error) {
    return <ErrorPage message={error.message} ctx={props}/>
  }

  const mooch = data?.getConfidentialPendingById;

  const dateReqStr = mooch?.created_on ?  formatDate(mooch.created_on): '';

  let dateSentStr;
  if (mooch?.sent_on) dateSentStr = formatDate(mooch?.sent_on)
    else dateSentStr = "Not sent yet"

  let pointsStr = '';
  if (mooch?.points_from_receiver) {
    if (mooch.points_from_receiver === '10') {
      pointsStr = '1 point';
    } else {
      pointsStr = `${parseInt(mooch.points_from_receiver)/10} points`;
    }
  }

  return (
    <>
    <Header title="You're requesting" />;
    <div className="mooch-receive-item-grand-wrapper">
      <div className="active-item-wrapper">
        {mooch && <ActiveItem book={mooch.book}/>}
      </div>
      <p>you're spending {pointsStr} to get this book</p>
      <div className="mooch-detail-text-wrapper">
        <h4>Mooching from:</h4>
        <p>{mooch?.giverUsername}</p>
        <h4>Date requested:</h4>
        <p>{dateReqStr}</p>
        <h4>Date sent:</h4>
        <p>{dateSentStr}</p>
      </div>
      <div className="buttons-wrapper">
        <div className="received-button-wrapper">
          <Link to={`/feedback/${username}/${transactionNumber}`} style={{textDecoration:"none"}}>
            <button className="big-button">
              <div className="received" />
            </button>
          </Link>
          <p>mark received</p>
        </div>
      </div>
      <div className="mooch-receive-item-footer-wrapper">
        <Footer leftBut="back" rightBut="userHome" ctx={props}/>
      </div>
    </div>
    </>
  );
}