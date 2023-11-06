import TableBoard from '@/components/Table'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <section className="w-full flex-center flex-col font-audiowide">
      <h1 className="head_text text-center">
        {/* RedBull presents */}
        <br className="max-md:hidden" />
        <span className="pinkpurple text-center tracking-widest"> CELESTIA</span>
      </h1>
      {/* <p className="desc text-center">An open source AI prompting tool Designed with objective to achive efficiency for AI tools on a user level. <br />Discover , create and share creative prompts</p> */}
      <br />
    </section>
    <section className='w-full mt-5'>
    <TableBoard/>
    </section>
    </>
  )
}
