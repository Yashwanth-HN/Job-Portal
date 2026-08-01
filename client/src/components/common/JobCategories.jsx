import {
  FaLaptopCode,
  FaChartBar,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaArrowRight,
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
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            Popular Categories
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Browse by Category
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg leading-8">
            Discover opportunities across the fastest-growing
            industries and find the perfect role that matches
            your skills and career goals.
          </p>

        </div>

        {/* Categories */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.name}
                className="group bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >

                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">

                  <Icon className="text-white text-3xl" />

                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold mt-8">
                  {category.name}
                </h3>

                {/* Jobs */}

                <div className="mt-4">

                  <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {category.jobs}
                  </span>

                </div>

                {/* Explore */}

                <div className="mt-8 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">

                  Explore

                  <FaArrowRight />

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default JobCategories;