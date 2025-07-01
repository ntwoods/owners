const apiMap = {
  // Sales
  crmAssign: ['crmAssignCount', 'crmAssignCard'],
  ownersApproval: ['ownersApprovalCount', 'ownersApprovalCard'],
  dispatchConfirm: ['dispatchConfirmCount', 'dispatchConfirmCard'],

  // Priyam Dixit
  priyamLevel1: ['priyamLevel1Count', 'priyamLevel1Card'],
  priyamLevel2: ['priyamLevel2Count', 'priyamLevel2Card'],
  priyamLevel3: ['priyamLevel3Count', 'priyamLevel3Card'],
  priyamLevel4: ['priyamLevel4Count', 'priyamLevel4Card'],
  priyamLevel5: ['priyamLevel5Count', 'priyamLevel5Card'],
  priyamLevel6: ['priyamLevel6Count', 'priyamLevel6Card'],

  // Kalpana CRM
  kalpanaLevel1: ['kalpanaLevel1Count', 'kalpanaLevel1Card'],
  kalpanaLevel2: ['kalpanaLevel2Count', 'kalpanaLevel2Card'],
  kalpanaLevel3: ['kalpanaLevel3Count', 'kalpanaLevel3Card'],
  kalpanaLevel4: ['kalpanaLevel4Count', 'kalpanaLevel4Card'],
  kalpanaLevel5: ['kalpanaLevel5Count', 'kalpanaLevel5Card'],
  kalpanaLevel6: ['kalpanaLevel6Count', 'kalpanaLevel6Card'],

  // Purchase Orders
  purchaseVerify: ['purchaseVerifyCount', 'purchaseVerifyCard'],
  poSupplier: ['poSupplierCount', 'poSupplierCard'],
  getDispatchDate: ['getDispatchDateCount', 'getDispatchDateCard'],
  dispatchFollowUp: ['dispatchFollowUpCount', 'dispatchFollowUpCard'],
  dispatchFollowUpADayBefore: ['dispatchFollowUpADayBeforeCount', 'dispatchFollowUpADayBeforeCard'],  
  getDispatchDetails: ['getDispatchDetailsCount', 'getDispatchDetailsCard']
};

const apiEndpoints = {
  crmAssign: 'https://script.google.com/macros/s/AKfycbwWKHlGOSpQ5Jcof9bqCDQp-Tnl8J4lCZZT7DnGIEg75DjXYjVrvRbbjefyjdKDDPpi/exec',
  ownersApproval: 'https://script.google.com/macros/s/AKfycbzg5k4acAaEEmWfIklLzd52NW4xPb1yK4JTp_7m3GegNkDE1fPnqXCYwrVwnA6UzoLg4g/exec',
  dispatchConfirm: 'https://script.google.com/macros/s/AKfycbzuX9IvIK3aEoXA3TfzBvcAWcav_QhnuenbaYahJdeFL52Mu3KwkMpvIsVJZ7ni23M9Gg/exec',

  priyamLevel1: 'https://script.google.com/macros/s/AKfycby7o8IwfJ1vgI-_2Ad-epHZHmOdVqTbNVWnncuv4BnDIiIcWNmuzrEspA9jIvgy9G84eQ/exec?crm=Priyam%20Dixit',
  priyamLevel2: 'https://script.google.com/macros/s/AKfycbwuVRnAkiEKnTNy6yPBiPxA6BHIim4OlHjx1B3duF0Qt81itDZzgESH_g6pGWDkKhTs/exec?crm=Priyam%20Dixit',
  priyamLevel3: 'https://script.google.com/macros/s/AKfycbxkduAfhEpEtxKXA_HuIm-lZQj62ZPZwXeZ_Fol-v6VrzfhoXY2lffR64pjPahKV2o/exec?crm=Priyam%20Dixit',
  priyamLevel4: 'https://script.google.com/macros/s/AKfycbxMxIzOQmHv3LPTh6ca6i5uuguyH615cnjA5emEGNT0rmWpJlnrcg-KWNVP1DORkkcX/exec?crm=Priyam%20Dixit',
  priyamLevel5: 'https://script.google.com/macros/s/AKfycbwUr0UhENK6RGtdvYMC6-V0Khwb3kibKP4SLXC4nzL6Hm4idr6P-Olx4XTWvgZ_e2xk-Q/exec?crm=Priyam%20Dixit',
  priyamLevel6: 'https://script.google.com/macros/s/AKfycbyo5HTKVwD2L5ORxrYKRzdJYK3trFJ5FOHkmPC00TsKQQ3iLJ6aXkboKQgzZJpuf6jNqQ/exec?crm=Priyam%20Dixit',

  kalpanaLevel1: 'https://script.google.com/macros/s/AKfycby7o8IwfJ1vgI-_2Ad-epHZHmOdVqTbNVWnncuv4BnDIiIcWNmuzrEspA9jIvgy9G84eQ/exec?crm=Km%20Kalpana',
  kalpanaLevel2: 'https://script.google.com/macros/s/AKfycbwuVRnAkiEKnTNy6yPBiPxA6BHIim4OlHjx1B3duF0Qt81itDZzgESH_g6pGWDkKhTs/exec?crm=Km%20Kalpana',
  kalpanaLevel3: 'https://script.google.com/macros/s/AKfycbxkduAfhEpEtxKXA_HuIm-lZQj62ZPZwXeZ_Fol-v6VrzfhoXY2lffR64pjPahKV2o/exec?crm=Km%20Kalpana',
  kalpanaLevel4: 'https://script.google.com/macros/s/AKfycbxMxIzOQmHv3LPTh6ca6i5uuguyH615cnjA5emEGNT0rmWpJlnrcg-KWNVP1DORkkcX/exec?crm=Km%20Kalpana',
  kalpanaLevel5: 'https://script.google.com/macros/s/AKfycbwUr0UhENK6RGtdvYMC6-V0Khwb3kibKP4SLXC4nzL6Hm4idr6P-Olx4XTWvgZ_e2xk-Q/exec?crm=Km%20Kalpana',
  kalpanaLevel6: 'https://script.google.com/macros/s/AKfycbyo5HTKVwD2L5ORxrYKRzdJYK3trFJ5FOHkmPC00TsKQQ3iLJ6aXkboKQgzZJpuf6jNqQ/exec?crm=Km%20Kalpana',

  purchaseVerify: 'https://script.google.com/macros/s/AKfycbw2hdmC5ZgntoOVLSSqwwandWQpMEm5EteFACbpQ8-EYyvhytnbJPH2MX-snSTVuNnQyA/exec',
  poSupplier: 'https://script.google.com/macros/s/AKfycbzwhv2y4qc_mNMa9TUAezVA1EUvHReTkYTCcDj8zVYT1zyb3MSaouMYhvDV3ZcyVr0T/exec',
  getDispatchDate: 'https://script.google.com/macros/s/AKfycbwyskduPHfiIO3d8tuLY4dA0pbRKQeK1ZUvkUXPJFYs5NEPo8eJBCt_dT2UzuJaBub1/exec',
  dispatchFollowUp: 'https://script.google.com/macros/s/AKfycbwO1_MihNIerxTsnJQzuEnV2hf4UdaOzAwfDjtEXgQuxrJ499jCd3PB8_9j3kMeTdhX/exec',
  dispatchFollowUpADayBefore: 'https://script.google.com/macros/s/AKfycbynKuCKar5-CgsMfOBwCZm0swnfqxsWvKylbrj8QwLDoHlTNMSoCf1YowAVPAm1EHrOWQ/exec',  
  getDispatchDetails: 'https://script.google.com/macros/s/AKfycbwKB6wQPmrOXmMQ8bM43AMyWgtDobQJ96dPJXntgZpmyJRYogSz9qQHEqIn-OwBY67Qkw/exec'
};

async function fetchAndUpdateCount(url, countId, cardId) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    let count = 0;

    // Check if data is an object with a 'data' array property
    if (data && Array.isArray(data.data)) {
      count = data.data.length;
    } else if (data && typeof data.count !== 'undefined' && data.count !== null) {
      // Fallback for APIs that might still return a direct 'count' (though not seen in samples)
      const parsedCount = parseInt(data.count, 10);
      if (!isNaN(parsedCount)) {
        count = parsedCount;
      }
    }

    const countElement = document.getElementById(countId);
    const card = document.getElementById(cardId);

    countElement.textContent = count;
    card.classList.remove("loading");

    // Fix: Ensure card becomes visible
    card.style.opacity = '1'; // make it fully visible
    card.style.transform = 'translateY(0)'; // reset movement
    card.classList.remove("error-state"); 

    card.style.animation = 'none';
    card.offsetHeight; // trigger reflow
    card.style.animation = null;


    if (count > 0) {
      card.classList.add("has-pending");
      card.classList.remove("all-clear");
    } else {
      card.classList.add("all-clear");
      card.classList.remove("has-pending");
    }
  } catch (err) {
    console.error(`Failed to load ${countId}:`, err);
    const countElement = document.getElementById(countId);
    const card = document.getElementById(cardId);
    countElement.textContent = "Err";
    card.classList.add("error-state");
    card.classList.remove("loading");
    card.classList.remove("has-pending");
    card.classList.remove("all-clear");
  }
}

function refreshAllCounts() {
  for (const key in apiMap) {
    const [countId, cardId] = apiMap[key];
    fetchAndUpdateCount(apiEndpoints[key], countId, cardId);
  }
}

// Function to toggle CRM section visibility
function toggleCrmSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('collapsed');
    const toggleIcon = section.querySelector('.toggle-icon');
    if (section.classList.contains('collapsed')) {
        toggleIcon.textContent = '▶'; // Right arrow for collapsed
    } else {
        toggleIcon.textContent = '▼'; // Down arrow for expanded
    }
}


// Auto refresh every 30 sec
setInterval(refreshAllCounts, 30000);

// On page load
refreshAllCounts();

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
