'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function AboutMe() {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    async function fetchProfileImage() {
      const response = await fetch('https://picsum.photos/150');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setProfileImage(url);
    }

    fetchProfileImage();
  }, []);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          {profileImage && (
            <Image
              src={profileImage}
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full w-48 h-48 mx-auto"
            />
          )}
        </div>
        <div className="md:w-2/3 px-3">
          <div className="mb-2 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-gray-700">Web Developer</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="flex flex-row mb-1">
                <div className="w-1/3">
                  <span className="font-bold text-gray-700">Email:</span>
                </div>
                <div className="w-2/3">
                  <span className="text-gray-700">johndoe@example.com</span>
                </div>
              </div>
              <div className="flex flex-row mb-1">
                <div className="w-1/3">
                  <span className="font-bold text-gray-700">Phone:</span>
                </div>
                <div className="w-2/3">
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex flex-row mb-1">
                <div className="w-1/3">
                  <span className="font-bold text-gray-700">Location:</span>
                </div>
                <div className="w-2/3">
                  <span className="text-gray-700">New York, NY</span>
                </div>
              </div>
              <div className="flex flex-row mb-1">
                <div className="w-1/3">
                  <span className="font-bold text-gray-700">Website:</span>
                </div>
                <div className="w-2/3">
                  <a href="#" className="text-blue-500">johndoe.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;