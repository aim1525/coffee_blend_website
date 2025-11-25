import { Link } from "lucide-react";
import React from "react";
import checkoutbg from "../../assets/images/checkoutbg/checkoutbg.jpg"

const Checkout = () => {
    return (
        <div className="w-full bg-[#0b0b0b] text-white font-['Poppins']">

            {/* ===================== HERO ===================== */}
            <div
                className="w-full h-[420px] flex flex-col items-center justify-center bg-center bg-cover"
                style={{
                    backgroundImage: `url(${checkoutbg})`, // replace with your image
                }}
            >
                <h1 className="text-5xl font-light tracking-[0.25em]">CHECKOUT</h1>
                <p className="mt-4 text-sm text-gray-300 tracking-wider font-sans">
                    <a href="/" className="hover:text-white transition">HOME</a>
                    <span className="mx-1">/</span>
                    CHECKOUT
                </p>
            </div>

            {/* ===================== MAIN LAYOUT ===================== */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 py-20 px-6">

                {/* ===================== BILLING FORM ===================== */}
                <div className="lg:col-span-2 bg-[#111111] p-10 rounded-xl shadow-xl border border-[#1f1f1f]">
                    <h2 className="text-2xl font-semibold mb-8 tracking-wide">BILLING DETAILS</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput label="First Name" />
                        <FormInput label="Last Name" />
                        <SelectInput label="State / Country" />
                        <div></div>

                        <FormInput label="Street Address" className="md:col-span-2" />
                        <FormInput label="Town / City" />
                        <FormInput label="Postcode / ZIP *" />
                        <FormInput label="Phone" />
                        <FormInput label="Email Address" />
                    </div>

                    <div className="flex gap-6 mt-6 text-sm text-gray-300">
                        <label><input type="checkbox" className="mr-2" /> Create an Account?</label>
                        <label><input type="checkbox" className="mr-2" /> Ship to different address</label>
                    </div>
                </div>

                {/* ===================== SIDEBAR (CART + PAYMENT) ===================== */}
                <div className="space-y-10">

                    {/* CART TOTAL */}
                    <div className="bg-[#111111] p-6 rounded-xl border border-[#1f1f1f]">
                        <h3 className="text-lg font-semibold mb-4 tracking-wide">CART TOTAL</h3>

                        <SidebarRow label="Subtotal" value="$20.60" />
                        <SidebarRow label="Delivery" value="$0.00" />
                        <SidebarRow label="Discount" value="$3.00" />

                        <hr className="border-gray-800 my-4" />

                        <SidebarRow label="TOTAL" value="$17.60" highlight />
                    </div>

                    {/* PAYMENT METHOD */}
                    <div className="bg-[#111111] p-6 rounded-xl border border-[#1f1f1f]">
                        <h3 className="text-lg font-semibold mb-4 tracking-wide">PAYMENT METHOD</h3>

                        <Radio label="Direct Bank Transfer" />
                        <Radio label="Check Payment" />
                        <Radio label="Paypal" />

                        <label className="flex items-center gap-2 text-sm text-gray-300 mt-4">
                            <input type="checkbox" /> I accept the terms and conditions
                        </label>

                        <button className="w-full bg-[#c9a46a] hover:bg-[#b18d57] text-black font-medium py-3 rounded-lg mt-6 transition-all tracking-wide">
                            Place an order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ===================== REUSABLE COMPONENTS ===================== */

const FormInput = ({ label, className }) => (
    <div className={`flex flex-col space-y-2 ${className}`}>
        <label className="text-sm tracking-wide text-gray-300">{label}</label>
        <input
            className="w-full px-4 py-3 bg-[#0d0d0d] border border-gray-700 rounded-lg text-gray-200
                 focus:ring-1 focus:ring-[#c9a46a] outline-none shadow-inner"
        />
    </div>
);

const SelectInput = ({ label }) => (
    <div className="flex flex-col space-y-2">
        <label className="text-sm tracking-wide text-gray-300">{label}</label>
        <select
            className="w-full px-4 py-3 bg-[#0d0d0d] border border-gray-700 rounded-lg text-gray-300
                 focus:ring-1 focus:ring-[#c9a46a] outline-none shadow-inner"
        >
            <option>France</option>
            <option>Nepal</option>
            <option>USA</option>
        </select>
    </div>
);

const SidebarRow = ({ label, value, highlight }) => (
    <div className="flex justify-between py-2 text-sm">
        <span className={`${highlight ? "font-semibold text-[#c9a46a]" : "text-gray-300"}`}>
            {label}
        </span>
        <span className={`${highlight ? "font-semibold text-[#c9a46a]" : "text-gray-300"}`}>
            {value}
        </span>
    </div>
);

const Radio = ({ label }) => (
    <label className="block text-sm text-gray-300 mb-2">
        <input type="radio" name="payment" className="mr-2" /> {label}
    </label>
);

export default Checkout;
