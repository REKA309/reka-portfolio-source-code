// Copyright.js

import React from 'react';

const Copyright = ({isDarkMode}) => {
  const currentYear = new Date().getFullYear();
  const yourNameOrCompany = 'REKA NAGARAJ';
  const contactEmail = 'your@email.com'; // Replace with your actual contact email

  return (
    <div className="copyright-section">
      <p style={{ color: isDarkMode ? "#fff" : "#000" }}>&copy; {currentYear} {yourNameOrCompany}</p>
      <p style={{ color: isDarkMode ? "#fff" : "#000" }}>
        All original content on this website, including text, code, project descriptions, and resume,
        is copyrighted and owned by {yourNameOrCompany}. All rights are reserved. No part of this website
        may be reproduced, distributed, or used in any form without written permission from {yourNameOrCompany}.
      </p>
      <p style={{ color: isDarkMode ? "#fff" : "#000" }}>
        Any third-party images, graphics, or resources used on this website are subject to their respective licenses
        and are not owned by {yourNameOrCompany}. Proper attribution and compliance with the licensing terms for such
        resources are the responsibility of the respective owners.
      </p>
      <p>
        For inquiries regarding the use of any original content on this website, please contact{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p >
      <p style={{ color: isDarkMode ? "#fff" : "#000" }}>
        This copyright notice extends to all aspects of this website, including the HTML, CSS, JavaScript code, and
        any other scripts or technologies used in its creation.
      </p>
    </div>
  );
};

export default Copyright;
