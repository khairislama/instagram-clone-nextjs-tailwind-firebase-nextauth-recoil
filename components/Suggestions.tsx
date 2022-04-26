import faker from '@faker-js/faker'
import { useEffect, useState } from 'react'
import { FakeUser } from '../typings'

function Suggestions() {
  const [suggestions, setSuggestions] = useState<FakeUser[]>([])
  useEffect(() => {
    const mySuggestions = []
    for (let i = 0; i < 5; i++) {
      const user = {
        id: i,
        avatar: faker.image.avatar(),
        username: faker.name.findName(),
        company: faker.company.companyName(),
      }
      mySuggestions.push(user)
    }
    setSuggestions(mySuggestions)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="mt-3 flex items-center justify-between"
        >
          <img
            className="h-10 w-10 rounded-full border p-[2px]"
            src={profile.avatar}
            alt="pic"
          />
          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company}
            </h3>
          </div>
          <button className="text-xs font-bold text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
