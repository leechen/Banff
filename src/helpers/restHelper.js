var $ = require('jquery');

module.experts = {
    get:function(url){
        return new Promise(function(success,error){
            $.ajax({
                url:url,
                dataType:"json",
                success:success,
                error:error
            })
        })
    },
    
    post:function(url,data){
        return new Promise(function(success,error){
            $.ajax({
                url:url,
                type:"POST",
                data:data,
                success:success,
                error:error
            })
        })
    }
};