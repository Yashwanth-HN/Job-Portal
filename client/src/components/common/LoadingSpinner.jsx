function LoadingSpinner({
  message = "Loading..."
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">

      <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-6 text-lg text-gray-600">
        {message}
      </p>

    </div>
  );
}

export default LoadingSpinner;