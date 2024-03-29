import './Result.css'
import AnkiCard from "./AnkiCard";



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