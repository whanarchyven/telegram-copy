export const dialogues = [
    {
        "id": "greeting_and_registering_example1",
        "name": "Greeting and Registering a New Client (Newbies)",
        "start": [""],
        "body": [
            {
                "request": "Hi, I'm new here. How do I register?",
                "answers": ["No problem! You can register by clicking on the \"Sign Up\" button on our homepage. You'll need to provide some basic information like your name, email, and a password."],
                "tolerancy": 70,
                "delay": 148
            },
            {
                "request": "Do I need to provide any documents?",
                "answers": ["Yes, for verification purposes, you'll need to provide a valid ID and a recent utility bill. But you can do that after you've completed the initial registration."],
                "tolerancy": 70,
                "delay": 138
            },
            {
                "request": "Great, thanks! And what about bonuses for new players?",
                "answers": ["Once you register and make your first deposit, you'll be eligible for our welcome bonus. We offer a variety of bonuses to help you get started! I can assist you with the first deposit and give you additional bonus if we can do it now. Is it convenient for you?"],
                "tolerancy": 70,
                "delay": 272
            },
            {
                "request": "Sounds great! I want to deposit 20 euro now, what bonuses i will get?",
                "answers": ["Normally i will give you 100% bonus, but now let’s make it 150% (30 euro). And let me check one more thing."],
                "tolerancy": 70,
                "delay": 123
            },
            {
                "request": "Sounds good! I will wait",
                "answers": ["Thank you for waiting. Yes, i was right, if you make 30 euro deposit today, i can give you 200% bonuses. Will it be interesting for you?"],
                "tolerancy": 70,
                "delay": 140
            },
            {
                "request": "You are good. Ok, lets make it 30 euro.",
                "answers": ["Great! You can make a deposit by logging into your account, going to the \"Banking\" section, and choosing your preferred payment method. We accept various methods including credit cards and e-wallets. Write me, when you do it and i will give you all bonuses."],
                "tolerancy": 70,
                "delay": 298
            },
            {
                "request": "I make a deposit",
                "answers": ["Wait a minute i will check", "Yes, bonuses of 60 euro already on your account. And i give you 50 free spins additionally!"],
                "tolerancy": 70,
                "delay": 249
            },
            {
                "request": "Thank you!",
                "answers": ["Have Fun! And i will be happy to assist you whenever you want."],
                "tolerancy": 70,
                "delay": 63
            }
        ]
    },
    {
        "id": "deposit_and_bonuses_example1",
        "name": "Making a Deposit and Receiving Bonuses",
        "start": [""],
        "body": [
            {
                "request": "How do I make a deposit?",
                "answers": ["You can make a deposit by logging into your account, going to the \"Banking\" section, and choosing your preferred payment method. We accept various methods including credit cards and e-wallets."],
                "tolerancy": 70,
                "delay": 174
            },
            {
                "request": "Is there a minimum deposit amount?",
                "answers": ["Yes, the minimum deposit is $20. Once you make your deposit, you'll also receive a bonus based on our current promotions."],
                "tolerancy": 70,
                "delay": 114
            },
            {
                "request": "How do I claim the bonus?",
                "answers": ["The bonus will be automatically credited to your account after your deposit. You can check the \"Bonuses\" section in your account to see your available bonuses."],
                "tolerancy": 70,
                "delay": 101
            }
        ]
    },
    {
        "id": "technical_issues_example1",
        "name": "Technical Issues with Games or Bets",
        "start": [""],
        "body": [
            {
                "request": "I'm experiencing a glitch in one of the games. What should I do?",
                "answers": ["I'm sorry to hear that. Could you please provide me with the name of the game and describe the issue you're facing?"],
                "tolerancy": 70,
                "delay": 146
            },
            {
                "request": "Thank you. Can you tell me when the Starburst slot will work again?",
                "answers": ["Of Course!"],
                "tolerancy": 70,
                "delay": 15
            },
            {
                "request": "Can i help you in other way?",
                "answers": ["No thx! Bye"],
                "tolerancy": 70,
                "delay": 31
            }
        ]
    },
    {
        "id": "withdrawal_request_example1",
        "name": "Withdrawal Request Inquiries",
        "start": [""],
        "body": [
            {
                "request": "I requested a withdrawal, but it hasn't been credited to my bank account yet.",
                "answers": ["I understand your concern. Let me check the status of your withdrawal request. Can you provide me with the date and amount of the withdrawal?"],
                "tolerancy": 70,
                "delay": 219
            },
            {
                "request": "Alright, I'll wait for the update. Can I make another deposit while waiting for the withdrawal?",
                "answers": ["Ok! Write me, and i can give you additional bonuses! If you need any further assistance, don't hesitate to contact us. Have a good day!"],
                "tolerancy": 70,
                "delay": 173
            }
        ]
    },
    {
        "id": "gambling_addiction_example",
        "name": "Concerns About Gambling Addiction",
        "start": [""],
        "body": [
            {
                "request": "I think I need to take a break from gambling. Can you help me set up a self-exclusion?",
                "answers": ["Absolutely. I can assist you with that. How long would you like the self-exclusion to last?"],
                "tolerancy": 70,
                "delay": 96
            },
            {
                "request": "I appreciate your support. Thank you for helping me with this.",
                "answers": ["You're welcome. Your well-being is important to us. If you need anything else, please don't hesitate to get in touch."],
                "tolerancy": 70,
                "delay": 113
            }
        ]
    },
    {
        "id": "close_account_example",
        "name": "Closing an Account upon Client's Request",
        "start": [""],
        "body": [
            {
                "request": "I need to close my account immediately.",
                "answers": ["I'm here to help. May I know the reason for closing your account?"],
                "tolerancy": 70,
                "delay": 100
            },
            {
                "request": "Thank you for your prompt response.",
                "answers": ["You're welcome. If you have any other concerns or need further assistance in the future, please don't hesitate to contact us."],
                "tolerancy": 70,
                "delay": 115
            }
        ]
    },
    {
        "id": "change_contact_details_example",
        "name": "Verifying or Changing Customer Contact Details",
        "start": [""],
        "body": [
            {
                "request": "I need to update my email address. How can I do that?",
                "answers": ["Of course! I can help you with that. Can you please provide me with your current email address and the new one you'd like to use?"],
                "tolerancy": 70,
                "delay": 175
            },
            {
                "request": "You too, goodbye!",
                "answers": ["Goodbye!"],
                "tolerancy": 70,
                "delay": 54
            }
        ]
    }
];
