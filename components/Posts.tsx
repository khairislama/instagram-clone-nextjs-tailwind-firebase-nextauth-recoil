import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'khairi slama',
    userImg: 'https://links.papareact.com/jjm',
    img: 'https://links.papareact.com/jjm',
    caption: 'This is dope!',
  },
  {
    id: '13',
    username: 'khalil slama',
    userImg: 'https://links.papareact.com/jjm',
    img: 'https://links.papareact.com/jjm',
    caption: 'Awsome!',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.img}
          caption={post.caption}
          img={post.img}
        />
      ))}
    </div>
  )
}

export default Posts
