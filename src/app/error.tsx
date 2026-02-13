"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>Error</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </main>
  );
}
