import _ from 'lodash'
import Constants from '../Config/Constants';

const extractSubtitle = (link) => {
  let linkSubtitle = ''
  let array = _.chain(link)
    .split('/')
    .value();
  if(array.length > 4) {
    linkSubtitle = array[4]
  }
  return linkSubtitle
}

const extractSubscene = (link) => {
  let url = ''
  let matches = link.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
  let domain = matches && matches[1];
  let isSubscene = domain === 'subscene.com' || domain === 'www.subscene.com'
  if(isSubscene){
    url = `${Constants.JWPLAYER}/subtitle?link=${link}`
  } else {
    url = link
  }

  return url
}

export default {
  extractSubtitle,
  extractSubscene
}