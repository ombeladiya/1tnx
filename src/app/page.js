
export default function Home() {
  return (
    <main className="flex bg-black flex-col h-full min-h-screen w-full items-center justify-between">
      {/* <img
        src="/commingsoon.jpg"
        alt="comming soon"
        className="h-full min-h-screen w-full"
      /> */}

      <video preload="auto" loop muted className="w-screen h-screen" autoPlay playsInline>
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </main>
  );
}
