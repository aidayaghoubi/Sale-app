export const add =(desc) =>{
    return{
        type:"ADD" ,
        desc:desc
    }   
};

export const remove =(id) =>{
    return{
        type:"REMOVE" ,
        id
        
    }
};


export const income =(desc) =>{
    console.log(Date.now())
    return{
        type:"INCOME" ,
        payLoad : {
            time:Date.now(),
            value : desc
        },
        
    }   
};

export const expense  =(desc) =>{
    return{
        type:"EXPENSE" ,
        payLoad : {
            time:Date.now(),
            value : desc
        },
    }
};
