import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ onSearch }) => {
	const [username, setUsername] = useState("");

	return (
		<form className='max-w-xl mx-auto p-2' onSubmit={(e) => onSearch(e, username)}>
			<label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only'>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none'>
					<IoSearch className='w-5 h-5' />
				</div>
				<input
					type='search'
					id='default-search'
					className='block w-full p-4 ps-10 text-sm rounded-lg bg-glass focus:ring-blue-500 focus:border-blue-500 bg-transparent focus:bg-transparent '
					placeholder='i.e. sameerkali'
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button
					type='submit'
					className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-cyan-900 to-blue-900 hover:scale-95 active:scale-90 transition-all duration-300'
				>
					Search
				</button>
			</div>
		</form>
	);
};
export default Search;



/**
 
<button
          type="submit"
          className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700" />
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease" />
          <span className="relative text-white">Button Text</span>
        </button>
 */