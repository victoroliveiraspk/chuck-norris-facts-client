import Fact from "../models/fact.model"

interface Props {
  facts: Fact[]
  searchQuery: string
}

const FactsList = ({ facts, searchQuery }: Props) => {
  return (
    <div className='fact-list flex flex-col justify-around items-center'>
      <div className='w-full'>
        <p className='text-xs mb-5'>{facts.length} results for "{searchQuery}"</p>
      </div>
      {facts.map((fact, index) => (
        <div className='fact-item border p-4 w-full' key={index}>
          {fact.value}
        </div>
      ))}
    </div>
  )
}

export default FactsList