import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import actionService from '../../services/actionService';
import ErrorPage from '../../pages/errorPage';

type LoginControllerProps = {
  username: string,
  pw: string,
  ctx: RouteComponentProps
}

interface Data {
  login: { token: string }
}

export default function LoginController ({ username, pw, ...props }: LoginControllerProps): JSX.Element {

  const query = actionService.LOGIN(username, pw);
  const { loading, error, data } = useQuery<Data>(query);

  if (loading) return <div />;
  if (error) return <ErrorPage message={error.message} ctx={props.ctx}/>;

  if (data && data.login.token) {
    localStorage.setItem('token', data.login.token);
    props.ctx.history.push(`/profile/${username}`);
    props.ctx.history.go(0);
  } else return (<ErrorPage ctx={props.ctx} message="Login failed"/>)
  return <div />;
}