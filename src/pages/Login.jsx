import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import khedmat from "../assets/khedmat.png"
export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");

    const submit = async e => {
        e.preventDefault();
        try {
            const { data } = await api.post("/login", form);
            setMessage(data.message || "Login successful");
            if (data.user) localStorage.setItem("user", JSON.stringify(data.user));
        } catch {
            setMessage("Backend is not connected yet. You can continue with the frontend prototype.");
        }
    };

    return (
        <main className="min-h-[75vh] grid place-items-center py-13.5 px-4 bg-[#ecedee]">
            <form
                onSubmit={submit}
                className="w-full max-w-107.5 px-7.5 py-2 border border-(--border) bg-white rounded-xl overflow-hidden transition duration-200"
            >
                <div className="mb-4.5 rounded-lg px-3 py-2 text-center font-bold">
                    <div className="w-full text-center">
                        <img className="h-40 w-80" src={khedmat} alt="" />
                    </div>
                </div>

                <h1 className="m-0 mb-1.75 text-[27px]">
                    Welcome Back
                </h1>

                <p className="text-(--muted) text-[13px]">
                    Sign in to your Afghan Services account.
                </p>

                {message && (
                    <div className="alert info">
                        {message}
                    </div>
                )}

                <label className="block my-3.75 text-[11px] font-extrabold text-[#4d5a6f]">
                    Email

                    <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        placeholder="Enter Your Email"
                        className="mt-2.5 block w-full rounded-md border border-(--border) px-2 py-3 outline-none "
                    />
                </label>

                <label className="block my-3.75 text-[11px] font-extrabold text-[#4d5a6f]">
                    Password

                    <input
                        type="password"
                        required
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        placeholder="••••••••"
                        className="mt-2.5 block w-full rounded-md border border-(--border) px-2 py-3 outline-none"
                    />
                </label>

                <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-(--primary) py-3 font-bold text-white transition duration-200 hover:bg-(--primary-dark)"
                >
                    Login
                </button>

                <p className="mt-4 text-center text-sm text-(--muted)">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-extrabold text-(--primary)! hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </form>
        </main>
    );
}
