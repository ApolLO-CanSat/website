import Fancy from "./fancy";

export default function Title() {
  return (
    <div className="flex h-full flex-col justify-center text-center">
      <h1 className="mb-3 text-8xl">
        <Fancy>A</Fancy>pol<Fancy>LO</Fancy> Team
      </h1>

      <h2>
        A few <Fancy>high school</Fancy> students from <Fancy>Poland</Fancy>{' '}
        <br />
        building a <Fancy>CanSat</Fancy>, with the main focus of <br />
        <Fancy>autonomous drone-like landing</Fancy>.
      </h2>
    </div>
  );
}

