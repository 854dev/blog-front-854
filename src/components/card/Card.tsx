import React, { PropsWithChildren } from 'react';

function Card(props: PropsWithChildren<any>) {
  return <div className='card'>{props.children}</div>;
}

export default Card;
