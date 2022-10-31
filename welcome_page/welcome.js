function welcome(){
    let welcome_text = '欢迎你来到璃落的小窝，进入前请先阅读置顶的网站注意事项，并熟知以下条款：\n1.本站原则上不对任何未成年人开放！！请未成年用户自行点击右上角叉号离开！！\n2.本站不对大陆用户开放！！\n3.本站记录的故事均为虚构！！\n4.本站记录的文字均为剧情服务，无任何隐喻，也不代表作者的观点！！'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你来到璃落的小窝，进入前请先阅读置顶的网站注意事项，并熟知以下条款：\n1.本站原则上不对任何未成年人开放！！请未成年用户自行点击右上角叉号离开！！\n2.本站不对大陆用户开放！！\n3.本站记录的故事均为虚构！！\n4.本站记录的文字均为剧情服务，无任何隐喻，也不代表作者的观点！！";
    }
    swal({
        title: " 欢迎！",
        text: welcome_text,//欢迎文本，可自行修改
        imageUrl: "/images/welcome.jpg",//图片，自行修改位置
        timer: 30000,//弹出时间
        showConfirmButton: true
    });
}
$(document).ready(()=>{//若未引用JQuery，请引用
    welcome()
})