let allinfo;

let userInfo;

let text;

let ism = prompt("Write your name", "Behruz");

if (ism == null || ism == "") {
  text = "Bruh baran pochemu ti otmenil";
} else {
  userInfo = "User info :";
  text =
    `
TVOY IMYA : ` + ism;
  allinfo = userInfo + text;
}

let age = prompt("Write your age", "12");

if (age == null || age == "") {
  text = "Bruh baran pochemu ti otmenil";
} else {
  userInfo = "User info :";
  text =
    `
TVOY IMYA : ` + ism;
  age =
    `
TVOY VOZRAST : ` + age;
  allinfo = userInfo + text + age;
}

let job = prompt("Write your job", "Ingineer");

if (job == null || job == "") {
  text = "Bruh baran pochemu ti otmenil";
} else {
  userInfo = "User info :";
  text =
    `
TVOY IMYA : ` + ism;
  job =
    `
TVOY RABOTA : ` + job;

  allinfo = userInfo + text + age + job;
}

console.log(allinfo);
