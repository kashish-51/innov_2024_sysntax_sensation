import React, { useState, useEffect } from 'react';

function Welcome() {
  const host = "http://localhost:8000";
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkZDhlNWI5N2ZjMGE4YzA1YzE2MTgxIn0sImlhdCI6MTcwOTAxOTI5M30.TAoTtoKsVGDbhSd6lQ1_SCxLjJKqIR721ZaoJJDtpOU"
        }
      });
      if (response.ok) {
        const user = await response.json();
        setUserName(user.name);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="mx-auto w-full bg-[#F7EFE5] flex justify-center items-center h-screen">
      <aside className="relative overflow-hidden text-[#482368] rounded-lg">
        <div className="max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl animate__animated animate__zoomIn">
              We!come, {userName}
              <span className="hidden sm:block text-3xl"> Say goodbye to procrastination and hello to productivity</span>
            </h2>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Welcome;
