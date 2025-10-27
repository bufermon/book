export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img
        src="/images/shop-1.png"
        alt=""
        className="absolute top-20 left-[10%] h-16 w-16 opacity-30 float-animation"
        style={{ animationDelay: '0s', animationDuration: '4s' }}
      />
      <img
        src="/images/shop-2.png"
        alt=""
        className="absolute top-40 right-[15%] h-20 w-20 opacity-25 float-animation"
        style={{ animationDelay: '1s', animationDuration: '5s' }}
      />
      <img
        src="/images/shop-3.png"
        alt=""
        className="absolute bottom-32 left-[20%] h-14 w-14 opacity-20 float-animation"
        style={{ animationDelay: '2s', animationDuration: '6s' }}
      />
      <img
        src="/images/shop-4.png"
        alt=""
        className="absolute top-60 right-[25%] h-18 w-18 opacity-30 float-animation"
        style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}
      />
      
      <div className="absolute top-[30%] left-[5%] h-2 w-2 bg-accent rounded-full animate-spark opacity-60" style={{ animationDelay: '0s' }} />
      <div className="absolute top-[50%] right-[10%] h-2 w-2 bg-accent rounded-full animate-spark opacity-70" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-[40%] left-[15%] h-2 w-2 bg-accent rounded-full animate-spark opacity-50" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[70%] right-[30%] h-2 w-2 bg-accent rounded-full animate-spark opacity-60" style={{ animationDelay: '2s' }} />
    </div>
  );
}
