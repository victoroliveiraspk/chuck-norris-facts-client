import { MouseEventHandler } from "react"
import Fact from "../models/fact.model"

interface Props {
  fact: Fact,
  onClickUpdate: MouseEventHandler<HTMLButtonElement>
}

const RandomFact = ({ fact, onClickUpdate }: Props) => {
  return (
    <div className='flex justify-center'>
      <div className='bg-gray-200 w-full p-2 h-52 flex flex-col justify-around items-center'>
        <span className='text-gray-500 text-3xl'>"</span>
        <p className='random-fact-text text-center'>{fact.value}</p>
        <div className='flex justify-center'>
          <button
            className='update-random-fact-btn text-xs p-2 text-white round rounded-xl'
            style={{ backgroundColor: 'rgb(155,109,162)' }}
            onClick={onClickUpdate}>
            Update random fact
          </button>
        </div>
      </div>
    </div>
  )
}

export default RandomFact