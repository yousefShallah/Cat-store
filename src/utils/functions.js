
import { parse } from 'qs';
import url from 'url';


export function getLocationQuery(search) {
  return parse(url.parse(search).query);
}