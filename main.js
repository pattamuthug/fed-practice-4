const faq = document.getElementsByClassName("faq-qn1");
const ans = document.getElementsByClassName("ans");

faq.addEventListener("click",()=>{
    event.preventDefault();
    answer()
})

const answer=()=>{
    if(ans==block){
        ans.style.display="none"
    }else{
        ans.style.display="block"
    }
}