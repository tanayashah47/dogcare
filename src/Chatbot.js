import React, { useState } from 'react'

const chatFlow = {
  start: {
    message: "Hey there! 🐶 Welcome to Tanaya's Dog Shelter! How can I help you today?",
    options: [
      { text: "I want to adopt a dog", next: "adopt" },
      { text: "I want to volunteer", next: "volunteer" },
      { text: "I want to donate", next: "donate" },
      { text: "Just browsing around", next: "browsing" }
    ]
  },
  adopt: {
    message: "That's awesome! We'd love to help you find your perfect furry friend! What size dog are you looking for?",
    options: [
      { text: "Small (under 20 lbs)", next: "small_dog" },
      { text: "Medium (20-50 lbs)", next: "medium_dog" },
      { text: "Large (50+ lbs)", next: "large_dog" },
      { text: "I'm open to any size!", next: "any_size" }
    ]
  },
  small_dog: {
    message: "We have some adorable small dogs right now! Do you have experience with dogs?",
    options: [
      { text: "Yes, I've had dogs before", next: "experienced" },
      { text: "No, this would be my first", next: "first_timer" }
    ]
  },
  medium_dog: {
    message: "Medium dogs are great companions! Do you have a yard or live in an apartment?",
    options: [
      { text: "I have a big yard", next: "has_yard" },
      { text: "I live in an apartment", next: "apartment" }
    ]
  },
  large_dog: {
    message: "Big dogs, big love! 🐕 Do you have enough space for a large dog?",
    options: [
      { text: "Yes, plenty of space!", next: "has_yard" },
      { text: "Not really sure...", next: "space_concern" }
    ]
  },
  any_size: {
    message: "You're open-minded, we love that! Let's figure out what fits your lifestyle. Do you have kids at home?",
    options: [
      { text: "Yes, I have kids", next: "has_kids" },
      { text: "No kids", next: "no_kids" }
    ]
  },
  experienced: {
    message: "Great! Since you have experience, we can match you with any of our dogs. Please fill out the adoption form on our website and we'll get back to you within 24 hours! 🎉",
    options: [
      { text: "Take me to the form", next: "go_form" },
      { text: "Start over", next: "start" }
    ]
  },
  first_timer: {
    message: "No worries! Everyone starts somewhere. We recommend starting with a calm, friendly dog. Fill out our adoption form and mention you're a first-time owner — we'll help you every step of the way!",
    options: [
      { text: "Take me to the form", next: "go_form" },
      { text: "Start over", next: "start" }
    ]
  },
  has_yard: {
    message: "Perfect! A yard is great for dogs to run around. We have several dogs that would love a home with outdoor space. Check out our available dogs and fill out the adoption form!",
    options: [
      { text: "Take me to the form", next: "go_form" },
      { text: "Start over", next: "start" }
    ]
  },
  apartment: {
    message: "Apartment living works great for many dogs! We'll help find one that's apartment-friendly. Fill out the form and we'll suggest the best matches!",
    options: [
      { text: "Take me to the form", next: "go_form" },
      { text: "Start over", next: "start" }
    ]
  },
  space_concern: {
    message: "That's okay! Maybe a medium or small dog would be a better fit. Would you like to reconsider the size?",
    options: [
      { text: "Show me smaller dogs", next: "small_dog" },
      { text: "Show me medium dogs", next: "medium_dog" },
      { text: "Start over", next: "start" }
    ]
  },
  has_kids: {
    message: "We have several kid-friendly dogs! Safety is our priority. Fill out the form and mention the ages of your kids — we'll find the perfect family dog! 👨‍👩‍👧‍👦🐕",
    options: [
      { text: "Take me to the form", next: "go_form" },
      { text: "Start over", next: "start" }
    ]
  },
  no_kids: {
    message: "Nice! Without kids, you have more flexibility in choosing. Fill out the adoption form and we'll set up a meet-and-greet with some of our dogs!",
    options: [
      { text: "Take me to the form", next: "go_form" },
      { text: "Start over", next: "start" }
    ]
  },
  volunteer: {
    message: "We always need helping hands! 🙌 What kind of volunteering interests you?",
    options: [
      { text: "Walking & playing with dogs", next: "vol_walking" },
      { text: "Helping with events", next: "vol_events" },
      { text: "Administrative work", next: "vol_admin" }
    ]
  },
  vol_walking: {
    message: "Dog walking volunteers are our favorites! 🚶‍♂️🐕 We need walkers every day from 8am-6pm. Just show up at the shelter or fill out the contact form to schedule!",
    options: [
      { text: "Take me to the form", next: "go_form" },
      { text: "Start over", next: "start" }
    ]
  },
  vol_events: {
    message: "We host adoption events every month! We need help with setup, photography, and greeting visitors. Fill out the form and we'll add you to our events team!",
    options: [
      { text: "Take me to the form", next: "go_form" },
      { text: "Start over", next: "start" }
    ]
  },
  vol_admin: {
    message: "Behind-the-scenes heroes! We need help with data entry, social media, and phone calls. Fill out the contact form with your skills!",
    options: [
      { text: "Take me to the form", next: "go_form" },
      { text: "Start over", next: "start" }
    ]
  },
  donate: {
    message: "Thank you so much for your generosity! 💕 Every bit helps our furry friends. What would you like to donate?",
    options: [
      { text: "Money", next: "donate_money" },
      { text: "Dog food & supplies", next: "donate_supplies" },
      { text: "Both!", next: "donate_both" }
    ]
  },
  donate_money: {
    message: "Monetary donations help us cover vet bills, food, and shelter maintenance. You can donate through our form or visit us in person. Thank you! 🙏",
    options: [
      { text: "Take me to the form", next: "go_form" },
      { text: "Start over", next: "start" }
    ]
  },
  donate_supplies: {
    message: "We always need dog food, blankets, toys, and cleaning supplies! You can drop them off at the shelter anytime between 9am-5pm. Thank you!",
    options: [
      { text: "Got it, thanks!", next: "start" },
      { text: "Start over", next: "start" }
    ]
  },
  donate_both: {
    message: "Wow, you're amazing! 🌟 Drop off supplies anytime and use our form for monetary donations. The dogs send their love!",
    options: [
      { text: "Take me to the form", next: "go_form" },
      { text: "Start over", next: "start" }
    ]
  },
  browsing: {
    message: "No problem! Feel free to look around. Here are some things you can check out:",
    options: [
      { text: "Tell me about the shelter", next: "about_shelter" },
      { text: "What dogs do you have?", next: "available_dogs" },
      { text: "How does adoption work?", next: "adoption_process" },
      { text: "Start over", next: "start" }
    ]
  },
  about_shelter: {
    message: "Tanaya's Dog Shelter has been rescuing and rehoming dogs since 2020. We're a no-kill shelter that believes every dog deserves a loving home. We currently house over 30 dogs of all breeds and sizes! 🏠🐾",
    options: [
      { text: "How can I help?", next: "start" },
      { text: "Start over", next: "start" }
    ]
  },
  available_dogs: {
    message: "We currently have dogs of all ages and breeds! From playful puppies to gentle seniors. Scroll up on our website to see some of our adorable residents! 🐶",
    options: [
      { text: "I want to adopt!", next: "adopt" },
      { text: "Start over", next: "start" }
    ]
  },
  adoption_process: {
    message: "Our adoption process is simple:\n1️⃣ Fill out the adoption form\n2️⃣ We review your application (24-48 hrs)\n3️⃣ Meet-and-greet with your potential dog\n4️⃣ Home check (for some dogs)\n5️⃣ Take your new best friend home! 🎉",
    options: [
      { text: "Let's start!", next: "adopt" },
      { text: "Start over", next: "start" }
    ]
  },
  go_form: {
    message: "Scrolling you down to the form now! 👇",
    options: []
  }
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: "bot", text: chatFlow.start.message, options: chatFlow.start.options }
  ])

  const handleOption = (option) => {
    if (option.next === "go_form") {
      setMessages(prev => [...prev,
        { from: "user", text: option.text },
        { from: "bot", text: chatFlow.go_form.message, options: [] }
      ])
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }, 1000)
      return
    }

    const nextStep = chatFlow[option.next]
    setMessages(prev => [...prev,
      { from: "user", text: option.text },
      { from: "bot", text: nextStep.message, options: nextStep.options }
    ])
  }

  return (
    <>
      <div className={`chatbot-widget ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
          <span>🐾 Chat with us!</span>
          <span>{isOpen ? '✕' : '💬'}</span>
        </div>
        {isOpen && (
          <div className="chatbot-body">
            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-msg ${msg.from}`}>
                  <p>{msg.text}</p>
                  {msg.options && i === messages.length - 1 && (
                    <div className="chat-options">
                      {msg.options.map((opt, j) => (
                        <button key={j} onClick={() => handleOption(opt)}>
                          {opt.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Chatbot
