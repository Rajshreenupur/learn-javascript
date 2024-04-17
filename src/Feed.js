import React, { useEffect ,useState} from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { db } from './firebase';
import { addDoc, collection, getDocs, onSnapshot, serverTimestamp } from 'firebase/firestore';
 import Post from './Post';
 
function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
 
  
  const UsersCollectionRef = collection(db, "posts")

  useEffect(() => {
    const getUsersData = async () => {
      const data = await getDocs(UsersCollectionRef)
      setPosts(data.docs.map((elem) => (
        { data:elem.data(),
           id: elem.id })))
    }

    getUsersData()


    // Listen for real-time updates to posts
    const unsubscribe = onSnapshot(UsersCollectionRef, (snapshot) => {
      setPosts(snapshot.docs.map((elem) => ({
        data: elem.data(),
        id: elem.id
      })))
    })

    // Clean up the listener
    return () => unsubscribe()
    
}, [])

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
              placeholder='Start a post'
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
