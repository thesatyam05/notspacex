'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut, useSession } from 'next-auth/react';
import { selectUser, setUser, clearUser } from '@/redux/reducers/userReducer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

import Link from 'next/link';
import Image from 'next/image';
import spacexWhite from '@/assets/Spacexwhite.svg';
import { IoMenuOutline } from 'react-icons/io5';
const Header = () => {
	const dispatch = useDispatch();
	const { data: session } = useSession();
	const user = useSelector(selectUser);

	useEffect(() => {
		if (session && session.user) {
			dispatch(setUser(session.user));
		} else {
			dispatch(clearUser());
		}
	}, [dispatch, session]);

	const handleSignIn = () => {
		signIn(); // Replace 'github' with the appropriate provider
	};

	const handleSignOut = () => {
		signOut();
	};

	return (
		<header className='sticky w-full'>
			<nav className='flex items-center justify-between py-4 px-10'>
				<div className='logo' style={{ width: '210px', height: 'auto' }}>
					<Link href={'/'}>
						<Image
							src={spacexWhite}
							alt='spacexLogo'
							className='object-contain'
							style={{ width: '100%', height: 'auto' }}
						/>
					</Link>
				</div>

				<ul className='flex gap-8 content-center items-center text-white'>
					<li>
						{session ? (
							<HoverCard>
								<HoverCardTrigger>
									<Image
										height={25}
										width={25}
										src={session.user.image}
										className='rounded-full'
										alt='User'
									/>
								</HoverCardTrigger>
								<HoverCardContent className='bg-black text-white'>
									<div className='flex flex-col w-full h-full items-center gap-2 justify-center'>
										<Image
											height={40}
											width={40}
											src={session.user.image}
											className='rounded-full'
											alt='User'
										/>
										<p className='text-center'>
											{session.user.name}
											<br />
											{session.user.email}
										</p>
										<button
											className='hovee:text-black border-2 hover:border-black px-4 py-2 hover:bg-white hover:text-black border-white  transition ease-in-out duration-300'
											onClick={handleSignOut}>
											Sign Out
										</button>
									</div>
								</HoverCardContent>
							</HoverCard>
						) : (
							<button className='border-animation' onClick={handleSignIn}>
								Sign In
							</button>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
