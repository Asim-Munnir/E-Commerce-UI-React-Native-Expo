import Stripe from "stripe";


export const createPaymentIntent = async (req, res) => {
    try {

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        const { amount } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.json({
            clientSecret: paymentIntent.client_secret,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Payment failed" });
    }
};