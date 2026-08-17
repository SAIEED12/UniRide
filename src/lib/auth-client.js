import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000",
    plugins: [
        inferAdditionalFields({
            user: {
                studentId: { type: "string", required: true },
                role: { type: "string", required: true },
                vehicleType: { type: "string", required: false },
                licensePlate: { type: "string", required: false },
                seats: { type: "number", required: false },
                passengerCategory: { type: "string", required: false },
            },
        }),
    ],
})

export const { signIn, signUp, signOut, useSession } = authClient
