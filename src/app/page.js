export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex flex-col items-center ">
        <h1 className="text-5xl text-primary">
          Sardor <span className="text-base-content"> is really</span> {" "}
          <span className="text-warning">Responsiblity</span>
        </h1>
        <p className="text-lg text-end text-error mt-2">(Great project is comming...)</p>
      </div>
    </div>
  );
}
