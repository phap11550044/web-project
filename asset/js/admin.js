var pc= JSON.parse(localStorage.getItem('phongcanh'));
var th= JSON.parse(localStorage.getItem('tranhhoa'));
var tv= JSON.parse(localStorage.getItem('tinhvat'));
var tt= JSON.parse(localStorage.getItem('truutuong'));
var tn= JSON.parse(localStorage.getItem('tranhngua'));
var dataimgfix
var ctdataimgfix
function logout(){
    window.location.href="index.html";
}
var img= document.getElementById('img');
var input= document.getElementById('inputimg');
var ctdataimg;
var dataimg
input.onchange=(e)=>{
    const reader = new FileReader;
    reader.addEventListener("load",() =>{
        dataimg=reader.result;
    });
    reader.readAsDataURL(input.files[0]);
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
    reader.readAsDataURL(inputct.files[0]);
    if(inputct.files[0])
        imgct.src=URL.createObjectURL(inputct.files[0]);
};
function pricetodata(a){
    if(a.length==1){
        return a.slice(0,1);
    }
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
//them san pham
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
                for(value of pc){
                    if(d.toUpperCase()== value.picname.toUpperCase()){
                        alert("tên sản phẩm đã tồn tại");
                        return false;
                    }
                }
                pc.push({picname:d,type:type.value,imgsrc:dataimg,detail:ctdataimg,price:pricetodata(c),chatlieu:b,tonemau:a})
                localStorage.setItem('phongcanh',JSON.stringify(pc));
                location.reload();
                window.scrollTo(0, 0);
                alert('thêm thành công');
            }
            if(type.value=="tranh hoa"){
                for(value of th){
                    if(d.toUpperCase()== value.picname.toUpperCase()){
                        alert("tên sản phẩm đã tồn tại");
                        return false;
                    }
                }
                th.push({picname:d,type:type.value,imgsrc:dataimg,detail:ctdataimg,price:pricetodata(c),chatlieu:b,tonemau:a})
                localStorage.setItem('tranhhoa',JSON.stringify(th));
                location.reload();
                window.scrollTo(0, 0);
                alert('thêm thành công');
            }
            if(type.value=="tranh trừu tượng"){
                for(value of tt){
                    if(d.toUpperCase()== value.picname.toUpperCase()){
                        alert("tên sản phẩm đã tồn tại");
                        return false;
                    }
                }
                tt.push({picname:d,type:type.value,imgsrc:dataimg,detail:ctdataimg,price:pricetodata(c),chatlieu:b,tonemau:a})
                localStorage.setItem('truutuong',JSON.stringify(tt));
                location.reload();
                window.scrollTo(0, 0);
                alert('thêm thành công');
            }
            if(type.value=="tranh ngựa"){
                for(value of tn){
                    if(d.toUpperCase()== value.picname.toUpperCase()){
                        alert("tên sản phẩm đã tồn tại");
                        return false;
                    }
                }
                tn.push({picname:d,type:type.value,imgsrc:dataimg,detail:ctdataimg,price:pricetodata(c),chatlieu:b,tonemau:a})
                localStorage.setItem('tranhngua',JSON.stringify(tn));
                location.reload();
                window.scrollTo(0, 0);
                alert('thêm thành công');
            }
            if(type.value=="tranh tĩnh vật"){
                for(value of tv){
                    if(d.toUpperCase()== value.picname.toUpperCase()){
                        alert("tên sản phẩm đã tồn tại");
                        return false;
                    }
                }
                tv.push({picname:d,type:type.value,imgsrc:dataimg,detail:ctdataimg,price:pricetodata(c),chatlieu:b,tonemau:a})
                localStorage.setItem('tranhngua',JSON.stringify(tv));
                location.reload();
                window.scrollTo(0, 0);
                alert('thêm thành công');
            }
            
        }
    }
}



function movepage(a){
    var page=['.main','.add','.remove_wrapper','.timecontrol_bill','.landscape_picture_wrapper','.flower_picture_wrapper','.still_picture_wrapper','.abstract_picture_wrapper','.horse_picture_wrapper','#shopping-mall-wrapper','.repair_wrapper','.replandscape_picture_wrapper','.repflower_picture_wrapper','.repstill_picture_wrapper','.repabstract_picture_wrapper','.rephorse_picture_wrapper','.sta_wrapper','.staall_wrapper','.stadetail_wrapper'];    
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
    html+='<img src="'+pc[key].imgsrc+ '"alt="'+pc[key].picname+'"style="width:264.52px;height:281.2px">'
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
    html+='<img src="'+th[key].imgsrc+ '"alt="'+th[key].picname+'"style="width:264.52px;height:281.2px">'
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
    html+='<img src="'+tv[key].imgsrc+ '"alt="'+tv[key].picname+'"style="width:264.52px;height:281.2px">'
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
    html+='<img src="'+tt[key].imgsrc+ '"alt="'+tt[key].picname+'"style="width:264.52px;height:281.2px;">'
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
    html+='<img src="'+tn[key].imgsrc+ '"alt="'+tn[key].picname+'"style="width:264.52px;height:281.2px">'
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
                    location.reload();
                    window.scrollTo(0, 0);
                    alert('đã xóa');
                }
            }
         }
         if (a=='tranh hoa'){
            for(var key in th){
                if(b==th[key].imgsrc){
                    th.splice(key,1);
                    localStorage.setItem('tranhhoa',JSON.stringify(th));
                    location.reload();
                    window.scrollTo(0, 0);
                    alert('đã xóa');
                }
            }
         }
         if (a=='tranh trừu tượng'){
            for(var key in tt){
                if(b==tt[key].imgsrc){
                    tt.splice(key,1);
                    localStorage.setItem('truutuong',JSON.stringify(tt));
                    location.reload();
                    window.scrollTo(0, 0);
                    alert('đã xóa');
                }
            }
         }
         if (a=='tranh ngựa'){
            for(var key in tn){
                if(b==tn[key].imgsrc){
                    tn.splice(key,1);
                    localStorage.setItem('tranhngua',JSON.stringify(tn));
                    location.reload();
                    window.scrollTo(0, 0);
                    alert('đã xóa');
                }
            }
         }
         if (a=='tranh tĩnh vật'){
            for(var key in tv){
                if(b==tv[key].imgsrc){
                    tv.splice(key,1);
                    localStorage.setItem('tinhvat',JSON.stringify(tv));
                    location.reload();
                    window.scrollTo(0, 0);
                    alert('đã xóa');
                }
            }
         }

      } else {
        // Không xóa dữ liệu
      }
}
var account= JSON.parse(localStorage.getItem('account'));

function Stringtoprice(a){
    var tach=a.split('.');
    return Number.parseFloat(tach[0])*1000000+Number.parseFloat(tach[1])*1000+Number.parseFloat(tach[2])
}
var count=1;
sphtml="";
for(var infor of account){
for(var key in infor.bill){
    if(infor.bill[key].status=="chưa xử lý"){
        sphtml+='<tr>'
        sphtml+='<th style="color:#BD2C13">STT</th>'
        sphtml+='<th style="color:#BD2C13">name</th>'
        sphtml+='<th style="color:#BD2C13">price</th>'
        sphtml+='<th style="color:#BD2C13">đơn hàng số '+count+'<br><div class="customer" onclick="daxuli(\''+infor.username+'\','+key+')"> xác nhận đã xử lí </div><br>'+infor.bill[key].date+' <br><div class="customer" onclick="getinfor(\''+infor.username+'\')">'+infor.username+'</div></th>'
        count++;
        sphtml+='</tr>'
        var s=0;
        for(key2 in infor.bill[key].list){
        sphtml+='<tr>'
        sphtml+='<th>'+(Number.parseInt(key2)+1)+'</th>'
        sphtml+='<th>'+infor.bill[key].list[key2].name+'</th>'
        sphtml+='<th>'+infor.bill[key].list[key2].price+'</th>'
        s=s+Stringtoprice(infor.bill[key].list[key2].price);
        sphtml+='</tr>'
        }     
        sphtml+='<tr>'
        sphtml+='<th></th>'
        sphtml+='<th>tổng cộng</th>'
        sphtml+='<th style="color:#BD2C13">'+pricetodata(s.toString())+'</th>'
        sphtml+='</tr>'
    }
}
}
document.querySelector('.unstatus table').innerHTML=sphtml;
var count=1;
var sphtml=""
for(var infor of account){

for(var key in infor.bill){
    if(infor.bill[key].status=="đã xử lý"){
        sphtml+='<tr>'
        sphtml+='<th style="color:#BD2C13">STT</th>'
        sphtml+='<th style="color:#BD2C13">name</th>'
        sphtml+='<th style="color:#BD2C13">price</th>'
        sphtml+='<th style="color:#BD2C13">đơn hàng số '+count+'<br><div class="customer" onclick="dagiao(\''+infor.username+'\','+key+')"> xác nhận đã giao </div><br>'+infor.bill[key].date+' <br><div class="customer" onclick="getinfor(\''+infor.username+'\')">'+infor.username+'</div></th>'
        count++;
        sphtml+='</tr>'
        var s=0;
        for(key2 in infor.bill[key].list){
        sphtml+='<tr>'
        sphtml+='<th>'+(Number.parseInt(key2)+1)+'</th>'
        sphtml+='<th>'+infor.bill[key].list[key2].name+'</th>'
        sphtml+='<th>'+infor.bill[key].list[key].price+'</th>'
        s=s+Stringtoprice(infor.bill[key].list[key2].price);
        sphtml+='</tr>'
        }     
        sphtml+='<tr>'
        sphtml+='<th></th>'
        sphtml+='<th>tổng cộng</th>'
        sphtml+='<th style="color:#BD2C13">'+pricetodata(s.toString())+'</th>'
        sphtml+='</tr>'
    }
}

}
document.querySelector('.statused table').innerHTML=sphtml;
var count=1;
var sphtml=""
for(var infor of account){
for(var key in infor.bill){
    if(infor.bill[key].status=="đã giao"){
        sphtml+='<tr>'
        sphtml+='<th style="color:#BD2C13">STT</th>'
        sphtml+='<th style="color:#BD2C13"> name</th>'
        sphtml+='<th style="color:#BD2C13">price</th>'
        sphtml+='<th style="color:#BD2C13">đơn hàng số '+count+'<br>'+infor.bill[key].date+' <br><div class="customer" onclick="getinfor(\''+infor.username+'\')">'+infor.username+'</div></th>'
        count++;
        sphtml+='</tr>'
        var s=0;
        for(key2 in infor.bill[key].list){
        sphtml+='<tr>'
        sphtml+='<th>'+(Number.parseInt(key2)+1)+'</th>'
        sphtml+='<th>'+infor.bill[key].list[key2].name+'</th>'
        sphtml+='<th>'+infor.bill[key].list[key2].price+'</th>'
        s=s+Stringtoprice(infor.bill[key].list[key2].price);
        sphtml+='</tr>'
        }     
        sphtml+='<tr>'
        sphtml+='<th></th>'
        sphtml+='<th>tổng cộng</th>'
        sphtml+='<th style="color:#BD2C13">'+pricetodata(s.toString())+'</th>'
        sphtml+='</tr>'
    }
}
    }
    document.querySelector('.delivered table').innerHTML=sphtml;
        
function daxuli(a,b){
    var result=confirm('bạn có muốn đánh dấu đơn hàng đã xử lí?');
    if(result){
        var date= new Date();
        const formattedDate = date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          });
        for(var cus in account){
            if(account[cus].username==a){
                account[cus].bill[b].status="đã xử lý";
                account[cus].bill[b].date=formattedDate;
                localStorage.setItem('account',JSON.stringify(account));
                location.reload();
                    window.scrollTo(0, 0);
                alert('đã xử lí đơn hàng')
            }
        }

}
}

function dagiao(a,b){
    var result=confirm('bạn có muốn đánh dấu đơn hàng đã giao?');
    if(result){
        var date= new Date();
        const formattedDate = date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          });
        for(var cus in account){
            if(account[cus].username==a){
                account[cus].bill[b].status="đã giao";
                account[cus].bill[b].date=formattedDate;
                localStorage.setItem('account',JSON.stringify(account));
                location.reload();
                    window.scrollTo(0, 0);
                alert('đã xử lí đơn hàng được giao')
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

function timecontrolbill(){
    from=document.getElementById('frombill');
    to=document.getElementById('tobill');
    var fromday = new Date(from.value)
    var today = new Date(to.value)
    var count=1;
sphtml="";
for(var infor of account){
for(var key in infor.bill){
    console.log(typeof(infor.bill[key].date))
    var date = new Date(infor.bill[key].date);
    console.log(date);
    if(infor.bill[key].status=="chưa xử lý"&&date>fromday&&date<today){
        console.log(1);
        sphtml+='<tr>'
        sphtml+='<th style="color:#BD2C13">STT</th>'
        sphtml+='<th style="color:#BD2C13">name</th>'
        sphtml+='<th style="color:#BD2C13">price</th>'
        sphtml+='<th style="color:#BD2C13">đơn hàng số '+count+'<br><div class="customer" onclick="daxuli(\''+infor.username+'\','+key+')"> xác nhận đã xử lí </div><br>'+infor.bill[key].date+' <br><div class="customer" onclick="getinfor(\''+infor.username+'\')">'+infor.username+'</div></th>'
        count++;
        sphtml+='</tr>'
        var s=0;
        for(key2 in infor.bill[key].list){
        sphtml+='<tr>'
        sphtml+='<th>'+(Number.parseInt(key2)+1)+'</th>'
        sphtml+='<th>'+infor.bill[key].list[key2].name+'</th>'
        sphtml+='<th>'+infor.bill[key].list[key2].price+'</th>'
        s=s+Stringtoprice(infor.bill[key].list[key2].price);
        sphtml+='</tr>'
        }     
        sphtml+='<tr>'
        sphtml+='<th></th>'
        sphtml+='<th>tổng cộng</th>'
        sphtml+='<th style="color:#BD2C13">'+pricetodata(s.toString())+'</th>'
        sphtml+='</tr>'
    }
}
}
document.querySelector('.unstatusdate table').innerHTML=sphtml;

var count=1;
sphtml="";
for(var infor of account){
for(var key in infor.bill){
    console.log(typeof(infor.bill[key].date))
    var date = new Date(infor.bill[key].date);
    console.log(date);
    if(infor.bill[key].status=="đã xử lý"&&date>fromday&&date<today){
        console.log(1);
        sphtml+='<tr>'
        sphtml+='<th style="color:#BD2C13">STT</th>'
        sphtml+='<th style="color:#BD2C13">name</th>'
        sphtml+='<th style="color:#BD2C13">price</th>'
        sphtml+='<th style="color:#BD2C13">đơn hàng số '+count+'<br><div class="customer" onclick="daxuli(\''+infor.username+'\','+key+')"> xác nhận đã xử lí </div><br>'+infor.bill[key].date+' <br><div class="customer" onclick="getinfor(\''+infor.username+'\')">'+infor.username+'</div></th>'
        count++;
        sphtml+='</tr>'
        var s=0;
        for(key2 in infor.bill[key].list){
        sphtml+='<tr>'
        sphtml+='<th>'+(Number.parseInt(key2)+1)+'</th>'
        sphtml+='<th>'+infor.bill[key].list[key2].name+'</th>'
        sphtml+='<th>'+infor.bill[key].list[key2].price+'</th>'
        s=s+Stringtoprice(infor.bill[key].list[key2].price);
        sphtml+='</tr>'
        }     
        sphtml+='<tr>'
        sphtml+='<th></th>'
        sphtml+='<th>tổng cộng</th>'
        sphtml+='<th style="color:#BD2C13">'+pricetodata(s.toString())+'</th>'
        sphtml+='</tr>'
    }
}
}
document.querySelector('.statuseddate table').innerHTML=sphtml;

var count=1;
sphtml="";
for(var infor of account){
for(var key in infor.bill){
    console.log(typeof(infor.bill[key].date))
    var date = new Date(infor.bill[key].date);
    if(infor.bill[key].status=="đã giao"&&date>fromday&&date<today){
        sphtml+='<tr>'
        sphtml+='<th style="color:#BD2C13">STT</th>'
        sphtml+='<th style="color:#BD2C13">name</th>'
        sphtml+='<th style="color:#BD2C13">price</th>'
        sphtml+='<th style="color:#BD2C13">đơn hàng số '+count+'<br>'+infor.bill[key].date+' <br><div class="customer" onclick="getinfor(\''+infor.username+'\')">'+infor.username+'</div></th>'
        count++;
        sphtml+='</tr>'
        var s=0;
        for(key2 in infor.bill[key].list){
        sphtml+='<tr>'
        sphtml+='<th>'+(Number.parseInt(key2)+1)+'</th>'
        sphtml+='<th>'+infor.bill[key].list[key2].name+'</th>'
        sphtml+='<th>'+infor.bill[key].list[key2].price+'</th>'
        s=s+Stringtoprice(infor.bill[key].list[key2].price);
        sphtml+='</tr>'
        }     
        sphtml+='<tr>'
        sphtml+='<th></th>'
        sphtml+='<th>tổng cộng</th>'
        sphtml+='<th style="color:#BD2C13">'+pricetodata(s.toString())+'</th>'
        sphtml+='</tr>'
    }
}
}
document.querySelector('.delivereddate table').innerHTML=sphtml;
}
//sua san pham

var pc= JSON.parse(localStorage.getItem('phongcanh'));
var pcperpage=8;
var pccurrentpage=1;
var pcstart=0;
var pcend=pcperpage;
pcpagebutton="";
for(i=0;i<pctotalpage;i++){
    pcpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=reppcpaging('+(i+1)+')>'
    pcpagebutton+=i+1;
    pcpagebutton+='</div>'
}     
document.querySelector('.replandscape_picture_paging').innerHTML=pcpagebutton;
function replandscapepaging(){
    html="";
for(var key in pc){
    if(key>=pcstart && key<pcend){
    html+='<div class="replandscape_box" onclick="onpicinfor(\''+pc[key].imgsrc+'\')">'
    html+='<div class="replandscape_box_img">'
    html+='<img src="'+pc[key].imgsrc+ '"alt="'+pc[key].picname+'"style="width:264.52px;height:281.2px">'
    html+='</div>'
    html+='<div class="replandscape_box_content">'
    html+=' <h2 class="name">'+pc[key].picname+'</h2>'
    html+='<p class="content">'+pc[key].type+'</p>'
    html+='<p class="price">'+pc[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.replandscape_picture_content').innerHTML=html;
}
replandscapepaging();
function reppcpaging(i){
    pccurrentpage=parseInt(i);
    pcstart=(pccurrentpage-1)*pcperpage;
    pcend=pccurrentpage*pcperpage;
    window.scrollTo(0, 0);
    replandscapepaging();
}

//tranhhoa
var th= JSON.parse(localStorage.getItem('tranhhoa'));
var thperpage=8;
var thcurrentpage=1;
var thstart=0;
var thend=thperpage;
thpagebutton="";
for(i=0;i<thtotalpage;i++){
    thpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=repthpaging('+(i+1)+')>'
    thpagebutton+=i+1;
    thpagebutton+='</div>'
}     
document.querySelector('.repflower_picture_paging').innerHTML=thpagebutton;
function repflowerpaging(){
    html="";
for(var key in th){
    if(key>=thstart && key<thend){
    html+='<div class="repflower_box" onclick="onpicinfor(\''+th[key].imgsrc+'\')">'
    html+='<div class="repflower_box_img">'
    html+='<img src="'+th[key].imgsrc+ '"alt="'+th[key].picname+'"style="width:264.52px;height:281.2px">'
    html+='</div>'
    html+='<div class="repflower_box_content">'
    html+=' <h2 class="name">'+th[key].picname+'</h2>'
    html+='<p class="content">'+th[key].type+'</p>'
    html+='<p class="price">'+th[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.repflower_picture_content').innerHTML=html;
}
repflowerpaging();
function repthpaging(i){
    thcurrentpage=parseInt(i);
    thstart=(thcurrentpage-1)*thperpage;
    thend=thcurrentpage*thperpage;
    window.scrollTo(0, 0);
    repflowerpaging();
}

//tinhvat
var tv= JSON.parse(localStorage.getItem('tinhvat'));
var tvperpage=8;
var tvcurrentpage=1;
var tvstart=0;
var tvend=tvperpage;
tvpagebutton="";
for(i=0;i<tvtotalpage;i++){
    tvpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=reptvpaging('+(i+1)+')>'
    tvpagebutton+=i+1;
    tvpagebutton+='</div>'
}     
document.querySelector('.repstill_picture_paging').innerHTML=tvpagebutton;
function repstillpaging(){
    html="";
for(var key in tv){
    if(key>=tvstart && key<tvend){
    html+='<div class="repstill_box" onclick="onpicinfor(\''+tv[key].imgsrc+'\')">'
    html+='<div class="repstill_box_img">'
    html+='<img src="'+tv[key].imgsrc+ '"alt="'+tv[key].picname+'"style="width:264.52px;height:281.2px">'
    html+='</div>'
    html+='<div class="repstill_box_content">'
    html+=' <h2 class="name">'+tv[key].picname+'</h2>'
    html+='<p class="content">'+tv[key].type+'</p>'
    html+='<p class="price">'+tv[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.repstill_picture_content').innerHTML=html;
}
repstillpaging();
function reptvpaging(i){
    tvcurrentpage=parseInt(i);
    tvstart=(tvcurrentpage-1)*tvperpage;
    tvend=tvcurrentpage*tvperpage;
    window.scrollTo(0, 0);
    repstillpaging();
}

//truu tuong
var tt= JSON.parse(localStorage.getItem('truutuong'));
var ttperpage=8;
var ttcurrentpage=1;
var ttstart=0;
var ttend=ttperpage;
ttpagebutton="";
for(i=0;i<tttotalpage;i++){
    ttpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=repttpaging('+(i+1)+')>'
    ttpagebutton+=i+1;
    ttpagebutton+='</div>'
}     
document.querySelector('.repabstract_picture_paging').innerHTML=ttpagebutton;
function repabstractpaging(){
    html="";
for(var key in tt){
    if(key>=ttstart && key<ttend){
    html+='<div class="repabstract_box" onclick="onpicinfor(\''+tt[key].imgsrc+'\')">'
    html+='<div class="repabstract_box_img">'
    html+='<img src="'+tt[key].imgsrc+ '"alt="'+tt[key].picname+'"style="width:264.52px;height:281.2px;">'
    html+='</div>'
    html+='<div class="repabstract_box_content">'
    html+=' <h2 class="name">'+tt[key].picname+'</h2>'
    html+='<p class="content">'+tt[key].type+'</p>'
    html+='<p class="price">'+tt[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.repabstract_picture_content').innerHTML=html;
}
repabstractpaging();
function repttpaging(i){
    ttcurrentpage=parseInt(i);
    ttstart=(ttcurrentpage-1)*ttperpage;
    ttend=ttcurrentpage*ttperpage;
    window.scrollTo(0, 0);
    repabstractpaging();
}

//tranhngua
var tn= JSON.parse(localStorage.getItem('tranhngua'));
var tnperpage=8;
var tncurrentpage=1;
var tnstart=0;
var tnend=tnperpage;
tnpagebutton="";
for(i=0;i<tntotalpage;i++){
    tnpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=reptnpaging('+(i+1)+')>'
    tnpagebutton+=i+1;
    tnpagebutton+='</div>'
}     
document.querySelector('.rephorse_picture_paging').innerHTML=tnpagebutton;
function rephorsepaging(){
    html="";
for(var key in tn){
    if(key>=tnstart && key<tnend){
    html+='<div class="rephorse_box" onclick="onpicinfor(\''+tn[key].imgsrc+'\')">'
    html+='<div class="rephorse_box_img">'
    html+='<img src="'+tn[key].imgsrc+ '"alt="'+tn[key].picname+'"style="width:264.52px;height:281.2px">'
    html+='</div>'
    html+='<div class="rephorse_box_content">'
    html+=' <h2 class="name">'+tn[key].picname+'</h2>'
    html+='<p class="content">'+tn[key].type+'</p>'
    html+='<p class="price">'+tn[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.rephorse_picture_content').innerHTML=html;
}
rephorsepaging();
function reptnpaging(i){
    tncurrentpage=parseInt(i);
    tnstart=(tncurrentpage-1)*tnperpage;
    tnend=tncurrentpage*tnperpage;
    window.scrollTo(0, 0);
    rephorsepaging();
}
const iconClose_info_img =document.querySelector('.icon-close-infor_img');

iconClose_info_img.addEventListener('click',()=>{
    document.querySelector('.picture_information').style.display="none"
});
function onpicinfor(a){
    var listpic=pc.concat(th);listpic=listpic.concat(tt);listpic=listpic.concat(tn);listpic=listpic.concat(tv);
    for(value of listpic ){
        if(a==value.imgsrc){
            document.querySelector('.picture_infor-box-img img').src=value.detail;
            document.querySelector('.picture_infor-box-title h1').textContent=value.picname;
            document.querySelector('#inforname h4').textContent=value.type;
            document.querySelector('#infortone h4').textContent=value.tonemau;
            document.querySelector('#inforchatlieu h4').textContent=value.chatlieu;
            document.querySelector('#inforprice h2').textContent=value.price+'đ';
            document.querySelector('.picture_information').style.display="flex";
        }
    }
}
var repairimg= document.getElementById('repairimg');
var repairinput= document.getElementById('repairinputimg');
var repairctdataimg;
var repairdataimg
repairinput.onchange=(e)=>{
    const areader = new FileReader; areader.readAsDataURL(repairinput.files[0])
    areader.addEventListener("load",() =>{
        repairdataimg=areader.result;
    });
    areader.readAsDataURL(repairinput.files[0]);
    if(repairinput.files[0])
    repairimg.src=URL.createObjectURL(repairinput.files[0]);
};

var repairimgct= document.getElementById('repairimgct');
var repairinputct= document.getElementById('repairinputimgct');

repairinputct.onchange=(e)=>{
    const reader = new FileReader; reader.readAsDataURL(repairinputct.files[0])
    reader.addEventListener("load",() =>{
        repairctdataimg=reader.result;
    });
    reader.readAsDataURL(repairinputct.files[0]);
    
    if(repairinputct.files[0])
    repairimgct.src=URL.createObjectURL(repairinputct.files[0]);
};
function repair(){
    var a;
    var b;
    var c=document.querySelector("#repairpricepic").value;
    var d=document.querySelector("#repairnamepic").value;
    const types = document.getElementsByName("repairtype_pic");
    const tones = document.getElementsByName("repairtone_pic");
    const chatlieus = document.getElementsByName("repairchatlieu_pic");
    var namepicchoose=document.querySelector('.picture_infor-box-title h1').textContent;
    var typechoose = document.querySelector('#inforname h4').textContent;
    if(typechoose=='tranh phong cảnh'){
        for(var key in pc)
        {
            if (pc[key].picname==namepicchoose){
            for (const tone of tones) {
                if (tone.checked) {
                    pc[key].tone=tone.value;
                }
            }
            for (const chatlieu of chatlieus) {
                if (chatlieu.checked) {
                    pc[key].chatlieu=chatlieu.value;
                }
            }
            for (const type of types) {
                if (type.checked) {
                    pc[key].type=type.value;
                }
            }
            if(repairinput.value!=''){
                pc[key].imgsrc=repairdataimg;
            }
            if(repairinputct.value!=''){
                pc[key].detail=repairctdataimg;
            }
            if(c!=''){
                pc[key].price=pricetodata(c);
            }
            if(d!=''){
                pc[key].picname=d;
            }
            afterrepair=pc[key];
            typee=pc[key].type;
            pc.splice(key,1);
            localStorage.setItem('phongcanh',JSON.stringify(pc));
            if(typee=='tranh phong cảnh')
            {
                pc.push(afterrepair);
                localStorage.setItem('phongcanh',JSON.stringify(pc));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh tĩnh vật')
            {
                tv.push(afterrepair);
                localStorage.setItem('tinhvat',JSON.stringify(tv));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh hoa')
            {
                th.push(afterrepair);
                localStorage.setItem('tranhhoa',JSON.stringify(th));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh trừu tượng')
            {
                tt.push(afterrepair);
                localStorage.setItem('truutuong',JSON.stringify(tt));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh ngựa')
            {
                tn.push(afterrepair);
                localStorage.setItem('tranhngua',JSON.stringify(tn));
                location.reload();
                alert('chỉnh sửa thành công');
            }
        }
        }
    }

    if(typechoose=='tranh tĩnh vật'){
        for(var key in tv)
        {
            if (tv[key].picname==namepicchoose){
            for (const tone of tones) {
                if (tone.checked) {
                    tv[key].tone=tone.value;
                }
            }
            for (const chatlieu of chatlieus) {
                if (chatlieu.checked) {
                    tv[key].chatlieu=chatlieu.value;
                }
            }
            for (const type of types) {
                if (type.checked) {
                    tv[key].type=type.value;
                }
            }
            if(repairinput.value!=''){
                tv[key].imgsrc=repairdataimg;
            }
            if(repairinputct.value!=''){
                tv[key].detail=repairctdataimg;
            }
            if(c!=''){
                tv[key].price=pricetodata(c);
            }
            if(d!=''){
                tv[key].picname=d;
            }
            afterrepair=tv[key];
            typee=tv[key].type
            tv.splice(key,1);
            localStorage.setItem('tinhvat',JSON.stringify(tv));
            if(typee=='tranh phong cảnh')
            {
                pc.push(afterrepair);
                localStorage.setItem('phongcanh',JSON.stringify(pc));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh tĩnh vật')
            {
                tv.push(afterrepair);
                localStorage.setItem('tinhvat',JSON.stringify(tv));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh hoa')
            {
                th.push(afterrepair);
                localStorage.setItem('tranhhoa',JSON.stringify(th));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh trừu tượng')
            {
                tt.push(afterrepair);
                localStorage.setItem('truutuong',JSON.stringify(tt));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh ngựa')
            {
                tn.push(afterrepair);
                localStorage.setItem('tranhngua',JSON.stringify(tn));
                location.reload();
                alert('chỉnh sửa thành công');
            }
        }
        }
    }

    if(typechoose=='tranh ngựa'){
        for(var key in tn)
        {
            if (tn[key].picname==namepicchoose){
            for (const tone of tones) {
                if (tone.checked) {
                    tn[key].tone=tone.value;
                }
            }
            for (const chatlieu of chatlieus) {
                if (chatlieu.checked) {
                    tn[key].chatlieu=chatlieu.value;
                }
            }
            for (const type of types) {
                if (type.checked) {
                    tn[key].type=type.value;
                }
            }
            if(repairinput.value!=''){
                tn[key].imgsrc=repairdataimg;
            }
            if(repairinputct.value!=''){
                tn[key].detail=repairctdataimg;
            }
            if(c!=''){
                tn[key].price=pricetodata(c);
            }
            if(d!=''){
                tn[key].picname=d;
            }
            afterrepair=tn[key];
            typee=tn[key].type
            tn.splice(key,1);
            localStorage.setItem('tranhngua',JSON.stringify(tn));
            if(typee=='tranh phong cảnh')
            {
                pc.push(afterrepair);
                localStorage.setItem('phongcanh',JSON.stringify(pc));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh tĩnh vật')
            {
                tv.push(afterrepair);
                localStorage.setItem('tinhvat',JSON.stringify(tv));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh hoa')
            {
                th.push(afterrepair);
                localStorage.setItem('tranhhoa',JSON.stringify(th));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh trừu tượng')
            {
                tt.push(afterrepair);
                localStorage.setItem('truutuong',JSON.stringify(tt));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh ngựa')
            {
                tn.push(afterrepair);
                localStorage.setItem('tranhngua',JSON.stringify(tn));
                location.reload();
                alert('chỉnh sửa thành công');
            }
        }
        }
    }

    if(typechoose=='tranh hoa'){
        for(var key in th)
        {
            if (th[key].picname==namepicchoose){
            for (const tone of tones) {
                if (tone.checked) {
                    th[key].tone=tone.value;
                }
            }
            for (const chatlieu of chatlieus) {
                if (chatlieu.checked) {
                    th[key].chatlieu=chatlieu.value;
                }
            }
            for (const type of types) {
                if (type.checked) {
                    th[key].type=type.value;
                }
            }
            if(repairinput.value!=''){
                th[key].imgsrc=repairdataimg;
            }
            if(repairinputct.value!=''){
                th[key].detail=repairctdataimg;
            }
            if(c!=''){
                th[key].price=pricetodata(c);
            }
            if(d!=''){
                th[key].picname=d;
            }
            afterrepair=th[key];
            typee=th[key].type
            th.splice(key,1);
            localStorage.setItem('tranhhoa',JSON.stringify(th));
            if(typee=='tranh phong cảnh')
            {
                pc.push(afterrepair);
                localStorage.setItem('phongcanh',JSON.stringify(pc));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh tĩnh vật')
            {
                tv.push(afterrepair);
                localStorage.setItem('tinhvat',JSON.stringify(tv));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh hoa')
            {
                th.push(afterrepair);
                localStorage.setItem('tranhhoa',JSON.stringify(th));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh trừu tượng')
            {
                tt.push(afterrepair);
                localStorage.setItem('truutuong',JSON.stringify(tt));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh ngựa')
            {
                tn.push(afterrepair);
                localStorage.setItem('tranhngua',JSON.stringify(tn));
                location.reload();
                alert('chỉnh sửa thành công');
            }
        }
        }
    }

    if(typechoose=='tranh trừu tượng'){
        for(var key in tt)
        {
            if (tt[key].picname==namepicchoose){
            for (const tone of tones) {
                if (tone.checked) {
                    tt[key].tone=tone.value;
                }
            }
            for (const chatlieu of chatlieus) {
                if (chatlieu.checked) {
                    tt[key].chatlieu=chatlieu.value;
                }
            }
            for (const type of types) {
                if (type.checked) {
                    tt[key].type=type.value;
                }
            }
            if(repairinput.value!=''){
                tt[key].imgsrc=repairdataimg;
            }
            if(repairinputct.value!=''){
                tt[key].detail=repairctdataimg;
            }
            if(c!=''){
                tt[key].price=pricetodata(c);
            }
            if(d!=''){
                tt[key].picname=d;
            }
            afterrepair=tn[key];
            typee=tn[key].type
            tt.splice(key,1);
            localStorage.setItem('truutuong',JSON.stringify(tt));
            if(typee=='tranh phong cảnh')
            {
                pc.push(afterrepair);
                localStorage.setItem('phongcanh',JSON.stringify(pc));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh tĩnh vật')
            {
                tv.push(afterrepair);
                localStorage.setItem('tinhvat',JSON.stringify(tv));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh hoa')
            {
                th.push(afterrepair);
                localStorage.setItem('tranhhoa',JSON.stringify(th));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh trừu tượng')
            {
                tt.push(afterrepair);
                localStorage.setItem('truutuong',JSON.stringify(tt));
                location.reload();
                alert('chỉnh sửa thành công');
            }
            if(typee=='tranh ngựa')
            {
                tn.push(afterrepair);
                localStorage.setItem('tranhngua',JSON.stringify(tn));
                location.reload();
                alert('chỉnh sửa thành công');
            }
        }
        }
    }
}

staalltable='';
staalltable+='<tr>'
staalltable+='<th style="color:#BD2C13">số lượng khách hàng:</th>'
staalltable+='<th style="color:#BD2C13">'+(account.length-1)+'</th>'
staalltable+='</tr>'
document.querySelector('.staall table').innerHTML=staalltable;
document.querySelector('.stadetail table').innerHTML=staalltable;
function staall(){
    fromstaall=document.getElementById('fromstaall').value;
    tostaall=document.getElementById('tostaall').value;
    var datefrom = new Date(fromstaall);
    var dateto = new Date(tostaall);
    pccount=0;
    ttcount=0;
    tncount=0;
    tvcount=0;
    thcount=0;
    s=0;
    for(cus of account){
        for(bill1 of cus.bill){
            var date=new Date(bill1.date);
            for(list of bill1.list){
                for(phongcanh1 of pc){
                    if(list.name==phongcanh1.picname&&bill1.status=='đã giao'&&date>datefrom&&date<dateto){
                    pccount++;
                    s=s+Stringtoprice(list.price)
                    }
                }
                for(truutuong1 of tt){
                    if(list.name==truutuong1.picname&&bill1.status=='đã giao'&&date>datefrom&&date<dateto){
                    ttcount++;
                    s=s+Stringtoprice(list.price)
                    }
                }
                for(tranhhoa1 of th){
                    if(list.name==tranhhoa1.picname&&bill1.status=='đã giao'&&date>datefrom&&date<dateto){
                    thcount++;
                    s=s+Stringtoprice(list.price)
                    }
                }
                for(tinhvat1 of tv){
                    if(list.name==tinhvat1.picname&&bill1.status=='đã giao'&&date>datefrom&&date<dateto){
                    tvcount++;
                    s=s+Stringtoprice(list.price)
                    }
                }
                for(tranhngua1 of tn){
                    if(list.name==tranhngua1.picname&&bill1.status=='đã giao'&&date>datefrom&&date<dateto){
                    tncount++;
                    s=s+Stringtoprice(list.price)
                    }
                }
            }

        }
    }
    
    staalltable='';
    staalltable+='<tr>'
    staalltable+='<th style="color:#BD2C13">số lượng khách hàng:</th>'
    staalltable+='<th style="color:#BD2C13">'+(account.length-1)+'</th>'
    staalltable+='</tr>'
    staalltable+='<tr>'
    staalltable+='<th style="color:#BD2C13">số tranh phong cảnh bán được:</th>'
    staalltable+='<th style="color:#BD2C13">'+pccount+'</th>'
    staalltable+='</tr>'
    staalltable+='<tr>'
    staalltable+='<th style="color:#BD2C13">số tranh trừu tượng bán được:</th>'
    staalltable+='<th style="color:#BD2C13">'+ttcount+'</th>'
    staalltable+='</tr>'
    staalltable+='<tr>'
    staalltable+='<th style="color:#BD2C13">số tranh ngựa bán được:</th>'
    staalltable+='<th style="color:#BD2C13">'+tncount+'</th>'
    staalltable+='</tr>'
    staalltable+='<tr>'
    staalltable+='<th style="color:#BD2C13">số tranh hoa bán được:</th>'
    staalltable+='<th style="color:#BD2C13">'+thcount+'</th>'
    staalltable+='</tr>'
    staalltable+='<tr>'
    staalltable+='<th style="color:#BD2C13">số tranh tĩnh vật bán được:</th>'
    staalltable+='<th style="color:#BD2C13">'+tvcount+'</th>'
    staalltable+='</tr>'
    staalltable+='<tr>'
    staalltable+='<th style="color:#BD2C13">tổng doanh thu:</th>'
    staalltable+='<th style="color:#BD2C13">'+pricetodata(s.toString())+'đ</th>'
    staalltable+='</tr>'
    document.querySelector('.staall table').innerHTML=staalltable;
}

function stadetail(){
    fromstadetail=document.getElementById('fromstadetail').value;
    tostadetail=document.getElementById('tostadetail').value;
    var datefrom = new Date(fromstadetail)
    var dateto = new Date(tostadetail)
    var s=0;
    staalltable='';
    staalltable+='<tr>'
    staalltable+='<th style="color:#fff">tranh phong cảnh:</th>'
    staalltable+='</tr>'
    for(value of pc){
        count=0
        for(cus of account){
            for(bill1 of cus.bill){
                var date= new Date(bill1.date);
                for(list1 of bill1.list){
                    if(list1.name==value.picname&&bill1.status=='đã giao'&&date>datefrom&&date<dateto){
                    count++;
                    s=s+Stringtoprice(list1.price);
                    }
                }

            }
        }
        staalltable+='<tr>'
        staalltable+='<th style="color:#1A4185">'+value.picname+' </th>'
        staalltable+='<th style="color:#BD2C13">'+count+'</th>'
        staalltable+='</tr>'

    }
        staalltable+='<tr>'
        staalltable+='<th style="color:#1A4185">tổng doanh thu từ tranh phong cảnh</th>'
        staalltable+='<th style="color:#BD2C13">'+pricetodata(s.toString())+'đ</th>'
        staalltable+='</tr>'
    var s=0;
    staalltable+='<tr>'
    staalltable+='<th style="color:#fff">tranh tĩnh vật:</th>'
    staalltable+='</tr>'
    for(value of tv){
        count=0
        for(cus of account){
            for(bill1 of cus.bill){
                var date= new Date(bill1.date);
                for(list1 of bill1.list){
                    if(list1.name==value.picname&&bill1.status=='đã giao'&&date>datefrom&&date<dateto){
                    count++;
                    s=s+Stringtoprice(list1.price);
                    }
                }

            }
        }
        staalltable+='<tr>'
        staalltable+='<th style="color:#1A4185"> '+value.picname+'</th>'
        staalltable+='<th style="color:#BD2C13">'+count+'</th>'
        staalltable+='</tr>'

    }
        staalltable+='<tr>'
        staalltable+='<th style="color:#1A4185">tổng doanh thu từ tĩnh vật</th>'
        staalltable+='<th style="color:#BD2C13">'+pricetodata(s.toString())+'đ</th>'
        staalltable+='</tr>'
//
        var s=0;
    staalltable+='<tr>'
    staalltable+='<th style="color:#fff">tranh trừu tượng:</th>'
    staalltable+='</tr>'
    for(value of tt){
        count=0
        for(cus of account){
            for(bill1 of cus.bill){
                var date= new Date(bill1.date);
                for(list1 of bill1.list){
                    if(list1.name==value.picname&&bill1.status=='đã giao'&&date>datefrom&&date<dateto){
                    count++;
                    s=s+Stringtoprice(list1.price);
                    }
                }

            }
        }
        staalltable+='<tr>'
        staalltable+='<th style="color:#1A4185">'+value.picname+'</th>'
        staalltable+='<th style="color:#BD2C13">'+count+'</th>'
        staalltable+='</tr>'

    }
        staalltable+='<tr>'
        staalltable+='<th style="color:#1A4185">tổng doanh thu từ tranh trừu tượng</th>'
        staalltable+='<th style="color:#BD2C13">'+pricetodata(s.toString())+'đ</th>'
        staalltable+='</tr>'
    
        var s=0;
    staalltable+='<tr>'
    staalltable+='<th style="color:#fff">tranh ngựa:</th>'
    staalltable+='</tr>'
    for(value of tn){
        count=0
        for(cus of account){
            for(bill1 of cus.bill){
                var date= new Date(bill1.date);
                for(list1 of bill1.list){
                    if(list1.name==value.picname&&bill1.status=='đã giao'&&date>datefrom&&date<dateto){
                    count++;
                    s=s+Stringtoprice(list1.price);
                    }
                }

            }
        }
        staalltable+='<tr>'
        staalltable+='<th style="color:#1A4185">'+value.picname+'</th>'
        staalltable+='<th style="color:#BD2C13">'+count+'</th>'
        staalltable+='</tr>'

    }
        staalltable+='<tr>'
        staalltable+='<th style="color:#1A4185">tổng doanh thu từ tranh ngựa</th>'
        staalltable+='<th style="color:#BD2C13">'+pricetodata(s.toString())+'đ</th>'
        staalltable+='</tr>'

        var s=0;
    staalltable+='<tr>'
    staalltable+='<th style="color:#fff">tranh hoa:</th>'
    staalltable+='</tr>'
    for(value of th){
        count=0
        for(cus of account){
            for(bill1 of cus.bill){
                var date= new Date(bill1.date);
                for(list1 of bill1.list){
                    if(list1.name==value.picname&&bill1.status=='đã giao'&&date>datefrom&&date<dateto){
                    count++;
                    s=s+Stringtoprice(list1.price);
                    }
                }

            }
        }
        staalltable+='<tr>'
        staalltable+='<th style="color:#1A4185"> '+value.picname+' </th>'
        staalltable+='<th style="color:#BD2C13">'+count+'</th>'
        staalltable+='</tr>'

    }
        staalltable+='<tr>'
        staalltable+='<th style="color:#1A4185">tổng doanh thu từ tranh hoa</th>'
        staalltable+='<th style="color:#BD2C13">'+pricetodata(s.toString())+'đ</th>'
        staalltable+='</tr>'
    document.querySelector('.stadetail table').innerHTML=staalltable;
}


