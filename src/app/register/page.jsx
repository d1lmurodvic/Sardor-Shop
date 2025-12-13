"use client"

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    lastname: "",
    password: "",
    confirmPassword: "",

  });

  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError("");

    if (!form.username || !form.password) {
      return setError("Username and password are required");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    if (!agree) {
      return setError("You must agree to the terms");
    }

    try {
      setLoading(true);

      const res = await axios.post("https://sardor-s-shop-beckent-5.onrender.com/api/auth/register", {
        username: form.username,
        lastname: form.lastname,
        password: form.password,
      });

      console.log(res.data);
      toast.success("Registered successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-info/10 via-base-200 to-info/5 p-4">
      <div className="w-full max-w-5xl">
        <div className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden">

          <div className="bg-gradient-to-r from-info to-info-content p-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-2">
              Create Your Account
            </h2>
            <p className="text-white/80 text-lg">Join our community today</p>
          </div>

          <div className="p-8 lg:p-12 space-y-6">
            {error && (
              <div className="alert alert-error text-white">{error}</div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="username"
                placeholder="Username"
                className="input input-bordered input-info w-full"
                onChange={handleChange}
              />

              <input
                name="lastname"
                placeholder="Last name"
                className="input input-bordered input-info w-full"
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered input-info w-full"
                onChange={handleChange}
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered input-info w-full"
                onChange={handleChange}
              />
            </div>

            <label className="label cursor-pointer gap-3 justify-start">
              <input
                type="checkbox"
                className="checkbox checkbox-info"
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span className="label-text">
                I agree to the Terms & Privacy Policy
              </span>
            </label>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn btn-info btn-lg w-full text-white"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
