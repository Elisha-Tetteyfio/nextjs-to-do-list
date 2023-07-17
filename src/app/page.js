export default function Home() {
  return (
    <main>
      <div>
        <div className="bg-neutral-100 my-20 mx-32 rounded-2xl h-[80vh]">
          <div className="bg-neutral-200 h-[10vh] width-[100%] rounded-t-2xl grid grid-cols-3 text-center align-center text-xl">
            <div className="rounded-tl-2xl bg-neutral-500 h-[100%] p-3 border border-dashed border-black">All</div>
            <div className="bg-neutral-500 p-3 border border-dashed border-black">Uncompleted</div>
            <div className="rounded-tr-2xl bg-neutral-500 p-3 border border-dashed border-black">Completed</div>
          </div>
        </div>
      </div>
    </main>
  )
}
