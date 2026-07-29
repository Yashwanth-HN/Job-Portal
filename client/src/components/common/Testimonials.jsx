const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    company: "Google",
    message:
      "I found my dream job within two weeks using this platform. The application process was smooth and simple.",
  },
  {
    name: "Priya Mehta",
    role: "HR Manager",
    company: "Infosys",
    message:
      "Managing job postings and reviewing applications has become much easier with this portal.",
  },
  {
    name: "Amit Verma",
    role: "Frontend Developer",
    company: "Amazon",
    message:
      "The job recommendations were highly relevant, helping me secure interviews quickly.",
  },
];
function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">
          What Our Users Say
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Trusted by thousands of job seekers and recruiters.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8"
            >
              <div className="text-yellow-400 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 italic">
                "{item.message}"
              </p>

              <div className="mt-6">
                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>

                <p className="text-blue-600 font-medium">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;