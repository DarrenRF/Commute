import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
<<<<<<< HEAD
import { ApolloLink, Observable, split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { AsyncStorage } from 'react-native';
=======
import { ApolloLink, Observable, split  } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { AsyncStorage } from 'react-native'
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

const cache = new InMemoryCache();

const request = async (operation) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    operation.setContext({
      headers: {
<<<<<<< HEAD
        authorization: `Bearer ${token}`,
      },
=======
        authorization: `Bearer ${token}`
      }
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    });
  }
};

<<<<<<< HEAD
const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle;
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
=======
const requestLink = new ApolloLink((operation, forward) =>
  new Observable(observer => {
    let handle;
    Promise.resolve(operation)
      .then(oper => request(oper))
      .then(() => {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch(observer.error.bind(observer));

    return () => {
      if (handle) handle.unsubscribe();
    };
  })
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
);

const httpLink = new HttpLink({
  uri: 'http://c53504fe.ngrok.io/graphql',
  credentials: 'include',
<<<<<<< HEAD
  useGETForQueries: true,
});
=======
  useGETForQueries: true
})
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
const wsLink = new WebSocketLink({
  uri: 'ws://c53504fe.ngrok.io/subscriptions',
  options: {
    reconnect: true,
<<<<<<< HEAD
    useGETForQueries: true,
  },
});
=======
    useGETForQueries: true
  }
})
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
<<<<<<< HEAD
  httpLink
);
=======
  httpLink,
)
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log(graphQLErrors);
      }
      if (networkError) {
        console.log(networkError);
      }
    }),
    requestLink,
    withClientState({
      defaults: {
<<<<<<< HEAD
        isConnected: true,
=======
        isConnected: true
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
      },
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_, { isConnected }, { cache }) => {
<<<<<<< HEAD
            cache.writeData({ data: { isConnected } });
            return null;
          },
        },
      },
      cache,
    }),
    link,
  ]),
  cache,
=======
            cache.writeData({ data: { isConnected }});
            return null;
          }
        }
      },
      cache
    }),
    link,
  ]),
  cache
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
});

export default client;
