import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private httpClient: HttpClient) {}

  fetchMultivariateFlag(email: any) {
    return this.httpClient.get(
      `https://multivariance-ff-production.up.railway.app/user/flag/string-variation?userEmail=` +
        email,
      { responseType: 'text' }
    );
  }
}
