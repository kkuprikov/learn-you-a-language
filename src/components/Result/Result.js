import './Result.css'
import useState from "react";
import AnkiCard from "../AnkiCard/AnkiCard";



const Result = ({suggestedCards, setSuggestedCards, translation}) => {
  const cards = []
  for (const cardName in suggestedCards) {
     cards.push(<AnkiCard 
       key={cardName} 
       cardname={cardName} 
       visible={suggestedCards[cardName]}
       suggestedCards = {suggestedCards}
       setSuggestedCards = {setSuggestedCards} />)
   }
  return(
    <>
    <div>
      <p>{translation}</p>
    </div>
    <div className="Result__cards">
      {cards}
    </div>
    </>
  )
}

export default Result;