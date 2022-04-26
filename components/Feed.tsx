import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

function Feed() {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-2">
        {/*Stories*/}
        <Stories />
        {/*Posts*/}
        <Posts />
      </section>

      <section className="hidden md:col-span-1 xl:inline-grid">
        <div className="fixed">
          {/*Mini profile*/}
          <MiniProfile />
          {/*Suggestions*/}
          <Suggestions />
        </div>
      </section>
    </main>
  )
}

export default Feed
