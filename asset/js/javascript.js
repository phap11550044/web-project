var account= JSON.parse(localStorage.getItem('account'));
//localStorage.setItem('account',JSON.stringify([]));
//localStorage.setItem('phongcanh',JSON.stringify([{picname:'hoài niệm',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/hoainiem.png',price:'5.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'kí ức hà nội',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/kiuchanoi.png',price:'13.000.000',chatlieu:'acrylic',tonemau:'nóng'},{picname:'hội an ngày nắng',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/hoianngaynang.png',price:'15.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'phố nắng',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/phonang.png',price:'7.000.000',chatlieu:'acrylic',tonemau:'nóng'},{picname:'lối về',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/loive.png',price:'10.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'nắng hạ',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/nangha.png',price:'16.000.000',chatlieu:'acrylic',tonemau:'nóng'},{picname:'ngày nắng đẹp',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/ngaynangdep.png',price:'15.000.000',chatlieu:'acrylic',tonemau:'nóng'},{picname:'hoàng hôn trên phố',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/hoanghontrenpho.png',price:'17.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'vùng ngoại ô',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/vungngoaio.png',price:'13.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'phố mới',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/phomoi.png',price:'26.000.000',chatlieu:'acrylic',tonemau:'nóng'},{picname:'tiệm cafe cũ',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/tiemcafecu.png',price:'14.000.000',chatlieu:'acrylic',tonemau:'nóng'},{picname:'phố đường tàu',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/phoduongtau.png',price:'15.000.000',chatlieu:'acrylic',tonemau:'lạnh'}]));
//localStorage.setItem('tranhhoa',JSON.stringify([{picname:'hoa sen',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/hoasen.png',price:'7.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'an',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/an.png',price:'5.000.000',chatlieu:'acrylic',tonemau:'nóng'},{picname:'sen tháng 6',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/sen tháng 6.png',price:'5.500.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'hạ vắng',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/havang.png',price:'6.500.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'sắc hồng',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/sắc hồng.png',price:'180.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'hoa hồng và cafe',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/hoahongvacafe.png',price:'3.500.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'cành hồng',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/canhhong.png',chatlieu:'acrylic',tonemau:'lạnh',price:'3.000.000'},{picname:'hoa xuân',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/hoaxuan.png',price:'5.500.000',chatlieu:'acrylic',tonemau:'nóng'},{picname:'peony',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/peony.png',price:'3.500.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'ngày rực rỡ',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/ngayrucro.png',price:'3.000.000',chatlieu:'acrylic',tonemau:'nóng'},{picname:'mẫu đơn',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/maudon.png',price:'4.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'mẫu đơn trắng',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/maudontrang.png',price:'3.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'}]));
//localStorage.setItem('tinhvat',JSON.stringify([{picname:'hương thạch thảo',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/huongthachthao.png',price:'12.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'tĩnh vật tháng tư',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/tinhvatthangtu.png',price:'5.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'hoa rừng',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/hoarung.png',price:'6.000.000',chatlieu:'acrylic',tonemau:'lạnh'},{picname:'mộc lan',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/moclan.png',price:'5.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'tĩnh vật',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/tinhvathoacuc.png',price:'3.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'bên khung cửa',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/benkhungcua.png',price:'3.000.000',chatlieu:'acrylic',tonemau:'lạnh'},{picname:'bình hoa ly',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/binhhoaly.png',price:'3.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'bông nắng',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/bongnang.png',price:'3.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'tĩnh vật hoa và sách',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/tinhvathoavasach.png',price:'5.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'góc thân quen',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/gocthanquen.png',price:'4.500.000',chatlieu:'acrylic',tonemau:'lạnh'},{picname:'tĩnh vật quả lê',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/tinhvatquale.png',price:'1.200.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'những trái hồng',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/nhungtraihong.png',price:'6.000.000',chatlieu:'sơn dầu',tonemau:'nóng'}]));
//localStorage.setItem('truutuong',JSON.stringify([{picname:'thăng hoa',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/thanghoa.png',price:'30.000.000',chatlieu:'acrylic',tonemau:'lạnh'},{picname:'hừng đông',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/hungdong.png',price:'15.000.000',chatlieu:'acrylic',tonemau:'lạnh'},{picname:'thu qua đông tới',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/thuquadongtoi.png',price:'15.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'bông nắng',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/bongnang.png',price:'13.000.000',chatlieu:'acrylic',tonemau:'lạnh'},{picname:'sắc xuân số 12',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/sacxuanso12.png',price:'17.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'sắc xuân số 11',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/sacxuanso11.png',price:'14.000.000',chatlieu:'acylic',tonemau:'nóng'},{picname:'sắc xuân số 7',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/sacxuanso7.png',price:'12.000.000',chatlieu:'acrylic',tonemau:'lạnh'},{picname:'bù nhìn',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/bunhin.png',price:'15.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'tiếng sáo gọi mùa',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/tiengsaogoimua.png',price:'9.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'rừng khóc',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/rungkhoc.png',price:'9.000.000',chatlieu:'crylic',tonemau:'lạnh'},{picname:'lỡ xuân thì',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/loxuanthi.png',price:'45.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'phố lên đèn',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/pholenden.png',price:'620.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'}]));
//localStorage.setItem('tranhngua',JSON.stringify([{picname:'rong chơi',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/rongchoi.png',price:'12.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'độc mã thảo nguyên',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/docmathaonguyen.png',price:'9.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'kề vai',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/kevai.png',price:'10.000.000',chatlieu:'sơn dầu',tonemau:'lạnh'},{picname:'ngũ mã tranh châu',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/ngumatranhchau.png',price:'10.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'gia đình ngựa',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/giadinhngua.png',price:'9.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'hắc mã',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/hacma.png',price:'7.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'bạch mã',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/bachma.png',price:'18.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'phiêu du',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/phieudu.png',price:'8.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'kiêu hãnh',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/kieuhanh.png',price:'6.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'chuyện thảo nguyên',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/chuyenthaonguyen.png',price:'7.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'dấu chân phía trước',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/dauchanphiatruoc.png',price:'10.000.000',chatlieu:'sơn dầu',tonemau:'nóng'},{picname:'thiên mã',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/thienma.png',price:'9.000.000',chatlieu:'sơn dầu',tonemau:'nóng'}]));

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
        
    account.push({username:a,email:b,password:c,address:d,phonenumber:e,shopping:[]});
    localStorage.setItem('account',JSON.stringify(account));
    alert('chúc mừng bạn đã đăng kí thành công')
        }
         var loginname;
        function Login(){
            var checksame=0;
            var a = document.querySelector('#LoginEmail').value;
            var b = document.querySelector('#LoginPass').value;
            if(a=='admin' && b=='admin'){
                checksame=1;
                window.location.href="admin.html?";
                    alert("chào admin");           
            }
            for(var key in account){
                if(a==account[key].email && b==account[key].password){
                    loginname=account[key].username;
                    checksame=1;
                    window.location.href="User.html?"+a;
                    alert("ĐĂNG NHẬP THÀNH CÔNG");           
                    break;
                }
            }
            if(checksame==0)
            alert("bạn đã đăng nhập không thành công, hãy kiểm tra lại tài khoản hay mật khẩu");
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
//canhbaodangnhap
function canhbaodangnhap(){
    document.querySelector('.warning').style.display="flex"
}
function removewarning(){
    document.querySelector('.warning').style.display="none"
}
//filter
function Stringtoprice(a){
    var tach=a.split('.');
    return Number.parseFloat(tach[0])*1000000+Number.parseFloat(tach[1])*1000+Number.parseFloat(tach[0])
}
function onfilter(){
    document.querySelector('.filter').style.display='flex';
}
function removefilter(){
    document.querySelector('.filter').style.display='none';
}
function reset(){
    document.querySelector("#typechoice form").reset();
    document.querySelector("#tonechoice form").reset();
    document.querySelector("#chatlieuchoice form").reset();
}
function filterspaging(){
    html="";
for(var key in filpic){
    if(key>=ftstart && key<ftend){
    html+='<div class="filters_box" onclick="canhbaodangnhap()">'
    html+='<div class="filters_box_img">'
    html+='<img src="'+filpic[key].imgsrc+ '"alt="'+filpic[key].picname+'"style="width=264.52">'
    html+='</div>'
    html+='<div class="filters_box_content">'
    html+=' <h2 class="name">'+filpic[key].picname+'</h2>'
    html+='<p class="content">'+filpic[key].type+'</p>'
    html+='<p class="price">'+filpic[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.filters_picture_content').innerHTML=html;
}
var filpic=[];
var ftperpage=8;
var fttotalpage=Math.ceil(filpic.length/ftperpage);
var ftcurrentpage=1;
var ftstart=0;
var ftend=ftperpage;
function filter(){
    filpic=[];
    var checksame=0;
    const types = document.getElementsByName("type_pic");
    const tones = document.getElementsByName("tone_pic");
    const chatlieus = document.getElementsByName("chatlieu_pic");
    filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
 
    if(document.querySelector('#downprice').value!=''){
        checksame=1;
            for(var i=0;i<filpic.length;i++){
                if(Stringtoprice(filpic[i].price)<Number.parseFloat(document.querySelector('#downprice').value)){
                    filpic.splice(i,1);
                    i=i-1;
                }
            }
    }
    if(document.querySelector('#upprice').value!=''){
        checksame=1;
            for(var i=0;i<filpic.length;i++){
                if(Stringtoprice(filpic[i].price)>Number.parseFloat(document.querySelector('#upprice').value)){
                    filpic.splice(i,1);
                    i=i-1;
                }
            }
    }
    for (const type of types) {
        if (type.checked) {
            checksame=1;
            for(var i=0;i<filpic.length;i++){
                if(filpic[i].type!=type.value){
                    filpic.splice(i,1);
                    i=i-1;
                }
            }
        }
      }
      for (const tone of tones) {
        if (tone.checked) {
            checksame=1;
            for(var i=0;i<filpic.length;i++){
                if(filpic[i].tonemau!=tone.value){
                    filpic.splice(i,1);
                    i=i-1;
                }
            }
        }
      }

      for (const chatlieu of chatlieus) {
        if (chatlieu.checked) {
            checksame=1;
            for(var i=0;i<filpic.length;i++){
                if(filpic[i].chatlieu!=chatlieu.value){
                    filpic.splice(i,1);
                    i=i-1;
                }
            }
        }
      }
      if(document.querySelector('#searchbar').value!=''){
        checksame=1;
        for(var i=0;i<filpic.length;i++){
            if(filpic[i].picname!=document.querySelector('#searchbar').value){
                filpic.splice(i,1);
                i=i-1;
            }
        }
      }
      if(filpic.length==0||checksame==0){filpic.splice(0,filpic.length);}
     ftperpage=8;
     fttotalpage=Math.ceil(filpic.length/ftperpage);
     ftcurrentpage=1;
     ftstart=0;
    ftend=ftperpage;
    filterspaging();
    ftpagebutton="";
    for(i=0;i<fttotalpage;i++){
        ftpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=ftpaging('+(i+1)+')>'
        ftpagebutton+=i+1;
        ftpagebutton+='</div>'
    }     
    document.querySelector('.filters_picture_paging').innerHTML=ftpagebutton;
}

function ftpaging(i){
    ftcurrentpage=parseInt(i);
    ftstart=(ftcurrentpage-1)*ftperpage;
    ftend=ftcurrentpage*ftperpage;
    window.scrollTo(0, 0);
    filterspaging();
}
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
    var page = ['.main_home','.recruitment','.contact','.introduce','.cooperate-main','.landscape_picture_wrapper','.flower_picture_wrapper','.still_picture_wrapper','.abstract_picture_wrapper','.horse_picture_wrapper','.filters_picture_wrapper'];
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

 const tinhvat =document.querySelector(".tinhvat");
 tinhvat.addEventListener('click',()=>{
     movepage('.still_picture_wrapper');
  });

  const truutuong =document.querySelector(".truutuong");
  truutuong.addEventListener('click',()=>{
      movepage('.abstract_picture_wrapper');
   });

   const tranhngua =document.querySelector(".tranhngua");
   tranhngua.addEventListener('click',()=>{
       movepage('.horse_picture_wrapper');
    });

    const timkiem =document.querySelector(".fa-search");
    timkiem.addEventListener('click',()=>{
        movepage('.filters_picture_wrapper');
     });



// danh muc san pham
//phongcanh
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
    html+='<div class="landscape_box" onclick="canhbaodangnhap()">'
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
    html+='<div class="flower_box" onclick="canhbaodangnhap()">'
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
    html+='<div class="still_box" onclick="canhbaodangnhap()">'
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
    html+='<div class="abstract_box" onclick="canhbaodangnhap()">'
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
    html+='<div class="horse_box" onclick="canhbaodangnhap()">'
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

