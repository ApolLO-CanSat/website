import {
  Atom,
  BatteryCharging,
  Box,
  CircuitBoard,
  CodeXml,
  Drone,
  Globe,
  Laptop,
  Mail,
  RadioTower,
  Rocket,
  Rotate3D,
  Users,
} from 'lucide-react';

export default function Team() {
  return (
    <div className="flex h-screen shrink-0 snap-start flex-col place-items-center items-center justify-center gap-4">
      <h2 className="text-xl">The team</h2>

      <div className="flex max-w-6xl flex-wrap justify-center gap-4 px-8">
        <MemberCard name="Jakub Janus" emailPrefix="jakub.janus">
          <li>
            <Users /> Team leader
          </li>
          <li>
            <Drone /> Drone electronics and software
          </li>
        </MemberCard>

        <MemberCard name="Wiktor Kociuba" emailPrefix="wiktor.kociuba">
          <li>
            <CircuitBoard /> PCB and electrical design
          </li>
        </MemberCard>

        <MemberCard name="Krzysztof Szymała" emailPrefix="krzysztof.szymala">
          <li>
            <BatteryCharging /> Power system
          </li>
          <li>
            <Atom /> Physics calculations
          </li>
          <li>
            <Rotate3D /> Mechanical design and 3D modelling
          </li>
        </MemberCard>

        <MemberCard name="Grzegorz Gorgosz" emailPrefix="grzegorz.gorgosz">
          <li>
            <Globe /> This website
          </li>
          <li>
            <CodeXml /> Onboard firmware
          </li>
          <li>
            <RadioTower /> LoRa communication
          </li>
          <li>
            <Laptop /> Ground station software
          </li>
        </MemberCard>

        <MemberCard name="Dawid Wróbel" emailPrefix="dawid.wrobel">
          <li>
            <Rotate3D /> 3D modelling
          </li>
          <li>
            <Box /> 3D printing and assembly
          </li>
        </MemberCard>

        <MemberCard
          name="Szymon Jelonkiewicz"
          emailPrefix="szymon.jelonkiewicz"
        >
          <li>
            <Rocket /> Testing rocket design and construction
          </li>
          <li>
            <Atom /> Physics calculations
          </li>
        </MemberCard>
      </div>
    </div>
  );
}

function MemberCard({
  name,
  emailPrefix,
  children,
}: {
  name: string;
  emailPrefix: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-neutral-800 p-4 transition-transform hover:scale-105">
      <h3 className="text-lg font-bold">{name}</h3>
      <a
        href={`mailto:${emailPrefix}@apollocansat.space`}
        className="block text-sm text-neutral-300 transition-colors hover:text-purple-300"
      >
        <Mail /> {`${emailPrefix}@apollocansat.space`}
      </a>
      <ul className="mt-1 flex list-none flex-col gap-1 border-t-2 border-neutral-600 pt-1 text-sm text-neutral-300">
        {children}
      </ul>
    </div>
  );
}
