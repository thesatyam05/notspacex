import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import SpaceXLaunches from '@/components/Launches/Launches';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<section className='bg-black text-white min-h-screen'>
			<Header />
			<SpaceXLaunches />
		</section>
	);
}
