import React from 'react'

function msg() {
	const data = {};

	const html = `
		
	`
}
function Chat() {
  return (
	<div className='grid grid-flow-col grid-cols-2'>
		
	{/* flex flex-col */}
	<div className='grid-cols-2 grid'>
	<div className=''></div>
		<section className=" antialiased bg-white text-gray-600 min-h-screen p-4 ">
			<div className="h-full">
			
				<div className="relative  mx-auto bg-white rounded-lg">
					
					<header className="pt-6 pb-4 px-5 border-b border-gray-200">
						<div className="flex justify-between items-center mb-3">
							
							<div className="flex items-center">
								<div className="pr-1">
									<a className="inline-flex text-gray-800 hover:text-gray-900" href="#0">
										<h2 className="text-xl leading-snug font-bold"> Messages</h2>
									</a>
								</div>
							</div>

							<div className="relative inline-flex flex-shrink-0">
							</div>
						</div>
					</header>
					
					<div className="py-3 px-5">
						<h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">Chats</h3>
						
						<div className="divide-y divide-gray-200">
							
							<button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 hover:bg-[#00786a] rounded-l">
								<div className="flex items-center">
									<img className="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg" width="32" height="32" alt="Marie Zulfikar" />
									<div>
										<h4 className="text-sm font-semibold text-gray-900">Marie Zulfikar</h4>
										<div className="text-[13px]">The video chat ended · 2hrs</div>
									</div>
								</div>
							</button>
							
							<button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 rounded">
								<div className="flex items-center">
									<img className="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg" width="32" height="32" alt="Nhu Cassel" />
									<div>
										<h4 className="text-sm font-semibold text-gray-900">Nhu Cassel</h4>
										<div className="text-[13px]">Hello Lauren 👋, · 24 Mar</div>
									</div>
								</div>
							</button>
							

						</div>
					</div>

				</div>
			</div>
		</section>
	</div>




	<div className='h-screen'>
		<div className=" bg-white shadow-xl rounded-lg">

			<header className='border-b border-solid p-4 '>
				<ul className="flex justify-center align-middle">
					<li className='mr-6'>
						<img src='img-user-path' alt='User profile image'></img>
					</li>
					<li className="mr-6">
						<p>Lauren Marsano</p>
					</li>
					<li className="mr-6 ">
						<button className='bg-[#00786a] hover:bg-[#02564c] text-white py-1 px-3 rounded-lg ' type='button'>Call</button>
					</li>
				</ul>
			</header>

			<div className="overflow-auto h-screen">
				<div className="flex w-full mt-2 space-x-3 max-w-xs">
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
					<div>
						<div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
							<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
						<span className="text-xs text-gray-500 leading-none">2 min ago</span>
					</div>
				</div>
				<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
					<div>
						<div className="bg-[#00786a] text-white p-3 rounded-l-lg rounded-br-lg">
							<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
						</div>
						<span className="text-xs text-gray-500 leading-none">2 min ago</span>
					</div>
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				</div>
				<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
					<div>
						<div className="bg-[#00786a] text-white p-3 rounded-l-lg rounded-br-lg">
							<p className="text-sm">Lorem ipsum dolor sit amet.</p>
						</div>
						<span className="text-xs text-gray-500 leading-none">2 min ago</span>
					</div>
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				</div>
				<div className="flex w-full mt-2 space-x-3 max-w-xs">
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
					<div>
						<div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
							<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
						</div>
						<span className="text-xs text-gray-500 leading-none">2 min ago</span>
					</div>
				</div>
				<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
					<div>
						<div className="bg-[#00786a] text-white p-3 rounded-l-lg rounded-br-lg">
							<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
						</div>
						<span className="text-xs text-gray-500 leading-none">2 min ago</span>
					</div>
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				</div>
				<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
					<div>
						<div className="bg-[#00786a] text-white p-3 rounded-l-lg rounded-br-lg">
							<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
						</div>
						<span className="text-xs text-gray-500 leading-none">2 min ago</span>
					</div>
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				</div>
				<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
					<div>
						<div className="bg-[#00786a] text-white p-3 rounded-l-lg rounded-br-lg">
							<p className="text-sm">Lorem ipsum dolor sit amet.</p>
						</div>
						<span className="text-xs text-gray-500 leading-none">2 min ago</span>
					</div>
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				</div>
				<div className="flex w-full mt-2 space-x-3 max-w-xs">
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
					<div>
						<div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
							<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
						</div>
						<span className="text-xs text-gray-500 leading-none">2 min ago</span>
					</div>
				</div>
				<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
					<div>
						<div className="bg-[#00786a] text-white p-3 rounded-l-lg rounded-br-lg">
							<p className="text-sm">Lorem ipsum dolor sit.</p>
						</div>
						<span className="text-xs text-gray-500 leading-none">2 min ago</span>
					</div>
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				</div>
			</div>
		
			<div className="bg-gray-300 p-4">
				<input className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…"/>
			</div>
		</div>
	</div>
	
	
	</div>
)
}

export default Chat
