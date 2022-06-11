
interface Props {
  facts: string[]
  searchQuery: string
}

const FactsList = ({ facts, searchQuery }: Props) => {
  return (
    <>
      <p className='text-xs mb-5'>{facts.length} results for "{searchQuery}"</p>
      {facts.map((fact) => (
        <div className='border p-4 text-center'>
          {fact}
        </div>
      ))}
    </>
  )
}

export default FactsList