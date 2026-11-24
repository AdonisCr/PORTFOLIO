const BackgroundBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full blur-3xl opacity-[0.07] bg-accent" />
    <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full blur-3xl opacity-[0.06] bg-blue-500" />
  </div>
);

export default BackgroundBlobs;
