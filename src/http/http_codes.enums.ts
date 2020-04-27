export namespace Http {
  export enum Success {
    'OK' = '200',
    'CREATED' = '201',
    'NO_CONTENT' = '204',
  }

  export enum clientErrors {
    'BAD_REQUEST' = '400',
    'UNAUTHORIZED' = '401',
    'FORBIDDEN' = '403',
    'NOT_FOUND' = '404',
    'GONE' = '410',
  }

  export enum serverErrors {
    'INTERNAL_SERVER_ERROR' = '500',
    'NOT_IMPLEMENTED' = '501',
    'BAD_GATEWAY' = '502',
    'PROXY_ERROR' = '502',
    'SERVICE_UNAVAILABLE' = '503',
  }
}
