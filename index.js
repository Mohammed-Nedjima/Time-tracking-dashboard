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
      "SelfCare",
    ];
    categories.forEach((item) => {
      const curritem = document.getElementById(`curr-${item.toLowerCase()}`);
      // console.log(curritem);
      const previtem = document.getElementById(`prev-${item.toLowerCase()}`);
      // console.log(previtem);
      const itemData = data.find((e) => e.title === item);
    });
    const dayilyBtn = document.getElementById("daily-btn");
    const weeklyBtn = document.getElementById("weekly-btn");
    const monthlyBtn = document.getElementById("monthly-btn");

    let timeframe = "weekly";

    const updateData = (data) => {
      categories.forEach((item) => {
        if (item === "SelfCare") {
          item = "Self Care";
        } else {
          item = item.toLowerCase();
        }
        const itemData = data.find((e) => e.title === item);
        console.log(itemData);
      });
      currWork.textContent = workData.timeframes[timeframe].current + "hrs";
      prevWork.textContent = workData.timeframes[timeframe].previous + "hrs";
      currPlay.textContent = playData.timeframes[timeframe].current + "hrs";
      prevPlay.textContent = playData.timeframes[timeframe].previous + "hrs";
      currStudy.textContent = studyData.timeframes[timeframe].current + "hrs";
      prevStudy.textContent = studyData.timeframes[timeframe].previous + "hrs";
      currExercise.textContent =
        exerciseData.timeframes[timeframe].current + "hrs";
      prevExercise.textContent =
        exerciseData.timeframes[timeframe].previous + "hrs";
      currSocial.textContent = socialData.timeframes[timeframe].current + "hrs";
      prevSocial.textContent =
        socialData.timeframes[timeframe].previous + "hrs";
      currSelfCare.textContent =
        selfCareData.timeframes[timeframe].current + "hrs";
      prevSelfCare.textContent =
        selfCareData.timeframes[timeframe].previous + "hrs";
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
