import { Injectable } from '@angular/core';
import { APP_CONSTANTS } from '../constant/app.constant.ts';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private baseUrl: string = `${APP_CONSTANTS.BACKEND_URL}api/subscription/`;

  constructor(private http: HttpClient) { }

  public GetSubscriptionsByAuthorId(authId: string): Observable<any[]> {
    const uri = `${this.baseUrl}getbyauthid`;
    return this.http.post(uri, { authId }) as Observable<any[]>;
  }
}
