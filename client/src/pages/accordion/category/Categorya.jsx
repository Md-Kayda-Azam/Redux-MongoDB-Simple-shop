import React from 'react'
import { useState } from 'react'
import './Category.css'

const Categorya = () => {

  const [ input, setInput ] = useState(null)


  const toggle = (i) => {
    if( input === i ){
      return input(null)
    }else{
      setInput(i)
    }
  }
  return (
    <div className="wrapper">
      <div className="accordion">
          {
            data.map((item, i) => (
                   <div className="item">
                    <div className="title" onClick={() => toggle(i)}>
                       <h2>{item.Q}</h2>
                       <span>{input === i ? '-' : '+'}</span>
                    </div>
                    <div className={
                      input === i ? 'content show' : 'content'
                    }>{item.A}</div>
                   </div>
            ))
          }

      </div>
    </div>
  )

 
}
export const data = [
  {
    Q : 'Q 1',
    A : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus doloribus laudantium autem accusantium cum perspiciatis sint, cumque, eligendi consequuntur voluptatum quos, velit qui expedita!'
  },
  {
    Q : 'Q 1',
    A : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus doloribus laudantium autem accusantium cum perspiciatis sint, cumque, eligendi consequuntur voluptatum quos, velit qui expedita!'
  },
  {
    Q : 'Q 1',
    A : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus doloribus laudantium autem accusantium cum perspiciatis sint, cumque, eligendi consequuntur voluptatum quos, velit qui expedita!'
  }
]

export default Categorya