import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import khedmat from "../assets/khedmat.png"
export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", role: "customer" });
    const [message, setMessage] = useState("");

    const submit = async e => {
        e.preventDefault();
        try {
            const { data } = await api.post("/register", form);
            setMessage(data.message || "Registration successful");
        } catch {
            setMessage("Backend is not connected yet. The form is ready for the PHP API.");
        }
    };

    return (
        <main className="min-h-[75vh] grid place-items-center bg-[#ecedee] px-4 py-13.5">
            <form
                className="w-full max-w-107.5 rounded-xl border border-(--border) bg-white p-7.5 shadow-sm"
                onSubmit={submit}
            >
                <img className="w-80 h-40" src={khedmat} alt="" />
                {/* Heading */}
                <h1 className="m-0 mb-3.75 text-[27px] font-bold">
                    Create Account
                </h1>
                <p className="mb-5 text-[13px] text-(--muted)">
                    Join Khedmat Afghanistan.
                </p>
                {/* Message */}
                {message && (
                    <div className="mb-4 rounded-md bg-blue-50 px-3 py-2 text-sm text-blue-700">
                        {message}
                    </div>
                )}
                {/* Full Name */}
                <label className="mb-3.75 block text-[11px] font-extrabold text-[#4d5a6f]">Full Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value }) } className="mt-2.5 block w-full rounded-md border border-(--border) px-2 py-3 outline-none" placeholder="Enter your full name " />
                </label>
                {/* Email */}
                <label className="mb-3.75 block text-[11px] font-extrabold text-[#4d5a6f]">Email<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value }) } className="mt-2.5 block w-full rounded-md border border-(--border) px-2  outline-none py-3" placeholder="Enter your email" /></label>
                {/* Phone */}
                <label className="mb-3.75 block text-[11px] font-extrabold text-[#4d5a6f]">Phone<input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value }) } placeholder="+93..." className="mt-2.5 block w-full rounded-md border border-(--border) px-2 py-3 outline-none " /></label>
                {/* Account Type */}
                <label className="mb-3.75 block text-[11px] font-extrabold text-[#4d5a6f]"> Account Type<select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value }) } className="mt-2.5 block w-full rounded-md border border-(--border) bg-white px-2 py-3 outline-none" ><option value="customer">Customer</option><option value="provider">Service Provider</option></select> </label>
                {/* Password */}
                <label className="mb-3.75 block text-[11px] font-extrabold text-[#4d5a6f]"> Password<input type="password" required minLength="6" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="mt-2.5 block w-full rounded-md border border-(--border) px-2 py-3 outline-none " placeholder="••••••••"/></label>
                {/* Button */}
                <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-(--primary) py-3 font-bold text-white transition duration-200 hover:bg-(--primary-dark)"
                >
                    Create Account
                </button>
                {/* Login */}
                <p className="mt-4 text-center text-[13px] text-(--muted)">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-extrabold text-(--primary)! hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </main>
    );
}
