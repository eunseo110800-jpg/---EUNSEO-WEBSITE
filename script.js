// =============================
// 마우스 빛 효과
// =============================

const light = document.getElementById("light");

document.addEventListener("mousemove", (e) => {
    light.style.left = e.clientX + "px";
    light.style.top = e.clientY + "px";
});

// =============================
// 숨겨진 별
// =============================

const star = document.getElementById("star");

if (star) {

    star.addEventListener("click", () => {

        const fade = document.getElementById("fade");

        fade.style.opacity = "1";

        fade.style.pointerEvents = "all";

        fade.innerHTML = `
        <div style="
        text-align:center;
        color:white;
        font-size:28px;
        line-height:2;">
        관측자를 확인 중...<br><br>
        ACCESS GRANTED
        </div>
        `;

        setTimeout(() => {

            location.href = "secret.html";

        },2200);

    });

}

// =============================
// SYSTEM LOG
// =============================

const logs=[

"SYSTEM LOG",
"관측 중...",
"새로운 기록이 발견되었습니다.",
"Observer Connected.",
"ERROR : RECORD NOT FOUND",
"기록을 불러오는 중...",
"세계관 동기화 완료."

];

const log=document.getElementById("log");

if(log){

setInterval(()=>{

log.innerHTML=logs[Math.floor(Math.random()*logs.length)];

},5000);

}

// =============================
// 숨겨진 키보드 코드
// =============================

let code="";

document.addEventListener("keydown",(e)=>{

code+=e.key.toUpperCase();

if(code.length>6){

code=code.slice(-6);

}

if(code==="EUNSEO"){

location.href="secret.html";

}

});