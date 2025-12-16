const express = require('express');
const path = require('path'); // [เพิ่ม] ต้องใช้เพื่อจัดการ Path ของไฟล์ static
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// [เพิ่ม] เปิดให้เข้าถึงไฟล์ในโฟลเดอร์ public (เช่น public/pdfs/cert1.pdf)
app.use(express.static(path.join(__dirname, 'public')));

const courseInfo = {
    code: "BSCCT604",
    nameTH: "การบริหารเครือข่ายคอมพิวเตอร์",
    nameEN: "Computer Network Administration",
    credits: "3(2-2-5)",
    prerequisite: "BSCCT603 การสื่อสารข้อมูลและระบบเครือข่ายคอมพิวเตอร์",
    descriptionTH: "ศึกษาและฝึกปฏิบัติเกี่ยวกับการติดตั้งและกำหนดค่าทางเครือข่ายคอมพิวเตอร์...",
    descriptionEN: "Study and practice in installation and setup of computer network..."
};

// [เพิ่ม] ข้อมูลเอกสาร/ประกาศนียบัตร (ต้องมีไฟล์จริงใน public/pdfs ด้วยนะ)
const documents = [
    { id: 1, title: "ใบรับรองการผ่านงาน (Internship Certificate)", date: "Jan 2024", file: "cert1.pdf", type: "Certificate" },
    { id: 2, title: "เอกสารประกอบโครงการ (Project Document)", date: "Dec 2023", file: "doc1.pdf", type: "Document" },
    { id: 3, title: "ผลการเรียน (Transcript)", date: "Nov 2023", file: "transcript.pdf", type: "Academic" }
];

// เมนูพร้อม Link ไปยัง Route ต่างๆ
const chapters = [
    { name: "บทที่ 1: การติดตั้งระบบเครือข่าย (เครื่องคิดเลข)", link: "/chapter1" },
    { name: "บทที่ 2: การจัดการ IP Address (ระบบตัดเกรด)", link: "/chapter2" },
    { name: "บทที่ 3: Routing (การค้นหาเส้นทาง)", link: "#" },
    { name: "บทที่ 4: ระบบเครือข่ายไร้สาย (Wireless)", link: "#" },
    { name: "บทที่ 5: ความปลอดภัยเครือข่าย (Security)", link: "#" },
    { name: "บทที่ 6: การออกแบบ VPN", link: "#" },
    { name: "บทที่ 7: การประยุกต์ใช้ในองค์กร", link: "#" },
    // [เพิ่ม] เพิ่มเมนูสำหรับเข้าหน้า Certificates
    { name: "★ ผลงานและประกาศนียบัตร", link: "/certificates" }
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

// [เพิ่ม] Route สำหรับหน้า Certificates
app.get('/certificates', (req, res) => {
    // ส่ง docs ไปให้หน้าเว็บแสดงผล
    // ส่ง chapters ไปด้วย เผื่อคุณอยากใส่ Sidebar ในหน้านี้ด้วยในอนาคต
    res.render('certificates', { 
        docs: documents, 
        chapters: chapters,
        active: 'certs'
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});