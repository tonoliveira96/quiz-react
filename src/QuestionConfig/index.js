const QuestionConfig = [
  [
    {
      id: 1,
      question: 'What are your goals?',
      options: [
        {
          description: 'Get more conversions',
          condition: "next"
        },
        {
          description: 'Get more phone leads',
          condition: "next"
        },
        {
          description: 'All of the above',
          condition: "next"
        },
        {
          description: 'Other...',
          condition: "next"
        },
      ],
    },
    {
      id: 2,
      question: 'Where do you advertise?',
      options: [
        {
          description: 'Nationally',
          condition: "next"
        },
        {
          description: 'Locally',
          condition: "next"
        },
        {
          description: 'Internationally',
          condition: "next"
        },
        {
          description: 'Other...',
          condition: "next"
        },
      ],
    },
  ],
  [
    {
      id: 3,
      question: 'Do you want leads or sales?',
      options: [
        {
          description: 'Leads',
          condition: "next"
        },
        {
          description: 'Sales',
          condition: "next"
        },
        {
          description: 'Both, I sell a service and a product',
          condition: "next"
        },
        {
          description: 'Not sure',
          condition: "next"
        },
      ],
    },
    {
      id: 4,
      question: 'What’s your monthly PPC ad spend?',
      options: [
        {
          description: '$0 - $1,000',
          condition: "next"
        },
        {
          description: '$1,001 - $5,000',
          condition: "next"
        },
        {
          description: '$5,001 - $25,00',
          condition: "next"
        },
        {
          description: '$25,001 - $100,000',
          condition: "next"
        },
        {
          description: '$100,001+',
          condition: "next"
        },
      ],
    },
  ]

];


const QuestionCondition = [
  [
    {
      id: 1,
      question: 'What are your goals?',
      options: [
        {
          description: 'Get more conversions',
          condition: "next"
        },
        {
          description: 'Get more phone leads',
          condition: "next"
        },
        {
          description: 'All of the above',
          condition: "next"
        },
        {
          description: 'Other...',
          condition: "next"
        },
      ],
    },
    {
      id: 2,
      question: 'Where do you advertise?',
      options: [
        {
          description: 'Nationally',
          condition: "next"
        },
        {
          description: 'Locally',
          condition: "next"
        },
        {
          description: 'Internationally',
          condition: "next"
        },
        {
          description: 'Other...',
          condition: "next"
        },
      ],
    },
  ],
  [
    {
      id: 3,
      question: 'Do you want leads or sales?',
      options: [
        {
          description: 'Leads',
          condition: "next"
        },
        {
          description: 'Sales',
          condition: "next"
        },
        {
          description: 'Both, I sell a service and a product',
          condition: "next"
        },
        {
          description: 'Not sure',
          condition: "next"
        },
      ],
    },
    {
      id: 4,
      question: 'What’s your monthly PPC ad spend?',
      options: [
        {
          description: '$0 - $1,000',
          condition: "next"
        },
        {
          description: '$1,001 - $5,000',
          condition: "next"
        },
        {
          description: '$5,001 - $25,00',
          condition: "next"
        },
        {
          description: '$25,001 - $100,000',
          condition: "next"
        },
        {
          description: '$100,001+',
          condition: "next"
        },
      ],
    },
  ],
  [
    {
      id: 5,
      question: "How likely are you to recommend our brand to a friend?",
      options: [
        {
          description: "Yes",
          condition: "1"
        },
        {
          description: "No",
          condition: "next"
        }
      ]
    }
  ]
]

const QuestionConditionFood = [
  [
    {
      id: 1,
      question: 'What is your favorite type of food?',
      options: [
        {
          description: 'Pizza',
          condition: "next"
        },
        {
          description: 'Sandwiches',
          condition: "next"
        },
        {
          description: 'Meat',
          condition: "next"
        },
        {
          description: 'Other...',
          condition: "next"
        },
      ],
    },
    {
      id: 2,
      question: 'Where do you advertise?',
      options: [
        {
          description: 'Nationally',
          condition: "next"
        },
        {
          description: 'Locally',
          condition: "next"
        },
        {
          description: 'Internationally',
          condition: "next"
        },
        {
          description: 'Other...',
          condition: "next"
        },
      ],
    },
  ],
  [
    {
      id: 3,
      question: "Do you prefer delivery or going to a restaurant ?",
      options: [
        {
          description: "Delivery",
          condition: "2"
        },
        {
          description: "Restaurant",
          condition: "3"
        }
      ]
    }
  ]
]


const QuestGroup1 = [
  [
    {
      id: 6,
      question: "How do you rate your last experience with us?",
      options: [
        {
          description: "Great",
          condition: "next"
        },
        {
          description: "Good",
          condition: "next"
        }
      ]
    }
  ],
  [
    {
      id: 7,
      question: "How likely are you to recommend our brand to a friend?",
      options: [
        {
          description: "Yes",
          condition: "next"
        },
        {
          description: "No",
          condition: "next"
        }
      ]
    }
  ]
]

const QuestGroup2 = [
  [
    {
      id: 4,
      question: "Do you consider fast delivery? ",
      options: [
        {
          description: "Yes",
          condition: "next"
        },
        {
          description: "No",
          condition: "next"
        }
      ]
    }
  ],
  [
    {
      id: 5,
      question: "How likely are you to recommend our brand to a friend?",
      options: [
        {
          description: "Yes",
          condition: "next"
        },
        {
          description: "No",
          condition: "next"
        }
      ]
    }
  ]
]

const QuestGroup3 = [
  [
    {
      id: 4,
      question: "How often do you go to restaurants? ",
      options: [
        {
          description: "1 to 3 times a week",
          condition: "next"
        },
        {
          description: "4 to 5 times a week",
          condition: "next"
        },
        {
          description: "just on weekends",
          condition: "next"
        }
      ]
    }
  ],
  [
    {
      id: 5,
      question: "How likely are you to recommend this restaurant to a friend?",
      options: [
        {
          description: "It sure is the best",
          condition: "next"
        },
        {
          description: "Never",
          condition: "next"
        }
      ]
    }
  ]
]

const personalQuestionConfig = {
  website: "What's your website?",
  name: 'whats your name?',
  email: "What's your email?",
  phoneNo: "What's your number?",
};

export { 
  personalQuestionConfig, 
  QuestionCondition, 
  QuestionConditionFood, 
  QuestGroup1, 
  QuestGroup2, 
  QuestGroup3 
};

export default QuestionConfig;
