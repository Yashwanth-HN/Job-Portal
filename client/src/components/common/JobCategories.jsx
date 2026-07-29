import {
  FaLaptopCode,
  FaChartBar,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

const categories = [
  {
    name: "Software Development",
    jobs: "120+ Jobs",
    icon: FaLaptopCode,
  },
  {
    name: "Data Science",
    jobs: "80+ Jobs",
    icon: FaChartBar,
  },
  {
    name: "UI / UX Design",
    jobs: "45+ Jobs",
    icon: FaPaintBrush,
  },
  {
    name: "Mobile Development",
    jobs: "65+ Jobs",
    icon: FaMobileAlt,
  },
  {
    name: "Cloud Computing",
    jobs: "50+ Jobs",
    icon: FaCloud,
  },
  {
    name: "Cyber Security",
    jobs: "30+ Jobs",
    icon: FaShieldAlt,
  },
];

function JobCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">
          Browse by Category
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore opportunities across the most in-demand industries.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.name}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition duration-300 cursor-pointer hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="text-blue-600 text-3xl" />
                </div>

                <h3 className="text-xl font-semibold">
                  {category.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {category.jobs}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default JobCategories;