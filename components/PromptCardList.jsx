import PromptCard from './PromptCard';

import { useSession } from 'next-auth/react';

const PromptCardList = ({ data, router }) => {

    

    const { data: session } = useSession();

    const handlePromptClick = (post) => {
        if(session){
          if(session.user.id === post.creator._id){
            router.push('/profile')
          } else {
            router.push(`/view-user?id=${post.creator._id}`)
          }
        }
        else{
          alert("You need to be logged in to view this user's profile!")
        }
      }

      const handleTagClick = (tag) => {
        if(session){
          router.push(`/tag-result?tag=${tag}`)
        }
        else{
          alert("You need to be logged in to view this tag's results!")
        }
      }

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

  export default PromptCardList;