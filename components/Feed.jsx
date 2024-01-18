'use client'
import { useState, useEffect } from "react";

import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
  {data.map((post) => {
    return (
      <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
      />
    );
  })}
</div>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [searchSubmitState, setSearchSubmitState] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  }
  
  const searchSubmit = () => {
    setSearchSubmitState(true);

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
      handleTagClick={() => {}}/>
    </section>
  )
}

export default Feed