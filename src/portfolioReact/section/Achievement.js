import CardAchievement from "../components/CardAchievement";
import dataCard from "../data/dataCard";

export default function Achievement() {
  const cardElement = dataCard.map((eachCard) => {
    return <CardAchievement InfoEachCard={eachCard} key={eachCard.id} />;
  });

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto" id="achievement">
      <header>
        <h1 className="text-3xl md:text-4xl mt-5 lg:text-5xl text-center  pt-5 md:pt-20 lg:pt-32">
          Achievement
        </h1>
        <p className="text-center mb-10 lg:mb-12 text-base md:text-xl mt-2 ">
          These websites are developed with react.
        </p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cardElement}
      </section>
    </div>
  );
}
