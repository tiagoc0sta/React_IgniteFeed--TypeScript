import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment }: CommentProps){

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    console.log('delete comment')

    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount((state) =>{
      return state +1
    });
  }

    return(
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt="" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Mayk Brito</strong>
                <time 
                  title="21-Ago at 08:13" 
                  dateTime="2022-08-22 08:13:30">Published around 1 hour ago
                </time>
              </div>

              <button onClick={handleDeleteComment} title="delete comment">
                <Trash size={24}/>
              </button>

            </header>
            <p>{content}</p>
          </div>
          
          <footer>
            <button onClick={handleLikeComment} >
              <ThumbsUp/>
              Applaud <span>{likeCount}</span>
            </button>
          </footer>
        </div>  
      </div>
    )
}