import React, { useEffect ,useState} from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { db } from './firebase';
import { addDoc, collection, getDocs, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
 import Post from './Post';
 
function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
 
  
  const UsersCollectionRef = collection(db, "posts")

  useEffect(() => {
    // Function to fetch posts from Firestore and listen for changes
    const fetchPosts = async () => {
      const PostsCollectionRef = collection(db, "posts");
      const q = query(PostsCollectionRef, orderBy('timestamp', 'desc')); // Query to order posts by timestamp in descending order
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const postsData = [];
        snapshot.forEach((doc) => {
          postsData.push({ 
            id: doc.id, 
            data:doc.data() });
        });
        setPosts(postsData);
      });

      // Clean up function to unsubscribe from snapshot listener when component unmounts
      return () => unsubscribe();
    };

    fetchPosts(); // Call the function to fetch posts when the component mounts
  }, []);


  const sendPost = async (e) => {
    e.preventDefault();
    try {

      addDoc(UsersCollectionRef, {
          name: 'Rajshree Nupur',
          description: 'Full Stack Developer',
          message: input,
          photoUrl: '',
          timestamp: serverTimestamp()
       })
      setInput('');
    } catch (error) {
      console.error('Error adding Post: ', error);
    }
  };
 
   return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder='Share your thoughts....'
            />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>

        <div className='feed_inputOption'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
          <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
          
        </div>
      </div>

      

      {posts.map(({id,data:{name,description,message,photoUrl}}) =>(
        <Post 
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
        />
      ))}

    </div>
  );
  
}

export default Feed;

