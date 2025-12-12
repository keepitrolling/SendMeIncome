// This is a serverless function that runs on Vercel's servers
// It creates a Stripe Checkout session and returns the session ID

// Import the Stripe library
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// This function handles incoming requests
module.exports = async (req, res) => {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Get the amount from the request body
        const { amount } = req.body;

        // Validate the amount
        if (!amount || amount < 100) {
            return res.status(400).json({ error: 'Amount must be at least $1.00' });
        }

        // Create a Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Payment',
                            description: 'Thank you for your payment!',
                        },
                        unit_amount: amount, // Amount in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            // Where to send the user after successful payment
            success_url: `${req.headers.origin}/success.html`,
            // Where to send the user if they cancel
            cancel_url: `${req.headers.origin}/`,
        });

        // Send back the session ID
        res.status(200).json({ sessionId: session.id });

    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: error.message });
    }
};
