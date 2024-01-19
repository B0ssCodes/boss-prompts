'use client'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PromptCardList from "@components/PromptCardList";
import Loading from '@components/Loading'; // Import your Loading component

const SearchResult = () => {
    const router = useRouter(); 
    const searchParams = useSearchParams();
    const promptSearch = searchParams.get('search');

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Add a new state variable for tracking loading status

    useEffect(() => {
        const getTagPosts = async () => {
            setIsLoading(true); // Set loading status to true before fetching data
            const response = await fetch(`/api/prompt/search/${promptSearch}`);
            const data = await response.json();
            setPosts(data);
            setIsLoading(false); // Set loading status to false after fetching data
        }
        if(promptSearch) {
            getTagPosts();
        }
    }, [promptSearch])

    return (
        <section className="w-full flex-center flex-col">
                
                    <h1 className="head_text text-center">Results for
                        <br className="max-md:hidden"/>
                        <div className="orange_gradient text-center pb-3 ">{`${promptSearch}`}</div>
                    </h1>
                    <p className="desc text-center">
                        Check out the prompts containing <strong>{`${promptSearch}`}</strong>, and get inspired!
                    </p>
                    {isLoading && <Loading />}
                    {!isLoading && <PromptCardList 
                        data={posts}
                        router={router}
                    />}
            
        </section>
    )
}

export default SearchResult;