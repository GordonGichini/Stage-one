document.addEventListener("DOMContentLoaded", function() {
    // Current Day of the Week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = days[currentDate.getUTCDay()];
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = currentDay;

    // Current UTC Time
    const currentUTCTime = currentDate.getTime();
    document.querySelector("[data-testid='currentUTCTime']").textContent = currentUTCTime;
});
