"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-info/5 via-base-100 to-info/10">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-black text-info mb-4 tracking-tight">
              BIZGA MUROJAAT QILING
            </h1>
            <div className="h-2 bg-gradient-to-r from-info via-info-content to-info rounded-full mx-auto w-3/4"></div>
          </div>
          <p className="text-lg text-base-content/70 mt-6 max-w-2xl mx-auto">
            Savolingiz bormi? Biz yordam berishga tayyormiz!
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="badge badge-info badge-lg gap-2 py-4 px-6 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Yunusabad, Toshkent</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          <div className="space-y-6">
            <div className="card bg-info text-info-content shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="bg-info-content/20 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Email</h3>
                    <p className="text-info-content/80">info@ieltswarrior.uz</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-info/20">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="bg-info/20 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-base-content">Telefon</h3>
                    <p className="text-base-content/70">+998 90 123 45 67</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-info/20">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="bg-info/20 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-base-content">Ish vaqti</h3>
                    <p className="text-base-content/70">Dush - Juma: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-2xl border-4 border-info/30">
            <div className="card-body p-8">
              <h2 className="card-title text-3xl font-bold text-info mb-6">
                Xabar Yuboring
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="form-control">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Ismingiz"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input input-bordered input-info w-full focus:input-info focus:scale-105 transition-transform"
                    required
                  />
                </div>

                <div className="form-control">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Familiyangiz"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input input-bordered input-info w-full focus:input-info focus:scale-105 transition-transform"
                    required
                  />
                </div>

                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email manzilingiz"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered input-info w-full focus:input-info focus:scale-105 transition-transform"
                    required
                  />
                </div>

                <div className="form-control">
                  <textarea
                    name="message"
                    placeholder="Savolingiz yoki xabaringiz..."
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered textarea-info h-32 w-full focus:textarea-info resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-info text-info-content w-full text-lg font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  XABAR YUBORISH
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="stats shadow-lg border-2 border-info/20">
            <div className="stat place-items-center">
              <div className="stat-title text-info">Talabalar</div>
              <div className="stat-value text-info">1000+</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-title text-info">O'qituvchilar</div>
              <div className="stat-value text-info">25+</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-title text-info">Muvaffaqiyat</div>
              <div className="stat-value text-info">98%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}