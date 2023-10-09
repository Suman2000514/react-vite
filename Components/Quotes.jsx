import React, { useState } from 'react'
import {Card , CardBody,CardFooter,CardHeader, Button} from "react-bootstrap";
import axios from "axios";
const Quotes = () => {
    const [id, setId] = useState(1);
    const [author, setAuthor] = useState ("");
    const [quotes, setQuotes] = useState ("");

    const toggleQuotes = async (e) => {
        e.preventDefault();

        const {data} = await axios.get("https://dummyjson.com/quotes");
        const {quotes} = data;
      

     
        
        const qts = quotes.find((quotes)=> quotes.id === id);
    
        setAuthor(qts.author);
         setQuotes(qts.quote);

          setId(id + 1);

    }
  return (
   <>
    <Card bg="success">
    <CardHeader>
   <h1>Quote Display</h1>
    </CardHeader>
    <CardBody>
     <h4>Author:{author}</h4>
     <h4>Quote:{quotes}</h4>
    </CardBody>
    <CardFooter>
        <Button  variant = "info" className="me-2" onClick={toggleQuotes} >
            Toggel
        </Button>
      

    </CardFooter>
        
    </Card>
   </>
  )
}

export default Quotes