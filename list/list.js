const min = function(list){
    return list.reduce(function(previous,current){ 
                       return previous < current ? previous:current
                    });
 }
 
 const max = function(list){
    return list.reduce(function(previous,current){ 
                       return previous > current ? previous:current
                    });
 }