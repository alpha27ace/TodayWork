
const mailto = '사장님 포함'
let textareamailto = document.getElementById('todayworkmailto');
textareamailto.textContent = mailto;


const innerwork = document.getElementById("innerwork");
const innerworklist = document.getElementById("innerworklist");
const outwork = document.getElementById("outwork");
const outworklist = document.getElementById("outworklist");
const titleinnerwork = document.getElementById("titleinnerwork");
const titleoutwork = document.getElementById("titleoutwork");
const innerworkinside = document.getElementById("innerworkinside");
const todayworkresultid = document.getElementById("todayworkresultid");
let innerworkinsdeinnerhtml = innerworkinside.innerHTML

const outworkinside = document.getElementById("outworkinside");
let outworkinsdeinnerhtml = outworkinside.innerHTML

var inputtextboxcompany = document.getElementsByClassName('inputtextboxcompany')
var inputtextboxwork = document.getElementsByClassName('inputtextboxwork')
var inputtextboxoutcompany = document.getElementsByClassName('inputtextboxoutcompany')
var inputtextboxoutwork = document.getElementsByClassName('inputtextboxoutwork')
var worktime = document.getElementsByClassName('worktime')
var inputtextboxarea = document.getElementsByClassName('inputtextboxarea')

function minuswork() {

    changeinput()
    console.log('minus work')
    const minuswork_object = document.getElementsByClassName('minuswork')
    for (let i = 0; i < minuswork_object.length; i++) {
        minuswork_object[i].addEventListener('click', function (e) {
            e.target.parentElement.remove()

            changeinput()
            todayworkcontents();


        }, false);
    }


}

function addinnerwork() {
    let div = document.createElement('div');//li엘리먼트를 생성하여
    div.innerHTML = innerwork.innerHTML + '<button  class="minuswork">-</button>';//li태그내부에 HTML을 입력
    innerworkinside.appendChild(div);//태그 내부에 새로운 태그 입력
    minuswork()
}

function addoutwork() {

    let div_out = document.createElement('div');//li엘리먼트를 생성하여
    div_out.innerHTML = outwork.innerHTML + '<button  class="minuswork">-</button>';;//li태그내부에 HTML을 입력
    outworkinside.appendChild(div_out)//태그 내부에 새로운 태그 입력
    minuswork()
}

function getTodayDate(when) {
    const today = new Date(); // 현재 날짜 객체 생성

    switch (when) {
        case 'today':
            month = today.getMonth() + 1; // 월을 가져옴 (0을 제외)
            day1 = today.getDate()
            day = day1.toString().padStart(2, '0'); // 일을 가져와서 두 자리로 만듦        
            break;
        case "tomorrow":
            today.setDate(today.getDate() + 1)
            month = today.getMonth() + 1; // 월을 가져옴 (0을 제외)
            day1 = today.getDate()
            day = day1.toString().padStart(2, '0'); // 일을 가져와서 두 자리로 만듦
            break; // 요일에 대한 문자열을 가져옴
    }



    return `${month}/${day}`; // 'm/dd' 형식으로 오늘 날짜 반환
}



function getTodayDay() {
    const days = ['일', '월', '화', '수', '목', '금', '토', '일']; // 요일에 대한 문자열 배열
    const today = new Date(); // 현재 날짜 객체 생성
    const dayIndex = today.getDay(); // 오늘 요일의 인덱스(0부터 시작)를 가져옴
    let day = this.today()
    let date = ""
    switch (day) {
        case "today":
            day = days[dayIndex]
            date = this.getTodayDate('today')
            break;
        case "tomorrow":
            day = days[dayIndex + 1]
            date = this.getTodayDate("tomorrow")
            break; // 요일에 대한 문자열을 가져옴
    }

    yearmonthdaywork.textContent = date + `(${day}) 김태형 일간 주요업무`
    return day; // 오늘의 요일 반환
}



const todayDate = getTodayDate('today');

yearmonthdaywork = document.getElementById("yearmonthdaywork")

yearmonthdaywork.textContent = todayDate + `(${getTodayDay()}) 김태형 일간 주요업무`

titleinnerwork.addEventListener('click', function (e) {
    toggle_disable(e, innerworkinside, innerworkinsdeinnerhtml)
}, false);

titleoutwork.addEventListener('click', function (e) {
    toggle_disable(e, outworkinside, outworkinsdeinnerhtml)

}, false);


function toggle_disable(e, workinside, workinsdeinnerhtml) {
    e.target.parentElement.classList.toggle('disable');
    workinside.classList.toggle('notwork');
    if (e.target.parentElement.classList[1] === 'disable') {

        workinside.innerHTML = workinsdeinnerhtml
    }
    changeinput();
    todayworkcontents();

}

function todayworkcontents() {


    let inputtextboxcompanyresult = ''
    let inputtextboxoutcompanyresult = ''
    todayworkresultid.textContent = ''

    if (innerworklist.classList.value !== 'container disable') {
        for (var j = 0; j < inputtextboxcompany.length; j++) {
            inputtextboxcompanyresult += inputtextboxcompany[j].value + ' (' + inputtextboxwork[j].value + ')' + '\n' + '     '
        }
        todayworkresultid.textContent = '내근: ' + inputtextboxcompanyresult + '\n'
    }


    if (outworklist.classList.value !== 'container disable') {
        for (var j = 0; j < inputtextboxoutcompany.length; j++) {
            inputtextboxoutcompanyresult += inputtextboxoutcompany[j].value + ' (' + inputtextboxoutwork[j].value + ') ' + worktime[j].value + " " + inputtextboxarea[j].value + '\n' + '     '


        }
        todayworkresultid.textContent += '외근: ' + inputtextboxoutcompanyresult;
    }
}

function changeinput() {

    for (var j = 0; j < inputtextboxcompany.length; j++) {
        inputtextboxcompany[j].addEventListener('input', function (e) {

            todayworkcontents();
        }, false);

        inputtextboxwork[j].addEventListener('input', function (e) {

            todayworkcontents();
        }, false);
    }

    for (var j = 0; j < inputtextboxoutcompany.length; j++) {
        inputtextboxoutcompany[j].addEventListener('input', function (e) {

            todayworkcontents();
        }, false);

        inputtextboxoutwork[j].addEventListener('input', function (e) {

            todayworkcontents();
        }, false);


        worktime[j].addEventListener('input', function (e) {

            todayworkcontents();
        }, false);

        inputtextboxarea[j].addEventListener('input', function (e) {

            todayworkcontents();
        }, false);

    }
}

function today() {
    let radios = document.getElementsByName("date");
    let selected = Array.from(radios).find(radio => radio.checked);
    return (selected.value);
}

document.addEventListener('DOMContentLoaded', function () {
    // DOM이 로드된 후에 실행될 코드
    changeinput()
    todayworkcontents();


});

// 클립보드 복사 함수
function copyToClipboard(textareaId, buttonElement) {
    const textarea = document.getElementById(textareaId);
    const originalText = buttonElement.textContent;

    // 텍스트 선택
    textarea.select();
    textarea.setSelectionRange(0, 99999); // 모바일 디바이스 지원

    // 클립보드에 복사
    const copySuccess = () => {
        // 체크 표시로 변경
        buttonElement.textContent = '✓';
        buttonElement.classList.add('copied');

        // 2초 후 원래 아이콘으로 복구
        setTimeout(() => {
            buttonElement.textContent = originalText;
            buttonElement.classList.remove('copied');
        }, 2000);
    };

    try {
        document.execCommand('copy');
        copySuccess();
    } catch (err) {
        // 최신 브라우저용 대체 방법
        navigator.clipboard.writeText(textarea.value).then(function () {
            copySuccess();
        }, function (err) {
            alert('복사 실패: ' + err);
        });
    }

    // 선택 해제
    window.getSelection().removeAllRanges();
}

// 전체 복사 함수 - 3개의 textarea를 순차적으로 복사
async function copyAllSequentially(buttonElement) {
    const textareaIds = ['todayworkmailto', 'yearmonthdaywork', 'todayworkresultid'];
    const originalText = buttonElement.textContent;

    buttonElement.disabled = true;

    for (let i = 0; i < textareaIds.length; i++) {
        const textarea = document.getElementById(textareaIds[i]);

        // 해당 textarea의 복사 버튼 찾기
        const copyButton = textarea.parentElement.querySelector('.copybtn');
        const originalButtonText = copyButton ? copyButton.textContent : '';

        // 진행 상황 표시
        buttonElement.textContent = `복사 중... (${i + 1}/3)`;

        try {
            // 텍스트 선택
            textarea.select();
            textarea.setSelectionRange(0, 99999);

            // 클립보드에 복사
            await navigator.clipboard.writeText(textarea.value);

            // 개별 복사 버튼도 체크 표시로 변경
            if (copyButton) {
                copyButton.textContent = '✓';
                copyButton.classList.add('copied');
            }

            // 각 복사 사이에 짧은 지연
            if (i < textareaIds.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        } catch (err) {
            // 대체 방법 시도
            try {
                document.execCommand('copy');

                // 개별 복사 버튼도 체크 표시로 변경
                if (copyButton) {
                    copyButton.textContent = '✓';
                    copyButton.classList.add('copied');
                }

                if (i < textareaIds.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            } catch (e) {
                alert(`복사 실패 (${i + 1}번째): ` + e);
                buttonElement.textContent = originalText;
                buttonElement.disabled = false;
                return;
            }
        }
    }

    // 완료 표시
    buttonElement.textContent = '✓ 완료';
    buttonElement.classList.add('copied');

    // 선택 해제
    window.getSelection().removeAllRanges();

    // 2초 후 원래 상태로 복구 (전체 복사 버튼과 개별 버튼 모두)
    setTimeout(() => {
        buttonElement.textContent = originalText;
        buttonElement.classList.remove('copied');
        buttonElement.disabled = false;

        // 개별 복사 버튼들도 원래 상태로 복구
        textareaIds.forEach(id => {
            const textarea = document.getElementById(id);
            const copyBtn = textarea.parentElement.querySelector('.copybtn');
            if (copyBtn) {
                copyBtn.textContent = '📋';
                copyBtn.classList.remove('copied');
            }
        });
    }, 2000);
}
