'use client'
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "./Loading.jsx"

import PromptCard from './PromptCard'
import PromptCardList  from "./PromptCardList";

const Feed = () => {

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  }
  
  const searchSubmit = (e) => {
    e.preventDefault();
    if(session){
    router.push(`/search-result?search=${searchText}`)
    }
    else{
      alert("You need to be logged in to search!")
    }
  }



  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch ('/api/prompt');
        const data = await response.json();
        
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
   } ,[])


  return (
    <section className="feed">
      <form className="relative w-full flex-center" onSubmit={searchSubmit}>
        <input 
        type="text"
        placeholder="Search for a tag or a username"
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_input peer"/>
      </form>
     
      
      {isLoading && <Loading />}
     

     {!isLoading && <PromptCardList 
      data={posts}
      router={router}
      />}
    </section>
  )
}

export default Feed