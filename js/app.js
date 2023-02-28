var rcolor=["000000","673000","c20000","d8873b","f3e93c","077300","001e73","74009d","a2a2a2","ffffff","ffe68a","e9e2c8"];
var color;

const getColor = () => {
    // Hex Code
    const randomNumber = rcolor[Math.floor(Math.random() * rcolor.length)];
    const randomCode = "#" + randomNumber;
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    document.getElementById("color-code").style.color = randomCode;

    navigator.clipboard.writeText(randomCode)
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)




var z = 0;
z++;
var y = 0;
y++;

function begin001() {
    getColor();
    show004.innerHTML = "";
    message002.innerHTML = "";
    message003.innerHTML = "";
    message006.innerHTML = "";
    message008.innerHTML = "";
    show001.innerHTML = "";
    number001.innerHTML = y++;
    disappear001.innerHTML = "";
    message001.innerHTML ="ค่าตัวเลข";
    message003.innerHTML = "<input type=text id=input001 />";
    message005.innerHTML ="ยกกำลัง";
    show002.innerHTML = "";
    message006.innerHTML = "<input type=text id=input002 />";
    message007.innerHTML ="คลาดเคลื่อน(%)";
    show003.innerHTML = "";
    message008.innerHTML = "<input type=text id=input003 /> <button onclick=submit001()>ส่งคำตอบ</button>";
    

    if (y > 11) {
        message001.innerHTML = "แบบทดสอบจบแล้ว";
        number001.innerHTML = (y - 2);
        message002.innerHTML = "คะแนนที่ได้ " + (z - 1) + " จาก 10 คะแนน";
        message003.innerHTML = "ขอบคุณที่เข้ามาทำขอให้โชคดี";
        message005.innerHTML = "";
        message006.innerHTML = "";
        message007.innerHTML = "";
        show001.innerHTML = "";
        show002.innerHTML = "";
        show003.innerHTML = "";
        message008.innerHTML = "<button onclick=repeat001()>เริ่มอีกครั้ง</button>";
    }
}

function submit001() {
    var answer001 = input001.value;
    var answer002 = input002.value;
    var answer003 = input003.value;
    show001.innerHTML = answer001;
    show002.innerHTML = answer002;
    show003.innerHTML = answer003;
    if (document.getElementById("color-code").innerText=="#000000") {
        if ((answer001 == 0)&&(answer002==0)&&(answer003=="-")) {
            score001.innerHTML = z++;
            show004.innerHTML = "ถูกจ้า😀😀";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";
        }

        else {
            show004.innerHTML = "ผิดนะแต่ลองใหม่ได้😇😇";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";

        }
    }

    else if (document.getElementById("color-code").innerText=="#673000") {
        if ((answer001 == 1)&&(answer002==1)&&(answer003==1)) {
            score001.innerHTML = z++;
            show004.innerHTML = "ถูกจ้า😀😀";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";
        }

        else {
            show004.innerHTML = "ผิดนะแต่ลองใหม่ได้😇😇";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";

        }
    }
    else if (document.getElementById("color-code").innerText=="#c20000") {
        if ((answer001 == 2)&&(answer002==2)&&(answer003==2)) {
            score001.innerHTML = z++;
            show004.innerHTML = "ถูกจ้า😀😀";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";
        }

        else {
            show004.innerHTML = "ผิดนะแต่ลองใหม่ได้😇😇";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";

        }
    }
    else if (document.getElementById("color-code").innerText=="#d8873b") {
        if ((answer001 == 3)&&(answer002==3)&&(answer003=="-")) {
            score001.innerHTML = z++;
            show004.innerHTML = "ถูกจ้า😀😀";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";
        }

        else {
            show004.innerHTML = "ผิดนะแต่ลองใหม่ได้😇😇";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";

        }
    }
    else if (document.getElementById("color-code").innerText=="#f3e93c") {
        if ((answer001 == 4)&&(answer002==4)&&(answer003=="-")) {
            score001.innerHTML = z++;
            show004.innerHTML = "ถูกจ้า😀😀";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";
        }

        else {
            show004.innerHTML = "ผิดนะแต่ลองใหม่ได้😇😇";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";

        }
    }
    else if (document.getElementById("color-code").innerText=="#077300") {
        if ((answer001 == 5)&&(answer002==5)&&(answer003==0.50)) {
            score001.innerHTML = z++;
            show004.innerHTML = "ถูกจ้า😀😀";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";
        }

        else {
            show004.innerHTML = "ผิดนะแต่ลองใหม่ได้😇😇";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";

        }
    }
    else if (document.getElementById("color-code").innerText=="#001e73") {
        if ((answer001 == 6)&&(answer002==6)&&(answer003==0.25)) {
            score001.innerHTML = z++;
            show004.innerHTML = "ถูกจ้า😀😀";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";
        }

        else {
            show004.innerHTML = "ผิดนะแต่ลองใหม่ได้😇😇";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";

        }
    }
    else if (document.getElementById("color-code").innerText=="#74009d") {
        if ((answer001 == 7)&&(answer002=="7")&&(answer003==0.10)) {
            score001.innerHTML = z++;
            show004.innerHTML = "ถูกจ้า😀😀";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";
        }

        else {
            show004.innerHTML = "ผิดนะแต่ลองใหม่ได้😇😇";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";

        }
    }
    else if (document.getElementById("color-code").innerText=="#a2a2a2") {
        if ((answer001 == 8)&&(answer002=="8")&&(answer003==0.05)) {
            score001.innerHTML = z++;
            show004.innerHTML = "ถูกจ้า😀😀";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";
        }

        else {
            show004.innerHTML = "ผิดนะแต่ลองใหม่ได้😇😇";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";

        }
    }
    else if (document.getElementById("color-code").innerText=="#ffffff") {
        if ((answer001 == 9)&&(answer002=="9")&&(answer003=="-")) {
            score001.innerHTML = z++;
            show004.innerHTML = "ถูกจ้า😀😀";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";
        }

        else {
            show004.innerHTML = "ผิดนะแต่ลองใหม่ได้😇😇";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";

        }
    }
    else if (document.getElementById("color-code").innerText=="#ffe68a") {
        if ((answer001 == "-")&&(answer002==0.10)&&(answer003==5)) {
            score001.innerHTML = z++;
            show004.innerHTML = "ถูกจ้า😀😀";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";
        }

        else {
            show004.innerHTML = "ผิดนะแต่ลองใหม่ได้😇😇";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";

        }
    }
    else {
        if ((answer001 == "-")&&(answer002==0.01)&&(answer003==10)) {
            score001.innerHTML = z++;
            show004.innerHTML = "ถูกจ้า😀😀";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";
        }

        else {
            show004.innerHTML = "ผิดนะแต่ลองใหม่ได้😇😇";
            message002.innerHTML = "";
            message003.innerHTML = "__________";
            message006.innerHTML = "__________";
            message008.innerHTML = "<button onclick=begin001()>ถัดไป</button>";

        }
    }
}
function repeat001() {
    location.reload();
}