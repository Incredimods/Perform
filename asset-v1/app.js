/* 0.5.7 2020-12-04 18:40:10 */
var app=new function(){this.name="Alpha",this.version="1",this.date="2009",this.folder="asset-v1/",this.looptime=7999,this.bpm=132,this.totalframe=260,this.nbpolo=7,this.nbloopbonus=1,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=27,this.recminloop=10,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#450C3D",this.col0="#450C3D",this.col1="#450C3D",this.col2="#450C3D",this.col3="#450C3D",this.col4="450C3D",this.animearray=[{name:"1_lMcGrady",color:"7E4B3D",uniqsnd:!0},{name:"2_army",color:"7E4B3D",uniqsnd:!0},{name:"3_Erasing film",color:"7E4B3D",uniqsnd:!0},{name:"4_Time bomb",color:"7E4B3D",uniqsnd:!0},{name:"5_door",color:"7E4B3D",uniqsnd:!0},{name:"6_bassJoe",color:"2B7873",uniqsnd:!0},{name:"7_puppet",color:"2B7873",uniqsnd:!0},{name:"8_pianist",color:"2B7873",uniqsnd:!0},{name:"9_recorder",color:"2B7873",uniqsnd:!0},{name:"10_excessive",color:"2B7873",uniqsnd:!0},{name:"11_Neon lights",color:"450C3D",uniqsnd:!1},{name:"12_in",color:"450C3D",uniqsnd:!0},{name:"13_Rui",color:"450C3D",uniqsnd:!0},{name:"14_Scout",color:"450C3D",uniqsnd:!0},{name:"15_column",color:"450C3D",uniqsnd:!0},{name:"16_Little Fire Girl",color:"EB9494",uniqsnd:!0},{name:"17_guest",color:"EB9494",uniqsnd:!1},{name:"18_terminator",color:"EB9494",uniqsnd:!0}],this.bonusarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};
