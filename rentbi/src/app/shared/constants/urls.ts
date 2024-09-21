import { environment } from "src/environments/environment";

const BASE_URL = environment.production? '' : 'http://localhost:5000';

export const BikeS_URL = BASE_URL + '/api/Bikes';


export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';

export const UPLOAD_URL = BASE_URL + '/api/upload';
export const UPLOAD_CREATE_URL = UPLOAD_URL + '/create';
export const UPLOAD_NEW_FOR_CURRENT_USER_URL = UPLOAD_URL + '/newOrderForCurrentUser';
