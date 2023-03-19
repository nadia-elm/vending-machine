

import React, {useState, useEffect} from 'react'
import { useParams, Link} from'react-router-dom'
import Snacks from './Data'

// const {image, name, id} = Data

const SingleSnack = () => {
    const {id} = useParams()
    const [snack, setSnack]= useState(null)

    useEffect(() => {
        let newSnack = Snacks[id-1];
        console.log(newSnack);
       
            setSnack(newSnack);
        

        

    },[id])

    if(!snack){
        return <h2>loading ....</h2>
    }
    
  return (
    <section>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>

      <article className="snack">
        <div className="img-container">
          <img src={snack.image} alt={snack.name} />
        </div>
        <div className="snack-footer">
          <h3>{snack.name}</h3>
        </div>
      </article>
    </section>
  );
  
}

export default SingleSnack