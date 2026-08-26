/**
 * Design reminder — Station-paper public information design:
 * keep the preview frame quiet so ETA hierarchy, transit yellow, and route rows
 * inside the standalone HTML remain the only visual focus.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1ea]">
      <iframe
        src={`${import.meta.env.BASE_URL}busapp-improved.html?build=map-fallback-v1`}
        title="巴士到站時間介面預覽"
        allow="geolocation"
        className="block h-[100dvh] min-h-[760px] w-full border-0 bg-[#f4f1ea]"
      />
    </main>
  );
}
