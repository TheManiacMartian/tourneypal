import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// imports for apollo client setup
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { provideHttpClient } from '@angular/common/http';
import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

import { Environment } from '../environments/environment.example';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(),provideHttpClient(),
    // provide apollo client
    provideApollo(() => {
      // create link object
      const httpLink = inject(HttpLink);

      const basic = setContext((operation, context) => ({
        headers: {
          Accept: 'charset=utf-8',
        },
      }));

      // create auth token
      const auth = setContext((operation, context) => {
        const token = Environment.STARTGG_API_KEY; 

        if (token === null) {
          return {};
        } else {
          return {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        } 
      });
 
      // return the apollo client options
      return {
        link: ApolloLink.from([basic, auth, httpLink.create({ uri: 'https://api.start.gg/gql/alpha' })]),
        cache: new InMemoryCache(),
      };
    }),

  ],
};
