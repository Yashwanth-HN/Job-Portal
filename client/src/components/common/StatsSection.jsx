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
    <section className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="text-center text-white"
              >
                <Icon className="text-5xl mx-auto mb-4" />

                <h2 className="text-4xl font-bold">
                  {item.number}
                </h2>

                <p className="mt-2 text-blue-100">
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