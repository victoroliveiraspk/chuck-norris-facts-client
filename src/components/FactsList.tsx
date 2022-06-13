import Fact from "../models/fact.model"

interface Props {
  facts: Fact[]
  searchQuery: string
}

const FactsList = ({ facts, searchQuery }: Props) => {
  return (
    <div className='fact-list flex flex-col justify-around items-center'>
      {facts.map((fact, index) => (
        <div className='fact-item border p-4 w-full break-words' key={index}>
          {fact.value}
        </div>
      ))}
    </div>
  )
}

export default FactsList