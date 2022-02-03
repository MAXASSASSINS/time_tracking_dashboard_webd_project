previous_week();
previous_day();
previous_month();

document.querySelector("#daily").addEventListener("click", function(){
    daily_hide();
    monthly_hide_add();
    weekly_hide_add();
    document.querySelector("#daily.duration").classList.add("duration-white");
    document.querySelector("#weekly.duration").classList.remove("duration-white");
    document.querySelector("#monthly.duration").classList.remove("duration-white");
    // previous_day();
});
document.querySelector("#weekly").addEventListener("click", function(){
    weekly_hide();
    monthly_hide_add();
    daily_hide_add();
    document.querySelector("#daily.duration").classList.remove("duration-white");
    document.querySelector("#weekly.duration").classList.add("duration-white");
    document.querySelector("#monthly.duration").classList.remove("duration-white");
    // previous_week();
});
document.querySelector("#monthly").addEventListener("click", function(){
    monthly_hide();
    weekly_hide_add();
    daily_hide_add();
    document.querySelector("#daily.duration").classList.remove("duration-white");
    document.querySelector("#weekly.duration").classList.remove("duration-white");
    document.querySelector("#monthly.duration").classList.add("duration-white");
    // previous_month();
});

function daily_hide(){
    var list_daily = []; 
    list_daily = document.querySelectorAll(".daily");
    for (let index = 0; index < list_daily.length; index++) {
        list_daily[index].classList.remove("daily-hide");
        
    }
    console.log(list_daily);
}
function weekly_hide(){
    var list_weekly = []; 
    list_weekly = document.querySelectorAll(".weekly");
    for (let index = 0; index < list_weekly.length; index++) {
        list_weekly[index].classList.remove("weekly-hide");
        
    }
    console.log(list_weekly);
}
function monthly_hide(){
    var list_monthly = []; 
    list_monthly = document.querySelectorAll(".monthly");
    for (let index = 0; index < list_monthly.length; index++) {
        list_monthly[index].classList.remove("monthly-hide");
        
    }
    console.log(list_monthly);
}
function daily_hide_add(){
    var list_dailys = []; 
    list_dailys = document.querySelectorAll(".daily");
    for (let index = 0; index < list_dailys.length; index++) {
        list_dailys[index].classList.add("daily-hide");
        
    }
    console.log(list_dailys);
}
function weekly_hide_add(){
    var list_weeklys = []; 
    list_weeklys = document.querySelectorAll(".weekly");
    for (let index = 0; index < list_weeklys.length; index++) {
        list_weeklys[index].classList.add("weekly-hide");
        
    }
    console.log(list_weeklys);
}
function monthly_hide_add(){
    var list_monthlys = []; 
    list_monthlys = document.querySelectorAll(".monthly");
    for (let index = 0; index < list_monthlys.length; index++) {
        list_monthlys[index].classList.add("monthly-hide");
        
    }
    console.log(list_monthlys);
}

function previous_day(){
    var last_day = [];
    last_day =  document.querySelectorAll(".daily .previous span");
    console.log(last_day);
    for (let index = 0; index < last_day.length; index++) {
        last_day[index].textContent = "Yesterday";
    }

}
function previous_week(){
    var last_day = [];
    last_day =  document.querySelectorAll(".weekly .previous span");
    console.log(last_day);
    for (let index = 0; index < last_day.length; index++) {
        last_day[index].textContent = "Last Week";
    }

}
function previous_month(){
    var last_day = [];
    last_day =  document.querySelectorAll(".monthly .previous span");
    console.log(last_day);
    for (let index = 0; index < last_day.length; index++) {
        last_day[index].textContent = "Last month";
    }

}

