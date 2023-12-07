const ip = async () => {
  try {
    const response = await fetch("https://api.db-ip.com/v2/free/self");
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

ip();