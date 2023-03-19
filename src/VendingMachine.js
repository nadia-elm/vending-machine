
import React from 'react'
import Snacks from './Data'

import { Link} from 'react-router-dom'

const VendingMachine = () => {
  return (
    <section className="section">
      <img
        src="https://images.unsplash.com/photo-1625650484478-113df4bfc370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHNuYWNrc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="vending-machine" className='machine'
      />
      <h2 className="section-title">snacks </h2>
      <div className="snacks-center">
        {Snacks.map((item) => {
          return (
            <ul className='list'>
              <li key={item.id}>
                <Link
                  to={`/snack/${item.id}`}
                  className="btn btn-primary btn-details"
                >
                  {item.name}
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
}

export default VendingMachine