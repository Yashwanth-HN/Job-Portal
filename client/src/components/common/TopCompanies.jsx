const companies = [
  {
    name: "Google",
    jobs: "24 Open Jobs",
    logo: "https://logo.clearbit.com/google.com",
  },
  {
    name: "Microsoft",
    jobs: "18 Open Jobs",
    logo: "https://logo.clearbit.com/microsoft.com",
  },
  {
    name: "Amazon",
    jobs: "30 Open Jobs",
    logo: "https://logo.clearbit.com/amazon.com",
  },
  {
    name: "Infosys",
    jobs: "20 Open Jobs",
    logo: "https://logo.clearbit.com/infosys.com",
  },
  {
    name: "TCS",
    jobs: "16 Open Jobs",
    logo: "https://logo.clearbit.com/tcs.com",
  },
  {
    name: "Accenture",
    jobs: "22 Open Jobs",
    logo: "https://logo.clearbit.com/accenture.com",
  },
];
function TopCompanies() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">
          Top Companies Hiring
        </h2>

        <p className="text-gray-600 text-center mb-12">
          Explore opportunities from trusted companies hiring through our platform.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 p-8 text-center hover:-translate-y-2 cursor-pointer"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 mx-auto mb-5 object-contain"
              />

              <h3 className="text-xl font-semibold">
                {company.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {company.jobs}
              </p>

              <button className="mt-6 text-blue-600 font-medium hover:underline">
                View Company
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TopCompanies;