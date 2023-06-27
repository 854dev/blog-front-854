import React, { PropsWithChildren } from 'react';

function Card(props: PropsWithChildren<{ clickable?: boolean }>) {
  return <div className={`card ${props.clickable ? 'clickable' : ''}`}>{props.children}</div>;
}

export default Card;
