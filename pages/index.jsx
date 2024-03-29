import { useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head'

export default function Home() {
  var today = new Date();
  let year = today.getFullYear();
  
  const audioRef = useRef(null);

  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.volume = 1; // Set volume to 1 for maximum volume
      audioRef.current.play(); // Play the audio
    }
  };

  return (
    <div className='h-screen bg-gray-700 flex flex-col justify-between'>
      <Head>
        <title>Reda coffe store</title>
        <meta name="description" content="Generated by Reda the coffe maker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
        src={'/cat-drink.gif'}
        width={169}
        height={200}
        alt='Cat-drinking-coffee'
        />
        <h1 className='text-center md:text-6xl m-5 xxs:text-2xl mb-10'>
          Greetings, I am Reda.
        </h1>
        <p className='text-center w-4/5 font-mono'>
          The caffeine herald! No scent of coffee here.<br />Fear not dear one, thirst quenched near. Find joy below, an adventure awaits that shall bring cheer to your ear!
        </p>
        <button
          className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-6'
          onClick={handleButtonClick}
        >
          Do Not Click Me
        </button>
        <audio
          ref={audioRef}
          src="/meme.mp3"
        >
        </audio>
      </main>

      <footer className='bg-zinc-900'>
        <p className='text-center'>
          © {year} Reda Coffee Company
        </p>
      </footer>
    </div>
  );
}
