var pc= JSON.parse(localStorage.getItem('phongcanh'));
var th= JSON.parse(localStorage.getItem('tranhhoa'));
var tv= JSON.parse(localStorage.getItem('tinhvat'));
var tt= JSON.parse(localStorage.getItem('truutuong'));
var tn= JSON.parse(localStorage.getItem('tranhngua'));
var img= document.getElementById('img');
var input= document.getElementById('inputimg');
var ctdataimg;
var dataimg
var dataimgfix
var ctdataimgfix
function logout(){
    window.location.href="index.html";
}

input.onchange=(e)=>{
    const reader = new FileReader;
    reader.addEventListener("load",() =>{
        dataimg=reader.result;
    });
    reader.readAsDataURL(input.files[0])
    if(input.files[0])
        img.src=URL.createObjectURL(input.files[0]);
};

var imgct= document.getElementById('imgct');
var inputct= document.getElementById('inputimgct');

inputct.onchange=(e)=>{
    const reader = new FileReader;
    reader.addEventListener("load",() =>{
        ctdataimg=reader.result;
    });
    reader.readAsDataURL(inputct.files[0])
    if(inputct.files[0])
        imgct.src=URL.createObjectURL(inputct.files[0]);
};
function pricetodata(a){
    if(a.length==7){
         return a.slice(0, 1) + "." + a.slice(1,4)+"."+a.slice(4,8);
    }
    if(a.length==8){
        return a.slice(0, 2) + "." + a.slice(2,5)+"."+a.slice(5,9);
    }
   if(a.length==9){
    return a.slice(0, 3) + "." + a.slice(3,6)+"."+a.slice(6,10);
}
if(a.length==10){
    return  a.slice(0, 1) + "."+a.slice(1, 4) + "." + a.slice(4,7)+"."+a.slice(7,10);
}
if(a.length==11){
    return  a.slice(0, 2) + "."+a.slice(2, 5) + "." + a.slice(5,8)+"."+a.slice(8,11);
}
if(a.length==12){
    return a.slice(0, 3) + "." + a.slice(3,6)+"."+a.slice(6,9)+"."+a.slice(9,12);
}   
}
function addon(){
    var a;
    var b;
    var c=document.querySelector("#pricepic").value;
    var d=document.querySelector("#namepic").value;
    const types = document.getElementsByName("type_pic");
    const tones = document.getElementsByName("tone_pic");
    const chatlieus = document.getElementsByName("chatlieu_pic");
    var checksame=0;
    for (const tone of tones) {
        if (tone.checked) {
            checksame=1;
            var a=tone.value;
        }
    }
    if(checksame==0){
        alert('chưa thêm đầy đủ thông tin!!');
        return false;
    }
    checksame=0;
    for (const chatlieu of chatlieus) {
        if (chatlieu.checked) {
            checksame=1;
            var b=chatlieu.value;
        }
    }
    if(checksame==0||input.value==''||inputct.value==''||document.querySelector("#namepic").value==''||document.querySelector("#pricepic").value==''){
        alert('chưa thêm đầy đủ thông tin!!');
        return false;
    }
    checksame=0;
    for (const type of types) {
        if (type.checked) {
            checksame=1;
            if(type.value=="tranh phong cảnh"){
                pc.push({picname:d,type:type.value,imgsrc:dataimg,detail:ctdataimg,price:pricetodata(c),chatlieu:b,tonemau:a})
                localStorage.setItem('phongcanh',JSON.stringify(pc));
                alert('thêm thành công');
            }
            if(type.value=="tranh hoa"){
                th.push({picname:d,type:type.value,imgsrc:dataimg,detail:ctdataimg,price:pricetodata(c),chatlieu:b,tonemau:a})
                localStorage.setItem('tranhhoa',JSON.stringify(th));
                alert('thêm thành công');
            }
            if(type.value=="tranh trừu tượng"){
                tt.push({picname:d,type:type.value,imgsrc:dataimg,detail:ctdataimg,price:pricetodata(c),chatlieu:b,tonemau:a})
                localStorage.setItem('truutuong',JSON.stringify(tt));
                alert('thêm thành công');
            }
            if(type.value=="tranh ngựa"){
                tn.push({picname:d,type:type.value,imgsrc:dataimg,detail:ctdataimg,price:pricetodata(c),chatlieu:b,tonemau:a})
                localStorage.setItem('tranhngua',JSON.stringify(tn));
                alert('thêm thành công');
            }
            if(type.value=="tranh tĩnh vật"){
                tv.push({picname:d,type:type.value,imgsrc:dataimg,detail:ctdataimg,price:pricetodata(c),chatlieu:b,tonemau:a})
                localStorage.setItem('tranhngua',JSON.stringify(tv));
                alert('thêm thành công');
            }
            
        }
    }
}



function movepage(a){
    var page=['.main','.add','.remove_wrapper','.landscape_picture_wrapper','.flower_picture_wrapper','.still_picture_wrapper','.abstract_picture_wrapper','.horse_picture_wrapper','#shopping-mall-wrapper'];    
    for(var value of page){
        if(a==value){
            document.querySelector(value).style.display="contents";
        }
        else{
            document.querySelector(value).style.display="none";
        }
    }
}


const add=document.querySelector(".addsp");
add.addEventListener('click',()=>{
    movepage('.add');
});
const main=document.querySelector(".admin");
main.addEventListener('click',()=>{
    movepage('.main');
});

const remove=document.querySelector(".removesp");
remove.addEventListener('click',()=>{
    movepage('.remove_wrapper');
});

const phongcanh=document.querySelector(".removepc");
phongcanh.addEventListener('click',()=>{
    movepage('.landscape_picture_wrapper');
 });

 const tranhhoa=document.querySelector(".removeth");
tranhhoa.addEventListener('click',()=>{
    movepage('.flower_picture_wrapper');
 });

 const tinhvat =document.querySelector(".removetv");
 tinhvat.addEventListener('click',()=>{
     movepage('.still_picture_wrapper');
  });

  const truutuong =document.querySelector(".removett");
  truutuong.addEventListener('click',()=>{
      movepage('.abstract_picture_wrapper');
   });

   const tranhngua =document.querySelector(".removetn");
   tranhngua.addEventListener('click',()=>{
       movepage('.horse_picture_wrapper');
    });

    const bill =document.querySelector(".bill");
    bill.addEventListener('click',()=>{
        movepage('#shopping-mall-wrapper');
     });

var pc= JSON.parse(localStorage.getItem('phongcanh'));
var pcperpage=8;
const pctotalpage=Math.ceil(pc.length/pcperpage);
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
    html+='<div class="landscape_box" onclick="submitremove(\''+pc[key].type+'\',\''+pc[key].imgsrc+'\')">'
    html+='<div class="landscape_box_img">'
    html+='<img src="'+pc[key].imgsrc+ '"alt="'+pc[key].picname+'"style="width=264.52">'
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
    window.scrollTo(0, 0);
    landscapepaging();
}

//tranhhoa
var th= JSON.parse(localStorage.getItem('tranhhoa'));
var thperpage=8;
const thtotalpage=Math.ceil(th.length/thperpage);
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
    html+='<div class="flower_box" onclick="submitremove(\''+th[key].type+'\',\''+th[key].imgsrc+'\')">'
    html+='<div class="flower_box_img">'
    html+='<img src="'+th[key].imgsrc+ '"alt="'+th[key].picname+'"style="width=264.52">'
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
    window.scrollTo(0, 0);
    flowerpaging();
}

//tinhvat
var tv= JSON.parse(localStorage.getItem('tinhvat'));
var tvperpage=8;
const tvtotalpage=Math.ceil(tv.length/tvperpage);
var tvcurrentpage=1;
var tvstart=0;
var tvend=tvperpage;
tvpagebutton="";
for(i=0;i<tvtotalpage;i++){
    tvpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=tvpaging('+(i+1)+')>'
    tvpagebutton+=i+1;
    tvpagebutton+='</div>'
}     
document.querySelector('.still_picture_paging').innerHTML=tvpagebutton;
function stillpaging(){
    html="";
for(var key in tv){
    if(key>=tvstart && key<tvend){
    html+='<div class="still_box" onclick="submitremove(\''+tv[key].type+'\',\''+tv[key].imgsrc+'\')">'
    html+='<div class="still_box_img">'
    html+='<img src="'+tv[key].imgsrc+ '"alt="'+tv[key].picname+'"style="width=264.52">'
    html+='</div>'
    html+='<div class="still_box_content">'
    html+=' <h2 class="name">'+tv[key].picname+'</h2>'
    html+='<p class="content">'+tv[key].type+'</p>'
    html+='<p class="price">'+tv[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.still_picture_content').innerHTML=html;
}
stillpaging();
function tvpaging(i){
    tvcurrentpage=parseInt(i);
    tvstart=(tvcurrentpage-1)*tvperpage;
    tvend=tvcurrentpage*tvperpage;
    window.scrollTo(0, 0);
    stillpaging();
}

//truu tuong
var tt= JSON.parse(localStorage.getItem('truutuong'));
var ttperpage=8;
const tttotalpage=Math.ceil(tt.length/ttperpage);
var ttcurrentpage=1;
var ttstart=0;
var ttend=ttperpage;
ttpagebutton="";
for(i=0;i<tttotalpage;i++){
    ttpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=ttpaging('+(i+1)+')>'
    ttpagebutton+=i+1;
    ttpagebutton+='</div>'
}     
document.querySelector('.abstract_picture_paging').innerHTML=ttpagebutton;
function abstractpaging(){
    html="";
for(var key in tt){
    if(key>=ttstart && key<ttend){
    html+='<div class="abstract_box" onclick="submitremove(\''+tt[key].type+'\',\''+tt[key].imgsrc+'\')">'
    html+='<div class="abstract_box_img">'
    html+='<img src="'+tt[key].imgsrc+ '"alt="'+tt[key].picname+'"style="width=264.52">'
    html+='</div>'
    html+='<div class="abstract_box_content">'
    html+=' <h2 class="name">'+tt[key].picname+'</h2>'
    html+='<p class="content">'+tt[key].type+'</p>'
    html+='<p class="price">'+tt[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.abstract_picture_content').innerHTML=html;
}
abstractpaging();
function ttpaging(i){
    ttcurrentpage=parseInt(i);
    ttstart=(ttcurrentpage-1)*ttperpage;
    ttend=ttcurrentpage*ttperpage;
    window.scrollTo(0, 0);
    abstractpaging();
}

//tranhngua
var tn= JSON.parse(localStorage.getItem('tranhngua'));
var tnperpage=8;
const tntotalpage=Math.ceil(tn.length/tnperpage);
var tncurrentpage=1;
var tnstart=0;
var tnend=tnperpage;
tnpagebutton="";
for(i=0;i<tntotalpage;i++){
    tnpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=tnpaging('+(i+1)+')>'
    tnpagebutton+=i+1;
    tnpagebutton+='</div>'
}     
document.querySelector('.horse_picture_paging').innerHTML=tnpagebutton;
function horsepaging(){
    html="";
for(var key in tn){
    if(key>=tnstart && key<tnend){
    html+='<div class="horse_box" onclick="submitremove(\''+tn[key].type+'\',\''+tn[key].imgsrc+'\')">'
    html+='<div class="horse_box_img">'
    html+='<img src="'+tn[key].imgsrc+ '"alt="'+tn[key].picname+'"style="width=264.52">'
    html+='</div>'
    html+='<div class="horse_box_content">'
    html+=' <h2 class="name">'+tn[key].picname+'</h2>'
    html+='<p class="content">'+tn[key].type+'</p>'
    html+='<p class="price">'+tn[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.horse_picture_content').innerHTML=html;
}
horsepaging();
function tnpaging(i){
    tncurrentpage=parseInt(i);
    tnstart=(tncurrentpage-1)*tnperpage;
    tnend=tncurrentpage*tnperpage;
    window.scrollTo(0, 0);
    horsepaging();
}


function submitremove(a,b){
    const result = confirm("Bạn có muốn xóa dữ liệu không?");
    if (result) {
         if (a=='tranh phong cảnh'){
            for(var key in pc){
                if(b==pc[key].imgsrc){
                    pc.splice(key,1);
                    localStorage.setItem('phongcanh',JSON.stringify(pc));
                    alert('đã xóa');
                }
            }
         }
         if (a=='tranh hoa'){
            for(var key in th){
                if(b==th[key].imgsrc){
                    th.splice(key,1);
                    localStorage.setItem('tranhhoa',JSON.stringify(th));
                    alert('đã xóa');
                }
            }
         }
         if (a=='tranh trừu tượng'){
            for(var key in tt){
                if(b==tt[key].imgsrc){
                    tt.splice(key,1);
                    localStorage.setItem('phongcanh',JSON.stringify(tt));
                    alert('đã xóa');
                }
            }
         }
         if (a=='tranh ngựa'){
            for(var key in tn){
                if(b==tn[key].imgsrc){
                    tn.splice(key,1);
                    localStorage.setItem('tranhngua',JSON.stringify(tn));
                    alert('đã xóa');
                }
            }
         }
         if (a=='tranh tĩnh vật'){
            for(var key in tv){
                if(b==tv[key].imgsrc){
                    tv.splice(key,1);
                    localStorage.setItem('tinhvat',JSON.stringify(tv));
                    alert('đã xóa');
                }
            }
         }

      } else {
        // Không xóa dữ liệu
      }
}
var account= JSON.parse(localStorage.getItem('account'));
for(var cus of account){
    console.log(cus.shopping)
}

for(var cus of account){
        var sphtml=""
        for(var value of cus.shopping){
            if(value.status=="chưa xử lí"){
                sphtml+='<div class="customer" onclick="getinfor(\''+cus.username+'\')">'+cus.username+'</div>'
                sphtml+='<div class="shopping-mall-content">'
                sphtml+='<div class="shoppingname" >'
                sphtml+='<img src="'+value.src+'" alt="pdt"style="height:264.52px;width: 264.52px;margin:10px;border-radius:20px">'
                sphtml+='<h2>'+value.namepic+'</h2>'
                sphtml+='</div>'
                sphtml+='<div class="shoppingprice" >'
                sphtml+='<h2 style="margin-top: 25%;">giá</h2>'
                sphtml+='<h2>'+value.pricepic+'đ</h2>'
                sphtml+='</div>'
                sphtml+='<div class="shoppingstatus" onclick="daxuli(\''+cus.username+'\',\''+value.src+'\')" >'
                sphtml+='<div>'
                sphtml+='<h2 style="margin-top: 25%;">tình trạng</h2>'
                sphtml+='<h2> '+value.status+'</h2>'
                sphtml+='<h2> '+value.date+'</h2>'
                sphtml+='</div>'
                sphtml+='</div>'
                sphtml+='</div>'
            }
        }
        document.querySelector('.unstatus').innerHTML=sphtml;
        var sphtml=""
        for(var value of cus.shopping){
            if(value.status=="đã xử lí"){
                sphtml+='<div class="customer" onclick="getinfor(\''+cus.username+'\')">'+cus.username+'</div>'
                sphtml+='<div class="shopping-mall-content">'
                sphtml+='<div class="shoppingname"  >'
                sphtml+='<img src="'+value.src+'" alt="pdt"style="height:264.52px;width: 264.52px;margin:10px;border-radius:20px">'
                sphtml+='<h2>'+value.namepic+'</h2>'
                sphtml+='</div>'
                sphtml+='<div class="shoppingprice" >'
                sphtml+='<h2 style="margin-top: 25%;">giá</h2>'
                sphtml+='<h2>'+value.pricepic+'đ</h2>'
                sphtml+='</div>'
                sphtml+='<div class="shoppingstatus" onclick="dagiao(\''+cus.username+'\',\''+value.src+'\')" >'
                sphtml+='<div>'
                sphtml+='<h2 style="margin-top: 25%;">tình trạng</h2>'
                sphtml+='<h2> '+value.status+'</h2>'
                sphtml+='<h2> '+value.date+'</h2>'
                sphtml+='</div>'
                sphtml+='</div>'
                sphtml+='</div>'
            }
        }
        document.querySelector('.statused').innerHTML=sphtml;
        var sphtml=""
        for(var value of cus.shopping){
            if(value.status=="đã giao"){
                sphtml+='<div class="customer" onclick="getinfor(\''+cus.username+'\')">'+cus.username+'</div>'
                sphtml+='<div class="shopping-mall-content">'
                sphtml+='<div class="shoppingname" >'
                sphtml+='<img src="'+value.src+'" alt="pdt"style="height:264.52px;width: 264.52px;margin:10px;border-radius:20px">'
                sphtml+='<h2>'+value.namepic+'</h2>'
                sphtml+='</div>'
                sphtml+='<div class="shoppingprice">'
                sphtml+='<h2 style="margin-top: 25%;">giá</h2>'
                sphtml+='<h2>'+value.pricepic+'đ</h2>'
                sphtml+='</div>'
                sphtml+='<div class="shoppingstatus">'
                sphtml+='<div>'
                sphtml+='<h2 style="margin-top: 25%;">tình trạng</h2>'
                sphtml+='<h2> '+value.status+'</h2>'
                sphtml+='<h2> '+value.date+'</h2>'
                sphtml+='</div>'
                sphtml+='</div>'
                sphtml+='</div>'
            }
        }
        document.querySelector('.delivered').innerHTML=sphtml;
    }
        
function daxuli(a,b){
    var result=confirm('bạn có muốn đánh dấu đơn hàng đã xử lí?');
    if(result){
    for(var cus in account){
        if(account[cus].username==a){
            var date=new Date();
            const formattedDate = date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              });
              for(var value in account[cus].shopping){
                if(b== account[cus].shopping[value].src){
                    account[cus].shopping[value].date=formattedDate;
                    account[cus].shopping[value].status='đã xử lí';
                    localStorage.setItem('account',JSON.stringify(account));
                }
              }
        }
    }
}
}

function dagiao(a,b){
    var result=confirm('bạn có muốn đánh dấu đơn hàng đã giao?');
    if(result){
    for(var cus in account){
        if(account[cus].username==a){
            var date=new Date();
            const formattedDate = date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              });
              for(var value in account[cus].shopping){
                if(b== account[cus].shopping[value].src){
                    account[cus].shopping[value].date=formattedDate;
                    account[cus].shopping[value].status='đã giao';
                    localStorage.setItem('account',JSON.stringify(account));
                }
              }
        }
    }
}
}

function getinfor(a){
    for(value of account){
        if(value.username==a){
            document.querySelector('.form_information').style.display="flex"
            document.querySelector('.name_infor').innerHTML='<p class="name_infor">'+'TÊN   <p style="color:#fff">'+value.username+'</p></p>';
        document.querySelector('.email').innerHTML='<p class="email">'+'EMAIL  <p style="color:#fff"> '+value.email+'</p></p>';
        document.querySelector('.number_phone').innerHTML='<p class="number_phone">'+'SĐT  <p style="color:#fff">    '+value.phonenumber+'</p></p>';
        document.querySelector('.dia_chi').innerHTML='<p class="dia_chi">'+'ĐỊA CHỈ  <p style="color:#fff"> '+value.address+'</p></p>';
        }
    }
}
const iconClose =document.querySelector('.icon-close-infor');
iconClose.addEventListener('click',()=>{
    document.querySelector('.form_information').style.display="none"

});