import React, { PropsWithChildren } from 'react'

function MainLayout(props:PropsWithChildren) {
  return (

    


    <main>
      <section className="container flex flex-col items-center justify-center px-4 py-8 mx-auto lg:py-16 lg:flex-row">
        {props.children}
      </section>
    </main>
  )
}

export default MainLayout