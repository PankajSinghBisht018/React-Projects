import React from 'react';

const Home = () => {
  return (
    <>
    <div className="w-full bg-gray-500 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Website</h1>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://symbioticconsultinggroup.com/Images/Our-Services2.jpg" alt="Placeholder 1" className="w-full rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">Our Services</h2>
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat unde beatae aliquam, quod culpa!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://st5.depositphotos.com/1220104/67614/i/450/depositphotos_676148144-stock-photo-welcome-out-team-collaboration-business.jpg" alt="Placeholder 2" className="w-full rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">Our Team</h2>
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat unde beatae aliquam, quod culpa!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://media.istockphoto.com/id/1252809376/photo/japanese-man-at-hand-using-a-smartphone.jpg?s=612x612&w=0&k=20&c=3zUF1981mbU4mN3gmQ8IYWU96HAs1pPEN89WYKw5NAQ=" alt="Placeholder 3" className="w-full rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat unde beatae aliquam, quod culpa!
            </p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Home;
