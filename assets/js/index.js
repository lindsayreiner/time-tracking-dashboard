const main = $(".all-card-container");

const dailyBtn = $(".daily-btn");
const weeklyBtn = $(".weekly-btn");
const monthlyBtn = $(".monthly-btn");

$(".daily-btn").on("click", function (e) {
    e.preventDefault();
    dailyBtn.addClass("selected");
    weeklyBtn.removeClass("selected");
    monthlyBtn.removeClass("selected");
    loadDailyStats();
});

$(".weekly-btn").on("click", function (e) {
    e.preventDefault();
    dailyBtn.removeClass("selected");
    weeklyBtn.addClass("selected");
    monthlyBtn.removeClass("selected");
    loadWeeklyStats();
});

$(".monthly-btn").on("click", function (e) {
    e.preventDefault();
    dailyBtn.removeClass("selected");
    weeklyBtn.removeClass("selected");
    monthlyBtn.addClass("selected");
    loadMonthlyStats();
});

function loadDailyStats() {

};

function loadWeeklyStats() {

};

function loadMonthlyStats() {

};