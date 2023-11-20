var account= JSON.parse(localStorage.getItem('account'));
//localStorage.setItem('account',JSON.stringify([{username:'nct',email:'123@gmail.com',password:'12345678'}]));
//localStorage.setItem('phongcanh',JSON.stringify([{picname:'hoài niệm',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/hoainiem.png',price:'5.000.000'},{picname:'kí ức hà nội',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/kiuchanoi.png',price:'13.000.000'},{picname:'hội an ngày nắng',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/hoianngaynang.png',price:'15.000.000'},{picname:'phố nắng',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/phonang.png',price:'7.000.000'},{picname:'lối về',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/loive.png',price:'10.000.000'},{picname:'nắng hạ',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/nangha.png',price:'16.000.000'},{picname:'ngày nắng đẹp',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/ngaynangdep.png',price:'15.000.000'},{picname:'hoàng hôn trên phố',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/hoanghontrenpho.png',price:'17.000.000'},{picname:'vùng ngoại ô',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/vungngoaio.png',price:'13.000.000'},{picname:'phố mới',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/phomoi.png',price:'26.000.000'},{picname:'tiệm cafe cũ',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/tiemcafecu.png',price:'14.000.000'},{picname:'phố đường tàu',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/phoduongtau.png',price:'15.000.000'}]));
localStorage.setItem('tranhhoa',JSON.stringify([{picname:'hoa sen',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/hoasen.png',price:'7.000.000'},{picname:'an',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/an.png',price:'5.000.000'},{picname:'sen tháng 6',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/sen tháng 6.png',price:'5.500.000'},{picname:'hạ vắng',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/havang.png',price:'6.500.000'},{picname:'sắc hồng',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/sắc hồng.png',price:'180.000.000'},{picname:'hoa hồng và cafe',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/hoahongvacafe.png',price:'3.500.000'},{picname:'cành hồng',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/canhhong.png',price:'3.000.000'},{picname:'hoa xuân',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/hoaxuan.png',price:'5.500.000'},{picname:'peony',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/peony.png',price:'3.500.000'},{picname:'ngày rực rỡ',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/ngayrucro.png',price:'3.000.000'},{picname:'mẫu đơn',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/maudon.png',price:'4.000.000'},{picname:'mẫu đơn trắng',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/maudontrang.png',price:'3.000.000'}]));

// form login_out
function Register(){
    var a = document.querySelector('#Username').value;
    var b = document.querySelector('#Email').value;   
    var c = document.querySelector('#Password').value;
    var d = document.querySelector('#address').value;
    var e = document.querySelector('#phonenumber').value;
    if(a==''||b==''||c==''||d==''||e==''){
        alert('bạn chưa nhập đầy đủ thông tin');
        return false;
    }
    for(var key in account){
        if(a===account[key].username)
        {
            alert('tên người dùng này đã tồn tại');
            return false;
        }
    }

    for(var key in account){
        if(b===account[key].email)
            {
                alert('email này đã tồn tại');
                return false;
            }
        }

    function checkpass(c){
        if(c.length<=8)return false;
        var alphabet =0;
        var num=0;
        for(var value of c){
            if(isNaN(parseInt(value))==false)alphabet++;
            else num++;
        }
        if(num==0||alphabet==0)return false;
        return true;
    }
        if(checkpass(c)==false)
            {
                alert('mật khẩu phải có ít nhất 8 kí tự và bao gồm cả chữ số và chữ cái');
                return false;
            }
        
    account.push({username:a,email:b,password:c,address:d,phonenumber:e});
    localStorage.setItem('account',JSON.stringify(account));
    alert('CHUC MUNG BAN DA DANG KI THANH CONG')
        }
         var loginname;
        function Login(){
            var a = document.querySelector('#LoginEmail').value;
            var b = document.querySelector('#LoginPass').value;
            for(var key in account){
                if(a==account[key].email && b==account[key].password){
                    loginname=account[key].username;
                    window.location.href="User.html?"+a;
                    alert("dang nhap thanh cong");           
                    break;
                }
            }
        }
    const wrapper =document.querySelector('.wrapper');
    const loginLink =document.querySelector('.login-link');
    const registerLink =document.querySelector('.register-link');
    const btnPopup =document.querySelector('.login_out');
    const iconClose =document.querySelector('.icon-close');


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
btnPopup.addEventListener('click',function(){
    document.querySelector('.form_login-out').style.display="flex"
})
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    document.querySelector('.form_login-out').style.display="none"
});

// live_show
let list=document.querySelector('.slider .list');
let items=document.querySelectorAll('.slider .list .item');
let dots=document.querySelectorAll('.slider .dots li');
let prev=document.getElementById('prev');
let next=document.getElementById('next');

let active=0;
let lengthItems=items.length-1;

next.onclick=function(){
    if(active+1>lengthItems){
        active=0;
    }else{
        active++;
    }
    reloadSlider();
}
prev.onclick=function(){
    if(active-1<0){
        active=lengthItems;
    }else{
        active--;
    }
    reloadSlider();
}
let refreshSlider=setInterval(()=>{next.click()}, 3000)
function reloadSlider() {
    let checkLeft=items[active].offsetLeft;
    list.style.left=-checkLeft+'px';

    let lastAtiveDot=document.querySelector('.slider .dots li.active');
    lastAtiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider=setInterval(()=>{next.click()}, 3000)
}
dots.forEach((li, key)=>{
    li.addEventListener('click', function(){
        active=key;
        reloadSlider();
    })
})

// chuyen trang thong tin
function movepage(a){
    var page = ['.main_home','.recruitment','.contact','.introduce','.cooperate-main','.landscape_picture_wrapper','.flower_picture_wrapper'];
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
const phongcanh=document.querySelector(".phongcanh");
phongcanh.addEventListener('click',()=>{
    movepage('.landscape_picture_wrapper');
 });

 const tranhhoa=document.querySelector(".tranhhoa");
tranhhoa.addEventListener('click',()=>{
    movepage('.flower_picture_wrapper');
 });





// danh muc san pham
//phongcanh
var pc= JSON.parse(localStorage.getItem('phongcanh'));
const pctotalpage=2;
var pcperpage=8;
var pccurrentpage=1;
var pcstart=0;
var pcend=pcperpage;
pcpagebutton="";
for(i=0;i<pctotalpage;i++){
    pcpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=pcpaging('+(i+1)+')>'
    pcpagebutton+=i+1;
    pcpagebutton+='</div>'
}     
document.querySelector('.landscape_picture_paging').innerHTML=pcpagebutton;
function landscapepaging(){
    html="";
for(var key in pc){
    if(key>=pcstart && key<pcend){
    html+='<div class="landscape_box">'
    html+='<div class="landscape_box_img">'
    html+='<img src="'+pc[key].imgsrc+ '"alt='+pc[key].picname+'>'
    html+='</div>'
    html+='<div class="landscape_box_content">'
    html+=' <h2 class="name">'+pc[key].picname+'</h2>'
    html+='<p class="content">'+pc[key].type+'</p>'
    html+='<p class="price">'+pc[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.landscape_picture_content').innerHTML=html;
}
landscapepaging();
function pcpaging(i){
    pccurrentpage=parseInt(i);
    pcstart=(pccurrentpage-1)*pcperpage;
    pcend=pccurrentpage*pcperpage;
    landscapepaging();
}

//tranhhoa
var th= JSON.parse(localStorage.getItem('tranhhoa'));
const thtotalpage=2;
var thperpage=8;
var thcurrentpage=1;
var thstart=0;
var thend=thperpage;
thpagebutton="";
for(i=0;i<thtotalpage;i++){
    thpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=thpaging('+(i+1)+')>'
    thpagebutton+=i+1;
    thpagebutton+='</div>'
}     
document.querySelector('.flower_picture_paging').innerHTML=thpagebutton;
function flowerpaging(){
    html="";
for(var key in th){
    if(key>=thstart && key<thend){
    html+='<div class="flower_box">'
    html+='<div class="flower_box_img">'
    html+='<img src="'+th[key].imgsrc+ '"alt='+th[key].picname+'>'
    html+='</div>'
    html+='<div class="flower_box_content">'
    html+=' <h2 class="name">'+th[key].picname+'</h2>'
    html+='<p class="content">'+th[key].type+'</p>'
    html+='<p class="price">'+th[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.flower_picture_content').innerHTML=html;
}
flowerpaging();
function thpaging(i){
    thcurrentpage=parseInt(i);
    thstart=(thcurrentpage-1)*thperpage;
    thend=thcurrentpage*thperpage;
    flowerpaging();
}




