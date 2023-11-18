const data = {
  instagramPosts: [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1699656837610-5ec8b65f9f2f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 10,
      comments: 5,
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1667778213138-a6bd5a432746?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 10,
      comments: 5,
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1672721024490-fb1b55edded9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 10,
      comments: 5,
    },
    {
      id: '4',
      image:
        'https://images.unsplash.com/photo-1634099362120-161b8b31e347?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 10,
      comments: 5,
    },
    {
      id: '5',
      image:
        'https://images.unsplash.com/photo-1634505896743-c85e412757b6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 10,
      comments: 5,
    },
    {
      id: '6',
      image:
        'https://images.unsplash.com/photo-1636979123556-d575ab204665?q=80&w=1845&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 10,
      comments: 5,
    },
    {
      id: '7',
      image:
        'https://images.unsplash.com/photo-1644074715835-4fae7544d187?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 10,
      comments: 5,
    },
    {
      id: '8',
      image:
        'https://images.unsplash.com/photo-1633097254859-cc407481bfc8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 10,
      comments: 5,
    },
    {
      id: '9',
      image:
        'https://images.unsplash.com/photo-1545341425-ee53bbfd2653?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 10,
      comments: 5,
    },
    {
      id: '10',
      image:
        'https://images.unsplash.com/photo-1602436294480-4e1db564adda?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 10,
      comments: 5,
    },
    {
      id: '11',
      image:
        'https://images.unsplash.com/photo-1619409382782-3ee4ec9d09a5?q=80&w=2239&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 10,
      comments: 5,
    },
  ],
  comments: [
    {
      id: '2',
      comment: 'Great article! I learned a lot from it.',
      userName: 'Alice Smith',
      timeAgo: '10 min ago',
    },
    {
      id: '3',
      comment: 'I completely agree with the author. This is spot on!',
      userName: 'Ella Johnson',
      timeAgo: '15 min ago',
    },
    {
      id: '4',
      comment: 'I found this topic fascinating. Thanks for sharing!',
      userName: 'Robert Brown',
      timeAgo: '20 min ago',
    },
    {
      id: '5',
      comment: 'This is a very informative post. I appreciate the insights.',
      userName: 'Sophia Davis',
      timeAgo: '30 min ago',
    },
    {
      id: '6',
      comment:
        'I had no idea about this until now. Thanks for the enlightenment!',
      userName: 'Liam Wilson',
      timeAgo: '40 min ago',
    },
    {
      id: '7',
      comment: 'I love the way this topic is presented. Well done!',
      userName: 'Olivia Jones',
      timeAgo: '1 hour ago',
    },
    {
      id: '8',
      comment: "I'm sharing this with all my friends. It's a must-read!",
      userName: 'Noah Martinez',
      timeAgo: '1 hour ago',
    },
    {
      id: '9',
      comment: 'The author has a great way of explaining complex concepts.',
      userName: 'Ava Taylor',
      timeAgo: '2 hours ago',
    },
    {
      id: '10',
      comment: 'I enjoyed reading this. Keep up the good work!',
      userName: 'William Anderson',
      timeAgo: '2 hours ago',
    },
    {
      id: '11',
      comment:
        'This is the kind of content I look forward to. Thanks, John Doe!',
      userName: 'Mia Garcia',
      timeAgo: '3 hours ago',
    },
  ],
};
export const Mocks = { data };
