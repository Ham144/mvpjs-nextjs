import { NextResponse } from "next/server";

const { Paddle, Environment, LogLevel } = require("@paddle/paddle-node-sdk");


const paddle = new Paddle(process.env.PADDLE_API_KEY, {
    environment: Environment.sandbox,
    logLevel: LogLevel.error,
})

export async function GET() {
    const starter = await paddle.transactions.create({
        items: [
            {
                quantity: 1,
                price: {
                    name: "Starter",
                    description: "For you to get started",
                    unitPrice: {
                        currencyCode: "USD",
                        amount: '1500'
                    },
                    product: {
                        name: "Horizon Paradigm SAAS",
                        description: "Pro access to Horizon Paradigm SAAS",
                        taxCategory: "saas"
                    },
                }
            },
        ],
        settings: {
            displayMode: "Overlay",
            theme: "dark",
        },
    })

    const completeAccess = await paddle.transactions.create({
        items: [
            {
                quantity: 1,
                price: {
                    name: "Complete Access",
                    description: "Comprehensive access across all features",
                    unitPrice: {
                        amount: "1900",
                        currencyCode: "USD",
                    },
                    product: {
                        taxCategory: "saas",
                        name: "Horizon Paradigm SAAS",
                        description: "Full access to Horizon Paradigm SAAS",
                    }
                }
            }
        ]
    })

    const pricing = [starter, completeAccess]

    return NextResponse.json({ data: pricing, message: "success" });
}   