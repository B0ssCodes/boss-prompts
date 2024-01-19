"use client"
import { useState, useEffect } from "react";
import { useRouter, useSearchParams} from "next/navigation";  
import PromptCardList from "@components/PromptCardList";
import Loading from "@components/Loading";

const TagResult = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptTag = searchParams.get('tag');

    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getTagPosts = async () => {
            setIsLoading(true);
            const response = await fetch(`/api/prompt/search/tag/${promptTag}`);
            const data = await response.json();

            setPosts(data);
            setIsLoading(false);
        }
        if(promptTag) {
            getTagPosts();
        }
    }, [promptTag])

  return (
    
    <section className="w-full flex-center
    flex-col">
 <h1 className="head_text text-center">Results for
 <br className="max-md:hidden"/>
 <div className="orange_gradient
 text-center pb-3 ">{`#${promptTag}`}</div>
 </h1>
 <p className="desc text-center">
 Check out the prompts with {`#${promptTag}`}, and get inspired!
 </p>
    {isLoading && <Loading />}
 {!isLoading && <PromptCardList 
      data={posts}
      router={router}
      />}
    </section>
    
    
  )
}

export default TagResult