import React from 'react'

const BreakingNews = props => (
  <section>
    <h1>Breaking News</h1>
    {
      props.news &&
      props.news.map((breaking, i) => (
        <article key={i}>
          <h1>{breaking.title}</h1>
          <p>{breaking.body}</p>
        </article>
      ))
    }
    We are{' '}
    <b>{typeof window !== 'undefined' ? 'client-side' : 'server-side'}</b> (now,
    check the source of this page)
    <div>
      <small>generated at {new Date().toISOString()}</small>
    </div>
  </section>
)

BreakingNews.getInitialProps = async ({props, req, res}) => {
  if (res) {
    res.set('Cache-Control', 's-maxage=0, maxage=0')
  }

  return new Promise(resolve => {
      const news = Array.from(Array(10000), (e, i) => {
        return {
          title: i,
          body: 'With ESI',
        }
      })

      setTimeout(
        () =>
          resolve({
            ...props,
            news,
          }),
        200
      )
    }
  )
}

export default BreakingNews
