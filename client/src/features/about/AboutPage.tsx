const AboutPage = () => {
  return (
    <div>
        <h2 className="text-3xl mt-4">David Le</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="space-y-4 break-words my-4 md:w-1/2">
                <p>Servus, I'm David!</p>
                <p>I am a science and computer science student at Monash, majoring in pure maths and algorithms.</p>
                <p>In my free time, I enjoy many hobbies, probably too much. You can talk to me about travelling, motorcycling, hiking, sports, (classical) music, trains, or literally anything. I would probably be interested.</p>
                <p>Over my studies, I have been fortunate enough to work with a fantastic team at Atlassian.</p>
            </div>
            <div className="md:w-1/2">
                <img src="/me.jpg" alt="David Le" className="w-full h-auto rounded-lg" />
            </div>
        </div>
    </div>
  )
}

export default AboutPage
