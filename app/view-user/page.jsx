'use client'
import React from 'react'

import { useRouter, useSearchParams } from "next/navigation";  
import { useState, useEffect } from "react";
 
import Profile from '@components/Profile'
const UserProfile = () => {

    const router = useRouter();

    const searchParams = useSearchParams();
    const userId = searchParams.get('id');
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch(`/api/users/${userId}/posts`);
        const data = await response.json();
        
        setUserPosts(data);
      };
  
      if (userId) fetchPosts();
    }, [userId]);
  return (
    <Profile
      name={`${userPosts[0]?.creator?.username}'s`}
      desc={`This is the profile page of ${userPosts[0]?.creator?.username}, feel free to check out their prompts!` }
      data={userPosts}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  )
}

export default UserProfile