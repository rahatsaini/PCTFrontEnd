

import * as HttpStatus from 'http-status-codes';


export class BaseError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

export class FetchError extends BaseError {
  statusCode: number;
  statusText: string;
  description: string;
  isAuthorizationError: boolean;

  constructor(message: string, err: any) {
    super(message);

    if (err instanceof Response) {
      let resp = <Response>err;
      this.statusCode = resp.status;

      switch (resp.status) {
        case 12029:
          this.statusText = "A connection to server could not be established";
          break;

        case HttpStatus.UNAUTHORIZED:
          this.isAuthorizationError = true;
          this.statusText = HttpStatus.getStatusText(resp.status);
          break;

        default:
          this.statusText = HttpStatus.getStatusText(resp.status);
          break;
      }

      resp.json()
        .then(body => {
          this.description = body.Message ? body.Message : body.message;
          console.log(`Error: ${this.message}, Status: ${this.statusText}, Code: ${this.statusCode}, Description: ${this.description}`);
        });
    }
    else if (err instanceof Error) {
      let error = <Error>err;
      this.description = err.message;
      console.log(`Error: ${this.message}, Description: ${this.description}`);
    }
    else {
      this.description = "???";
      console.log(`Unknown error: ${this.message}`);
    }
  }
}
