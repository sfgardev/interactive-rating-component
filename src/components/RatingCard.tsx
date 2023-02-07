import { FormEvent, useState } from "react";
import iconStar from "../assets/icon-star.svg";

type Props = {
  onSubmit: (selectedRating: number | null) => void;
};

export default function Rating({ onSubmit }: Props) {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const buttons = Array.from({ length: 5 }, (_, i) => (
    <button
      key={i}
      type="button"
      onClick={() => setSelectedRating(i + 1)}
      className="w-11 h-11 bg-dark-blue-clr brightness-125 rounded-full flex justify-center items-center transition hover:bg-orange-clr hover:text-white-clr focus:bg-medium-grey-clr focus:text-white-clr"
    >
      {i + 1}
    </button>
  ));

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(selectedRating);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[22rem] bg-dark-blue-clr p-6 rounded-xl shadow-md flex flex-col gap-6"
    >
      <div className="w-10 h-10 bg-dark-blue-clr brightness-125 rounded-full flex items-center justify-center">
        <img src={iconStar} alt="Star" />
      </div>
      <h2 className="text-white-clr text-2xl">How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between">{buttons}</div>
      <button
        disabled={!selectedRating}
        className="bg-orange-clr text-white-clr font-bold tracking-wider uppercase rounded-full py-2.5 transition hover:bg-white-clr hover:text-orange-clr"
      >
        Submit
      </button>
    </form>
  );
}
