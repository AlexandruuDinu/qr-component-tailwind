function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-bodyContainerColor">
      <div className="w-80 h-fit pb-10 border-2 rounded-[20px] bg-white flex items-center flex-col drop-shadow-2xl shadow-black">
        <img className="p-3 rounded-[25px]" alt="" src="/images/image-qr-code.png" />
        <div className="justify-center flex flex-col items-center mx-4">
          <p className="font-bold text-center mt-2 text-xl px-3">Improve your front-end skills by building projects</p>
          <p className="text-center mt-3 text-sm px-4 text-subtitleTextColor">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}

export default App;
