import React, { useEffect, useState } from "react";
import {Card , CardBody,CardFooter,CardHeader, Button} from "react-bootstrap";

  const Counter = () => {
 
  let [count, setCount] = useState(0);


  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);

   
  };


   const decrement  = (e) => {
    e.preventDefault();
    setCount(count -1) ? setCount() > 0 : setCount(0);

   
  };

  
   const reset  = (e) => {
    e.preventDefault();
    setCount (0 );

   
  };
  
 
  return (
    <Card bg="success">
    <CardHeader>
   <h1>Counter</h1>
    </CardHeader>
    <CardBody>
     <h4>{count}</h4>
    </CardBody>
    <CardFooter>
        <Button  variant = "info" className="me-2" onClick={increment} >
            Incremnet
        </Button>
        <Button variant="danger" className='me-2' onClick={decrement}>
            Decrement
        </Button  >
        <Button  variant="primary" className='me-2' onClick={reset}>
            Reset
        </Button>

    </CardFooter>
        
    </Card>
  )
}

export default Counter