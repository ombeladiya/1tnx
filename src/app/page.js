"use client"
export default function Home() {
  const handleX = () => {
    window.location = 'https://x.com/onetnx?t=XvwO4e2xRh_bBygRDZpj0A&s=09'
  }

  return (
    <main className="flex bg-black flex-col h-full min-h-screen w-full items-center justify-between">
      {/* <img
        src="/commingsoon.jpg"
        alt="comming soon"
        className="h-full min-h-screen w-full"
      /> */}

      <video preload="auto" loop muted className="w-screen h-screen cursor-pointer" autoPlay playsInline onClick={handleX}>
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </main>
  );
}
