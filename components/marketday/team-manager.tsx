import TeamItem from "./team-item";

interface ITeaMemeber {
  imageSrc: string;
  name: string;
  role: string;
  linkedInURL: string;
  mailURL: string;
}

const teamMembers: ITeaMemeber[] = [
  {
    imageSrc: "/joshua.png",
    name: "Joshua Ahimbisibwe",
    role: "Chief Executive Officer(CEO)",
    linkedInURL: "https://www.linkedin.com/in/joshua-ahimbisibwe",
    mailURL: "ahimbisibwejoshua91@gmail.com",
  },
  {
    imageSrc: "/conrad.png",
    name: "Conrad Gumisiriza",
    role: "Chief Operations Officer(COO)",
    linkedInURL: "https://linkedin.com/conrad-gumisiriza",
    mailURL: "knl.conrad@gmail.com",
  },
  {
    imageSrc: "/tracy.png",
    name: "Tracy Kirabo",
    role: "Chief Financial Officer(CFO)",
    linkedInURL: "https://www.linkedin.com/in/kirabo-tracy-7b81a9379",
    mailURL: "kirabo2410@gmail.com",
  },
  {
    imageSrc: "/dorcus.png",
    name: "Dorcus Ainebyona",
    role: "Sales and Marketing Lead",
    linkedInURL: "https://www.linkedin.com/in/ainebyona-dorcus-a5375b271",
    mailURL: "dorcusainebyona@gmail.com",
  },
  {
    imageSrc: "/pius.png",
    name: "Pius Kalema",
    role: "Chief Technology Officer(CTO)",
    mailURL: "piusk2410852@gmail.com",
    linkedInURL: "",
  },
  {
    imageSrc: "/martin.png",
    role: "UX/Product Strategist",
    name: "Martin Wandera",
    mailURL: "martinwandera@gmail.com",
    linkedInURL: "",
  },
  {
    imageSrc: "/clinton.png",
    name: "Clinton Murungi",
    role: "Partner",
    linkedInURL: "https://www.linkedin.com/in/murungi-clinton05b8390160",
    mailURL: "clintonmurungi@gmail.com",
  },
  {
    imageSrc: "https://placehold.co/400x225?text=P",
    name: "Precious Arinda",
    role: "Sales and Marketing Lead",
    mailURL: "",
    linkedInURL: "",
  },
];

export default function TeamManager() {
  return (
    <div
      id="features"
      className="bg-neutral-100 text-[#0F2A19] px-6 md:px-12 py-16"
    >
      {/* Heading */}
      <div className="w-full mb-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-black font-medium text-xl mb-4">
          The Team That Makes it Possible
        </h1>
        <h2 className="text-2xl mb-4 sm:text-3xl md:text-5xl font-bold max-w-4xl leading-tight">
          Meet Our Team
        </h2>
        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
          Meet the dedicated team behind TradeAfrika Market Day. We believe in
          creating a market where talented African artists and entrepreneurship
          can grow their businesss, and you can discover incredible,
          African-made goods that tell a story
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
        {teamMembers.map((member, index) => (
          <TeamItem
            key={index}
            name={member.name}
            role={member.role}
            linkedInURL={member.linkedInURL}
            mailURL={member.mailURL}
            imageSrc={member.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
