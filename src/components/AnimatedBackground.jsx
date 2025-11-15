const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 w-full">
      <div className="absolute inset-0 bg-white w-full" />
    </div>
  );
};

export default AnimatedBackground;

