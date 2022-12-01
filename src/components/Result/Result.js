import './Result.css'
import useState from "react";
import AnkiCard from "../AnkiCard/AnkiCard";

const Result = ({suggestedCardNames, translation}) => {

  return(
    <>
    <div>
      <p>{translation}</p>
    </div>
    <div className="Result__cards">
      {(suggestedCardNames.map(cardName => (
         <AnkiCard key={cardName} cardname={cardName}>
         </AnkiCard>
       )))}
    </div>
    </>
  )
}

export default Result;