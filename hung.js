
var readlineSync = require('readline-sync');
let students = []

while (true) {
    showMenu();
}
//Hiển thị tất cả học sinh 

function AllStudents() {
    console.log(students);
}
// Thêm mới học sinh 

function AddStudent() {
    let id = Date.now();
    let studentName = readlineSync.question('Enter name:');
    let age = readlineSync.question('Enter age: ');
    let gender = readlineSync.question('Enter gender: ');
    let score = readlineSync.question('Enter score: ');
    let medScore = readlineSync.question('Enter medium score: ');
    students.push({
        id: id,
        name: studentName,
        age: age,
        gender: gender,
        score: score,
        medScore: medScore
    })
}
//Xoá 1 học sinh theo id

function DeleteOneStudent() {
    let delId = readlineSync.question('ID Student : ');
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === delId) {
            students.splice(i, 1);
        }
    }
}
//Xoá nhiều học sinh theo id

function DelStudents(){}

// Edit thông tin học sinh 

function EditStudent() {}

//Tìm kiếm học sinh theo tên

function SearchName() {
    var nameWannaFind = readlineSync.question('Who you want to find: ');
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === nameWannaFind) {
            console.log(students[i]);
        }
    }
}
// Tìm kiếm học sinh thủ khoa vào trường

function SearchBestStudent() {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score = Math.max(students.score)) {
            console.log(students[i]);
        }
    }
}
//Hiển thị danh sách học sinh bị cảnh cáo ( điểm trung bình < 4) 

function StudentIsWarned() {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score < 4) {
            console.log(students[i]);
        }
    }
}
// Sắp xếp học sinh theo bảng chữ cái

function SortByAlphabet() {
    students.sort((a, b) => {
        let left = a.studentName;
        let right = b.studentName;
        return left === right ? 0 : left > right ? 1 : -1;
    });
    console.log(students);
}
//Sắp xếp học sinh theo điểm trung bình tăng dần

function SortScore() {
    students.sort((a, b) => {
        let left = a.score;
        let right = b.score;
        return left === right ? 0 : left > right ? 1 : -1;
    });
}
// Sắp xếp học sinh theo tuổi tăng dần

function SortAge() {
    students.sort((a, b) => {
        let left = a.age;
        let right = b.age;
        return left === right ? 0 : left > right ? 1 : -1;
    });
}
//Exit: thoát khỏi chương trình và không hiện menu nữa

function Exit() {
    process.exit();
}

function showMenu() {
    
    console.log("1.  Hiển thị tất cả học sinh ");
    console.log("2.  Thêm mới học sinh ");
    console.log("3.  Xoá 1 học sinh theo id");
    console.log("4.  Xoá nhiều học sinh theo id");
    console.log("5.  Edit thông tin học sinh ");
    console.log("6.  Tìm kiếm học sinh theo tên");
    console.log("7.  Tìm kiếm học sinh thủ khoa vào trường");
    console.log("8.  Hiển thị danh sách học sinh bị cảnh cáo ( điểm trung bình < 4) ");
    console.log("9.  Sắp xếp học sinh theo bảng chữ cái");
    console.log("10. Sắp xếp học sinh theo điểm trung bình tăng dần");
    console.log("11. Sắp xếp học sinh theo tuổi tăng dần");
    console.log("12. Exit");

    let key = readlineSync.question('Bạn muốn chọn chức năng : ');
    switch (key) {
        case '1':
            AllStudents();
            break;
        case '2':
            AddStudent();
            break;
        case '3':
            DeleteOneStudent();
            break;
        case '4':
            DelStudents();
            break;
        case '5':
            EditStudent();
            break;
        case '6':
            SearchName();
            break;
        case '7':
            SearchBestStudent();
            break;
        case '8':
            StudentIsWarned();
            break;
        case '9':
            SortByAlphabet();
            break;
        case '10':
            SortScore();
            break;
        case '11':
            SortAge();
            break;

        default:
            Exit();
            break;
    }
}