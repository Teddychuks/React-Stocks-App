function SmallSpinner() {
  return (
    <div className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-red-600 rounded-full">
      <span className="sr-only"> Refresh after 1 minute</span>
    </div>
  );
}

export default SmallSpinner;
