var SERVER_PATH = 'http://project.phonbe.cn/'
var userToken = window.localStorage.getItem("yq_token");
// var userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wcm9qZWN0LnBob25iZS5jblwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwNTYwNzgzOCwiZXhwIjoxNjA1NjExNDM4LCJuYmYiOjE2MDU2MDc4MzgsImp0aSI6IlNxWHJPZjNMZU44U1BXd2oiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ktX5ZcMBV4jnYfr0VIMrYX7uIGHKTvAjW2MBb5oABAI'
  // function remove(){
  //   //    alert("123")
  //   layui.use('layer', function(){
  //       var layer = layui.layer;
  //       layer.open({
  //           content: '确认删除吗？',
  //           btnAlign: 'c',
  //           shade: 0,
  //           anim: 6,
  //           skin:'remove',
  //           icon: 5
  //         });
  //     });
  //  }
$(document).ready(function (){
    $.ajax({
        async: false,
        type: 'GET',
        url: SERVER_PATH+'api/lowadmin/getform',
        data: {
            token:userToken
        },
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        datatype: 'json',
        success:function (data){
            console.log(data)
            if (data.code == 200){
                console.log('success')
                let Str = ''
                if (data.code == 200){
                    for (var i = 0;i <data.data.length;i++){
                        Str +=`
                <tr>
              <td>${data.data[i].recode_id}</td>
              <td>${data.data[i].warehouse_name}</td>
              <td><span>${data.data[i].info}</span></td>
              <td class="info"><span class="pass" onclick="moreinfo(this)">详情</span></td>

            </tr>
                `
                    }
                    $('#form').empty().append(Str)
                }
            }
            if (data.code == 100){
                console.log("fail")
            }
        },
        error:function (data){
            alert('错误')
            console.log('错误')
        }
    })
})

  function moreinfo(a){
      console.log($(a).parent().parent().children().eq(0).text())
      var id = $(a).parent().parent().children().eq(0).text();


      $.ajax({
          async: false,
          type: 'GET',
          url: SERVER_PATH+'api/lowadmin/checkrecode',
          data: {
              recode_id:id
          },
          contentType: "application/x-www-form-urlencoded; charset=utf-8",
          datatype: 'json',
          success:function (data){
              console.log(data)
              Str = ''
              if (data.code == 200){
                  for (var i = 0;i<data.data.length;i++){
                      Str += `
                <tr>
              <td>时间</td>
              <td>
                <p>${data.data[i].created_at}</p>
              </td>
            </tr>
            <tr>
              <td>仓库名</td>
              <td>
                <p>${data.data[i].warehouse_name}</p>
              </td>
            </tr>
            <tr>
              <td>仓库管理员</td>
              <td>
                <p>${data.data[i].management_name}</p>
              </td>
            </tr>
            <tr>
              <td>工人工号</td>
              <td>
                <p>${data.data[i].worker_id}</p>
              </td>
            </tr>
            <tr>
              <td>产品名字</td>
              <td>
                <p>${data.data[i].product_name}</p>
              </td>
            </tr>
            <tr>
              <td>数量</td>
              <td>
                <p>${data.data[i].product_num}</p>
              </td>
            </tr>
            <tr>
              <td>产品编号</td>
              <td>
                <p>${data.data[i].product_id}</p>
              </td>
            </tr>
            <tr>
              <td>地点</td>
              <td>
                <p>${data.data[i].place}</p>
              </td>
            </tr>
                `
                  }
                  $('.forminfo').empty().append(Str)
              }
              if (data.code == 100){
                  console.log("fail")
              }
    layui.use('layer', function(){
        var $ = layui.jquery
        var layer = layui.layer;
        layer.open({
            type: 1,

            content: $ ('.outcomemoreinfo'),

            end:function (res) {

                $ ('.outcomemoreinfo').css("display",'none');
},
            btnAlign: 'c',
            shade: 0,
            closeBtn:0,
            btn: ['确定'],
            yes:function(index,layero){
                layer.close(layer.index)

            },
          });
      });
          },
          error:function (data){
              alert('错误')
              console.log('错误')
          }
      })

    }

