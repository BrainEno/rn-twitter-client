const tweetsData = [
  {
    id: 't1',
    user: {
      id: 'u1',
      username: "Who'sJohn",
      name: 'John Deo',
      image:
        'https://raw.githubusercontent.com/yakai911/blogsite/master/src/assets/images/avatar.png',
    },
    createdAt: '2020-09-27T12:00:00.000Z',
    content:
      '一个体会：编程本来就是一项被规定好的东西，typescript 还要给每个被在预期之中的数据打上type“标签”来防止发生预期之外的错误，bug是无用的。',
    image:
      'https://artoferickuns.files.wordpress.com/2014/08/headblowupbig.jpg?w=925',
    numberOfComments: 1,
    numberOfRetweets: 2,
    numberOfLikes: 2,
  },
  {
    id: 't2',
    user: {
      id: 'u2',
      username: 'The Who',
      name: 'The Who',
      image:
        'https://raw.githubusercontent.com/yakai911/blogsite/master/src/assets/images/pic3.jpg',
    },
    createdAt: '2020-10-17T14:20:00.000Z',
    content: '想到死，一切都是可笑的。————伯恩哈德',
    image:
      'https://raw.githubusercontent.com/yakai911/blogsite/master/src/assets/images/pic3.jpg',
    numberOfComments: 10,
    numberOfRetweets: 2,
    numberOfLikes: 20,
  },
  {
    id: 't3',
    user: {
      id: 'u3',
      username: 'The Who',
      name: 'The Who',
      image:
        'https://raw.githubusercontent.com/yakai911/blogsite/master/src/assets/images/pic3.jpg',
    },
    createdAt: '2020-10-17T14:29:00.000Z',
    content:
      '代码是一种负债的语言，代码强加了一个施为和生产的界限。代码把预先定义好的句法段落连接起来。在运作的时候，它创造出新的限制，界定哪些输入是允许的，以及这些输入会生成什么样的结果。',
    numberOfComments: 15,
    numberOfRetweets: 20,
    numberOfLikes: 40,
  },
]

export default tweetsData
