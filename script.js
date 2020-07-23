function print() {
    for (var i = 0; i < arguments.length; i++)
        console.log(i + " --> " + arguments[i] + " ");
}
//-----------------------------------------

window.onload = function () {
    //code starting from here
    let subTotal1 = 0;
    let subTotal2 = 0;
    let total = 0;

    var plusBtn = document.getElementById("plus-btn-1");
    plusBtn.addEventListener("click",function(){
        var e = this.parentNode;
        var parent = e.parentNode.childNodes; // parent = [div,input,h5,img]
        var child = parent[1].childNodes; // child = [btn,input,btn]

        newFun(parent,child);

        // for(var i=0; i<parent.length; i++){
        //     print(parent[i].nodeName);
        // }

        var inputNumber = child[3].value;

        inputNumber++;
        print(inputNumber);
        child[3].value = inputNumber;


        //----pricing-----
        print(parent[3].nodeName)
        const unit_price = parseFloat(parent[3].value);
        print(unit_price);
        var price = unit_price*inputNumber;
        print(price);
        parent[5].childNodes[1].innerText = price;
        subTotal1 += unit_price;
        adding();
    })

    var minusBtn = document.getElementById("minus-btn-1");
    minusBtn.addEventListener("click",function(){
        var e = this.parentNode;
        var parent = e.parentNode.childNodes;
        var child = parent[1].childNodes;
        //unit price
        print(parent[3].nodeName)
        const unit_price = parseFloat(parent[3].value);
        print(unit_price);
        //---------
        var inputNumber = child[3].value;
        if(inputNumber>0){
            subTotal1 -= unit_price;
        }
        inputNumber--;
        if(inputNumber<0){
            inputNumber=0;
        }
        print(inputNumber);
        child[3].value = inputNumber;

        //----pricing-----
        
        var price = unit_price*inputNumber;
        print(price);
        parent[5].childNodes[1].innerText = price;

        adding();
    })

    //------------------------------------------
    var plusBtn = document.getElementById("plus-btn-2");
    plusBtn.addEventListener("click",function(){
        var e = this.parentNode;
        var parent = e.parentNode.childNodes; // parent = [div,input,h5,img]
        var child = parent[1].childNodes; // child = [btn,input,btn]

        // for(var i=0; i<parent.length; i++){
        //     print(parent[i].nodeName);
        // }

        var inputNumber = child[3].value;

        inputNumber++;
        print(inputNumber);
        child[3].value = inputNumber;


        //----pricing-----
        print(parent[3].nodeName)
        const unit_price = parseFloat(parent[3].value);
        print(unit_price);
        var price = unit_price*inputNumber;
        print(price);
        parent[5].childNodes[1].innerText = price;
        subTotal2 += unit_price;
        adding();
    })

    var minusBtn = document.getElementById("minus-btn-2");
    minusBtn.addEventListener("click",function(){
        var e = this.parentNode;
        var parent = e.parentNode.childNodes;
        var child = parent[1].childNodes;
        //unit price
        print(parent[3].nodeName)
        const unit_price = parseFloat(parent[3].value);
        print(unit_price);
        //---------
        var inputNumber = child[3].value;
        if(inputNumber>0){
            subTotal2 -= unit_price;
        }
        inputNumber--;
        if(inputNumber<0){
            inputNumber=0;
        }
        print(inputNumber);
        child[3].value = inputNumber;

        //----pricing-----
        var price = unit_price*inputNumber;
        print(price);
        parent[5].childNodes[1].innerText = price;
        
        adding();
    })

    //------------------------------------------
    function adding(){
        var a = subTotal1+subTotal2;
        print("subTotal "+a);
        var tax = (a*5)/100;
        total = a+tax;
        document.getElementById("sub-total").innerText = a;
        document.getElementById("tax").innerText = tax;
        document.getElementById("total").innerText = total;
    }
    var checkout = document.getElementById("checkout");
    checkout.addEventListener("click",function(){
        if(total>0){
            alert("Congratulation!! Checkout Done.")
        }
    })



    function newFun(parent,child){
        // for(var i=0; i<parent.length; i++){
        //     print(parent[i].nodeName);
        // }
        // for(var i=0; i<child.length; i++){
        //     print(parent[i].nodeName);
        // }
        print("parent[3].value "+parent[3].value);
    }
}

















