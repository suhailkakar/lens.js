import { gql } from '@urql/core';
import 'isomorphic-unfetch';

export const GET_PING = `
  query {
    ping
  }
`;
