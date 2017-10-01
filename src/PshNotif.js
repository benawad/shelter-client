import React from 'react';
import { graphql, gql } from 'react-apollo';

const acceptedSubscriptions = gql`
  subscription {
    accepted {
      address
    }
  }
`;

class PshNotif extends React.Component {
  componentWillMount() {
    this.props.data.subscribeToMore({
      document: acceptedSubscriptions,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }
        const { address } = subscriptionData.data.accepted;
        this.props.history.push('/MatchFound', address);
        return prev;
      },
    });
  }

  render() {
    return this.props.children;
  }
}

const acceptedQuery = gql`
  {
    justAccepted {
      address
    }
  }
`;

export default graphql(acceptedQuery)(PshNotif);
