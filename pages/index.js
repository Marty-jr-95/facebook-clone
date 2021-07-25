import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Feeds from '../components/Feeds'
import Header from '../components/Header'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import Widgets from '../components/Widgets'
import { db } from '../firebase'

export default function Home({ session, posts }) {
  if (!session) return <Login />
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Marty's Facebook-clone</title>
        <link rel="icon" href="/Facebook_f_Logo.png" />
      </Head>

     <Header />

     <main className="flex">
       
       <SideBar />
       
       <Feeds posts = {posts} />

       <Widgets />
     </main>
      
    </div>
  )
}


export async function getServerSideProps(context) {
  //Get the user
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }))

  return {
    props: {
      session,
      posts: docs,
    }
  }
}