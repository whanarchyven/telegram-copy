export const dialogues = [
    {
        id: 'new_client_registration',
        name: 'Newbies',
        startMessage:'Hi! I will help you with any question',
        body: [
            {
                request: 'Hi, I\'m new here. How do I register?',
                answers: ['No problem! You can register by clicking on the "Sign Up" button on our homepage. You\'ll need to provide some basic information like your name, email, and a password.'],
                tolerance: 70,
                delay: 165
            },
            {
                request: 'Do I need to provide any documents?',
                answers: ['Yes, for verification purposes, you\'ll need to provide a valid ID and a recent utility bill. But you can do that after you\'ve completed the initial registration.'],
                tolerance: 70,
                delay: 127
            },
            {
                request: 'Great, thanks! And what about bonuses for new players?',
                answers: ['Once you register and make your first deposit, you\'ll be eligible for our welcome bonus. We offer a variety of bonuses to help you get started! I can assist you with the first deposit and give you additional bonus if we can do it now. Is it convenient for you?'],
                tolerance: 70,
                delay: 256
            },
            {
                request: 'Sounds great! I want to deposit 20 euro now, what bonuses i will get?',
                answers: ['Normally i will give you 100% bonus, but now let’s make it 150% (30 euro). And let me check one more thing.'],
                tolerance: 70,
                delay: 135
            },
            {
                request: 'Sounds good! I will wait',
                answers: ['Thank you for waiting. Yes, i was right, if you make 30 euro deposit today, i can give you 200% bonuses. Will it be interesting for you?'],
                tolerance: 70,
                delay: 152
            },
            {
                request: 'You are good. Ok, lets make it 30 euro.',
                answers: ['Great! You can make a deposit by logging into your account, going to the "Banking" section, and choosing your preferred payment method. We accept various methods including credit cards and e-wallets. Write me, when you do it and i will give you all bonuses.'],
                tolerance: 70,
                delay: 231
            },
            {
                request: 'I make a deposit',
                answers: ['Wait a minute i will check', 'Yes, bonuses of 60 euro already on your account. And i give you 50 free spins additionally!'],
                tolerance: 70,
                delay: 140
            },
            {
                request: 'Thank you!',
                answers: ['Have Fun! And i will be happy to assist you whenever you want.'],
                tolerance: 70,
                delay: 67
            },
        ]
    },
    {
        id: 'making_deposit_and_receiving_bonuses',
        name: 'Deposit',
        startMessage:'Hi! I will help you with any question',
        body: [
            {
                request: 'How do I make a deposit?',
                answers: ['You can make a deposit by logging into your account, going to the "Banking" section, and choosing your preferred payment method. We accept various methods including credit cards and e-wallets.'],
                tolerance: 70,
                delay: 195
            },
            {
                request: 'Is there a minimum deposit amount?',
                answers: ['Yes, the minimum deposit is $20. Once you make your deposit, you\'ll also receive a bonus based on our current promotions.'],
                tolerance: 70,
                delay: 112
            },
            {
                request: 'How do I claim the bonus?',
                answers: ['The bonus will be automatically credited to your account after your deposit. You can check the "Bonuses" section in your account to see your available bonuses.'],
                tolerance: 70,
                delay: 118
            },
        ]
    },
    {
        id: 'technical_issues_with_games_or_bets',
        name: 'Bug Issues',
        startMessage:'Hi! I will help you with any question',
        body: [
            {
                request: 'I\'m experiencing a glitch in one of the games. What should I do?',
                answers: ['I\'m sorry to hear that. Could you please provide me with the name of the game and describe the issue you\'re facing?'],
                tolerance: 70,
                delay: 115
            },
            {
                request: 'It\'s the "Starburst" slot. The reels are freezing, and I can\'t continue my game.',
                answers: ['Thank you for the information. Can you try clearing your browser\'s cache and cookies, and then restart the game?'],
                tolerance: 70,
                delay: 122
            },
            {
                request: 'I\'ve tried that, but the problem persists.',
                answers: ['In that case, I\'ll report this to our technical team for investigation. In the meantime, you might want to try playing a different game. And sorry for such situation. I give you 50 free spins in “ Cosmo”, it ihas same mechanics and i am sure you will like it.'],
                tolerance: 70,
                delay: 239
            },
            {
                request: 'Thank you. Can you tell me when the Starburst slot will work again?',
                answers: ['Of Course!', 'Can i help you in other way?'],
                tolerance: 70,
                delay: 150
            },
            {
                request: 'No thx! Bye',
                answers: ['Bye!'],
                tolerance: 70,
                delay: 42
            },
        ]
    },
    {
        id: 'withdrawal_request_inquiries',
        name: 'Withdrawal Request',
        startMessage:'Hi! I will help you with any question',
        body: [
            {
                request: 'I requested a withdrawal, but it hasn\'t been credited to my bank account yet.',
                answers: ['I understand your concern. Let me check the status of your withdrawal request. Can you provide me with the date and amount of the withdrawal?'],
                tolerance: 70,
                delay: 151
            },
            {
                request: 'Sure, it was $200 on the 5th of this month.',
                answers: ['Thank you. I can see that your withdrawal request is still under review by our Finance Department. Once approved, it will be processed, and you\'ll receive a confirmation email.'],
                tolerance: 70,
                delay: 157
            },
            {
                request: 'Is there anything I can do to speed up the review process?',
                answers: ['Unfortunately, the review process is standard and necessary for all withdrawals. We appreciate your patience and will notify you as soon as it\'s completed.'],
                tolerance: 70,
                delay: 133
            },
            {
                request: 'Alright, I\'ll wait for the update. Can I make another deposit while waiting for the withdrawal?',
                answers: ['Ok! Write me, and i can give you additional bonuses! If you need any further assistance, don\'t hesitate to contact us. Have a good day!'],
                tolerance: 70,
                delay: 196
            },
        ]
    },
    {
        id: 'concerns_about_gambling_addiction',
        name: 'Addiction',
        startMessage:'Hi! I will help you with any question',
        body: [
            {
                request: 'I think I need to take a break from gambling. Can you help me set up a self-exclusion?',
                answers: ['Absolutely. I can assist you with that. How long would you like the self-exclusion to last?'],
                tolerance: 70,
                delay: 102
            },
            {
                request: 'I\'m thinking six months.',
                answers: ['Understood. I\'ll set up your account for self-exclusion for six months. During this period, you won\'t be able to access your account or create a new one.'],
                tolerance: 70,
                delay: 143
            },
            {
                request: 'That sounds good. What happens after the six months?',
                answers: ['After the six months, you can contact us if you wish to reopen your account. We\'ll have a brief chat to ensure you\'re ready to return to gambling.'],
                tolerance: 70,
                delay: 119
            },
            {
                request: 'I appreciate your support. Thank you for helping me with this.',
                answers: ['You\'re welcome. Your well-being is important to us. If you need anything else, please don\'t hesitate to get in touch.'],
                tolerance: 70,
                delay: 98
            },
            {
                request: 'I will. Goodbye for now.',
                answers: ['Goodbye, and take care. We\'re here if you need us.'],
                tolerance: 70,
                delay: 67
            },
        ]
    },
    {
        id: 'closing_an_account_upon_client_request',
        name: 'Closing Account',
        startMessage:'Hi! I will help you with any question',
        body: [
            {
                request: 'I need to close my account immediately.',
                answers: ['I\'m here to help. May I know the reason for closing your account?'],
                tolerance: 70,
                delay: 128
            },
            {
                request: 'Personal reasons. I just can\'t continue gambling.',
                answers: ['I understand. For security purposes, can you confirm your account username and email?'],
                tolerance: 70,
                delay: 119
            },
            {
                request: 'My username is [Username], and my email is [Email].',
                answers: ['Thank you. I\'ve processed your request, and your account will be closed within the next 24 hours.'],
                tolerance: 70,
                delay: 114
            },
            {
                request: 'Thank you for your prompt response.',
                answers: ['You\'re welcome. If you have any other concerns or need further assistance in the future, please don\'t hesitate to contact us.'],
                tolerance: 70,
                delay: 136
            },
            {
                request: 'I will. Goodbye.',
                answers: ['Goodbye, and take care.'],
                tolerance: 70,
                delay: 46
            },
        ]
    },
    {
        id: 'verifying_or_changing_customer_contact_details',
        name: 'Changing Contact',
        startMessage:'Hi! I will help you with any question',
        body: [
            {
                request: 'I need to update my email address. How can I do that?',
                answers: ['Of course! I can help you with that. Can you please provide me with your current email address and the new one you\'d like to use?'],
                tolerance: 70,
                delay: 149
            },
            {
                request: 'My current email is oldemail@example.com, and I\'d like to change it to newemail@example.com.',
                answers: ['Thank you. For security purposes, can you answer your security question or provide the last four digits of your registered phone number?'],
                tolerance: 70,
                delay: 167
            },
            {
                request: 'Sure, my security question answer is [Answer], and the last four digits of my phone number are 1234.',
                answers: ['Perfect! I\'ve updated your email address. Is there anything else I can assist you with?'],
                tolerance: 70,
                delay: 130
            },
            {
                request: 'No, that\'s all for now. Thank you!',
                answers: ['You\'re welcome! If you have any other questions or need further assistance, feel free to contact us. Have a great day!', 'Goodbye!', 'Goodbye!'],
                tolerance: 70,
                delay: 182
            },
        ]
    },
];