'use client'
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import PromptCard from './PromptCard'
import { useRouter } from "next/navigation";

const PromptCardList = ({ data, handleTagClick, handlePromptClick }) => {
  return (
    <div className="mt-16 prompt_layout">
  {data.map((post) => {
    return (
      <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
        handlePromptClick={handlePromptClick}
      />
    );
  })}
</div>
  )
}

const Feed = () => {

  const { data: session } = useSession();
  const [searchText, setSearchText] = useState('');
  const [searchSubmitState, setSearchSubmitState] = useState(false);
  const router = useRouter();
  const [posts, setPosts] = useState([]);


  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  }
  
  const searchSubmit = () => {
    setSearchSubmitState(true);

  }

  const handlePromptClick = (post) => {
    if(session){
      if(session.user.id === post.creator._id){
        router.push('/profile')
      } else {
        router.push(`/view-user?id=${post.creator._id}`)
      }
    }
  }

  useEffect(() => {

    if(searchSubmitState){
      const fetchSearchPosts = async () => {
        const response = await fetch(`/api/prompt/${searchText}`);
        const data = await response.json();

        setPosts(data);
      }
      fetchSearchPosts();
    }

  }, [searchSubmitState])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch ('/api/prompt');
      const data = await response.json();
      
    
      setPosts(data);
      console.log(posts)
    }

    fetchPosts();
  }, [])

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

      <PromptCardList 
      data={posts}
      handlePromptClick={handlePromptClick}
      handleTagClick={() => {}}/>
    </section>
  )
}

export default Feed