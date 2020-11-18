var SERVER_PATH = 'http://project.phonbe.cn';
var url = location.search;
var formid;
var Request = new Object();
if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        Request[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
    }
}
formid = Request["formid"];

unwarehouse = (decodeURI(Request["hourse"]));
proname = (decodeURI(Request["name"]))
$("#productname").val(proname);
console.log(formid);
console.log(unwarehouse)
console.log(proname);
var userToken = window.localStorage.getItem("yq_token");
function clear(str) {
  str = str.replace(/,/g, "");//取消字符串中出现的所有逗号 
  return str;
}
clear(userToken),
  console.log(userToken);
function trans() {
    var $ = layui.jquery;
    layui.use('layer', function () {
        // var $ = layui.jquery
        var layer = layui.layer;
        layer.open({
            type: 1,
            content: $('#transinfo'),
            end: function (res) {
                $('#transinfo').css("display", 'none');
            },
            btnAlign: 'c',
            shade: 0,
            closeBtn: 0,
            btn: ['确定'],
            yes: function (index, layero) {
                layer.close(layer.index)

            },

            // anim: 6,


        });
    });
}
function sureinfo() {
    var a = $("#trscity option:selected ").text();

    var c = $("#hoursename").val();
    var d = $("#productnum").val();

    console.log(d);
    console.log(c);
    console.log(a);

    $("#unhouse").text(unwarehouse)
    $("#elhouse").text(a)
    $("#showname").text(proname)
    $("#teansnum").text(d)
    $("#showcgname").text(c)
    var vdata = {
        unenough_warehouse: unwarehouse,
        enough_warehouse: a,
        management: c,
        product_id: formid,
        product_name: proname,
        product_num: d,
        token:userToken
    }

    if(c===""||d===""){
    alert("表单不能为空")
    }else{
        layui.use('layer', function () {
            // var $ = layui.jquery
            var layer = layui.layer;
            layer.open({
                type: 1,
                content: layui.jquery('#sureinfo'),
    
                end: function (res) {
                    layui.jquery('#sureinfo').css("display", 'none');
                },
                btnAlign: 'c',
                shade: 0,
                closeBtn: 0,
                btn: ['确定', '取消'],
                yes: function (index, layero) {
                 $.ajax({
    
                        type: "POST",
                        url: SERVER_PATH + '/api/superadmin/tranpurchaseorder',
                        dataType: "json",
                        data: 
                           vdata,
                        success: function (data) {
                            console.log(data)
    
                            if (data.code == 200) {
                                
                                alert("提交成功了"),
                                    console.log(data)
                            } else {
                                alert(data.msg)
                                console.log(data)
                            }
    
                        },
                        error: function (data) {
                            // console.log(XMLHttpRequest.status);
                            // console.log(XMLHttpRequest.readyState);
                            // console.log(textStatus);
                            alert("表单格式错误");
                            console.log(data);
                        }
                    })
                    layer.close(layer.index)

                 
    
                },
    
                // anim: 6,
    
    
    
            });
        });
    }
   

    
}
