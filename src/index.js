fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const currWork = document.getElementById("curr-work");
    const prevWork = document.getElementById("prev-work");
    const currPlay = document.getElementById("curr-play");
    const prevPlay = document.getElementById("prev-play");
    const currStudy = document.getElementById("curr-study");
    const prevStudy = document.getElementById("prev-study");
    const currExercise = document.getElementById("curr-exercise");
    const prevExercise = document.getElementById("prev-exercise");
    const currSocial = document.getElementById("curr-social");
    const prevSocial = document.getElementById("prev-social");
    const currSelfCare = document.getElementById("curr-self-care");
    const prevSelfCare = document.getElementById("prev-self-care");
    const dayilyBtn = document.getElementById("daily-btn");
    const weeklyBtn = document.getElementById("weekly-btn");
    const monthlyBtn = document.getElementById("monthly-btn");

    let timeframe = "weekly";

    const updateData = (data) => {
      const workData = data.find((item) => item.title === "Work");
      const playData = data.find((item) => item.title === "Play");
      const studyData = data.find((item) => item.title === "Study");
      const exerciseData = data.find((item) => item.title === "Exercise");
      const socialData = data.find((item) => item.title === "Social");
      const selfCareData = data.find((item) => item.title === "Self Care");
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
