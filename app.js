const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const courseInfo = {
    code: "BSCCT604",
    nameTH: "การบริหารเครือข่ายคอมพิวเตอร์",
    nameEN: "Computer Network Administration",
    credits: "3(2-2-5)",
    prerequisite: "BSCCT603 การสื่อสารข้อมูลและระบบเครือข่ายคอมพิวเตอร์",
    descriptionTH: "ศึกษาและฝึกปฏิบัติเกี่ยวกับการติดตั้งและกำหนดค่าทางเครือข่ายคอมพิวเตอร์...",
    descriptionEN: "Study and practice in installation and setup of computer network..."
};

// เมนูพร้อม Link ไปยัง Route ต่างๆ
const chapters = [
    { name: "บทที่ 1: การติดตั้งระบบเครือข่าย (เครื่องคิดเลข)", link: "/chapter1" },
    { name: "บทที่ 2: การจัดการ IP Address (ระบบตัดเกรด)", link: "/chapter2" },
    { name: "บทที่ 3: Routing (การค้นหาเส้นทาง)", link: "#" },
    { name: "บทที่ 4: ระบบเครือข่ายไร้สาย (Wireless)", link: "#" },
    { name: "บทที่ 5: ความปลอดภัยเครือข่าย (Security)", link: "#" },
    { name: "บทที่ 6: การออกแบบ VPN", link: "#" },
    { name: "บทที่ 7: การประยุกต์ใช้ในองค์กร", link: "#" }
];

// หน้าแรก
app.get('/', (req, res) => {
    res.render('index', { course: courseInfo, chapters: chapters, active: 'home' });
});

// บทที่ 1: เครื่องคิดเลข
app.get('/chapter1', (req, res) => {
    res.render('chapter1', { course: courseInfo, chapters: chapters, active: 'ch1' });
});

// บทที่ 2: ระบบตัดเกรด
app.get('/chapter2', (req, res) => {
    res.render('chapter2', { course: courseInfo, chapters: chapters, active: 'ch2' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});