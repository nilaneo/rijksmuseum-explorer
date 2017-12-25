import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SHARED_PARAMS = {
  key: '3tYxhQmI',
  format: 'json'
};

@Injectable()
export class RijksmuseumService {
  constructor(private httpClient: HttpClient) {}

  getArtObjects() {
    return this.httpClient.get('https://www.rijksmuseum.nl/api/en/collection', {
      params: SHARED_PARAMS
    });
  }

  getArtObjectDetails(objectNumber) {
    return this.httpClient.get(`https://www.rijksmuseum.nl/api/en/collection/${objectNumber}`, {
      params: SHARED_PARAMS
    });
  }
}
