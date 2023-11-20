var account= JSON.parse(localStorage.getItem('account'));
//localStorage.setItem('account',JSON.stringify([{username:'nct',email:'123@gmail.com',password:'12345678'}]));
// form login_out
var url ="" + document.location;
console.log(url);
arr=url.split('?');
var query = arr[1];
console.log(query);
var loginname = document.querySelector('.login_out');
for(var key in account){
    if(query==account[key].email){
        loginname.textContent=account[key].username;
    }
}


// chuyen trang thong tin
function movepage(a){
    var page = ['.main_home','.recruitment','.contact','.introduce','.cooperate-main'];
    for(var value of page){
        if(a==value){
            document.querySelector(value).style.display="contents";
        }
        else{
            document.querySelector(value).style.display="none";
        }
    }
}

const hoptac=document.querySelector(".hoptac");
hoptac.addEventListener('click',()=>{
    movepage('.cooperate-main');
});
const tuyendung=document.querySelector(".tuyendung");
tuyendung.addEventListener('click',()=>{
    movepage('.recruitment');
});
const lienhe=document.querySelector(".lienhe");
lienhe.addEventListener('click',()=>{
    movepage('.contact');
});
const gioithieu=document.querySelector(".gioithieu");
gioithieu.addEventListener('click',()=>{
   movepage('.introduce');
});
//infor & dang xuat
const btnPopup =document.querySelector('.login_out');
const iconClose =document.querySelector('.icon-close-infor');
const log_out=document.querySelector('.dang_xuat');
btnPopup.addEventListener('click',function(){
    document.querySelector('.form_information').style.display="contents";
})

iconClose.addEventListener('click',()=>{
    document.querySelector('.form_information').style.display="none"
});
log_out.addEventListener('click',()=>{
    window.location.href="index.html";
});
//lay thong tin nguoi dung
let infor;
function get_infor(){
    
    for(var key in account){
        if(query===account[key].email){
            infor=account[key];
        }
    }
}
get_infor();
document.querySelector('.name_infor').innerHTML='<p class="name_infor">'+'TÊN  : '+infor.username+'</p>';
document.querySelector('.email').innerHTML='<p class="email">'+'EMAIL  : '+infor.email+'</p>';
document.querySelector('.number_phone').innerHTML='<p class="number_phone">'+'SĐT  :    '+infor.phonenumber+'</p>';
document.querySelector('.dia_chi').innerHTML='<p class="dia_chi">'+'ĐỊA CHỈ  : '+infor.address+'</p>';
;

// click vao hinh de  xem chi tiet
const img_infor=document.querySelector('.box');
img_infor.addEventListener('click',function(){
    document.querySelector('.picture_information').style.display="contents";
})
const iconClose_info_img =document.querySelector('.icon-close-infor_img');

iconClose_info_img.addEventListener('click',()=>{
    document.querySelector('.picture_information').style.display="none"
});