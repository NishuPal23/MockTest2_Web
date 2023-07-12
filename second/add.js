let a = document.getElementById("inp")
        let b = document.getElementById("list")
        btn.addEventListener("click",one)
        function one(){
            let con = a.value;
            let l1 = document.createElement("li");
            l1.textContent=con;
            l1.style.color="black";
            l1.style.fontSize="40px";
            l1.style.fontWeight="900px";
            
            list.appendChild(l1);
            a.value=" ";
        }