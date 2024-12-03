import React, { useEffect, useState } from 'react';
import styles from './JobFeed.module.css';

// GET API = `https://hacker-news.firebaseio.com/v0/jobstories.json`;
// Metadata GET API = https://hacker-news.firebaseio.com/v0/item/YOUR_POST_ID_HERE.json`
const JobFeed = () => {

  const [jobStories, setJobStories] = useState([])
  const [visibleItems, setVisibleItems] = useState([])
  const [metadata, setMetadata] = useState([])

  useEffect(()=>{

  fetchInitialData();

  },[])

  const fetchInitialData =async () =>{
    try {
      const url = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
      const json = await url.json()

      setJobStories( json)
      const initialVisibleItems = json.slice(0, 5);
      setVisibleItems(initialVisibleItems)
      fetchMetadata(initialVisibleItems)

    } catch (error) {
      console.log(error)
    }
  }
  const fetchMetadata= async(data)=>{

    try {
      const promises = data.map((item) => {
       return fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`).then((res) => res.json())
      })
      const result = await Promise.all(promises)
      setMetadata((prev) => [...prev, ...result])
    } catch (error) {
      console.log(error)
    }
  }
  const loadMore = () =>{
    const nextBatch = jobStories.slice(visibleItems.length ,visibleItems.length + 5)
    if (nextBatch.length > 0) {
      setVisibleItems((prev) => [...prev, ...nextBatch]);
      fetchMetadata(nextBatch);
    }
  }
  console.log(metadata)
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Hackernews Jobs</h1>
      <div className={styles.allPostsContainer}>
        {metadata.map((singlePost) => (
          <Post key={singlePost?.id} post={singlePost} />
        ))}
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
      {visibleItems.length < jobStories.length ? (<button onClick={loadMore} className={styles.button}>Load More</button>): ''}
      </div>
    </div>
  );
};

const Post = ({ post }) => {
  return (
    <a href={post?.url} target="__blank" style={{ textDecoration: 'none' }}>
      <div className={styles.postContainer}>
        <p>
          ID: <span>{post?.id}</span>{' '}
        </p>
        <h1>{post?.title}</h1>
        {//<p>{moment(post?.time).format('Do MMM YYYY hh:mm a')}</p>
        }
        <p>
          Posted by: <span>{post?.by}</span>{' '}
        </p>
      </div>
    </a>
  );
};

export default JobFeed;
