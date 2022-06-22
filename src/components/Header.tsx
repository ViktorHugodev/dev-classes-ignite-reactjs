import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full flex py-5 items-center
    justify-center bg-gray-700 border-b-2 border-gray-600">

      <Logo/>
    </header>
  ) 
}
