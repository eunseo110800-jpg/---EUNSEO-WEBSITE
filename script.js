// ===============================
// 팀섭티튜의 아카이브
// script.js
// ===============================

// 비밀 페이지 이동
function goSecret(){

    const fade = document.getElementById("fade");

    if(fade){
        fade.style.opacity = "1";

        setTimeout(function(){

            location.href = "secret.html";

        }, 2000);
    }

}

// 비밀 페이지 코드 확인
function checkCode(){

    const input = document.getElementById("codeInput");

    const result = document.getElementById("result");

    if(!input || !result){
        return;
    }

    const code = input.value.trim().toUpperCase();

    switch(code){

        case "PUN-001":

            result.innerHTML = `
            <h2>🔓 RECORD-004</h2>
            <p>제푼은 처음부터 관측자가 아니었다.</p>
            `;
            break;

        case "EDEL-001":

            result.innerHTML = `
            <h2>🔓 RECORD-005</h2>
            <p>에델의 기록 일부가 복구되었습니다.</p>
            `;
            break;

        default:

            result.innerHTML =
            "<span style='color:red;'>❌ ACCESS DENIED</span>";

    }

}

// 비밀 문서 펼치기
document.querySelectorAll(".file").forEach(function(file){

    file.addEventListener("click", function(){

        const hidden = file.querySelector(".hidden");

        if(hidden){
            hidden.classList.toggle("hidden");
        }

    });

});

// 랜덤 메시지
const secretMessage = document.getElementById("secretMessage");

if(secretMessage && Math.random() < 0.15){

    secretMessage.style.display = "block";

}