import Page from '../components/search_bar'
import { useRef } from 'react'

function ViewMenuPage() {
  const pages = useRef(10)

  return (
    <div className="w-screen justify-center">
      {[...Array(pages.current)].map(() => (
        <div>
          <Page></Page>
          <div className="w-2 h-2" />
        </div>
      ))}
    </div>
  )
}

export default ViewMenuPage
