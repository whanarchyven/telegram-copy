export const dialogues = [
    {
        id: 'new_client',
        name: 'Greeting and Registering a New Client (Newbies)',
        body: [
            {
                request: 'Hi, I\'m new here. How do I register?',
                answer: 'No problem! You can register by clicking on the "Sign Up" button on our homepage. You\'ll need to provide some basic information like your name, email, and a password.',
            },
            {
                request: 'Do I need to provide any documents?',
                answer: 'Yes, for verification purposes, you\'ll need to provide a valid ID and a recent utility bill. But you can do that after you\'ve completed the initial registration.',
            },
            {
                request: 'Great, thanks! And what about bonuses for new players?',
                answer: 'Once you register and make your first deposit, you\'ll be eligible for our welcome bonus. We offer a variety of bonuses to help you get started! I can assist you with the first deposit and give you additional bonus if we can do it now. Is it convenient for you?',
            },
            {
                request: 'Sounds great! I want to deposit 20 euro now, what bonuses will I get?',
                answer: 'Normally I will give you a 100% bonus, but now let’s make it 150% (30 euro). And let me check one more thing.',
            },
            {
                request: 'Sounds good! I will wait',
                answer: 'Thank you for waiting. Yes, I was right, if you make a 30 euro deposit today, I can give you 200% bonuses. Will it be interesting for you?',
            },
            {
                request: 'You are good. Ok, let\'s make it 30 euro.',
                answer: 'Great! You can make a deposit by logging into your account, going to the "Banking" section, and choosing your preferred payment method. We accept various methods including credit cards and e-wallets. Write me when you do it, and I will give you all bonuses.',
            },
            {
                request: 'I make a deposit',
                answer: 'Wait a minute I will check. Yes, bonuses of 60 euro already on your account. And I give you 50 free spins additionally!',
            },
            {
                request: 'Thank you!',
                answer: 'Have fun! And I will be happy to assist you whenever you want.',
            },
        ]
    },
    {
        id: 'deposit_bonus',
        name: 'Making a Deposit and Receiving Bonuses',
        body: [
            {
                request: 'How do I make a deposit?',
                answer: 'You can make a deposit by logging into your account, going to the "Banking" section, and choosing your preferred payment method. We accept various methods including credit cards and e-wallets.',
            },
            {
                request: 'Is there a minimum deposit amount?',
                answer: 'Yes, the minimum deposit is $20. Once you make your deposit, you\'ll also receive a bonus based on our current promotions.',
            },
            {
                request: 'How do I claim the bonus?',
                answer: 'The bonus will be automatically credited to your account after your deposit. You can check the "Bonuses" section in your account to see your available bonuses.',
            },
        ]
    },
    {
        id: 'game_issues',
        name: 'Technical Issues with Games or Bets (Bug Related Issues in Games)',
        body: [
            {
                request: 'I\'m experiencing a glitch in one of the games. What should I do?',
                answer: 'I\'m sorry to hear that. Could you please provide me with the name of the game and describe the issue you\'re facing?',
            },
            {
                request: 'It\'s the "Starburst" slot. The reels are freezing, and I can\'t continue my game.',
                answer: 'Thank you for the information. Can you try clearing your browser\'s cache and cookies, and then restart the game? In the meantime, you might want to try playing a different game. And sorry for such a situation. I give you 50 free spins in “Cosmo”, it has the same mechanics and I am sure you will like it.',
            },
            {
                request: 'Thank you. Can you tell me when the Starburst slot will work again?',
                answer: 'Of course! Can I help you in another way?',
            },
            {
                request: 'No thanks! Bye',
                answer: 'Bye!',
            },
        ]
    },
    {
        id: 'withdrawal_inquiries',
        name: 'Withdrawal Request Inquiries',
        body: [
            {
                request: 'I requested a withdrawal, but it hasn\'t been credited to my bank account yet.',
                answer: 'Thank you. I can see that your withdrawal request is still under review by our Finance Department. Once approved, it will be processed, and you\'ll receive a confirmation email.',
            },
            {
                request: 'Is there anything I can do to speed up the review process?',
                answer: 'Unfortunately, the review process is standard and necessary for all withdrawals. We appreciate your patience and will notify you as soon as it\'s completed.',
            },
            {
                request: 'Alright, I\'ll wait for the update. Can I make another deposit while waiting for the withdrawal?',
                answer: 'Ok! Write me, and I can give you additional bonuses! If you need any further assistance, don\'t hesitate to contact us. Have a good day!',
            },
        ]
    },
    {
        id: 'gambling_addiction',
        name: 'Concerns About Gambling Addiction (Addiction)',
        body: [
            {
                request: 'I think I need to take a break from gambling. Can you help me set up a self-exclusion?',
                answer: 'Absolutely. I can assist you with that. How long would you like the self-exclusion to last?',
            },
            {
                request: 'I\'m thinking six months.',
                answer: 'Understood. I\'ll set up your account for self-exclusion for six months. During this period, you won\'t be able to access your account or create a new one.',
            },
            {
                request: 'That sounds good. What happens after the six months?',
                answer: 'After the six months, you can contact us if you wish to reopen your account. We\'ll have a brief chat to ensure you\'re ready to return to gambling.',
            },
            {
                request: 'I appreciate your support. Thank you for helping me with this.',
                answer: 'You\'re welcome. Your well-being is important to us. If you need anything else, please don\'t hesitate to get in touch.',
            },
            {
                request: 'I will. Goodbye for now.',
                answer: 'Goodbye, and take care. We\'re here if you need us.',
            },
        ]
    },
    {
        id: 'account_closure',
        name: 'Closing an Account upon Client\'s Request',
        body: [
            {
                request: 'I need to close my account immediately.',
                answer: 'I\'m here to help. May I know the reason for closing your account?',
            },
            {
                request: 'Personal reasons. I just can\'t continue gambling.',
                answer: 'Thank you. I\'ve processed your request, and your account will be closed within the next 24 hours.',
            },
            {
                request: 'Thank you for your prompt response.',
                answer: 'You\'re welcome. If you have any other concerns or need further assistance in the future, please don\'t hesitate to contact us.',
            },
            {
                request: 'I will. Goodbye.',
                answer: 'Goodbye, and take care.',
            },
        ]
    },
    {
        id: 'update_contact_details',
        name: 'Verifying or Changing Customer Contact Details',
        body: [
            {
                request: 'I need to update my email address. How can I do that?',
                answer: 'Of course! I can help you with that. Can you please provide me with your current email address and the new one you\'d like to use?',
            },
            {
                request: 'My current email is oldemail@example.com, and I\'d like to change it to newemail@example.com.',
                answer: 'Thank you. For security purposes, can you answer your security question or provide the last four digits of your registered phone number?',
            },
            {
                request: 'Sure, my security question answer is [Answer], and the last four digits of my phone number are 1234.',
                answer: 'Perfect! I\'ve updated your email address. Is there anything else I can assist you with?',
            },
            {
                request: 'No, that\'s all for now. Thank you!',
                answer: 'You\'re welcome! If you have any other questions or need further assistance, feel free to contact us. Have a great day!',
            },
            {
                request: 'You too, goodbye!',
                answer: 'Goodbye!',
            },
        ]
    },
];
