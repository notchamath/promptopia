import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>

      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quasi iste ducimus itaque, consequatur quibusdam aliquam omnis nulla et quos doloremque magni sit dicta sint dignissimos officiis, consectetur distinctio quaerat.
      </p>

      <Feed/>
    </section>
  )
}

export default Home