export function Button({ children }: any) {
  return (
    <button className="flex bg-[#F43127] px-4 py-2 rounded-md my-4">
      <p className={"px-2 text-white"}>{children}</p>
    </button>
  )
}
