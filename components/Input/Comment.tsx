import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../store/Context';
import CommentList from './CommentList';

import classes from './comments.module.css';
import NewComment from './NewComment';

function Comments(props: any) {
  const { showNotificationHandler } = useGlobalContext();
  const [isFetching, setIsFecthing] = useState(false);
  const { id } = props;

  const [showComments, setShowComments] = useState(false);

  const [comments, setComments] = useState([]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  useEffect(() => {
    if (showComments) {
      setIsFecthing(true);
      fetch(`/api/comments/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.comments);
          setIsFecthing(false);
        });
    }
  }, [id, showComments]);

  async function addCommentHandler(commentData: any) {
    showNotificationHandler({
      message: 'Comment is been stored',
      show: true,
      status: 'pending',
      title: 'Sending Comment...',
    });

    const response = await fetch(`/api/comments/${id}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.json();
    showNotificationHandler({
      message: 'Comment saved',
      show: true,
      status: 'success',
      title: 'Success',
    });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetching && <CommentList items={comments} />}

      {showComments && isFetching && <p className="center">Laoding...</p>}
    </section>
  );
}

export default Comments;
