import { LightDarkButton } from "./LighDarkButton";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full flex p-5 items-center
    justify-center bg-grayMain dark:bg-gray-700 border-b-2 border-gray-300 z-10">

      <Logo/>
      <LightDarkButton/>
    </header>
  ) 
}
