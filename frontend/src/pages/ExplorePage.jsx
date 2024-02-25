import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Repos from "../components/Repos";

const ExplorePage = () => {
	// https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=10
	const [loading, setLoading] = useState(false);
	const [repos, setRepos] = useState([]);
	const [selectedLanguage, setSelectedLanguage] = useState("");

	const exploreRepos = async (language) => {
		setLoading(true);
		setRepos([]);
		try {
			const res = await fetch("/api/explore/repos/" + language);
			const { repos } = await res.json();
			setRepos(repos);

			setSelectedLanguage(language);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className='px-4'>
			<div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
				<h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
				<div className='flex flex-wrap gap-2 my-2 justify-center'>
					<img
						src='/javascript.svg'
						alt='JavaScript ogo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("javascript")}
					/>
					<img
						src='/typescript.svg'
						alt='TypeScript logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("typescript")}
					/>
					<img
						src='/c++.svg'
						alt='C++ logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("c++")}
					/>
					<img
						src='/python.svg'
						alt='Python logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("python")}
					/>
					<img
						src='/go.svg'
						alt='go logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("golang")}
					/>
					<img
						src='/csharp.svg'
						alt='c# logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("c#")}
					/>
					<img
						src='/rust.svg'
						alt='rust logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("rust")}
					/>
					<img
						src='/c.svg'
						alt='c logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("c")}
					/>
					<img
						src='/swift.svg'
						alt='swift logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("swift")}
					/>
					<img
						src='/sql.svg'
						alt='sql logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("sql")}
					/>
					<img
						src='/bash.svg'
						alt='bash logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("bash")}
					/>
					<img
						src='/php.svg'
						alt='php logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("php")}
					/>
					<img
						src='/kotlin.svg'
						alt='kotlin logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("kotlin")}
					/>
					<img
						src='/ruby.svg'
						alt='ruby logo'
						className='h-11 sm:h-20 cursor-pointer'
						onClick={() => exploreRepos("ruby")}
					/>
				</div>
				{repos.length > 0 && (
					<h2 className='text-lg font-semibold text-center my-4'>
						<span className='bg-gray-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-md '>
							{selectedLanguage.toUpperCase()}{" "}
						</span>
						Repositories
					</h2>
				)}
				{!loading && repos.length > 0 && <Repos repos={repos} alwaysFullWidth />}
				{loading && <Spinner />}
			</div>
		</div>
	);
};
export default ExplorePage;
