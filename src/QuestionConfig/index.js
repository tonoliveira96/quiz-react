const QuestionConfig = [
  [
    {
      id: 1,
      question: 'What are your goals?',
      options: [
        'Get more conversions',
        'Get more phone leads',
        'Lower cost per conversion',
        'All of the above',
        'Other...',
      ],
    },
    {
      id: 2,
      question: 'Where do you advertise?',
      options: [
        'Nationally',
        'Locally',
        'Internationally',
        'Other...',
      ],
    },
  ],
  [
    {
      id: 3,
      question: 'Do you want leads or sales?',
      options: [
        'Leads',
        'Sales',
        'Both, I sell a service and a product',
        'Not sure',
      ],
    },
    {
      id: 4,
      question: 'What’s your monthly PPC ad spend?',
      options: [
        '$0 - $1,000',
        '$1,001 - $5,000',
        '$5,001 - $25,00',
        '$25,001 - $100,000',
        '$100,001+',
      ],
    },
  ]

];


const QuestionCondition = [
  [
    {
      id: 1,
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
      id: 2,
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
          condition: "2"
        },
        {
          description: "No",
          condition: "next"
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
      id: 7,
      question: "How likely are you to recommend our brand to a friend?",
      options: [
        "Yes",
        "No"
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

export { personalQuestionConfig, QuestionCondition, QuestGroup1 };

export default QuestionConfig;
