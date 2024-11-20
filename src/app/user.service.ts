import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { firstValueFrom, lastValueFrom } from 'rxjs';

const GET_CURRENT_USER =gql`
query GetCurrentUser{
  currentUser{
    id
  }
}
`

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private readonly apollo: Apollo) {}

  /** Returns the id of the current user.
   * @returns id of current user in integer format.
   */
  async getAuthUser() {
    console.log("Getting current user...")

    // await getting the current user
    const result = await lastValueFrom(this.apollo.query<any>({query: GET_CURRENT_USER}));

    return result.data;

  }
  
}
