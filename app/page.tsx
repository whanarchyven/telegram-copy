import Image from "next/image";

export default function Home() {
  return (
    <main className={'w-full h-fit flex items-center justify-center'}>
      <img src={'/images/bg_overlay.png'} className={'h-full w-full absolute left-0 top-0'}>

      </img>
    </main>
  );
}
