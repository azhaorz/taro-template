import request from '@/utils/request';
import uris from '@/config/uris';

export function apiMock() {
  console.log(uris.mock.api);

  return request.get(uris.mock.api);
}
