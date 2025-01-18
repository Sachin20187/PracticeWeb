const object = {
    length: 5,
    method(callback){
        callback();
    },
};
object.method(callback.bind(object), 1,2);