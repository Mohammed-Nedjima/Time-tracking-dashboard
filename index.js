fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const categories = [
      "Work",
      "Play",
      "Study",
      "Exercise",
      "Social",
      "SelfCare"
    ];
    // categories.forEach((item) => {
    //   const curritem = document.getElementById(`curr-${item.toLowerCase()}`);
    //   // console.log(curritem);
    //   const previtem = document.getElementById(`prev-${item.toLowerCase()}`);
    //   // console.log(previtem);
    //   const itemData = data.find((e) => e.title === item);
    // });
    const dayilyBtn = document.getElementById("daily-btn");
    const weeklyBtn = document.getElementById("weekly-btn");
    const monthlyBtn = document.getElementById("monthly-btn");

    let timeframe = "weekly";

    const updateData = (data) => {
      const activities = [
        { id: "curr-work", prevId: "prev-work" },
        { id: "curr-play", prevId: "prev-play" },
        { id: "curr-study", prevId: "prev-study" },
        { id: "curr-exercise", prevId: "prev-exercise" },
        { id: "curr-social", prevId: "prev-social" },
        { id: "curr-selfcare", prevId: "prev-selfcare" }
      ];

      activities.forEach((activity, index) => {
        const currActivity = document.getElementById(activity.id);
        const prevActivity = document.getElementById(activity.prevId);
        currActivity.textContent =
          data[index].timeframes[timeframe].current + "hrs";
        prevActivity.textContent =
          data[index].timeframes[timeframe].previous + "hrs";
      });
    };

    dayilyBtn.addEventListener("click", () => {
      weeklyBtn.classList.remove("text-white");
      monthlyBtn.classList.remove("text-white");
      dayilyBtn.classList.add("text-white");
      timeframe = "daily";
      updateData(data);
    });

    weeklyBtn.addEventListener("click", () => {
      dayilyBtn.classList.remove("text-white");
      monthlyBtn.classList.remove("text-white");
      weeklyBtn.classList.add("text-white");
      timeframe = "weekly";
      updateData(data);
    });

    monthlyBtn.addEventListener("click", () => {
      dayilyBtn.classList.remove("text-white");
      weeklyBtn.classList.remove("text-white");
      monthlyBtn.classList.add("text-white");
      timeframe = "monthly";
      updateData(data);
    });

    updateData(data);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
