import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css';
import fruitdata from './Fruit.json';

const FetchData = () => {
  const data=fruitdata;
  console.log(data)
  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
        {data && data.map((e,index)=>(
            <>
                <li key={index} className='list_data'>
                    <h3>{e.name}</h3>
                    <p><strong>Importance: </strong>{e.importance}</p>
                    <p><strong>Benefits: </strong>{e.benefits}</p>
                    <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
                </li>
            </>
        ))}
     </ul>
    </>
  )
}

export default FetchData