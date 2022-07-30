import {
  AdjustmentsIcon,
  CodeIcon,
  CursorClickIcon,
  EyeIcon,
  LightningBoltIcon,
  PaperAirplaneIcon,
  PlayIcon,
} from '@heroicons/react/outline';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Head>
        <title>Lens.js</title>
      </Head>
      <div className=" dark:text-white h-screen flex flex-col items-center justify-center -mt-24">
        <h1 className="text-center text-6xl font-extrabold tracking-tighter leading-[1.1] sm:text-7xl lg:text-8xl xl:text-8xl">
          Build social apps
          <br />
          <br className="hidden lg:block" />
          <span className="future inline-block text-transparent bg-clip-text bg-gradient-radial from-color2 to-color2 via-color1 animate-gradient-x bg-repeat">
            like never before
          </span>{' '}
        </h1>
        <p className="max-w-lg mx-auto mt-6 text-2xl  text-center text-gray-400 sm:max-w-3xl sm:text-3xl md:text-3xl lg:text-3xl">
          Lens.js is a JavaScript SDK / API wrapper for{' '}
          <code className="bg-gray-100 border-gray-200 dark:bg-gray-900 dark:border-gray-800 border shadow-sm rounded-lg p-1">
            Lens Protocol
          </code>{' '}
          that allows you to create any kind of social media apps quickly and easily
        </p>
        <div className="max-w-xl mx-auto mt-8 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md">
            <Link href="/docs/start-here">
              <button className="flex items-center justify-center w-full px-8 py-3 text-md text-white no-underline border border-transparent rounded-md bg-gradient-radial from-color2 to-color2 via-color1 animate-gradient-x bg-repeat dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6 font-bold">
                Get started →
              </button>
            </Link>
          </div>
          <div className="relative mt-3 rounded-md sm:mt-0 sm:ml-3">
            <Link href="https://github.com/suhailkakar/lens.js">
              <a className="flex items-center justify-center w-full px-8 py-3 text-md font-medium text-black no-underline bg-gray-200 border border-transparent rounded-md dark:bg-gray-800 dark:text-white betterhover:dark:hover:bg-gray-700 betterhover:hover:bg-gray-300 md:py-3 md:text-lg md:px-10 md:leading-6">
                Visit GitHub
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
