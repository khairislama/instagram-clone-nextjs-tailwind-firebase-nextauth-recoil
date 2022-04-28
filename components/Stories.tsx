import { faker } from '@faker-js/faker'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { FakeUser } from '../typings'
import Story from './Story'

function Stories() {
  const [suggestions, setSuggestions] = useState<FakeUser[]>([])
  const { data: session } = useSession()
  useEffect(() => {
    const mySuggestions = []
    for (let i = 0; i < 20; i++) {
      const user = {
        id: i,
        avatar: faker.image.avatar(),
        username: faker.name.findName(),
      }
      mySuggestions.push(user)
    }
    setSuggestions(mySuggestions)
  }, [])
  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          img={session.user?.image || ''}
          username={session?.user?.username}
        />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
