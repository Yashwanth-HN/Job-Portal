function Newsletter() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">

        <h2 className="text-4xl font-bold">
          Stay Updated
        </h2>

        <p className="mt-4 text-blue-100">
          Subscribe to receive the latest jobs and career updates.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white text-black px-6 py-4 rounded-xl w-full md:w-96 outline-none"
          />

          <button className="bg-black px-8 py-4 rounded-xl hover:bg-gray-900 transition">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;