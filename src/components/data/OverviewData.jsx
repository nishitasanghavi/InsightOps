import { FaBriefcase, FaClock, FaFileInvoice, FaUserPlus } from 'react-icons/fa';

export const paymentsData = [
    { month: 'January', gigCount: 15 },
    { month: 'February', gigCount: 20 },
    { month: 'March', gigCount: 25 },
    { month: 'April', gigCount: 30 },
    { month: 'May', gigCount: 35 },
    { month: 'June', gigCount: 40 },
    { month: 'July', gigCount: 50 },
    { month: 'August', gigCount: 45 },
    { month: 'September', gigCount: 55 },
    { month: 'October', gigCount: 60 },
    { month: 'November', gigCount: 70 },
    { month: 'December', gigCount: 80 },
];

export const proposalData = [
    { name: 'Hired', value: 78, color: '#E2511A' },  // Hired in Orange
    { name: 'Pending', value: 12, color: '#CCCCCC' }, // Pending in Grey
    { name: 'Rejected', value: 10, color: '#000000' }, // Rejected in Black
];

export const categoryData = [
    { name: 'Delivery', value: 45, color: '#E2511A' },  // Delivery in Orange
  { name: 'Writing', value: 30, color: '#CCCCCC' },    // Writing in Grey
  { name: 'Design', value: 25, color: '#000000' },     // Design in Black
];

export const details = [
  {
    title: 'Total Gigs Completed',
    num: '320',
    icon: FaBriefcase,
    colour: '#000000' // Black
  },
  {
    title: 'Active Gigs',
    num: '15',
    icon: FaClock,
    colour: '#E2511A' // Orange
  },
  {
    title: 'Pending Applications',
    num: '6',
    icon: FaFileInvoice,
    colour: '#000000' // Black
  },
  {
    title: 'New Clients Engaged',
    num: '28',
    icon: FaUserPlus,
    colour: '#E2511A' // Orange
  }
];


export const clients = [
    { name: 'Upwork', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWQYZ4W0cjzrBXm9YYRftRjselRRLWJ2d7Q&s' },   // Replace with the correct image URL
    { name: 'Fiverr', img: 'https://static.vecteezy.com/system/resources/thumbnails/025/732/716/small_2x/fiverr-logo-icon-online-platform-for-freelancers-free-vector.jpg' },
    { name: 'TaskRabbit', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn8v0vHPYX9Rq0wkBygG9MkoiAgtKQQ8W5Q&s' },
    { name: 'Freelancer', img: 'https://res.cloudinary.com/apideck/image/upload/v1555946981/catalog/freelancer/icon128x128.jpg' },
    { name: 'Toptal', img: 'https://e7.pngegg.com/pngimages/711/41/png-clipart-toptal-freelancer-job-engineering-technology-technology-blue-electronics-thumbnail.png' },   // New platform added
    { name: 'Guru', img: 'https://static.vecteezy.com/system/resources/thumbnails/000/587/462/small/19.jpg' },
  
]
export const clients2 = [
    {
      name: 'Soham',
      img:'data:image/jpeg;base64,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'
    },
    {
      name: 'Shravani',
      img:'https://i.pinimg.com/550x/38/09/c3/3809c319d6b40a4efda99bf5500fe6ef.jpg'
    },
    {
      name: 'Jheel',
      img:'https://i.pinimg.com/736x/c1/4b/0a/c14b0ace68437aa353d20b0a736bd460.jpg'
    },
    {
      name: 'Juii',
      img:'https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2014/03/1-medium-layered-haircut-for-square-face.jpg?w=500&ssl=1'
    },
    {
      name: 'Mridula',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdklVwlbXTTNtXmITOhV2BwDA4KT-f-uHm1A&s'
    },
    {
        name: 'Siddhi',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJh0NjLFF6Y0RI_-b8M2HnoLoVFQUrnZoMg&s'
      },
    
  ]
export const chatlistdata = [
  {
    name: 'John Doe',
    latestMessage: 'Hey! How are you doing?',
    image: '/images/person/m1.jpg',
    color: 'text-black'
  },
  {
    name: 'Jane Smith',
    latestMessage: 'Don’t forget the meeting tomorrow.',
    image: '/images/person/f1.jpg',
    color: 'text-[#089451]'
  },
  {
    name: 'Michael Brown',
    latestMessage: 'Can we reschedule our call?',
    image: '/images/person/m2.jpg',
    color: 'text-black'
  },
  {
    name: 'Emily Davis',
    latestMessage: 'I’ll send you the documents shortly.',
    image: '/images/person/f2.jpeg',
    color: 'text-[#089451]'
  },
  {
    name: 'David Wilson',
    latestMessage: 'Thanks for your help!',
    image: '/images/person/m3.jpg',
    color: 'text-black'
  },
  {
    name: 'Sophia Johnson',
    latestMessage: 'Looking forward to our collaboration.',
    image: '/images/person/f3.jpeg',
    color: 'text-[#089451]'
  },
  {
    name: 'Chris Lee',
    latestMessage: 'Can you review my latest code?',
    image: '/images/soham.jpeg',
    color: 'text-black'
  },
  {
    name: 'Olivia Martinez',
    latestMessage: 'I’ve completed the task you assigned.',
    image: '/images/jheel.jpeg',
    color: 'text-[#089451]'
  },
  {
    name: 'James Garcia',
    latestMessage: 'Let’s catch up this weekend!',
    image: '/images/person/m1.jpg',
    color: 'text-black'
  },
  {
    name: 'Isabella Hernandez',
    latestMessage: 'I’ll update you on the project status.',
    image: '/images/mridula.jpeg',
    color: 'text-[#089451]'
  }
];



export const statusList = [
  {
    name: 'John Doe',
    status: 'online',
    messages: [
      {
        me: 'Hey John, how are you doing today? I wanted to check in and see if everything is going smoothly with the project.',
        time: '5:00 PM'
      },
      {
        contact: 'Hey! I’m doing well, thanks for checking in. I’m pretty happy with the progress so far. Just wanted to discuss some new ideas for the app.',
        time: '5:05 PM'
      },
      {
        me: 'That’s awesome to hear! What ideas do you have in mind? I’m happy to help bring them to life.',
        time: '5:10 PM'
      },
      {
        contact: 'I was thinking of adding a new feature for tracking user activities. I also want to optimize the performance for a smoother experience.',
        time: '5:15 PM'
      },
      {
        me: 'Great ideas! The user activity tracker would add a lot of value to the app. I’ll also start working on optimizing the performance to make it faster.',
        time: '5:20 PM'
      },
      {
        contact: 'That sounds perfect! Let me know if you need any more details or assets from my side. I’m looking forward to seeing what you come up with.',
        time: '5:25 PM'
      },
      {
        me: 'Hey John, how are you doing today? I wanted to check in and see if everything is going smoothly with the project.',
        time: '5:00 PM'
      },
      {
        contact: 'Hey! I’m doing well, thanks for checking in. I’m pretty happy with the progress so far. Just wanted to discuss some new ideas for the app.',
        time: '5:05 PM'
      },
      {
        me: 'That’s awesome to hear! What ideas do you have in mind? I’m happy to help bring them to life.',
        time: '5:10 PM'
      },
      {
        contact: 'I was thinking of adding a new feature for tracking user activities. I also want to optimize the performance for a smoother experience.',
        time: '5:15 PM'
      },
      {
        me: 'Great ideas! The user activity tracker would add a lot of value to the app. I’ll also start working on optimizing the performance to make it faster.',
        time: '5:20 PM'
      },
      {
        contact: 'That sounds perfect! Let me know if you need any more details or assets from my side. I’m looking forward to seeing what you come up with.',
        time: '5:25 PM'
      }
    ]
  },
  {
    name: 'Jane Smith',
    status: 'offline',
    messages: [
      {
        me: 'Hey Jane, hope everything is going well on your end! I just wanted to follow up and see if there’s anything else you need help with.',
        time: '6:00 PM'
      },
      {
        contact: 'Hey, I’ve been good, just busy with some work on my side. I really appreciate your work so far on the website!',
        time: '6:05 PM'
      },
      {
        me: 'I’m glad to hear that! Is there anything you want to adjust or improve on the site? I can work on that for you.',
        time: '6:10 PM'
      },
      {
        contact: 'Actually, yes. I was thinking of updating the homepage design a bit. The layout feels a little too crowded right now.',
        time: '6:15 PM'
      },
      {
        me: 'I understand! I can help with a cleaner, more modern layout. Do you have any specific elements in mind that you’d like to include?',
        time: '6:20 PM'
      },
      {
        contact: 'I’d like to have a more prominent call-to-action section at the top, and some space for featured services. Could you work with that?',
        time: '6:25 PM'
      }
    ]
  },
  {
    name: 'Michael Brown',
    status: 'online',
    messages: [
      {
        me: 'Hi Michael, I hope you’re doing well! I wanted to check in and see if there’s any new direction for the website. Let me know if you need help.',
        time: '7:00 PM'
      },
      {
        contact: 'Hey! I’m doing great, thanks. I actually want to add a few more pages to the website to improve the user experience.',
        time: '7:05 PM'
      },
      {
        me: 'I love that idea! What kind of pages are you thinking about adding? I can get started on that right away.',
        time: '7:10 PM'
      },
      {
        contact: 'I need a blog page, plus a testimonial section for users to leave feedback. I also want a contact form on the footer of every page.',
        time: '7:15 PM'
      },
      {
        me: 'Got it. A blog is a great way to engage visitors. I’ll create a clean, responsive design for that, plus add the testimonial section. I’ll also implement the contact form.',
        time: '7:20 PM'
      },
      {
        contact: 'That sounds great! How soon do you think you’ll have the changes ready?',
        time: '7:25 PM'
      }
    ]
  },
  {
    name: 'Emily Davis',
    status: 'offline',
    messages: [
      {
        me: 'Hey Emily, how’s everything going on your end? Just wanted to follow up and see if you need any more help with the website updates.',
        time: '8:00 PM'
      },
      {
        contact: 'Hey, things are going well! I’ve been working on a few things myself, but I’d love your help with some design tweaks.',
        time: '8:05 PM'
      },
      {
        me: 'Absolutely, I can help with that! What tweaks do you have in mind?',
        time: '8:10 PM'
      },
      {
        contact: 'I think the navigation could be a bit clearer, and I’d love to have some animations for the buttons and sliders.',
        time: '8:15 PM'
      },
      {
        me: 'I can work on a more intuitive navigation structure and add animations to the buttons and sliders for a smoother experience. I’ll get started on that!',
        time: '8:20 PM'
      },
      {
        contact: 'Thanks so much! I’m excited to see how it turns out. Let me know if you need anything from my side.',
        time: '8:25 PM'
      }
    ]
  },
  {
    name: 'David Wilson',
    status: 'online',
    messages: [
      {
        me: 'Hey David, I wanted to check in and see if you’re happy with the progress we’ve made so far on the project.',
        time: '9:00 AM'
      },
      {
        contact: 'Hey! Everything is going great so far. I really appreciate the work you’ve done! Just wanted to talk about the next steps.',
        time: '9:05 AM'
      },
      {
        me: 'I’m glad to hear that! Let’s talk about the next steps. What’s the next feature you want to focus on?',
        time: '9:10 AM'
      },
      {
        contact: 'I was thinking of integrating a payment gateway to make it easier for users to purchase directly on the platform.',
        time: '9:15 AM'
      },
      {
        me: 'I love that idea! I can integrate a payment gateway for you. Do you have any particular provider in mind?',
        time: '9:20 AM'
      },
      {
        contact: 'I’m thinking of using Stripe, but I’m open to suggestions. What do you think?',
        time: '9:25 AM'
      }
    ]
  },
  {
    name: 'Sophia Johnson',
    status: 'online',
    messages: [
      {
        me: 'Hi Sophia, I’m excited to start our collaboration! Let me know when you’re available to discuss the project details.',
        time: '10:00 AM'
      },
      {
        contact: 'Hey! I’m looking forward to it as well. Let’s set up a meeting this week to go over everything.',
        time: '10:05 AM'
      },
      {
        me: 'Sounds perfect! I’ll send over some time slots later today. Let me know which one works best for you.',
        time: '10:10 AM'
      }
    ]
  },
  {
    name: 'Chris Lee',
    status: 'online',
    messages: [
      {
        me: 'Hi Chris, I wanted to check if you’ve made any progress on the new feature. Let me know if you need any assistance.',
        time: '11:00 AM'
      },
      {
        contact: 'Hey! I’ve pushed some updates to the repo. Could you take a look and review my latest code?',
        time: '11:05 AM'
      },
      {
        me: 'Absolutely, I’ll review it right away and get back to you with my feedback.',
        time: '11:10 AM'
      }
    ]
  },
  {
    name: 'Olivia Martinez',
    status: 'offline',
    messages: [
      {
        me: 'Hey Olivia, thanks for completing the task. Can you send over the final version when you get a chance?',
        time: '12:00 PM'
      },
      {
        contact: 'Hi! I’ve already sent the final version. Let me know if you need any further adjustments.',
        time: '12:05 PM'
      },
      {
        me: 'Great, I’ll review it and let you know if there’s anything else. Thanks again!',
        time: '12:10 PM'
      }
    ]
  },
  {
    name: 'James Garcia',
    status: 'online',
    messages: [
      {
        me: 'Hey James, are you free this weekend? Let’s catch up!',
        time: '1:00 PM'
      },
      {
        contact: 'Hey! I’d love to catch up. Let’s plan for Saturday afternoon. Does that work for you?',
        time: '1:05 PM'
      },
      {
        me: 'Saturday afternoon sounds perfect! Let’s meet at our usual spot.',
        time: '1:10 PM'
      }
    ]
  },
  {
    name: 'Isabella Hernandez',
    status: 'offline',
    messages: [
      {
        me: 'Hi Isabella, just wanted to check in on the project status. Let me know if there are any updates.',
        time: '2:00 PM'
      },
      {
        contact: 'Hi! I’ll update you with the latest status by the end of the day. Everything is on track so far.',
        time: '2:05 PM'
      },
      {
        me: 'Thanks for the update! Looking forward to the detailed status report.',
        time: '2:10 PM'
      }
    ]
  }
];
