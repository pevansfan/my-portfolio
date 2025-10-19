export default function AnimatedHalfCircle() {
  return (
    <svg
      className="half-circle"
      viewBox="0 0 400 200"
    >
      <path
        d="M 0 200 
           A 200 200 0 0 1 400 200 
           L 400 200 
           L 0 200 Z"
        fill="#ff6370ff"
      />
    </svg>
  );
}
