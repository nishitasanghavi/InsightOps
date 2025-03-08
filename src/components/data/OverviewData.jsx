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
    { name: 'Upwork', img: '/images/upwork-logo.png' },   // Replace with the correct image URL
    { name: 'Fiverr', img: '/images/fiverr-logo.png' },
    { name: 'TaskRabbit', img: '/images/taskrabbit-logo.png' },
    { name: 'Freelancer', img: '/images/freelancer-logo.png' },
    { name: 'Toptal', img: '/images/toptal-logo.png' },   // New platform added
    { name: 'Guru', img: '/images/guru-logo.png' },
  
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
