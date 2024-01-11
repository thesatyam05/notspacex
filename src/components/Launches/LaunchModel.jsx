import Image from 'next/image';
import { XIcon } from 'lucide-react';

const LaunchModal = ({ isModalOpen, selectedLaunch, toggleModal }) => {
	if (!isModalOpen || !selectedLaunch) {
		return null;
	}

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
			<div className='flex flex-col bg-white text-gray-400 p-8 rounded-md w-[800px] h-[600px] overflow-auto '>
				<div className='flex justify-end'>
					<button
						onClick={() => toggleModal(null)}
						className='w-fit bg-black text-white rounded-md'>
						<XIcon className='rounded-full hover:bg-gray-200 hover:text-black transition ease-in-out duration-300' />
					</button>
				</div>
				<div className='grid grid-rows-2 '>
					<h2 className='text-2xl text-black font-bold mb-4'>
						{selectedLaunch.name ? selectedLaunch.name : ''}
					</h2>
					<div className='grid grid-cols-2 justify-center'>
						<div className='flex justify-center items-center'>
							{selectedLaunch.links.patch.large && (
								<Image
									src={selectedLaunch.links.patch.large}
									width={100}
									height={100}
									alt='alt'
									className='h-full w-44 mix-blend-multiply aspect-square object-contain'
								/>
							)}
						</div>
						<div className='flex justify-between items-center'>
							<p className='text-gray-400 mb-4'>
								{selectedLaunch.details
									? selectedLaunch.details
									: 'No Details Available Currently'}
								<br />
								<br />
								{selectedLaunch.date_local
									? new Date(selectedLaunch.date_local).toLocaleDateString()
									: ''}
							</p>
						</div>
						<p className='text-gray-400'></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LaunchModal;
