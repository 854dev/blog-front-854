export default function Home() {
  return (
    <div>
      <div className='hero is-full-screen is-vertical-align is-horizontal-align'>
        <div>
          <h1>854 블로그</h1>
          <p className='text-center'>아래로 스크롤</p>
        </div>
      </div>

      <div className='post-list'>
        <div className='card'>
          <header>
            <h4>Card title</h4>
          </header>
          <p>A nisi ullam ... cupiditate?</p>
          <footer className='is-right'>
            <a className='button primary'>Submit</a>
            <a className='button'>Cancel</a>
          </footer>
        </div>
      </div>

      <footer className='footer'></footer>
    </div>
  );
}
