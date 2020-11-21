


{//ここから神経衰弱
var cardCase=[];
var countf=true;
var time;
var timerFlg=false;
var timerFlg2=false;
var titleMcflg=false;
var titleMcflg2=false;
var irohaflg=false;
var kaguyaflg=false;
var lastFlg=true;
var cardss;
var cardss2;
var soimgArr=[];
var co;
var sound;
var startT;
var cardIn=0;
var text;
var classname;
var newtime=[];
lastFlg2=true;
var images=[];
var images2=[];
var soundArr=[
  'voice/iroha1.mp3',
  'voice/iroha2.mp3',
  'voice/iroha3.mp3',
  'voice/iroha4.mp3',
  'voice/iroha5.mp3',
  'voice/iroha6.mp3',
  'voice/iroha7.mp3',
  'voice/iroha8.mp3',
  'voice/iroha9.mp3',
  'voice/iroha10.mp3',
  'voice/iroha11.mp3',
  'voice/iroha12.mp3',
  'voice/iroha13.mp3',
  'voice/iroha14.mp3',
  'voice/iroha15.mp3',
  'voice/iroha16.mp3',
  'voice/iroha17.mp3',
  'voice/iroha18.mp3',
  'voice/iroha19.mp3',
  'voice/iroha20.mp3'
];

var kaguyaSE=[
  'voice/kaguya1.mp3',
  'voice/kaguya2.mp3',
  'voice/kaguya3.mp3',
  'voice/kaguya4.mp3',
  'voice/kaguya5.mp3',
  'voice/kaguya6.mp3',
  'voice/kaguya7.mp3',
  'voice/kaguya8.mp3',
  'voice/kaguya9.mp3',
  'voice/kaguya10.mp3',
  'voice/kaguya11.mp3',
  'voice/kaguya12.mp3',
  'voice/kaguya13.mp3',
  'voice/kaguya14.mp3',
  'voice/kaguya15.mp3',
  'voice/kaguya16.mp3',
  'voice/kaguya17.mp3',
  'voice/kaguya18.mp3',
  'voice/kaguya19.mp3',
  'voice/kaguya20.mp3'
];


for(var iij=1;iij<=20;iij++){
  images.push(iij);
  images2.push(iij);
}

const titleBtn=document.getElementById('titleBtn');
const irohaBtn=document.getElementById('irohaBtn');
const kaguyaBtn=document.getElementById('kaguyaBtn');
const h2=document.querySelector('h2');
const reslutWp=document.getElementById('resultWp');
const titleMc=new Audio('harumodoki.mp3');
const endSE=new Audio();
var endBGM=['megumi.mp3','kaguya.mp3'];


irohaBtn.addEventListener('click',function(){

  classname="defaulut";
  kaguyaflg=false;
  irohaflg=true;

if(titleMcflg2){
  endSE.pause();
  endSE.currentTime=0;
}

if(titleMcflg) titleMc.pause();

$(function(){
  $('#resultWp').fadeOut(1000);
});

var arr=[];
for(var i=0;i<10;i++){
  //2組の数値を同じ配列に代入
  arr.push(i);
  arr.push(i);
  //0~9が2つずつある状態計20個
}
shuffl(arr);//ナンバーシャッフル

//div生成
const cardBox=document.getElementById('cardBox');

for(var i=0;i<20;i++){
const div=document.createElement('div');
div.className="card";//最初は裏
div.classList.add(classname);
div.index=i;
div.number=arr[i];
//soundとdiv.numberは対応している
div.innerHTML="";
div.addEventListener('click',turn);

cardBox.appendChild(div);
cardCase.push(div);
}
startT=new Date();//開始時の時間再読み込みするたび変わる
timestart();

  shuffle2(soundArr,images);//ここに使う音声画像を入れる
});
//ここまでいろは編

//ここからかぐや編
kaguyaBtn.addEventListener('click',function(){
  classname="kaguyaBack";
  kaguyaflg=true;
  irohaflg=false;

  if(titleMcflg2){
    endSE.pause();
    endSE.currentTime=0;
  }

  if(titleMcflg) titleMc.pause();

  $(function(){
    $('#resultWp').fadeOut(1000);
  });

  var arr=[];
  for(var i=0;i<10;i++){
    //2組の数値を同じ配列に代入
    arr.push(i);
    arr.push(i);
    //0~9が2つずつある状態計20個
  }
  shuffl(arr);//ナンバーシャッフル

  //div生成
  const cardBox=document.getElementById('cardBox');

  for(var i=0;i<20;i++){
  const div=document.createElement('div');
  div.className="card";//最初は裏
  div.classList.add(classname);
  div.index=i;
  div.number=arr[i];
  //soundとdiv.numberは対応している
  div.innerHTML="";
  div.addEventListener('click',turn);

  cardBox.appendChild(div);
  cardCase.push(div);
  }
  startT=new Date();
  timestart();
  shuffle2(kaguyaSE,images2);
});//かぐや編onclick




//div作成のための関数
function sample1(classname){
if(titleMcflg) titleMc.pause();

$(function(){
  $('#resultWp').fadeOut(1000);
});

var arr=[];
for(var i=0;i<10;i++){
  //2組の数値を同じ配列に代入
  arr.push(i);
  arr.push(i);
  //0~9が2つずつある状態計20個
}
shuffl(arr);//ナンバーシャッフル

//div生成
const cardBox=document.getElementById('cardBox');

for(var i=0;i<20;i++){
const div=document.createElement('div');
div.className="card";//最初は裏
div.classList.add(classname);
div.index=i;
div.number=arr[i];
//soundとdiv.numberは対応している
div.innerHTML="";
div.addEventListener('click',turn);

cardBox.appendChild(div);
cardCase.push(div);
}
startT=new Date();
timestart();
}
//ここまでsample1

//ここから共通スタート画面
const firstDisplays=document.getElementById('firstDisplays');

titleBtn.addEventListener('click',function(){
  $(function(){
    $('#firstDisplays').fadeOut(1000);
    $('#resultWp').css('display','none');
    $('#resultWp').fadeIn(3000);

  });
  reslutWp.className="resultWrapper";


setTimeout(function(){

titleMc.load();
  titleMc.loop=true;
  titleMc.play();
  titleMcflg=true;
},1000);
});

  //配列シャッフル　かぐや編でも使用
function shuffle2(soundArr,images){

  soimgArr.splice(0,2);
  var n2=soundArr.length;
  var j2,temp2;

  while(n2){//n2は10
  j2=Math.floor(Math.random()*n2--);
  temp2=soundArr[n2];
  soundArr[n2]=soundArr[j2];
  soundArr[j2]=temp2;

  temp2=images[n2];
  images[n2]=images[j2];
  images[j2]=temp2;
}
 soimgArr.push(soundArr,images);
 console.log(soimgArr);
 return soimgArr;
}

function shuffl(arr){
  var n=arr.length;
  var j,temp;
  while(n){//20回繰り返す

  j=Math.floor(Math.random()*n--);//nを1減らす
temp=arr[n];//元の19～0番目の値が順にtempに入る。
arr[n]=arr[j];//元の配列0～19番目(ランダム)の値を順に代入
  arr[j]=temp;//元の0番目、1番目...をランダムj位置に代入
}
return arr;//元の値がランダムに入っている。
}//シャッフル終了





//かぐや編でも使う
function turn(e){
var div=e.target;

if(irohaflg){
  text="bg";
}else{
  text="bgk";
}

if(timerFlg) return;

if(timerFlg2){
  cardss2.className="card";
  cardss2.classList.add(classname);
  cardss2.innerHTML="";
  cardss.className="card";
  cardss.classList.add(classname);
  cardss.innerHTML="";
  timerFlg2=false;
}

  if(co === 1){
     sound.pause();
   }

  if(div.innerHTML == ""){//もし裏なら
  div.classList.add(text + soimgArr[1][div.number]);
  div.classList.remove(classname);
  div.innerHTML=div.number;

  sound=new Audio(soimgArr[0][div.number]);
  sound.play();

  co=1;
  //その数字になる
    }else{
      return;
    }
    //1回目とか関係なくあくまで裏かどうかのみ
  if(countf){ //初めて引いた
    cardss=div; //1回目に引いたカード(numberやindexは.を付ける)
    countf=false;

  }else{ //2回目

    if(cardss.number == div.number){

      cardIn++;
      cardss2=div;
      timerFlg=true;

        sound.addEventListener('ended',function(){

          if(cardIn === 10){

              const remup=document.querySelectorAll('p');
              const clearTime=document.getElementById('clearTime');
              const irohaImg=document.getElementById('irohaImg');
              const kaguyaImg=document.getElementById('kaguyaImg');

              remup[2].classList.add("premove");
              remup[3].classList.add("premove");
              remup[4].classList.add("premove");
              remup[5].innerHTML="Thank You For Playing!";


            $(function(){
              $('#resultWp')
              .slideDown(500);
              $('.close').remove();
            });


            if(irohaflg){
              endSE.src=endBGM[0];
              endSE.loop=true;
              endSE.play();

              clearTime.className="clearI";
              remup[6].className="blackP";
              kaguyaImg.className='kaguyaA';
              irohaImg.className='irohaA';
              resultWp.className="irohaH";
              remup[4].className="blackiwai";
              h2.className='omedeto';
              h2.innerHTML="一色いろは編クリア！";
              irohaBtn.innerHTML="もういちど";
              kaguyaBtn.innerHTML="かぐ告編へ";
              skindevelop(timearr,lastFlg);
              //irohaflg true
          }else{
            endSE.src=endBGM[1];
            endSE.loop=true;
            endSE.play();

            clearTime.className='clearTK';//タイム白
            remup[5].className="whiteP";//文字色白
            irohaImg.className='irohasu';//いろは画像削除
            kaguyaImg.className='kaguyasama';//かぐや画像追加
            resultWp.className="kaguyaH";//背景黒に
            remup[4].className="zitai";//おめでとう白
            h2.className='kaguyaO';
            h2.innerHTML="かぐや編クリア！";
            irohaBtn.innerHTML="一色いろは編へ";
            kaguyaBtn.innerHTML="もういちど";

            var timearr2=[];

            timearr2.push((timearr[0]));
            timearr2.push((timearr[1]));
            timearr2.push((timearr[2]));
            timearr2.push((timearr[3]));


            skindevelop(timearr2,lastFlg2);
          }
            cardIn=0;
            titleMcflg2=true;
          }

          cardss2.className="card close";
          cardss.className="card close";
          timerFlg=false;
        });

    }else{ //2回目で外れ 裏に戻す作業
      cardss2=div;
      timerFlg2=true;
      sound.addEventListener('ended',function(){
      cardss2.className="card";
      cardss2.classList.add(classname);
      cardss2.innerHTML="";
      cardss.className="card";
      cardss.classList.add(classname);
      cardss.innerHTML="";
      timerFlg2=false;
    });
  }
  countf=true;
}
}
}//turn()の終了
//ここまで神経衰弱
function skindevelop(timearr,flg){

clearInterval(time);
clearTime.innerHTML='CLEAR '+ timearr[3];
if(flg){
  newtime.push(timearr[0]);
  newtime.push(timearr[1]);
  newtime.push(timearr[2]);
  console.log(newtime);

}
console.log(timearr);


if(newtime[0] > timearr[0]){
  newRecord(timearr);
}
if(newtime[0] === timearr[0]){
  if(newtime[1] > timearr[1]){
    newRecord(timearr);
  }
}
if(newtime[0] === timearr[0]){
  if(newtime[1] === timearr[1]){
    if(newtime[2] > timearr[2]){
      newRecord(timearr);
    }
  }
}
flg=false;

}

function newRecord(timearr){

clearTime.style.color='red';
clearTime.innerHTML='NEW RECORD! '+ timearr[3];
newtime.splice(0,3);
newtime.push(timearr[0]);
newtime.push(timearr[1]);
newtime.push(timearr[2]);
}

var timing=new Date();
var Ms;
var myT;
var str;
var timearr=[];
const h4=document.querySelector('h4');

function timestart(){

time=setInterval(function(){
  timearr=[];

  timing=new Date();//現在の時間に更新している
myT=Math.floor((timing.getTime() - startT.getTime()));
//現在ースタート時
var M=Math.floor(myT/(1000*60));
myT=myT - (M*60*1000);
var S=Math.floor(myT/1000);
Ms=myT%1000;

var md=M;
var sd=S;
var msd=Ms;


str=h4.innerHTML='TIME '+ M + ':' + S + ':' + Ms;
timearr.push(md,sd,msd,str);
return timearr;
},1);
}
