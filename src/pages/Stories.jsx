import React, { useState } from "react";
import "./Stories.css";


const StoryCard = ({ story }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="story-card">
      <img src={story.photo} alt={story.name} className="story-photo" />
      <h3>{story.name}</h3>
      <p className="story-date">{story.date}</p>
      <p>{showMore ? story.fullContent : story.content}</p>
      {story.fullContent.length > story.content.length && (
        <button className="see-more-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "See Less" : "See More"}
        </button>
      )}
    </div>
    
  );
};


      

const sampleStories = [
  {
    name: "Sienna",
    date: "May 10, 2023",
    photo: "/images/img16.jpg",
    content: `As a resident of the Philippines, I have experienced numerous instances where my safety was threatened, 
    especially in situations where I found myself in a room full of male writers. Despite being a published author, 
    I am often asked if writing is all I do in my life, while I notice that men are not subjected to the same question.
     I wish that women could feel confident in themselves and never have to prove their worth beyond their profession. 
Reflecting on my experiences, I have come to realize the importance of feeling safe as a woman. When our safety is threatened,
 whether physically or emotionally, it can be difficult to feel confident and thrive in our personal and professional lives.
  I have had to work on myself to remind myself that I am enough, despite what others may think or say. To create a safer and
   more accepting society, we need to stop questioning women's worth and accept them as they are. ...`,
    fullContent: `As a resident of the Philippines, I have experienced numerous instances where my 
    safety was threatened, especially in situations where I found myself in a room full of male writers.
     Despite being a published author, I am often asked if writing is all I do in my life, while I notice
      that men are not subjected to the same question. I wish that women could feel confident in themselves
       and never have to prove their worth beyond their profession. 
Reflecting on my experiences, I have come to realize the importance of feeling safe as a woman. When our safety
 is threatened, whether physically or emotionally, it can be difficult to feel confident and thrive in our 
 personal and professional lives. I have had to work on myself to remind myself that I am enough, despite 
 what others may think or say. To create a safer and more accepting society, we need to stop questioning
  women's worth and accept them as they are. 
Living in Manila, I know that it is still a macho society, but I believe that women speaking up about their 
experiences can lead to positive change. When we share our stories, we can help educate men on how to treat 
us better and make our society a safer and more accepting environment for women. I published my own self-help 
books to help others overcome their own personal challenges. As a woman, I believe that feeling safe and accepted
 is essential for our personal growth and success. When we can live our lives without fear, we can fully embrace our 
 passions and contribute to society in meaningful ways.
 .`
  },
  {
    name: "Deborah",
    date: "January 25, 2021",
    photo: "/images/img14.jpg",
    content: `I've experienced open disrespect from many Singaporeans. To provide an example of the endemic and systemic nature of this phenomenon, my HDB neighbor took 
    me to court for playing the piano during non-quiet hours. I am a HDB owner yet, he had the temerity to criticize me that I can't play the piano in my own home during
     the day or evening (during non-quiet hours as clearly stipulated by the HDB noise guidelines). He even went and complained to the grassroots about me, but no one in 
     the grassroots openly called out his unreasonable behaviour or told him that I had every right to play the piano during non-quiet hours - in fact,...`,
    fullContent: `I've experienced open disrespect from many Singaporeans. To provide an example of the endemic and systemic nature of this phenomenon, my HDB neighbor 
    took me to court for playing the piano during non-quiet hours. I am a HDB owner yet, he had the temerity to criticize me that I can't play the piano in my own home
     during the day or evening (during non-quiet hours as clearly stipulated by the HDB noise guidelines). He even went and complained to the grassroots about me,
      but no one in the grassroots openly called out his unreasonable behaviour or told him that I had every right to play the piano during non-quiet hours - in fact,
       a prominent male grassroots leader supported him in court against me with absolutely no evidence except hearsay. Thankfully, the judge had the good sense to call
        him out on that count and the fact that I was not doing anything wrong by playing the piano in my own home during non-quiet hours, and he lost. However, I would
         question a system that allows someone as unreasonable as my neighbour to drag me to court for $60 over his perceived injustice - if you look at noise guidelines 
         it clearly shows that I was abiding by the stated hours. I question a system that allows someone to lead the grassroots with so little logic and common sense that
          he would go to court and expect his word to be taken at face value because of his standing as a leader of the grassroots. 
Overall, I feel less safe in Singapore than I did during the eight years I lived in America - even though when I lived there I was in a very unsafe neighbourhood, Crenshaw,
 and had to deal with some really rough people. The mental health issues that pervade our society stems from a lack of openness, honesty and common sense, and a strong need 
 to maintain appearances and preserve 'face,' which is why I’ve decided to speak up and am using my real name to try and change this culture of shame and blame that has a
  felt psychological impact on so many people. 
I hope more survivors and victims of abuse (emotional and physical) will speak up and share their stories. The normalization of abuse is wrong. Abuse should never be endorsed
 or made light of. Victim blaming is a real and felt experience and has a powerful silencing effect. I am speaking up to change that dynamic. I believe that safety (emotional,
  physical and psychological safety) is important for everyone, regardless of gender or age. It is through safe connections with others that we can heal, grow, and find meaning
   and purpose in life. It is through sharing our stories and working towards systemic changes that we can create the foundation for healing and change in this society.`
  },
   {
    name: "Cheryl",
    date: "August 23, 2023",
    photo: "/images/img17.jpg",
    content: `As a teenager, my mum told me that she almost threw me out the window as a two-month-old baby because I was crying non-stop. This story shocked me and
     left me with a strong fear of abandonment. I didn’t see my mother in the same way after that. 
When I was in Secondary 1, my classmate sexually assaulted me. He asked me if we wanted to do our homework together as we had to finish it by the end of the day. He took 
me to the rooftop of the building and as I was doing my homework, I realised that he was watching pornography. He asked me to watch it with him. Even though I rejected 
him...`,
    fullContent: `As a teenager, my mum told me that she almost threw me out the window as a two-month-old baby because I was crying non-stop. This story shocked me and
     left me with a strong fear of abandonment. I didn’t see my mother in the same way after that. 
When I was in Secondary 1, my classmate sexually assaulted me. He asked me if we wanted to do our homework together as we had to finish it by the end of the day. He took 
me to the rooftop of the building and as I was doing my homework, I realised that he was watching pornography. He asked me to watch it with him. Even though I rejected 
him, he persisted by stripping his pants and asking me to touch his genitals, saying that after all, we had to learn sexual education and he might as well teach me first.
 I felt so ashamed that it happened, I didn’t know who to trust with this information and it was a horrible feeling. As a 13-year-old girl, I felt I needed a lot of
  reassurance that not all guys are like that. 
My ideas about sex also changed, the experience made me curious about masturbation and what my body goes through during arousal. I didn’t know who to go to when I 
need help, especially when it comes to my private parts. I feel that women need to know how to speak up for themselves and stand firm on what they really believe 
in then men cannot leave you on shaky ground. It is important for women to have a say in their life, and to have control over what she does rather than just follow the stereotypes..`
  },

  {
    name: "Liravee",
    date: "Juny 10, 2024",
    photo: "/images/img15.jpg",
    content: `In my teenage years, a boy had been bothering me on Facebook, sending me odd messages and making lewd comments about my photos like "not even a little
     peek of a boob?" It made me feel uncomfortable and violated, so I blocked him. But that wasn't the end of it. I also decided to take action. I took a screenshot of
      his comments and posted them on my Facebook timeline, effectively "naming and shaming" him to my friends and followers. While most of my girlfriends showed me support, 
      some of my guy friends didn't see it that way (that it was lewd and gross)....`,
    fullContent: `In my teenage years, a boy had been bothering me on Facebook, sending me odd messages and making lewd comments about my photos like "not even a little
     peek of a boob?" It made me feel uncomfortable and violated, so I blocked him. But that wasn't the end of it. I also decided to take action. I took a screenshot of
      his comments and posted them on my Facebook timeline, effectively "naming and shaming" him to my friends and followers. While most of my girlfriends showed me support, 
      some of my guy friends didn't see it that way (that it was lewd and gross). They left comments defending the boy, saying things like "just take it as a compliment" and
       "Don't be a bitch...he didn't mean it in that way." I was shocked and hurt that they didn't understand the gravity of the situation. Although I didn't feel physically
        threatened by any of the boys, it made me second-guess my actions and took the post down a year later. It took me a while to come to terms with what had happened and
         accept that I was not wrong for calling out harassment online. It took me the same amount of time to forgive the boys who also 'did not know any better'. Their knee-jerk 
         reaction was to protect their 'bro'. They did not understand that girls deserve better. 
That experience made me realize how important it is for women to feel safe and secure. Unfortunately, in my country, Malaysia, women are often told to be careful and take precautions
 to avoid danger. We are advised not to dress a certain way, not to go out alone at night unless we're accompanied by a man, and to be constantly aware of our surroundings. This constant
  worry for safety can be all-consuming and affects how brave we feel. When we are constantly told that we are not safe on our own, we start to believe that we cannot survive without constant
   protection. If a woman was brought up in a safe space and she believes she can be safe, she can aspire to do so many things and BE so many things, without the daily worry of 'can I' or 'should
    I' or 'now is not the right time’..`
  },
  
];

const encouragements = [
  "You are not alone ❤️",
  "Your story matters 🌟",
  "Together, we rise 💪",
];

const Stories = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="stories-page">
      <header className="stories-header">
        <h1>Stories & Support</h1>
        <p>Empowering girls through real voices, shared experiences, and heartfelt encouragement.</p>
      </header>

<section className="quote-section">
        <blockquote>
          "Your voice can inspire, heal, and ignite change. Share it with the world." – SafeHer Weekly Quote
        </blockquote>
      </section>

      
      <section className="share-story">
        <h2>📝 Share Your Story</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label>
              Your Name (or leave blank for anonymous):
              <input type="text" placeholder="Optional" />
            </label>
            <label>
              Your Story:
              <textarea required placeholder="Write your story here..." />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p className="thank-you">Thank you for sharing your story. You’re inspiring others!</p>
        )}
      </section>

       <section className="real-stories">
  <h2> Real Stories from Brave Voices</h2>
  <div className="story-list">
    {sampleStories.map((story, index) => {
      const [showMore, setShowMore] = useState(false);
      return (
        <div className="story-card" key={index}>
          <img src={story.photo} alt={story.name} className="story-photo" />
          <h3>{story.name}</h3>
          <p className="story-date">{story.date}</p>
          <p>{showMore ? story.fullContent : story.content}</p>
          {story.fullContent.length > story.content.length && (
            <button className="see-more-btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? "See Less" : "See More"}
            </button>
          )}
        </div>
      );
    })}
  </div>
</section>


     



      <section className="encouragement-wall">
        <h2>💬 Wall of Encouragement</h2>
        <div className="encouragements">
          {encouragements.map((msg, i) => (
            <div key={i} className="encouragement">{msg}</div>
          ))}
        </div>
      </section>



     

    </div>
  );
};

export default Stories;
