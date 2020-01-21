import withESI from 'react-esi'
import React from 'react'
import BreakingNews from '../components/BreakingNews'

const BreakingNewsESI = withESI(BreakingNews, 'BreakingNews')
const news = Array.from(Array(10000), (e, i) => {
  return {
    title: i,
    body: 'Without ESI',
  }
})

const Index = () => (
  <div>
    <h1>React ESI demo app</h1>
    <main>
      <p>Welcome to my news website!</p>
    </main>

    <BreakingNews news={news} />
    <BreakingNewsESI />
    <div>Displayed after too long component</div>
  </div>
)

Index.getInitialProps = async function({ res }) {
  if (res) {
    res.set('Cache-Control', 'maxage: 10')
  }
  return {}
}

export default Index
