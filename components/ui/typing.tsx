/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7VfbNRmZkLr
 */
export default function TypingIndicator() {
  return (
    <div className="flex space-x-3">
      <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse" />
      <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-150" />
      <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-300" />
    </div>
  )
}
