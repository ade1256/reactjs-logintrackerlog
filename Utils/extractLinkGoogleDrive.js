import _ from 'lodash'

export const extractLinkGoogleDrive = (link) => {
  let parsing = _.chain(link)
    .replace('?', '')
    .split('&')
    .map(_.partial(_.split, _, '=', 2))
    .fromPairs()
    .value();
  let array = _.chain(link)
    .split('/')
    .value();
  let driveId = '';
  if (parsing['https://drive.google.com/openid'] !== undefined) {
    driveId = parsing['https://drive.google.com/openid'];
  } else {
    driveId = array.length > 5 ? array[5] : array[0];
  }

  if (parsing['https://drive.google.com/ucid'] !== undefined) {
    driveId = parsing['https://drive.google.com/ucid']
  }

  return driveId;
}