import React from 'react';
import { render, screen } from '@testing-library/react';
import { gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';

import UserProfilePage from './userProfile';

const GET_USER = gql`
  query {
    getUserByUsername(username: "mattyboi") {
      display_name
      username
      points
      listingCount
      feedback_score
    }
  }
`;

const mocks = [
  {
    request: {
      query: GET_USER
    },
    result: {
      data: {
        getUserByUsername: {
          display_name: 'mattyboi (United Kingdom)',
          username: 'mattyboi',
          points: '-18',
          listingCount: 12,
          feedback_score: '0'
        }
      }
    }
  }
];

describe('User profile page', () => {
  let page;
  beforeEach(() => {
    page = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserProfilePage match={{ params: { username: 'matttyboi' } }} />
      </MockedProvider>,
      { wrapper: MemoryRouter }
    );
  });

  it('should show loading', () => {
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should show the user profile info', async () => {
    expect(await screen.findByText('mattyboi')).toBeInTheDocument();
  });
});
