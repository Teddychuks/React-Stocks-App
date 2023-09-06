function SpinnerText() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="animate-spin inline-block w-6 h-6 border-t-2 border-b-2 border-blue-900 rounded-full"></div>
      <span>Loading...</span>
    </div>
  );
}

export default SpinnerText;
