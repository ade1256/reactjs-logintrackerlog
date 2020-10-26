/* eslint-disable max-len */
import { LoadingWrapper } from './commonUtils.styles';
import Assets from '../Assets';
import React from 'react';
import { isEmpty } from 'lodash';

const isObjectEmpty = object => {
  return object === undefined || object.length === 0;
};

const isLastItemOfArray = (elementToCheck, array = []) => {
  const itemIndex = array.indexOf(elementToCheck);
  const dataLength = array.length - 1;

  return itemIndex === dataLength;
};

const displayLoading = (isLoading, id = '') => {
  return isLoading ? (
    <LoadingWrapper id={isEmpty(id) ? '' : id}>
      <img alt={'loading ...'} src={Assets.ICON.LOADING} />
    </LoadingWrapper>
  ) : null;
};

const getQueryParameter = url => {
  // isObjectEmpty(!url);
  // {
  //   const queryParameters = url.split('?')[1];
  //   if (!isEmpty(queryParameters)) {
  //     const parameters = queryParameters.split('&');
  //     parameters.forEach(parameter => {
  //       const pair = parameter.split('=');
  //       parametersObject[pair[0]] = pair[1];
  //     });
  //   }
  // }
  return {};
  //return parametersObject;
};

function checkNextPage(total, page, limit) {
  if (total > limit * page) return true;
  return false;
}

function delaySearch(timeout, setKeyword) {
  clearTimeout(timeout);
  return setTimeout(function() {
    setKeyword();
  }, 1000);
}
function isUrl(str) {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line no-useless-escape
  const checker = /(http(s)?:\/\/.)?(ftp?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,8}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gim;
  return checker.test(str);
}

export {
  isObjectEmpty,
  displayLoading,
  isLastItemOfArray,
  getQueryParameter,
  checkNextPage,
  delaySearch,
  isUrl
};
