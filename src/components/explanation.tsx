import Fancy from './fancy';

export default function Explanation() {
  return (
    <div className="flex w-full max-w-3xl flex-col gap-6 px-4">
      <h2 className="text-xl">
        What's a <Fancy>CanSat</Fancy>?
      </h2>
      <p>
        <Fancy>CanSat</Fancy> is an international competition organized by the{' '}
        <Fancy>European Space Agency</Fancy>, specifically European Space
        Education Resource Office (<Fancy>ESERO</Fancy>). It's a challenge for
        high school students to design and build a small{' '}
        <Fancy>satellite</Fancy>, roughly the <Fancy>size of a soda can</Fancy>{' '}
        (hence the name), that will be brought high up into the sky by a rocket.
        During its descent back to Earth, it must perform various{' '}
        <Fancy>scientific measurements</Fancy>. All CanSats must perform at
        least the primary mission, which involves measuring the temperature and
        pressure during the descent, as well as be easily recoverable after
        landing. The fun part is the <Fancy>secondary mission</Fancy>, which is
        entirely up to the teams to decide.
      </p>

      <h2 className="text-xl">
        And what's <Fancy>our mission</Fancy>?
      </h2>
      <p>
        Our CanSat will be designed to perform an{' '}
        <Fancy>autonomous landing</Fancy>, behaving like a drone. After getting
        ejected from the rocket, for the first stage of the fall, it will deploy
        a parachute to get to a safer descent speed. Afterwards, it'll detach
        the parachute and extend its propellers, at which point it'll basically{' '}
        <Fancy>become a drone</Fancy>. We also took it upon ourselves to create
        the drone control system from scratch, without using any existing flight
        controller. That way we can get as tight of an integration with the rest
        of the CanSat's systems as possible. All of that will of be
        custom-designed, without using any off-the-shelf solutions.
      </p>
    </div>
  );
}
