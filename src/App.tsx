import { useState } from "react";
import Rating from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [rating, setRating] = useState<number | null>(null);

  function handleSubmit(selectedRating: number | null) {
    setIsSubmited(true);
    setRating(selectedRating);
  }

  return (
    <div className="min-h-screen px-4 bg-black font-overpass text-default text-medium-grey-clr grid place-items-center">
      {isSubmited ? (
        <ThankYouCard rating={rating} />
      ) : (
        <Rating onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
