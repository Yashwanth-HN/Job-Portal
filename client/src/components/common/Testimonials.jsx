import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    company: "TechNova Solutions",
    message:
      "CareerNest made my job search effortless. I found the perfect role within two weeks, and the application process was smooth from start to finish.",
  },
  {
    name: "Priya Mehta",
    role: "HR Manager",
    company: "InnovateX",
    message:
      "Posting jobs and managing applications has never been easier. The dashboard is clean, intuitive, and saves our recruitment team a lot of time.",
  },
  {
    name: "Amit Verma",
    role: "Frontend Developer",
    company: "NextGen Technologies",
    message:
      "The platform helped me discover relevant opportunities that matched my skills. I received interview calls much faster than expected.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            Success Stories
          </span>

          <h2 className="text-5xl font-bold mt-6">
            What Our Users Say
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg leading-8">
            Thousands of professionals and recruiters trust CareerNest
            to discover opportunities and build successful careers.
          </p>

        </div>

        {/* Testimonials */}

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Quote */}

              <FaQuoteLeft className="text-blue-600 text-4xl mb-6" />

              {/* Stars */}

              <div className="flex gap-1 text-yellow-400 mb-6">

                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}

              </div>

              {/* Message */}

              <p className="text-gray-600 leading-8 italic">
                "{item.message}"
              </p>

              {/* User */}

              <div className="mt-8 pt-6 border-t">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  {item.role}
                </p>

                <p className="text-blue-600 font-semibold mt-2">
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