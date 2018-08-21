import React from 'react';

const Loading = ({ small }) => (
  <div className={`loader ${small ? 'loader--small' : ''}`}>
    <img className="loader__image" src="/images/loader.gif" alt="Loading page gif" />
  </div>
);

export default Loading;
