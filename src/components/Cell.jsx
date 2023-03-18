import React, { useContext } from 'react'
import {AppContext} from '../App'

function Cell({block , setBlock}) {

  const con = useContext(AppContext)
  
  return (
    <div>
        <button style={{padding:'5px'}} onClick={() => {if(con.wonOrNot=='No one has won YET'){if(block != "X" && block != "O"){con.isXorNot? setBlock('X',con.setIsXorNot(!con.isXorNot)): setBlock('O',con.setIsXorNot(!con.isXorNot))}}}}>{block}</button>
    </div>
  )
}

export default Cell