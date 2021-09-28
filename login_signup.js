var main_dic={}
var deatils1={}
var deatils2={}
var list=[]
var list3=[]
var readlineSyn=require("readline-sync")
var fs=require("fs")
var user=readlineSyn.questionInt("Enter the for \n 1 signup\n 2 login:-")
if (user=="1"){
    var user_name=readlineSyn.question("Enter  any name=")
    var password1=readlineSyn.question("Enter the password1=")
    console.log("pleas confirm your password")
    var password2=readlineSyn.question("Enter the password2=")
    if ((password1.length)>=1 && (password1.length)<=12){
        if (password1.includes("@") || password1.includes("$") || password1.includes("#")){
            if (password1.includes(0 || 9)){
                if (password1.includes("A" || "z")){
                    if (password1.includes("a" || "z")){
                        console.log()
                    }else{
                        console.log()
                    }
                }else{
                    console.log()
                }
            }else{
                console.log()
            }
        }else{
            console.log()
        }
    }else{
        console.log()
    }if (password1==password2){
        console.log("both are sem")
    }else{
        console.log("both are not equal")
    }
    main_dic["user_name"]=user_name
    main_dic["password1"]=password1
    deatils1["user"]=list
    const path = "underdeatils1.json"
    fs.exists(path,function(exists){
        if (exists){
            console.log("file exists")
            var k=fs.readFile('underdeatils1.json', "utf8", function(error,k) {
                if (error) throw error
                var j=JSON.parse(k)
                // console.log(j)
                list3=(j["user"])
                // console.log(list3,"list3")
                var i=0
                for (i in list3){
                    var x=list3[i]["user_name"]
                    if (x==user_name){
                        break
                    }  
                }
                if (x==user_name){
                    console.log("user already exists")
                    console.log("your signup id is succesfully")
                }
                else{
                    console.log("signup is succefully")
                    main_dic["user_name"]=user_name
                    main_dic["password1"]=password1
                    var description=readlineSyn.question("Enter your description:-")
                    var dob=readlineSyn.question("Enter your dob:-")
                    var gender=readlineSyn.question("Enter your gender:-")
                    var hobbies=readlineSyn.question("Enter your hoby:-")
                    deatils2["description"]=description
                    deatils2["dob"]=dob
                    deatils2["hobbies"]=hobbies
                    deatils2["gender"]=gender
                    main_dic["profile"]=deatils2
                    list3.push(main_dic)
                    deatils1["user"]=list3
                    var data1=JSON.stringify(deatils1,null,2)
                    fs.writeFile("underdeatils1.json",data1,function(err){
                        if (err){
                            console.log(err)
                        }
                        console.log("data added in json file")
                    })
                }
            })
        }
        else{
            main_dic["user_name"]=user_name
            main_dic["password1"]=password1
            deatils1["user"]=list
            var description=readlineSyn.question("Enter your description:-")
            var dob=readlineSyn.question("Enter your dob:-")
            var gender=readlineSyn.question("Enter your gender:-")
            var hobbies=readlineSyn.question("Enter your hoby:-")
            deatils2["description"]=description
            deatils2["dob"]=dob
            deatils2["hobbies"]=hobbies
            deatils2["gender"]=gender
            main_dic["profile"]=deatils2
            list.push(main_dic)
            console.log(list)
            deatils1["user"]=list
            var data1=JSON.stringify(deatils1,null,2)
            fs.writeFile("underdeatils1.json",data1,function(err){
                if (err) throw err
            })
        }

    })
}
else{    
    user_name=readlineSyn.question("enter the name :-")
    password1=readlineSyn.question("enter the pasword :-")
    fs.readFile("underdeatils1.json","utf8",function(err,data){
        if (err) throw err
        var i=0
        let jsData = JSON.parse(data)
        while (i<jsData['user'].length){
            if (jsData['user'][i]["user_name"] == user_name && jsData['user'][i]["password1"]==password1){ 
                console.log(user_name,"congratulation your login is succesfull")
                // console.log("---profile----")
                // console.log("Username",user_name)
                // console.log(user);
                // console.log(gender,"gender")
                // console.log(description)
                // console.log(hobbies)
                // console.log(dob)
                break
            }
            i=i+1
        }
    })
}