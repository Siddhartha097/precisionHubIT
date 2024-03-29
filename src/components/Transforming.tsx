import MoreBtn from "./MoreBtn";

const Transforming = () => {
  return (
    <section className="flex flex-col max-md:text-center max-md:gap-8 items-center justify-center gap-14">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Transforming Software Solutions For You
      </h1>
      <p className="text-lg max-md:text-sm font-medium text-slate-600">
        Discover innovative software solutions that streamline your business
        operations.
      </p>
      <MoreBtn label="Learn More" link="/Researchlearnmorela" />
    </section>
  );
};

export default Transforming;
