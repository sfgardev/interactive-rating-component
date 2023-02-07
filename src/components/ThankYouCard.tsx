import thankYou from "../assets/illustration-thank-you.svg";

type Props = {
  rating: number | null;
};

export default function ThankYouCard({ rating }: Props) {
  return (
    <div className="max-w-[22rem] bg-dark-blue-clr text-center px-6 py-8 rounded-xl shadow-md flex flex-col gap-6 items-center">
      <img src={thankYou} alt="Thank you" />
      <span className="bg-dark-blue-clr brightness-125 text-orange-clr px-4 py-1.5 rounded-full">
        You selected {rating} out of 5
      </span>
      <h2 className="text-white-clr text-2xl">Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
