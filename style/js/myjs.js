 // @jinlj上传
    function addlistflie(){
        var strhtml="";
        for (var i = 0; i <labelImg.length; i++) {
            strhtml +="<li class='li_icon'>"
            +"<div id='fileList"+i+"' class='fileList'>"
            +"<img id='fileImg"+i+"' src='/>"
            +"<div class='fileElem'>"
            +"<input id='fileElem"+i+"' type='file' accept='video/*;capture=camcorder' value=''  onchange='handleFiles(this,"+i+")'' style='display:none'/>"
            +"</div>"
            +"</div>"
            +"<div class='txt-center'>"
            +"<label for='fileElem"+i+"' class='btn_small'>  "+labelImg[i]+"</label>"
            +"</div>"
            +"</li>"            
        }
        $("#iconline").html(strhtml);
    }
 // 上传本地图片
    function handleFiles(obj,i) {
        window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL; 
        // var fileElem = document.getElementById("fileElem"+num),
        fileList = document.getElementById("fileList"+i),
        img  = document.getElementById('fileImg'+i);
        var files = obj.files;
           //  img = new Image();
           // alert(img.width);
        if(window.URL){
            //File API
            //alert(files[0].name + "," + files[0].size + " bytes");
              img.src = window.URL.createObjectURL(files[0]); //创建一个object URL，并不是你的本地路径               
              img.onload = function(e) {
                 window.URL.revokeObjectURL(this.src); //图片加载后，释放object URL
              }
              //fileList.appendChild(img);
        }else if(window.FileReader){
            //opera不支持createObjectURL/revokeObjectURL方法。我们用FileReader对象来处理
            var reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = function(e){
                alert(files[0].name + "," +e.total + " bytes");
                img.src = this.result;
                img.width = 200;
                // fileList.appendChild(img);
            }
        }else{
            //ie
            obj.select();
            obj.blur();
            var nfile = document.selection.createRange().text;
            document.selection.empty();
            img.src = nfile;
            img.width = 200;
            img.onload=function(){
              alert(nfile+","+img.fileSize + " bytes");
            }
            fileList.appendChild(img);
            //fileList.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src='"+nfile+"')";
        }
    }