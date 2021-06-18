import React, { Fragment, useContext } from 'react';
import './Title.scss';

import { Context } from '../../contexts/context';

function Title() {
  const context = useContext(Context);
  const title = context.dataTitle;

  return (
      <Fragment>
           <h1 className="font--size">{title}</h1>
      </Fragment>
  );
}

export default Title;