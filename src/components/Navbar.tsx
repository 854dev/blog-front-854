import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import ToggleDarkMode from '../components/ToggleDarkMode';
import { ContentType } from '../types/common';

interface Props extends PropsWithChildren {
  contentTypeList: ContentType[];
}

function Navbar(props: Props) {
  const { contentTypeList } = props;

  return (
    <nav className='nav'>
      <div className='nav-left'>
        <Link href='/'>
          <h1 className='text-primary'>854</h1>
        </Link>

        {contentTypeList.map((elem) => {
          return (
            <Link href={`/${elem.contentTypeName}`}>
              <span className='capitalize'>{elem.contentTypeName}</span>
            </Link>
          );
        })}

        <ToggleDarkMode></ToggleDarkMode>
      </div>
    </nav>
  );
}

export default Navbar;
