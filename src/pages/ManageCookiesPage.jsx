import React, { useState, useEffect } from "react";

const ManageCookies = () => {
  const [cookiesEnabled, setCookiesEnabled] = useState(true);

  useEffect(() => {
    const storedCookiesEnabled = localStorage.getItem("cookiesEnabled");
    if (storedCookiesEnabled !== null) {
      setCookiesEnabled(JSON.parse(storedCookiesEnabled));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cookiesEnabled", cookiesEnabled);
  }, [cookiesEnabled]);

  const handleEnableCookies = () => {
    setCookiesEnabled(true);
  };

  const handleDisableCookies = () => {
    setCookiesEnabled(false);
  };

  return (
    <div className='manage-cookies'>
      <div className='container'>
        <h1 className='mt-3 mb-3'>Manage Cookies</h1>
        <p>Last updated: January 26, 2024</p>

        <h2>Cookies Settings</h2>
        <p>
          Cookies are currently {cookiesEnabled ? "enabled" : "disabled"}. You
          can manage your cookies preferences below.
        </p>

        <div className='mb-3'>
          <button
            className='btn btn-primary mr-3'
            onClick={handleEnableCookies}
            disabled={cookiesEnabled}
          >
            Enable Cookies
          </button>
          <button
            className='btn btn-danger'
            onClick={handleDisableCookies}
            disabled={!cookiesEnabled}
          >
            Disable Cookies
          </button>
        </div>

        <p>
          Note: Disabling cookies may affect the functionality of our website,
          and certain features may not work correctly.
        </p>
      </div>
    </div>
  );
};

export default ManageCookies;
