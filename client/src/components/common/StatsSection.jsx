import {
  FaUsers,
  FaBuilding,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

const stats = [
  {
    icon: FaUsers,
    number: "50K+",
    label: "Active Job Seekers",
  },
  {
    icon: FaBuilding,
    number: "2K+",
    label: "Companies",
  },
  {
    icon: FaBriefcase,
    number: "15K+",
    label: "Jobs Posted",
  },
  {
    icon: FaCheckCircle,
    number: "8K+",
    label: "Successful Hires",
  },
];

function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full font-medium">
            CareerNest in Numbers
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Trusted by Thousands
          </h2>

          <p className="text-blue-100 text-lg mt-5 max-w-2xl mx-auto leading-8">
            Join a growing community of professionals and recruiters
            building successful careers through CareerNest.
          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:-translate-y-2 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg">

                  <Icon className="text-blue-600 text-4xl" />

                </div>

                <h2 className="text-5xl font-extrabold text-white mt-8">
                  {item.number}
                </h2>

                <p className="text-blue-100 mt-4 text-lg">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default StatsSection;