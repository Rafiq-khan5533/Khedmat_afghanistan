import React, { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <section className=" bg-linear-to-r from-white/95 via-white/75 to-black/15 text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <span className="text-(--primary) font-semibold mb-3">Get in touch</span>
                    <h1 className="text-4xl font-bold mb-4 text-black">Contact Afghan Services</h1>
                    <p className="max-w-2xl text-(--primary)">
                        Have a question, suggestion, or problem? Send us a message.
                    </p>
                </div>
            </section>
            <section className=" max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl border shadow-sm p-7">
                    <h2 className="text-2xl font-bold mb-6">Contact information</h2>
                    <div className="space-y-5 text-gray-700">
                        <div>
                            <p className="font-semibold">Phone</p>
                            <p>+93 788 118 661</p>
                        </div>
                        <div>
                            <p className="font-semibold">Email</p>
                            <p>rk7016029@gmail.com</p>
                        </div>
                        <div>
                            <p className="font-semibold">Location</p>
                            <p>Kama, Nangarhar, Afghanistan</p>
                        </div>
                        <div>
                            <p className="font-semibold">Support</p>
                            <p>We help customers and service providers use the platform.</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className=" rounded-2xl border shadow-sm p-7">
                    <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

                    <div className="space-y-4">
                        <input
                            required
                            type="text"
                            placeholder="Your name"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            required
                            type="email"
                            placeholder="Your email"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            required
                            rows="6"
                            placeholder="Write your message..."
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
                        >
                            Send Message
                        </button>
                        {submitted && (
                            <p className="text-green-600 font-medium">
                                Message submitted successfully. Connect this form to the PHP
                                API to save messages in MySQL.
                            </p>
                        )}
                    </div>
                </form>
            </section>
        </main>
    );
}
