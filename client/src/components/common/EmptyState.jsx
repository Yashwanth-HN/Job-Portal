import { Link } from "react-router-dom";

function EmptyState({
  icon = "📄",
  title = "Nothing Found",
  description = "",
  buttonText,
  buttonLink,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-16 text-center">

      <div className="text-7xl mb-6">
        {icon}
      </div>

      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <p className="text-gray-500 mt-4 max-w-md mx-auto">
        {description}
      </p>

      {buttonText && buttonLink && (
        <Link
          to={buttonLink}
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
        >
          {buttonText}
        </Link>
      )}

    </div>
  );
}

export default EmptyState;